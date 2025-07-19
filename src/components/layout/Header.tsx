import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const navItems = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about" },
  { name: "Releases", href: "#releases" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Smooth scroll function
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-melody-black/90 backdrop-blur-lg py-3 shadow-lg shadow-black/10"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a 
          href="#" 
          className="relative z-10"
          onClick={(e) => scrollToSection(e, "#")}
        >
<div className="flex items-center gap-2">
  <img
    src="/assets/bossofmelody/logo-boss.png"
    alt="Boss of Melody Logo"
    className="w-8 h-8 object-contain"
  />
  <span className="text-2xl font-black font-['Montserrat'] tracking-tight">
    <span className="text-white">BOSS</span>
    <span className="text-melody-fuchsia">OF</span>
    <span className="text-white">MELODY</span>
  </span>
</div>

        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => scrollToSection(e, item.href)}
              className="px-4 py-2 text-white/80 hover:text-white font-medium rounded-md transition-colors hover:bg-white/5"
            >
              {item.name}
            </a>
          ))}
          <Button 
            size="sm" 
            className="ml-4 bg-gradient-to-r from-melody-purple to-melody-fuchsia hover:opacity-90 transition-all text-white"
          >
            Submit Demo
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="4" x2="20" y1="12" y2="12" />
                  <line x1="4" x2="20" y1="6" y2="6" />
                  <line x1="4" x2="20" y1="18" y2="18" />
                </svg>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-melody-black/95 backdrop-blur-xl border-melody-purple/20 w-[300px]">
              <nav className="flex flex-col space-y-4 mt-12">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => scrollToSection(e, item.href)}
                    className="px-4 py-3 text-white/80 hover:text-white font-medium rounded-md transition-colors hover:bg-white/5"
                  >
                    {item.name}
                  </a>
                ))}
                <Button 
                  className="mt-4 bg-gradient-to-r from-melody-purple to-melody-fuchsia hover:opacity-90 transition-all text-white"
                >
                  Submit Demo
                </Button>
              </nav>

              <div className="absolute bottom-8 left-6 right-6">
                <div className="flex items-center space-x-4">
                  <a href="#" className="text-white/70 hover:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </a>
                  <a href="#" className="text-white/70 hover:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                    </svg>
                  </a>
                  <a href="#" className="text-white/70 hover:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                    </svg>
                  </a>
                  <a href="#" className="text-white/70 hover:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 20.5c-1.5-1.5-3-3.2-4-5-.5-1-1-2.5-1-4 0-4.4 3.6-8 8-8s8 3.6 8 8c0 1.5-.5 3-1 4-1 1.8-2.5 3.5-4 5l-3 2.5-3-2.5Z"></path>
                      <path d="M12 11a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}