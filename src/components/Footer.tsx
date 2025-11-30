export const Footer = () => {
  return (
    <footer className="bg-olive-dark text-cream py-12">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-display font-medium mb-2">TuniLink</h3>
            <p className="text-cream/70 text-sm">
              Premium Organic Tunisian EVOO for UK Markets
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-6 text-sm text-cream/70">
            <a href="mailto:info@tunilink.co.uk" className="hover:text-gold transition-colors">
              info@tunilink.co.uk
            </a>
            <span className="hidden md:block">•</span>
            <a href="tel:+442071234567" className="hover:text-gold transition-colors">
              +44 (0) 20 7123 4567
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-cream/10 text-center text-sm text-cream/60">
          <p>© {new Date().getFullYear()} TuniLink. All rights reserved. 100% Organic • Single Origin • Cold Pressed</p>
        </div>
      </div>
    </footer>
  );
};
