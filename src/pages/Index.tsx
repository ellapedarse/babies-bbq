import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import PickupRules from '@/components/PickupRules';
import Products from '@/components/Products';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import { useScrollProgress } from '@/hooks/useScrollProgress';

const Index = () => {
  const scrollProgress = useScrollProgress();

  return (
    <div className="min-h-screen">
      {/* Scroll Progress Indicator */}
      <div 
        className="scroll-indicator" 
        style={{
          width: `${scrollProgress}%`
        }}
      ></div>
      
      <Navbar />
      <Hero />
      <PickupRules />
      <Products />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
