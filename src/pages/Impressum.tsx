import { TopBar } from "@/components/TopBar";
import { Footer } from "@/components/Footer";

const Impressum = () => {
  return (
    <>
      <TopBar />
      <main className="min-h-screen bg-background pt-16">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-3xl font-bold mb-8">Impressum</h1>
          
          <section className="prose max-w-none">
            <h2 className="text-xl font-semibold mt-6 mb-4">Angaben gemäß § 5 TMG</h2>
            <p>Praxisatlas GmbH<br />
            Musterstraße 123<br />
            10115 Berlin</p>

            <h2 className="text-xl font-semibold mt-6 mb-4">Kontakt</h2>
            <p>Telefon: +49 30 2204 4646<br />
            E-Mail: info@praxisatlas.com</p>

            <h2 className="text-xl font-semibold mt-6 mb-4">Geschäftsführung</h2>
            <p>Max Mustermann</p>

            <h2 className="text-xl font-semibold mt-6 mb-4">Handelsregister</h2>
            <p>HRB XXXXX<br />
            Amtsgericht Berlin-Charlottenburg</p>

            <h2 className="text-xl font-semibold mt-6 mb-4">Umsatzsteuer-ID</h2>
            <p>Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz:<br />
            DE XXX XXX XXX</p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Impressum;