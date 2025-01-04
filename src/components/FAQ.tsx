import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionTitle } from "./SectionTitle";

export const FAQ = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl lg:text-center">
          <SectionTitle title="FAQ" />
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Häufig gestellte Fragen
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Hier finden Sie Antworten auf die häufigsten Fragen zum Praxisatlas Gütesiegel
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                Wie lange ist das Gütesiegel gültig?
              </AccordionTrigger>
              <AccordionContent>
                Das Praxisatlas Gütesiegel ist für 12 Monate gültig. Nach Ablauf können Sie es einfach verlängern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                Wie kann ich das Gütesiegel auf meiner Website einbinden?
              </AccordionTrigger>
              <AccordionContent>
                Nach erfolgreicher Prüfung erhalten Sie von uns einen HTML-Code, den Sie einfach in Ihre Website einbinden können. Alternativ stellen wir Ihnen auch eine Bilddatei zur Verfügung.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                Wie läuft der Prüfungsprozess ab?
              </AccordionTrigger>
              <AccordionContent>
                Nach Eingang Ihres Antrags prüfen wir Ihre Angaben anhand öffentlich zugänglicher Quellen. Bei Rückfragen kontaktieren wir Sie. Die Prüfung dauert in der Regel 2-3 Werktage.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>
                Was passiert bei Änderungen der Praxisstruktur?
              </AccordionTrigger>
              <AccordionContent>
                Bei wesentlichen Änderungen der Praxisstruktur informieren Sie uns bitte umgehend. Wir prüfen dann, ob die Voraussetzungen für das Gütesiegel weiterhin erfüllt sind.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
};