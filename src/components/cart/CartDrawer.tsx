import React from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useAuth } from "@/context/AuthContext";
import CartItem from "./CartItem";
import AuthModal from "../auth/AuthModal";

interface CartDrawerProps {
  trigger?: React.ReactNode;
}

const CartDrawer = ({ trigger }: CartDrawerProps) => {
  const { items, subtotal, totalItems, checkout, isCheckingOut, clearCart } =
    useCart();
  const { user } = useAuth();
  const [open, setOpen] = React.useState(false);

  const handleCheckout = async () => {
    if (!user) return;
    await checkout();
  };

  const defaultTrigger = (
    <Button variant="outline" size="icon" className="relative">
      <ShoppingBag className="h-5 w-5" />
      {totalItems > 0 && (
        <span className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-primary text-white text-xs flex items-center justify-center">
          {totalItems}
        </span>
      )}
    </Button>
  );

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>{trigger || defaultTrigger}</SheetTrigger>
      <SheetContent className="w-full sm:max-w-md flex flex-col">
        <SheetHeader>
          <SheetTitle>Your Cart ({totalItems} items)</SheetTitle>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="h-12 w-12 text-gray-300 mb-4" />
              <p className="text-gray-500">Your cart is empty</p>
              <Button
                variant="link"
                className="mt-2"
                onClick={() => setOpen(false)}
              >
                Continue shopping
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <CartItem key={item.id} {...item} />
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <SheetFooter className="border-t border-gray-200 pt-4">
            <div className="w-full space-y-4">
              <div className="flex justify-between text-base font-medium">
                <p>Subtotal</p>
                <p>${subtotal.toFixed(2)}</p>
              </div>

              {user ? (
                <Button
                  className="w-full"
                  onClick={handleCheckout}
                  disabled={isCheckingOut}
                >
                  {isCheckingOut ? "Processing..." : "Checkout"}
                </Button>
              ) : (
                <AuthModal
                  trigger={
                    <Button className="w-full">Sign in to Checkout</Button>
                  }
                  onAuthSuccess={() => {}}
                />
              )}

              <Button
                variant="outline"
                className="w-full"
                onClick={() => clearCart()}
              >
                Clear Cart
              </Button>
            </div>
          </SheetFooter>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartDrawer;
