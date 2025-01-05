import { AlertTriangle, TrendingUp, Users, ShieldAlert } from "lucide-react";
import { SectionTitle } from "./SectionTitle";

export const PrivateEquity = () => {
  return (
    <div className="bg-gray-50 py-12 sm:py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <SectionTitle title="Herausforderung" />
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl mb-12 py-[10px]">
            Private Equity im Gesundheitswesen
          </h2>
        </div>

        <div className="mx-auto max-w-5xl space-y-12">
          <div className="flex gap-6 items-start">
            <TrendingUp className="h-8 w-8 text-primary-light flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-semibold text-primary mb-4">
                Zunehmende Kommerzialisierung
              </h3>
              <p className="text-gray-600">
                In den letzten Jahren ist ein besorgniserregender Trend zu beobachten: 
                Immer mehr Arztpraxen werden von Private-Equity-Gesellschaften aufgekauft. 
                Diese Entwicklung führt zu einer schleichenden Kommerzialisierung des 
                Gesundheitswesens, bei der wirtschaftliche Interessen zunehmend in den 
                Vordergrund rücken.
              </p>
            </div>
          </div>

          <div className="flex gap-6 items-start">
            <Users className="h-8 w-8 text-primary-light flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-semibold text-primary mb-4">
                Intransparente Eigentumsverhältnisse
              </h3>
              <p className="text-gray-600">
                Für Patientinnen und Patienten entsteht ein gravierendes Problem: 
                Die tatsächlichen Eigentumsverhältnisse und Entscheidungsstrukturen 
                bleiben oft im Dunkeln. Während die Praxis äußerlich unverändert 
                erscheint, können im Hintergrund Investoren die strategischen 
                Entscheidungen treffen.
              </p>
            </div>
          </div>

          <div className="flex gap-6 items-start">
            <AlertTriangle className="h-8 w-8 text-primary-light flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-semibold text-primary mb-4">
                Auswirkungen auf die Behandlungsqualität
              </h3>
              <p className="text-gray-600">
                Die Übernahme durch Private-Equity-Gesellschaften kann weitreichende 
                Folgen haben. Wenn Renditeerwartungen und Kosteneinsparungen im 
                Vordergrund stehen, besteht die Gefahr, dass medizinische 
                Entscheidungen nicht mehr ausschließlich zum Wohl der Patienten 
                getroffen werden.
              </p>
            </div>
          </div>

          <div className="flex gap-6 items-start">
            <ShieldAlert className="h-8 w-8 text-primary-light flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-semibold text-primary mb-4">
                Vertrauensverlust
              </h3>
              <p className="text-gray-600">
                Die fehlende Transparenz macht es für Patienten unmöglich zu erkennen, 
                ob sie sich in einer inhabergeführten Praxis oder in einer von 
                Investoren kontrollierten Einrichtung befinden. Diese Unklarheit 
                untergräbt das fundamentale Vertrauensverhältnis zwischen Arzt 
                und Patient.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
