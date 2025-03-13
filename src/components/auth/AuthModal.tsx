import React, { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

type AuthView = "login" | "register";

interface AuthModalProps {
  trigger: React.ReactNode;
  defaultView?: AuthView;
  onAuthSuccess?: () => void;
}

const AuthModal = ({
  trigger,
  defaultView = "login",
  onAuthSuccess = () => {},
}: AuthModalProps) => {
  const [view, setView] = useState<AuthView>(defaultView);
  const [open, setOpen] = useState(false);

  const handleSuccess = () => {
    onAuthSuccess();
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-md">
        {view === "login" ? (
          <LoginForm
            onSuccess={handleSuccess}
            onRegisterClick={() => setView("register")}
          />
        ) : (
          <RegisterForm
            onSuccess={handleSuccess}
            onLoginClick={() => setView("login")}
          />
        )}
      </DialogContent>
    </Dialog>
  );
};

export default AuthModal;
