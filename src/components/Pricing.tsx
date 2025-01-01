import { Button } from "@/components/ui/button";
import { Check, Shield } from "lucide-react";
import { SectionTitle } from "./SectionTitle";

const pricingTiers = [
  {
    title: "Einzelpraxis",
    price: "199",
    features: [
      "Digitales Gütesiegel",
      "Website-Integration",
      "Praxis-Verzeichnis Eintrag",
      "Marketing-Material",
      "Support & Updates",
    ],
  },
  {
    title: "Berufsausübungsgemeinschaft",
    price: "299",
    features: [
      "Digitales Gütesiegel",
      "Website-Integration",
      "Praxis-Verzeichnis Eintrag",
      "Marketing-Material",
      "Support & Updates",
      "Mehrere Standorte möglich",
    ],
  },
  {
    title: "MVZ ohne Investoren",
    price: "349",
    features: [
      "Digitales Gütesiegel",
      "Website-Integration",
      "Praxis-Verzeichnis Eintrag",
      "Marketing-Material",
      "Support & Updates",
      "Mehrere Standorte möglich",
      "Erweiterte Verifizierung",
    ],
  },
];

export const Pricing = () => {
  return (
    <div id="pricing" className="bg-gray-50 py-24 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl lg:text-center">
          <SectionTitle title="Preise" />
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Transparent und fair
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Investieren Sie in Ihre Unabhängigkeit
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-lg gap-8 lg:max-w-none lg:grid-cols-3">
          {pricingTiers.map((tier) => (
            <div
              key={tier.title}
              className="rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-200"
            >
              <h3 className="text-2xl font-bold text-primary">{tier.title}</h3>
              <p className="mt-4 text-base text-gray-600">
                Alle Features für Ihre Praxis
              </p>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold text-primary">
                  {tier.price}€
                </span>
                <span className="text-sm font-semibold text-gray-600">/Jahr</span>
              </p>
              <ul className="mt-8 space-y-3">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-3">
                    <Check className="h-6 w-6 flex-none text-primary" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                size="lg"
                className="mt-8 w-full rounded-full bg-primary hover:bg-primary-light"
              >
                <Shield className="mr-2 h-5 w-5" />
                Jetzt beantragen
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};