import { Button } from "@/components/ui/button";
import { Shield } from "lucide-react";

export const Hero = () => {
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
              >
                <Shield className="mr-2 h-5 w-5" />
                Jetzt Gütesiegel beantragen
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center items-center">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 animate-fade-in">
              <img
                src="/lovable-uploads/0dba6e29-1320-43d2-907d-9f2c8a16fdec.png"
                alt="Praxisatlas Gütesiegel"
                className="w-full h-full object-contain hover:scale-105 transition-transform duration-300 drop-shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};