import React from "react";
import ProductCard from "./ProductCard";

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
}

interface FeaturedProductsProps {
  products?: Product[];
  title?: string;
}

const defaultProducts: Product[] = [
  {
    id: "1",
    name: "Classic Espresso",
    price: 4.99,
    image:
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=300&h=300",
    description: "Rich and bold espresso shot made from premium coffee beans",
  },
  {
    id: "2",
    name: "Caramel Macchiato",
    price: 5.99,
    image:
      "https://images.unsplash.com/photo-1485808191679-5f86510681a2?auto=format&fit=crop&q=80&w=300&h=300",
    description: "Espresso with steamed milk and vanilla, topped with caramel",
  },
  {
    id: "3",
    name: "Cappuccino",
    price: 4.49,
    image:
      "https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&q=80&w=300&h=300",
    description:
      "Classic Italian coffee drink with equal parts espresso, steamed milk, and foam",
  },
  {
    id: "4",
    name: "Cold Brew",
    price: 4.99,
    image:
      "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&q=80&w=300&h=300",
    description: "Smooth, low-acid coffee brewed with cold water for 12+ hours",
  },
];

const FeaturedProducts = ({
  products = defaultProducts,
  title = "Featured Drinks",
}: FeaturedProductsProps) => {
  return (
    <section className="w-full py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          {title}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
              description={product.description}
              onAddToCart={() => console.log(`Added ${product.name} to cart`)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
