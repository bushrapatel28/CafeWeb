// Supabase Edge Function for authentication
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.6";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders, status: 200 });
  }

  try {
    const supabaseUrl = Deno.env.get("SUPABASE_URL");
    const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");

    if (!supabaseUrl || !supabaseKey) {
      throw new Error("Missing environment variables for Supabase connection");
    }

    const supabase = createClient(supabaseUrl, supabaseKey);
    const { email, password, fullName, action } = await req.json();

    if (!email || !password || !action) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        {
          headers: { ...corsHeaders, "Content-Type": "application/json" },
          status: 400,
        },
      );
    }

    if (action === "signup") {
      // Create user in auth.users
      const { data: authData, error: authError } =
        await supabase.auth.admin.createUser({
          email,
          password,
          email_confirm: true,
          user_metadata: { full_name: fullName },
        });

      if (authError) {
        console.error("Auth signup error:", authError);
        return new Response(JSON.stringify({ error: authError.message }), {
          headers: { ...corsHeaders, "Content-Type": "application/json" },
          status: 400,
        });
      }

      if (authData?.user) {
        // Create user profile in public.users table
        const { error: userError } = await supabase.from("users").insert({
          id: authData.user.id,
          email,
          full_name: fullName,
        });

        if (userError) {
          console.error("Error creating user profile:", userError);
        }

        // Add user to registered_users table
        const { error: registeredUserError } = await supabase
          .from("registered_users")
          .insert({
            id: authData.user.id,
            email,
            full_name: fullName,
          });

        if (registeredUserError) {
          console.error(
            "Error adding to registered_users:",
            registeredUserError,
          );
          return new Response(
            JSON.stringify({
              error:
                "Account created but profile data could not be saved. Please try again",
              details: registeredUserError,
              user: authData.user,
            }),
            {
              headers: { ...corsHeaders, "Content-Type": "application/json" },
              status: 201,
            },
          );
        }

        return new Response(JSON.stringify({ user: authData.user }), {
          headers: { ...corsHeaders, "Content-Type": "application/json" },
          status: 201,
        });
      }
    }

    if (action === "signin") {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        return new Response(JSON.stringify({ error: error.message }), {
          headers: { ...corsHeaders, "Content-Type": "application/json" },
          status: 400,
        });
      }

      return new Response(
        JSON.stringify({ session: data.session, user: data.user }),
        {
          headers: { ...corsHeaders, "Content-Type": "application/json" },
          status: 200,
        },
      );
    }

    return new Response(JSON.stringify({ error: "Invalid action" }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 400,
    });
  } catch (error) {
    console.error("Unexpected error:", error);
    return new Response(
      JSON.stringify({
        error: error.message || "An unexpected error occurred",
      }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 500,
      },
    );
  }
});
