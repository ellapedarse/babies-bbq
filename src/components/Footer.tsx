import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' }
  ];

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4">
        {/* Social Links */}
        <div className="py-8 flex justify-center">
          <div className="flex space-x-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="w-12 h-12 bg-brand-white/10 rounded-2xl flex items-center justify-center hover:bg-brand-white/20 transition-colors duration-300 group"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5 text-brand-white group-hover:scale-110 transition-transform duration-300" />
              </a>
            ))}
          </div>
        </div>
        
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