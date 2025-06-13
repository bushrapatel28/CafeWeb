import React from "react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

interface HeroSectionProps {
  shopName?: string;
  tagline?: string;
  backgroundImage?: string;
  ctaText?: string;
  onCtaClick?: (grind?: string) => void;
}

const HeroSection = ({
  shopName = "Brew Haven",
  tagline = "Where Every Cup Tells a Story",
  backgroundImage = "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=2400",
  ctaText = "Order Online",
  onCtaClick = (grind) => console.log("CTA clicked with grind:", grind),
}: HeroSectionProps) => {
  return (
    <div className="relative h-[800px] w-full bg-neutral-900 overflow-hidden">
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ y: [0, -30, 0] }}
        transition={{
          y: {
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          },
        }}
        className="absolute inset-0"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            filter: "brightness(0.65)",
          }}
        />
      </motion.div>

      <div className="relative h-full flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
        >
          {shopName}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl sm:text-2xl md:text-3xl text-gray-200 mb-12 max-w-3xl"
        >
          {tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="space-y-4">
            <Select onValueChange={(value) => onCtaClick(value)}>
              <SelectTrigger className="w-[200px] bg-white">
                <SelectValue placeholder="Select grind type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="whole-bean">Whole Bean</SelectItem>
                <SelectItem value="coarse">Coarse Grind</SelectItem>
                <SelectItem value="medium">Medium Grind</SelectItem>
                <SelectItem value="fine">Fine Grind</SelectItem>
                <SelectItem value="extra-fine">Extra Fine Grind</SelectItem>
              </SelectContent>
            </Select>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={() => onCtaClick()}
                className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-white font-semibold rounded-full"
              >
                {ctaText}
              </Button>
              <Button
                size="lg"
                onClick={() => (window.location.href = "/suppliers")}
                variant="outline"
                className="text-lg px-8 py-6 bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 font-semibold rounded-full"
              >
                View Suppliers
              </Button>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-neutral-900 to-transparent" />
    </div>
  );
};

export default HeroSection;
