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
      "Marketing-Material",
      "Support & Updates",
    ],
  },
  {
    title: "BAG/ÜBAG",
    price: "289",
    features: [
      "Digitales Gütesiegel",
      "Website-Integration",
      "Marketing-Material",
      "Support & Updates",
      "Mehrere Standorte möglich",
    ],
  },
  {
    title: "MVZ in ärztlicher Hand",
    price: "349",
    subtext: "bis 3 KV-Sitze, für jeden zusätzlichen KV-Sitz 39€/Jahr zzgl. MwSt.",
    features: [
      "Digitales Gütesiegel",
      "Website-Integration",
      "Marketing-Material",
      "Support & Updates",
      "Mehrere Standorte möglich",
    ],
  },
];

export const Pricing = () => {
  const scrollToApply = () => {
    const element = document.getElementById('apply');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="pricing" className="bg-gray-50 py-12 sm:py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl lg:text-center">
          <SectionTitle title="Preise" />
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl py-[10px]">
            Transparent und fair
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Investieren Sie in Ihre Unabhängigkeit
          </p>
        </div>
        <div className="mx-auto mt-12 sm:mt-16 grid max-w-lg gap-8 lg:max-w-none lg:grid-cols-3">
          {pricingTiers.map((tier) => (
            <div
              key={tier.title}
              className="mx-auto w-full max-w-sm rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-200"
            >
              <h3 className="text-2xl font-bold text-primary">{tier.title}</h3>
              <p className="mt-4 text-base text-gray-600">
                Alle Features für Ihre Praxis
              </p>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold text-primary">
                  {tier.price}€
                </span>
                <span className="text-sm font-semibold text-gray-600">/Jahr zzgl. MwSt.</span>
              </p>
              {tier.subtext && (
                <p className="mt-2 text-sm text-gray-600">{tier.subtext}</p>
              )}
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
                onClick={scrollToApply}
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