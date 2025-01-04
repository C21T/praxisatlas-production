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
    <div className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white py-24 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          <div className="text-left md:w-1/2">
            <h1 className="animate-fade-in text-4xl font-bold tracking-tight text-primary sm:text-6xl">
              Das Gütesiegel für Ihre inhabergeführte Praxis
            </h1>
            <p className="animate-slide-in mt-6 text-lg leading-8 text-gray-600">
              Zeigen Sie Ihren Patientinnen und Patienten, dass Ihre Praxis
              unabhängig und frei von Investoren-Einfluss geführt wird.
            </p>
            <div className="mt-10">
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
            <div className="relative w-48 h-48 sm:w-64 sm:h-64 animate-fade-in">
              <img
                src="/lovable-uploads/2e1451a2-f9df-4ae5-901c-35535dce9fad.png"
                alt="Praxisatlas Gütesiegel für Praxis"
                className="w-full h-full object-contain hover:scale-105 transition-transform duration-300 drop-shadow-xl"
              />
            </div>
            <div className="relative w-48 h-48 sm:w-64 sm:h-64 animate-fade-in">
              <img
                src="/lovable-uploads/492c837c-17fd-4023-bd01-181d9b7911f8.png"
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