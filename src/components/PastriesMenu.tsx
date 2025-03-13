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
import { useCart } from "@/context/CartContext";

interface Pastry {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
}

interface PastriesMenuProps {
  pastries?: Pastry[];
  title?: string;
}

const defaultPastries: Pastry[] = [
  {
    id: "p1",
    name: "Almond Croissant",
    price: 4.5,
    image:
      "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?auto=format&fit=crop&q=80&w=300&h=300",
    description:
      "Buttery croissant filled with almond cream and topped with sliced almonds",
    category: "Croissants",
  },
  {
    id: "p2",
    name: "Chocolate Chip Cookie",
    price: 3.25,
    image:
      "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&q=80&w=300&h=300",
    description:
      "Classic chocolate chip cookie with a soft center and crisp edges",
    category: "Cookies",
  },
  {
    id: "p3",
    name: "Blueberry Muffin",
    price: 3.75,
    image:
      "https://images.unsplash.com/photo-1607958996333-41aef7caefaa?auto=format&fit=crop&q=80&w=300&h=300",
    description:
      "Moist muffin packed with fresh blueberries and topped with a sugar crumble",
    category: "Muffins",
  },
  {
    id: "p4",
    name: "Cinnamon Roll",
    price: 4.25,
    image:
      "https://images.unsplash.com/photo-1509365465985-25d11c17e812?auto=format&fit=crop&q=80&w=300&h=300",
    description:
      "Soft, swirled pastry with cinnamon filling and cream cheese frosting",
    category: "Pastries",
  },
  {
    id: "p5",
    name: "Raspberry Danish",
    price: 4.5,
    image:
      "https://images.unsplash.com/photo-1623246123320-0d6636755796?auto=format&fit=crop&q=80&w=300&h=300",
    description:
      "Flaky pastry filled with sweet cream cheese and fresh raspberries",
    category: "Pastries",
  },
  {
    id: "p6",
    name: "Chocolate Éclair",
    price: 4.75,
    image:
      "https://images.unsplash.com/photo-1603532648955-039310d9ed75?auto=format&fit=crop&q=80&w=300&h=300",
    description:
      "Choux pastry filled with vanilla custard and topped with chocolate ganache",
    category: "Pastries",
  },
  {
    id: "p7",
    name: "Lemon Tart",
    price: 5.25,
    image: "/images/tempo-image-20250312T131641000Z.png",
    description:
      "Buttery tart shell filled with tangy lemon curd and dusted with powdered sugar",
    category: "Tarts",
  },
  {
    id: "p8",
    name: "Banana Bread Slice",
    price: 3.5,
    image:
      "https://images.unsplash.com/photo-1605286978633-2dec93ff88a2?auto=format&fit=crop&q=80&w=300&h=300",
    description: "Moist banana bread with walnuts, served by the slice",
    category: "Breads",
  },
  {
    id: "p9",
    name: "Artisan Sourdough Bread",
    price: 6.99,
    image: "/images/tempo-image-20250311T170448553Z.png",
    description:
      "Freshly baked artisan sourdough with a crispy crust and soft interior",
    category: "Artisan Breads",
  },
];

const PastriesMenu = ({
  pastries = defaultPastries,
  title = "Fresh Baked Pastries",
}: PastriesMenuProps) => {
  const { addItem } = useCart();

  const handleAddToCart = (pastry: Pastry) => {
    addItem({
      id: pastry.id,
      name: pastry.name,
      price: pastry.price,
      image: pastry.image,
      description: pastry.description,
      quantity: 1,
    });
  };

  // Group pastries by category
  const pastriesByCategory = pastries.reduce(
    (acc, pastry) => {
      if (!acc[pastry.category]) {
        acc[pastry.category] = [];
      }
      acc[pastry.category].push(pastry);
      return acc;
    },
    {} as Record<string, Pastry[]>,
  );

  return (
    <section className="w-full py-16 bg-stone-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          {title}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
          {pastries.map((pastry) => (
            <Card
              key={pastry.id}
              className="w-[280px] h-[420px] bg-white overflow-hidden flex flex-col"
            >
              <div className="relative w-full h-48 overflow-hidden">
                <img
                  src={pastry.image}
                  alt={pastry.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardHeader className="space-y-1 p-4">
                <CardTitle className="text-xl font-semibold text-gray-800">
                  {pastry.name}
                </CardTitle>
                <div className="flex justify-between items-center">
                  <p className="text-lg font-bold text-primary">
                    ${pastry.price.toFixed(2)}
                  </p>
                  <div className="px-2 py-1 bg-amber-100 text-amber-800 text-xs rounded-full">
                    {pastry.category}
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  <span className="font-medium">Origin:</span> {pastry.category}
                </p>
              </CardHeader>
              <CardContent className="px-4">
                <p className="text-sm text-gray-600 line-clamp-3">
                  {pastry.description}
                </p>
              </CardContent>
              <CardFooter className="mt-auto p-4">
                <Button
                  onClick={() => handleAddToCart(pastry)}
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

export default PastriesMenu;
