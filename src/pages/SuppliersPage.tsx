import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Suppliers from "@/components/Suppliers";

const SuppliersPage = () => {
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

      <div className="pt-20">
        <Suppliers />
      </div>

      <Footer />
    </div>
  );
};

export default SuppliersPage;
