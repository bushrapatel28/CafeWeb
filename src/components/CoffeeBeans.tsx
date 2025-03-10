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

interface CoffeeBean {
  id: string;
  name: string;
  price: number;
  image: string;
  origin: string;
  roastLevel: string;
  description: string;
}

interface CoffeeBeansProps {
  beans?: CoffeeBean[];
  title?: string;
}

const defaultBeans: CoffeeBean[] = [
  {
    id: "b1",
    name: "Ethiopian Yirgacheffe",
    price: 14.99,
    image:
      "https://images.unsplash.com/photo-1611854779393-1b2da9d400fe?auto=format&fit=crop&q=80&w=300&h=300",
    origin: "Ethiopia",
    roastLevel: "Light",
    description:
      "Bright and fruity with notes of citrus and berries. Perfect for pour-over brewing.",
  },
  {
    id: "b2",
    name: "Colombian Supremo",
    price: 12.99,
    image:
      "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=300&h=300",
    origin: "Colombia",
    roastLevel: "Medium",
    description:
      "Well-balanced with caramel sweetness and a nutty finish. Great for everyday brewing.",
  },
  {
    id: "b3",
    name: "Sumatra Mandheling",
    price: 15.99,
    image:
      "https://images.unsplash.com/photo-1559525839-d9d1df7cb6b9?auto=format&fit=crop&q=80&w=300&h=300",
    origin: "Indonesia",
    roastLevel: "Dark",
    description:
      "Earthy and full-bodied with low acidity and notes of dark chocolate. Excellent for espresso.",
  },
  {
    id: "b4",
    name: "Costa Rica Tarrazu",
    price: 13.99,
    image:
      "https://images.unsplash.com/photo-1587734361993-0490df9a90e7?auto=format&fit=crop&q=80&w=300&h=300",
    origin: "Costa Rica",
    roastLevel: "Medium",
    description:
      "Clean and bright with notes of honey and citrus. Versatile for various brewing methods.",
  },
];

const CoffeeBeans = ({
  beans = defaultBeans,
  title = "Premium Coffee Beans",
}: CoffeeBeansProps) => {
  return (
    <section className="w-full py-16 bg-stone-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          {title}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
          {beans.map((bean) => (
            <Card
              key={bean.id}
              className="w-[280px] h-[420px] bg-white overflow-hidden flex flex-col"
            >
              <div className="relative w-full h-48 overflow-hidden">
                <img
                  src={bean.image}
                  alt={bean.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardHeader className="space-y-1 p-4">
                <CardTitle className="text-xl font-semibold text-gray-800">
                  {bean.name}
                </CardTitle>
                <div className="flex justify-between items-center">
                  <p className="text-lg font-bold text-primary">
                    ${bean.price.toFixed(2)}
                  </p>
                  <div className="px-2 py-1 bg-amber-100 text-amber-800 text-xs rounded-full">
                    {bean.roastLevel} Roast
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  <span className="font-medium">Origin:</span> {bean.origin}
                </p>
              </CardHeader>
              <CardContent className="px-4">
                <p className="text-sm text-gray-600 line-clamp-3">
                  {bean.description}
                </p>
              </CardContent>
              <CardFooter className="mt-auto p-4">
                <Button
                  onClick={() => console.log(`Added ${bean.name} to cart`)}
                  className="w-full bg-primary hover:bg-primary/90"
                >
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Add to Cart
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoffeeBeans;
