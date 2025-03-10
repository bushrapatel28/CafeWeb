import React from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import FeaturedProducts from "./FeaturedProducts";
import InfoSection from "./InfoSection";
import Footer from "./Footer";

function Home() {
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
      <HeroSection />
      <FeaturedProducts />
      <InfoSection />
      <Footer />
    </div>
  );
}

export default Home;
