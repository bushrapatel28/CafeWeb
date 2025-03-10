import React from "react";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { ShoppingCart } from "lucide-react";

interface ProductCardProps {
  name: string;
  price: number;
  image: string;
  description?: string;
  onAddToCart?: () => void;
}

const ProductCard = ({
  name = "Classic Espresso",
  price = 4.99,
  image = "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=300&h=300",
  description = "Rich and bold espresso shot made from premium coffee beans",
  onAddToCart = () => console.log("Add to cart clicked"),
}: ProductCardProps) => {
  return (
    <Card className="w-[280px] h-[380px] bg-white overflow-hidden flex flex-col">
      <div className="relative w-full h-48 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardHeader className="space-y-1 p-4">
        <CardTitle className="text-xl font-semibold text-gray-800">
          {name}
        </CardTitle>
        <p className="text-lg font-bold text-primary">${price.toFixed(2)}</p>
      </CardHeader>
      <CardContent className="px-4">
        <p className="text-sm text-gray-600 line-clamp-2">{description}</p>
      </CardContent>
      <CardFooter className="mt-auto p-4">
        <Button
          onClick={onAddToCart}
          className="w-full bg-primary hover:bg-primary/90"
        >
          <ShoppingCart className="mr-2 h-4 w-4" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
