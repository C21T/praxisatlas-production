import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { Menu } from "lucide-react";
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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    { label: "Vorteile", id: "benefits" },
    { label: "Ablauf", id: "process" },
    { label: "Preise", id: "pricing" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 h-20 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 h-full">
        <nav className="flex items-center justify-between h-full">
          <div className="text-xl font-bold text-primary">Praxisatlas</div>

          {isMobile ? (
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Menu</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-4 mt-8">
                  {navItems.map((item) => (
                    <Button
                      key={item.id}
                      variant="ghost"
                      onClick={() => scrollToSection(item.id)}
                    >
                      {item.label}
                    </Button>
                  ))}
                  <Button
                    className="bg-primary hover:bg-primary-light text-white"
                    onClick={() => scrollToSection("application")}
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
                >
                  {item.label}
                </Button>
              ))}
              <Button
                className="bg-primary hover:bg-primary-light text-white"
                onClick={() => scrollToSection("application")}
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