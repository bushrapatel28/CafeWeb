import React from "react";
import { Button } from "./ui/button";
import { Check } from "lucide-react";

interface PricingCardProps {
  title?: string;
  price?: number;
  period?: string;
  features?: string[];
  buttonText?: string;
  onButtonClick?: () => void;
  isPopular?: boolean;
}

const PricingCard = ({
  title = "Title",
  price = 50,
  period = "mo",
  features = ["List item", "List item", "List item", "List item", "List item"],
  buttonText = "Button",
  onButtonClick = () => console.log("Button clicked"),
  isPopular = false,
}: PricingCardProps) => {
  return (
    <div className="w-[300px] h-[395px] p-8 bg-white rounded-lg border border-[#d9d9d9] flex flex-col justify-between items-center gap-6 relative">
      {/* Title */}
      <div className="text-center">
        <h3 className="font-urbanist font-semibold text-xl text-[#2c2c2c] mb-4">
          {title}
        </h3>

        {/* Price */}
        <div className="flex items-end justify-center mb-6">
          <span className="text-[#2c2c2c] text-lg font-urbanist font-normal">
            $
          </span>
          <span className="text-[#2c2c2c] text-5xl font-urbanist font-bold">
            {price}
          </span>
          <span className="text-[#2c2c2c] text-lg font-urbanist font-normal ml-1">
            /{period}
          </span>
        </div>
      </div>

      {/* Features List */}
      <div className="flex-1 w-full">
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 bg-[#2c2c2c] rounded-full flex-shrink-0" />
              <span className="font-urbanist font-normal text-base text-[#2c2c2c]">
                {feature}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Button */}
      <Button
        onClick={onButtonClick}
        className="w-full h-12 bg-[#2c2c2c] hover:bg-[#1a1a1a] text-white font-urbanist font-medium text-base rounded-lg border-0"
      >
        {buttonText}
      </Button>
    </div>
  );
};

export default PricingCard;
