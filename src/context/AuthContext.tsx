import React, { createContext, useContext, useEffect, useState } from "react";
import { Session, User } from "@supabase/supabase-js";
import { supabase } from "@/lib/supabase";

type AuthContextType = {
  session: Session | null;
  user: User | null;
  signIn: (email: string, password: string) => Promise<{ error: any }>;
  signUp: (
    email: string,
    password: string,
    fullName: string,
  ) => Promise<{ error: any; user: any }>;
  signOut: () => Promise<{ error: any }>;
  loading: boolean;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [session, setSession] = useState<Session | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
      setLoading(false);
    });

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      setUser(session?.user ?? null);
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  const signIn = async (email: string, password: string) => {
    try {
      // Call the Edge Function for signin
      const response = await supabase.functions.invoke(
        "supabase-functions-auth",
        {
          body: { email, password, action: "signin" },
        },
      );

      if (response.error) {
        console.error("Edge function signin error:", response.error);
        return { error: response.error };
      }

      return { error: null };
    } catch (err) {
      console.error("Unexpected error during signin:", err);
      return {
        error: {
          message:
            "An unexpected error occurred during sign in. Please try again.",
          details: err,
        },
      };
    }
  };

  const signUp = async (email: string, password: string, fullName: string) => {
    try {
      // First, sign up the user with Supabase Auth
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: { full_name: fullName },
        },
      });

      if (error) {
        console.error("Auth signup error:", error);
        return { error, user: null };
      }

      if (data?.user) {
        // Create user profile in public.users table with error handling
        const { error: userError } = await supabase.from("users").insert({
          id: data.user.id,
          email,
          full_name: fullName,
        });

        if (userError) {
          console.error("Error creating user profile:", userError);
          // Continue to try registered_users insert anyway
        }

        // Add user to registered_users table with error handling
        const { error: registeredUserError } = await supabase
          .from("registered_users")
          .insert({
            id: data.user.id,
            email,
            full_name: fullName,
          });

        if (registeredUserError) {
          console.error(
            "Error adding to registered_users:",
            registeredUserError,
          );
          // We'll still return the user since auth signup was successful
          return {
            error: {
              message:
                "Account created but profile data could not be saved. Please contact support.",
              details: registeredUserError,
            },
            user: data.user,
          };
        }

        return { error: null, user: data.user };
      } else {
        return {
          error: { message: "No user data returned from signup" },
          user: null,
        };
      }
    } catch (err) {
      console.error("Unexpected error during signup:", err);
      return {
        error: {
          message:
            "An unexpected error occurred during signup. Please try again.",
          details: err,
        },
        user: null,
      };
    }
  };

  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    return { error };
  };

  const value = {
    session,
    user,
    signIn,
    signUp,
    signOut,
    loading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
