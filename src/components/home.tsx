import React from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import FeaturedProducts from "./FeaturedProducts";
import CoffeeBeans from "./CoffeeBeans";
import InfoSection from "./InfoSection";
import Footer from "./Footer";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";
import { Users } from "lucide-react";

function Home() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const navigate = useNavigate();

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
      <HeroSection />
      <FeaturedProducts />
      <CoffeeBeans />

      {/* Suppliers Section */}
      <section className="w-full py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Meet Our Coffee Bean Suppliers
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Discover the passionate farmers and suppliers who bring you the
            world's finest coffee beans, sourced directly from premium growing
            regions.
          </p>
          <Button
            onClick={() => navigate("/suppliers")}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white px-8 py-3"
          >
            <Users className="mr-2 h-5 w-5" />
            View Our Suppliers
          </Button>
        </div>
      </section>

      <InfoSection />
      <Footer />
    </div>
  );
}

export default Home;
