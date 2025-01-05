import { Button } from "@/components/ui/button";
import { Shield } from "lucide-react";

export const Hero = () => {
  const scrollToApplication = () => {
    const element = document.getElementById('apply');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white py-12 sm:py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-12">
          <div className="text-left md:w-1/2">
            <h1 className="animate-fade-in text-4xl font-bold tracking-tight text-primary sm:text-6xl">
              Das Gütesiegel für Arztpraxen und MVZ in ärztlicher Hand
            </h1>
            <p className="animate-slide-in mt-6 text-lg leading-8 text-gray-600">
              Zeigen Sie Ihren Patientinnen und Patienten, dass Ihre Praxis
              unabhängig und frei von Investoreneinfluss geführt wird.
            </p>
            <div className="mt-10 flex justify-center md:justify-start">
              <Button
                size="lg"
                className="animate-slide-in rounded-full bg-primary hover:bg-primary-light"
                onClick={scrollToApplication}
              >
                <Shield className="mr-2 h-5 w-5" />
                Jetzt Gütesiegel beantragen
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center items-center gap-4 flex-wrap">
            <div className="relative w-56 h-56 sm:w-64 sm:h-64 animate-fade-in">
              <img
                src="/lovable-uploads/94f2dff0-bd85-4765-a7d2-347e2e49f3a0.png"
                alt="Praxisatlas Gütesiegel für Praxis"
                className="w-full h-full object-contain hover:scale-105 transition-transform duration-300 drop-shadow-xl"
              />
            </div>
            <div className="relative w-56 h-56 sm:w-64 sm:h-64 animate-fade-in">
              <img
                src="/lovable-uploads/ae44c717-8052-4af8-9bf5-f52b46223aad.png"
                alt="Praxisatlas Gütesiegel für MVZ"
                className="w-full h-full object-contain hover:scale-105 transition-transform duration-300 drop-shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};