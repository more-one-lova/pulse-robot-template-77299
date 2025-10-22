import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "소개", href: "#features" },
    { label: "만드는 법", href: "#how-it-works" },
    { label: "후기", href: "#testimonials" },
    { label: "시작하기", href: "#newsletter" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/95 backdrop-blur-md shadow-md py-3" : "bg-white/80 backdrop-blur-sm py-4"}`}>
      <div className="section-container">
        <div className="flex items-center justify-between">
          <a href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-xl">마</span>
            </div>
            <div className="flex flex-col">
              <span className="font-display text-2xl font-bold text-foreground">마음이</span>
              <span className="text-xs text-muted-foreground -mt-1">Maumi</span>
            </div>
          </a>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="nav-link font-medium text-foreground/80 hover:text-primary transition-colors duration-300">
                {item.label}
              </a>
            ))}
            <button className="px-6 py-2.5 bg-primary text-white rounded-full font-medium hover:shadow-lg transition-all duration-300 hover:scale-105">시작하기</button>
          </div>

          <button className="md:hidden p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle mobile menu">
            {isMobileMenuOpen ? <X className="w-6 h-6 text-foreground" /> : <Menu className="w-6 h-6 text-foreground" />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-fade-in bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-lg">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a key={item.label} href={item.href} className="text-foreground/80 hover:text-primary font-medium py-2" onClick={() => setIsMobileMenuOpen(false)}>
                  {item.label}
                </a>
              ))}
              <button className="px-6 py-2.5 bg-primary text-white rounded-full font-medium hover:shadow-lg transition-all">시작하기</button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
