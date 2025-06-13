import React from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useCart } from "@/context/CartContext";

interface DeliveryOptionsProps {
  className?: string;
}

const DeliveryOptions = ({ className = "" }: DeliveryOptionsProps) => {
  const { deliveryMethod, setDeliveryMethod } = useCart();

  return (
    <div className={`space-y-3 ${className}`}>
      <h3 className="font-medium text-sm">Delivery Options</h3>
      <RadioGroup
        value={deliveryMethod}
        onValueChange={(value) =>
          setDeliveryMethod(value as "pickup" | "delivery")
        }
        className="flex flex-col space-y-3"
      >
        <div className="flex items-center space-x-2 border rounded-md p-3 hover:bg-gray-50 cursor-pointer">
          <RadioGroupItem value="pickup" id="pickup" />
          <Label htmlFor="pickup" className="flex-1 cursor-pointer">
            <div className="font-medium">Pickup</div>
            <div className="text-sm text-gray-500">Ready in 15-20 minutes</div>
          </Label>
          <div className="font-medium text-green-600">Free</div>
        </div>

        <div className="flex items-center space-x-2 border rounded-md p-3 hover:bg-gray-50 cursor-pointer">
          <RadioGroupItem value="delivery" id="delivery" />
          <Label htmlFor="delivery" className="flex-1 cursor-pointer">
            <div className="font-medium">Delivery</div>
            <div className="text-sm text-gray-500">
              30-45 minutes estimated delivery time
            </div>
          </Label>
          <div className="font-medium">$3.99</div>
        </div>
      </RadioGroup>
    </div>
  );
};

export default DeliveryOptions;
