import { Button } from "@/components/ui/button";
import { Shield } from "lucide-react";

export const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white py-24 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center">
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
      </div>
    </div>
  );
};