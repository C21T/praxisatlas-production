import { TopBar } from "@/components/TopBar";
import { Footer } from "@/components/Footer";

const Datenschutz = () => {
  return (
    <>
      <TopBar />
      <main className="min-h-screen bg-background pt-16">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-3xl font-bold mb-8">Datenschutzerklärung</h1>
          
          <section className="prose max-w-none">
            <h2 className="text-xl font-semibold mt-6 mb-4">1. Datenschutz auf einen Blick</h2>
            <h3 className="text-lg font-medium mt-4 mb-2">Allgemeine Hinweise</h3>
            <p>Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.</p>

            <h3 className="text-lg font-medium mt-4 mb-2">Datenerfassung auf dieser Website</h3>
            <p>Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.</p>

            <h2 className="text-xl font-semibold mt-6 mb-4">2. Hosting</h2>
            <p>Wir hosten die Inhalte unserer Website bei einem professionellen Hosting-Dienstleister.</p>

            <h2 className="text-xl font-semibold mt-6 mb-4">3. Allgemeine Hinweise und Pflichtinformationen</h2>
            <h3 className="text-lg font-medium mt-4 mb-2">Datenschutz</h3>
            <p>Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.</p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Datenschutz;