import { useState, useEffect } from 'react';
import { Menu, X, ShoppingCart, User, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useCart } from '@/contexts/CartContext';
import { Badge } from '@/components/ui/badge';

const Navbar = () => {
  const { state } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Products', href: '#products' },
    { name: 'Branches', href: '#branches' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
      isScrolled 
        ? 'bg-brand-white/80 backdrop-blur-xl shadow-large border-b border-primary-red/20 py-3' 
        : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <div className={`text-2xl font-bold transition-all duration-300 ${
              isScrolled ? 'text-primary-red' : 'text-brand-white drop-shadow-lg'
            }`}>
              Babies BBQ
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`font-medium transition-all duration-300 hover:scale-105 ${
                  isScrolled 
                    ? 'text-brand-brown hover:text-primary-red' 
                    : 'text-brand-white/90 hover:text-brand-white drop-shadow-sm'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Cart, Profile, and Admin Icons */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Cart Icon with Count */}
            <div className="relative">
              <Button
                variant="ghost"
                size="sm"
                className={`relative ${
                  isScrolled ? 'text-brand-brown hover:text-primary-red' : 'text-brand-white hover:text-brand-white/80'
                }`}
              >
                <ShoppingCart className="w-5 h-5" />
                {state.totalItems > 0 && (
                  <Badge className="absolute -top-2 -right-2 bg-primary-red text-brand-white text-xs">
                    {state.totalItems}
                  </Badge>
                  )}
              </Button>
            </div>

            {/* Profile Icon */}
            <Button
              variant="ghost"
              size="sm"
              className={`relative ${
                isScrolled ? 'text-brand-brown hover:text-primary-red' : 'text-brand-white hover:text-brand-white/80'
              }`}
            >
              <User className="w-5 h-5" />
            </Button>

            {/* Admin Access */}
            <Link href="/admin/login">
              <Button
                variant="ghost"
                size="sm"
                className={`relative ${
                  isScrolled ? 'text-brand-brown hover:text-primary-red' : 'text-brand-white hover:text-brand-white/80'
                }`}
                title="Admin Access"
              >
                <Settings className="w-5 h-5" />
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden transition-colors duration-300 ${
              isScrolled ? 'text-primary-red' : 'text-brand-white'
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className={`md:hidden mt-4 pb-4 border-t transition-all duration-300 ${
            isScrolled ? 'border-primary-red/20' : 'border-brand-white/20'
          }`}>
            <div className="flex flex-col space-y-4 pt-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`font-medium transition-colors duration-200 ${
                    isScrolled ? 'text-brand-brown hover:text-primary-red' : 'text-brand-white/90 hover:text-brand-white'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              
              {/* Admin Access in Mobile Menu */}
              <Link 
                href="/admin/login"
                className={`font-medium transition-colors duration-200 ${
                  isScrolled ? 'text-brand-brown hover:text-primary-red' : 'text-brand-white/90 hover:text-brand-white'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Admin Access
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;