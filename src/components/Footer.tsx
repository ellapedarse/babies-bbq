const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4">
        {/* Bottom Bar */}
        <div className="border-t border-brand-white/20 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-brand-white/80 text-sm text-center md:text-left">
              © 1979 Babies BBQ. All rights reserved. Proudly serving authentic Filipino BBQ for over 40 years.
            </p>
            
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-brand-white/80 hover:text-brand-white text-sm transition-colors duration-200"
              >
                Terms & Conditions
              </a>
              <a
                href="#"
                className="text-brand-white/80 hover:text-brand-white text-sm transition-colors duration-200"
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;