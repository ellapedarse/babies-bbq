const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-primary-foreground/90 text-sm text-center md:text-left">
              © 1979 Babies BBQ. All rights reserved. Proudly serving authentic Filipino BBQ for over 40 years.
            </p>
            
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors duration-200"
              >
                Terms & Conditions
              </a>
              <a
                href="#"
                className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors duration-200"
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