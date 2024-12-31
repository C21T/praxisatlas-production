import { CheckCircle2, Send, Shield, UserCheck } from "lucide-react";
import { SectionTitle } from "./SectionTitle";

const steps = [
  {
    title: "Antrag einreichen",
    description:
      "Füllen Sie das Antragsformular aus und reichen Sie die erforderlichen Unterlagen ein.",
    icon: Send,
  },
  {
    title: "Prüfung",
    description:
      "Wir prüfen Ihre Unterlagen auf Vollständigkeit und Erfüllung der Kriterien.",
    icon: CheckCircle2,
  },
  {
    title: "Verifizierung",
    description:
      "Nach erfolgreicher Prüfung wird Ihre Praxis als inhabergeführt verifiziert.",
    icon: UserCheck,
  },
  {
    title: "Gütesiegel erhalten",
    description:
      "Sie erhalten Ihr digitales Gütesiegel zur Einbindung auf Ihrer Website.",
    icon: Shield,
  },
];

export const Process = () => {
  return (
    <div id="process" className="bg-white py-24 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl lg:text-center">
          <SectionTitle title="Ablauf" />
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            So einfach geht's
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            In wenigen Schritten zu Ihrem Gütesiegel
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {steps.map((step, index) => (
              <div key={step.title} className="flex flex-col items-center text-center">
                <dt className="flex items-center gap-x-3 text-xl font-semibold leading-7 text-primary">
                  <step.icon className="h-8 w-8 flex-none text-primary-light" />
                  {step.title}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{step.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};