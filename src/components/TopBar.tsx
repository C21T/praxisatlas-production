import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Shield } from "lucide-react";

export const TopBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <span className="text-xl font-bold text-primary">Praxisatlas</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("benefits")}
              className="text-gray-600 hover:text-primary transition-colors"
            >
              Vorteile
            </button>
            <button
              onClick={() => scrollToSection("process")}
              className="text-gray-600 hover:text-primary transition-colors"
            >
              Ablauf
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="text-gray-600 hover:text-primary transition-colors"
            >
              Preise
            </button>
            <Button
              size="sm"
              className="rounded-full bg-primary hover:bg-primary-light"
              onClick={() => scrollToSection("apply")}
            >
              <Shield className="mr-2 h-4 w-4" />
              Jetzt beantragen
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};