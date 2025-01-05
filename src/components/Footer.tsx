import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const Footer = () => {
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    navigate("/");
    // Wait for navigation to complete before scrolling
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <footer className="bg-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-primary mb-4">Praxisatlas</h3>
            <p className="text-gray-600 text-sm">
              Das Gütesiegel für Arztpraxen und MVZ in ärztlicher Hand
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("benefits")}
                  className="text-gray-600 hover:text-primary text-sm"
                >
                  Vorteile
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("process")}
                  className="text-gray-600 hover:text-primary text-sm"
                >
                  Ablauf
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("pricing")}
                  className="text-gray-600 hover:text-primary text-sm"
                >
                  Preise
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("faq")}
                  className="text-gray-600 hover:text-primary text-sm"
                >
                  FAQ
                </button>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">Rechtliches</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/impressum" className="text-gray-600 hover:text-primary text-sm">
                  Impressum
                </Link>
              </li>
              <li>
                <Link to="/datenschutz" className="text-gray-600 hover:text-primary text-sm">
                  Datenschutz
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">Kontakt</h4>
            <ul className="space-y-2">
              <li>
                <a href="mailto:info@praxisatlas.com" className="text-gray-600 hover:text-primary text-sm">
                  info@praxisatlas.com
                </a>
              </li>
              <li className="text-gray-600 text-sm">
                Telefon: +49 30 2204 4646
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-600 text-sm">
            © {new Date().getFullYear()} Praxisatlas. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
};