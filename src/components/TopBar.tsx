import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { Menu } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export const TopBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = useIsMobile();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const handleLogoClick = () => {
    navigate("/");
  };

  const navItems = [
    { label: "Vorteile", id: "benefits" },
    { label: "Ablauf", id: "process" },
    { label: "Preise", id: "pricing" },
    { label: "FAQ", id: "faq" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 h-20 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-md"
          : "bg-white/80 backdrop-blur-md"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-4 h-full">
        <nav className="flex items-center justify-between h-full">
          <div className="h-10 cursor-pointer" onClick={handleLogoClick}>
            <img
              src="/lovable-uploads/e6fd3570-e4aa-4492-89d4-448eddfa8a1f.png"
              alt="Praxisatlas Logo"
              className="h-full w-auto"
            />
          </div>

          {isMobile ? (
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Navigation</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-4 mt-8">
                  {navItems.map((item) => (
                    <Button
                      key={item.id}
                      variant="ghost"
                      onClick={() => scrollToSection(item.id)}
                      className="relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-primary hover:after:w-full after:transition-all after:duration-300"
                    >
                      {item.label}
                    </Button>
                  ))}
                  <Button
                    className="bg-primary hover:bg-primary-light text-white transition-colors duration-300"
                    onClick={() => scrollToSection("apply")}
                  >
                    Jetzt beantragen
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          ) : (
            <div className="flex items-center gap-8">
              {navItems.map((item) => (
                <Button
                  key={item.id}
                  variant="ghost"
                  onClick={() => scrollToSection(item.id)}
                  className="relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-primary hover:after:w-full after:transition-all after:duration-300"
                >
                  {item.label}
                </Button>
              ))}
              <Button
                className="bg-primary hover:bg-primary-light text-white transition-colors duration-300"
                onClick={() => scrollToSection("apply")}
              >
                Jetzt beantragen
              </Button>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};