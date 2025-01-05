import { SectionTitle } from "./SectionTitle";

export const Process = () => {
  return (
    <div id="process" className="bg-white py-12 sm:py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl lg:text-center">
          <SectionTitle title="Ablauf" />
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            So funktioniert's
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Hier erfahren Sie, wie der Prozess zur Erlangung des Praxisatlas Gütesiegels abläuft.
          </p>
        </div>
        <div className="mt-12">
          <ol className="list-decimal list-inside space-y-4">
            <li>
              <h3 className="text-lg font-semibold">Schritt 1: Antrag stellen</h3>
              <p className="text-gray-600">
                Füllen Sie das Antragsformular auf unserer Website aus.
              </p>
            </li>
            <li>
              <h3 className="text-lg font-semibold">Schritt 2: Prüfung</h3>
              <p className="text-gray-600">
                Wir prüfen Ihre Angaben und kontaktieren Sie bei Rückfragen.
              </p>
            </li>
            <li>
              <h3 className="text-lg font-semibold">Schritt 3: Gütesiegel erhalten</h3>
              <p className="text-gray-600">
                Nach erfolgreicher Prüfung erhalten Sie Ihr Gütesiegel.
              </p>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};
