import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' }
  ];

  const quickLinks = [
    { name: 'About Us', href: '#' },
    { name: 'Menu', href: '#products' },
    { name: 'Branches', href: '#branches' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="mb-6">
                <h3 className="text-3xl font-bold text-brand-white mb-2">
                  Babies BBQ
                </h3>
                <p className="text-brand-white/80 text-lg leading-relaxed">
                  Serving authentic Filipino barbecue since 1979. From our family to yours, 
                  we bring you the most delicious BBQ experience across Surigao and beyond.
                </p>
              </div>
              
              {/* Social Links */}
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
            
            {/* Quick Links */}
            <div>
              <h4 className="text-xl font-bold text-brand-white mb-6">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-brand-white/80 hover:text-brand-white transition-colors duration-200 hover:translate-x-1 transform inline-block"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Contact Info */}
            <div>
              <h4 className="text-xl font-bold text-brand-white mb-6">
                Contact Info
              </h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-brand-orange mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-brand-white/80 text-sm">
                      Downtown Surigao City<br />
                      Surigao del Norte, Philippines
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-brand-orange flex-shrink-0" />
                  <p className="text-brand-white/80 text-sm">
                    +63 912 345 6789
                  </p>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-brand-orange flex-shrink-0" />
                  <p className="text-brand-white/80 text-sm">
                    info@babiesbbq.com
                  </p>
                </div>
              </div>
            </div>
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