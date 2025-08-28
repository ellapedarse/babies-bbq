import { Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import surigaoMain from '@/assets/surigao-main.jpg';
import borromeoImage from '@/assets/borromeo-branch.jpg';
import nationalHighwayImage from '@/assets/national-highway.jpg';
import siargaoImage from '@/assets/siargao-branch.jpg';

const Hero = () => {
  const branches = [
    {
      name: 'Surigao Main',
      image: surigaoMain,
      location: 'Downtown Surigao City'
    },
    {
      name: 'Borromeo',
      image: borromeoImage,
      location: 'Borromeo Street'
    },
    {
      name: 'National Highway',
      image: nationalHighwayImage,
      location: 'National Highway Branch'
    },
    {
      name: 'Siargao',
      image: siargaoImage,
      location: 'Siargao Island Paradise'
    }
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-hero"></div>
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 bg-brand-yellow/20 rounded-full animate-float"></div>
        <div className="absolute bottom-32 right-16 w-16 h-16 bg-brand-white/10 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-brand-orange/30 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-4 pt-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-5xl lg:text-7xl font-bold text-brand-white mb-6 leading-tight">
              Babies
              <span className="block text-brand-yellow">BBQ</span>
            </h1>
            <p className="text-xl lg:text-2xl text-brand-white/90 mb-8 leading-relaxed">
              Since 1979, serving the most delicious Filipino BBQ
              <span className="block">across Surigao and beyond.</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-brand-white text-primary-red hover:bg-brand-white/90 font-semibold text-lg px-8 py-4 rounded-2xl shadow-large"
              >
                Order Online
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-brand-white text-brand-white hover:bg-brand-white/10 font-semibold text-lg px-8 py-4 rounded-2xl"
              >
                View Menu
              </Button>
            </div>
          </div>

          {/* Right Content - Branch Grid */}
          <div className="grid grid-cols-2 gap-4">
            {branches.map((branch, index) => (
              <div
                key={branch.name}
                className="group relative overflow-hidden rounded-2xl shadow-large hover:shadow-glow transition-all duration-500 transform hover:scale-105"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="aspect-[4/3] relative">
                  <img
                    src={branch.image}
                    alt={branch.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-overlay opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>
                  
                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-brand-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-brand-white/30 group-hover:bg-brand-white/30 transition-all duration-300 animate-glow">
                      <Play className="text-brand-white w-6 h-6 ml-1" fill="currentColor" />
                    </div>
                  </div>
                  
                  {/* Branch Info */}
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-brand-white font-bold text-lg mb-1">
                      {branch.name}
                    </h3>
                    <p className="text-brand-white/80 text-sm">
                      {branch.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;