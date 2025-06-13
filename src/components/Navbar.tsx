import React from "react";
import { Button } from "./ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";
import { Coffee } from "lucide-react";
import CartDrawer from "./cart/CartDrawer";
import UserMenu from "./user/UserMenu";

interface NavbarProps {
  onOrderClick?: () => void;
  logoText?: string;
  isScrolled?: boolean;
}

const Navbar = ({
  onOrderClick = () => console.log("Order clicked"),
  logoText = "Brew Haven",
  isScrolled = false,
}: NavbarProps) => {
  return (
    <nav
      className={`w-full h-20 fixed top-0 left-0 z-50 transition-all duration-300 bg-white ${
        isScrolled ? "shadow-md" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Coffee className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold text-gray-900">{logoText}</span>
        </div>

        {/* Navigation Links */}
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink
                className={navigationMenuTriggerStyle()}
                href="/"
              >
                Home
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Menu</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="w-[400px] p-4 grid gap-3">
                  <div className="grid grid-cols-2 gap-2">
                    <NavigationMenuLink
                      className="block p-3 hover:bg-gray-100 rounded-md"
                      href="/menu"
                    >
                      Full Menu
                    </NavigationMenuLink>
                    <NavigationMenuLink
                      className="block p-3 hover:bg-gray-100 rounded-md"
                      href="/menu/coffee"
                    >
                      Coffee
                    </NavigationMenuLink>
                    <NavigationMenuLink
                      className="block p-3 hover:bg-gray-100 rounded-md"
                      href="/menu/pastries"
                    >
                      Pastries
                    </NavigationMenuLink>
                    <NavigationMenuLink
                      className="block p-3 hover:bg-gray-100 rounded-md"
                      href="/menu/breakfast"
                    >
                      Breakfast
                    </NavigationMenuLink>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink
                className={navigationMenuTriggerStyle()}
                href="/about"
              >
                About
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink
                className={navigationMenuTriggerStyle()}
                href="/suppliers"
              >
                Suppliers
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink
                className={navigationMenuTriggerStyle()}
                href="/contact"
              >
                Contact
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* User and Cart */}
        <div className="flex items-center space-x-4">
          <CartDrawer />
          <UserMenu />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
