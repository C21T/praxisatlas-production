export const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-primary mb-4">Praxisatlas</h3>
            <p className="text-gray-600 text-sm">
              Das Gütesiegel für inhabergeführte Arztpraxen
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <a href="#benefits" className="text-gray-600 hover:text-primary text-sm">
                  Vorteile
                </a>
              </li>
              <li>
                <a href="#process" className="text-gray-600 hover:text-primary text-sm">
                  Ablauf
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-gray-600 hover:text-primary text-sm">
                  Preise
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">Rechtliches</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-primary text-sm">
                  Impressum
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-primary text-sm">
                  Datenschutz
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-primary text-sm">
                  AGB
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">Kontakt</h4>
            <ul className="space-y-2">
              <li>
                <a href="mailto:info@praxisatlas.de" className="text-gray-600 hover:text-primary text-sm">
                  info@praxisatlas.de
                </a>
              </li>
              <li className="text-gray-600 text-sm">
                Tel: +49 (0) 123 456789
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