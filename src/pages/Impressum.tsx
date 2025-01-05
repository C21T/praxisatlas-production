import { TopBar } from "@/components/TopBar";
import { Footer } from "@/components/Footer";

const Impressum = () => {
  return (
    <>
      <TopBar />
      <main className="min-h-screen bg-background pt-16">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-3xl font-bold mb-8">Impressum</h1>
          
          <section className="prose max-w-none space-y-8">
            <div>
              <h2 className="text-xl font-semibold mb-4">Angaben gemäß § 5 TMG</h2>
              <p>
                Praxisatlas.com<br />
                Christoph Ennerst<br />
                FA für Augenheilkunde<br />
                Kochhannstr. 6<br />
                10249 Berlin
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz</h2>
              <p>USt-IdNr.: DE361532674</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">Kontakt</h2>
              <p>
                Telefon: +49 30 2204 4646<br />
                E-Mail: info@praxisatlas.com
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">Redaktionell verantwortlich</h2>
              <p>Christoph Ennerst</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">EU-Streitschlichtung</h2>
              <p>
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
                <a href="https://ec.europa.eu/consumers/odr/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                  https://ec.europa.eu/consumers/odr/
                </a>
                .
              </p>
              <p>Unsere E-Mail-Adresse finden Sie oben im Impressum.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">Verbraucher­streit­beilegung/Universal­schlichtungs­stelle</h2>
              <p>Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">Externe Links</h2>
              <p>
                Diese Website enthält Verknüpfungen zu Websites Dritter („externe Links"). Diese Websites unterliegen der Haftung der jeweiligen Betreiber. Bei der erstmaligen Verknüpfung der externen Links waren für den Anbieter keine Rechtsverstöße durch die fremden Inhalte ersichtlich. Der Anbieter hat keinerlei Einfluss auf die aktuelle und zukünftige Gestaltung und auf die Inhalte der verknüpften Seiten. Das Setzen von externen Links bedeutet nicht, dass sich der Anbieter die hinter dem Verweis oder Link liegenden Inhalte zu eigen macht. Eine ständige Kontrolle der externen Links ist für den Anbieter ohne konkrete Hinweise auf Rechtsverstöße nicht zumutbar. Bei Kenntnis von Rechtsverstößen werden jedoch derartige externe Links unverzüglich gelöscht.
              </p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Impressum;