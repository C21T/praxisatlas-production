import { Check } from "lucide-react";
import { SectionTitle } from "./SectionTitle";

const benefits = [
  {
    title: "Vertrauensbildung",
    description:
      "Stärken Sie das Vertrauen Ihrer Patienten durch transparente Kommunikation der Praxisführung.",
  },
  {
    title: "Unabhängigkeit",
    description:
      "Demonstrieren Sie Ihre therapeutische und wirtschaftliche Unabhängigkeit.",
  },
  {
    title: "Qualitätsnachweis",
    description:
      "Heben Sie sich von investorengeführten Praxisketten ab und zeigen Sie Ihre Qualitätsstandards.",
  },
];

export const Benefits = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl lg:text-center">
          <SectionTitle title="Vorteile" />
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Ihre Vorteile als inhabergeführte Praxis
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Mit unserem Gütesiegel kommunizieren Sie klar die Werte Ihrer Praxis
          </p>
        </div>

        {/* New section about private equity */}
        <div className="mx-auto mt-12 max-w-3xl text-left">
          <h3 className="text-2xl font-semibold text-primary mb-4">
            Die Herausforderung: Private Equity im Gesundheitswesen
          </h3>
          <div className="space-y-4 text-gray-600">
            <p>
              In den letzten Jahren ist ein besorgniserregender Trend zu beobachten: Immer mehr Arztpraxen werden von Private-Equity-Gesellschaften aufgekauft. Diese Entwicklung führt zu einer schleichenden Kommerzialisierung des Gesundheitswesens, bei der wirtschaftliche Interessen zunehmend in den Vordergrund rücken.
            </p>
            <p>
              Für Patientinnen und Patienten entsteht dabei ein gravierendes Problem: Die tatsächlichen Eigentumsverhältnisse und Entscheidungsstrukturen bleiben oft im Dunkeln. Während die Praxis äußerlich unverändert erscheint, können im Hintergrund Investoren die strategischen Entscheidungen treffen - mit potenziellen Auswirkungen auf die Behandlungsqualität.
            </p>
            <p>
              Die fehlende Transparenz macht es für Patienten unmöglich zu erkennen, ob sie sich in einer inhabergeführten Praxis oder in einer von Investoren kontrollierten Einrichtung befinden. Diese Unklarheit untergräbt das Vertrauensverhältnis zwischen Arzt und Patient.
            </p>
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-xl font-semibold leading-7 text-primary">
                  <Check className="h-6 w-6 flex-none text-primary-light" />
                  {benefit.title}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{benefit.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};