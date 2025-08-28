'use client';

import Hero from '@/components/Hero';
import Products from '@/components/Products';
import ContactForm from '@/components/ContactForm';
import PickupRules from '@/components/PickupRules';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Products />
      <PickupRules />
      <ContactForm />
      <Footer />
    </main>
  );
}
