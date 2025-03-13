import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FeaturedProducts from "@/components/FeaturedProducts";
import PastriesMenu from "@/components/PastriesMenu";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const MenuPage = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar isScrolled={isScrolled} />

      <div className="pt-24 pb-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-8">Our Menu</h1>

          <Tabs defaultValue="coffee" className="w-full max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="coffee">Coffee</TabsTrigger>
              <TabsTrigger value="pastries">Pastries</TabsTrigger>
              <TabsTrigger value="breakfast">Breakfast</TabsTrigger>
              <TabsTrigger value="lunch">Lunch</TabsTrigger>
            </TabsList>
            <TabsContent value="coffee">
              <div className="mt-6">
                <FeaturedProducts title="Coffee Drinks" />
              </div>
            </TabsContent>
            <TabsContent value="pastries">
              <div className="mt-6">
                <PastriesMenu />
              </div>
            </TabsContent>
            <TabsContent value="breakfast">
              <div className="mt-6 p-8 text-center bg-white rounded-lg shadow-sm">
                <h3 className="text-xl font-medium">Breakfast Menu</h3>
                <p className="text-gray-500 mt-2">Coming soon!</p>
              </div>
            </TabsContent>
            <TabsContent value="lunch">
              <div className="mt-6 p-8 text-center bg-white rounded-lg shadow-sm">
                <h3 className="text-xl font-medium">Lunch Menu</h3>
                <p className="text-gray-500 mt-2">Coming soon!</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default MenuPage;
