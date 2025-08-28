import { ShoppingCart, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import porkBBQ from '@/assets/pork-bbq.jpg';
import chickenBBQ from '@/assets/chicken-bbq.jpg';
import fishBBQ from '@/assets/fish-bbq.jpg';
import beefBBQ from '@/assets/beef-bbq.jpg';

const Products = () => {
  const products = [
    {
      id: 1,
      name: 'Classic Pork BBQ',
      price: '₱150',
      image: porkBBQ,
      description: 'Tender pork skewers with our signature sweet BBQ sauce',
      rating: 4.9,
      popular: true
    },
    {
      id: 2,
      name: 'Chicken BBQ Delight',
      price: '₱140',
      image: chickenBBQ,
      description: 'Juicy chicken pieces marinated in special herbs and spices',
      rating: 4.8,
      popular: true
    },
    {
      id: 3,
      name: 'Fresh Fish BBQ',
      price: '₱180',
      image: fishBBQ,
      description: 'Daily fresh fish grilled to perfection with local seasonings',
      rating: 4.7,
      popular: false
    },
    {
      id: 4,
      name: 'Premium Beef BBQ',
      price: '₱220',
      image: beefBBQ,
      description: 'Premium beef cuts with traditional Filipino BBQ marinade',
      rating: 4.9,
      popular: true
    },
    {
      id: 5,
      name: 'BBQ Combo Meal',
      price: '₱350',
      image: porkBBQ,
      description: 'Mix of pork, chicken, and fish with rice and drinks',
      rating: 4.8,
      popular: true
    },
    {
      id: 6,
      name: 'Liempo BBQ',
      price: '₱190',
      image: porkBBQ,
      description: 'Crispy pork belly with homemade BBQ glaze',
      rating: 4.6,
      popular: false
    },
    {
      id: 7,
      name: 'Bangus BBQ',
      price: '₱160',
      image: fishBBQ,
      description: 'Grilled milkfish stuffed with tomatoes and onions',
      rating: 4.7,
      popular: false
    },
    {
      id: 8,
      name: 'Chicken Inasal',
      price: '₱170',
      image: chickenBBQ,
      description: 'Traditional Visayan-style grilled chicken',
      rating: 4.8,
      popular: true
    },
    {
      id: 9,
      name: 'BBQ Rice Bowl',
      price: '₱120',
      image: porkBBQ,
      description: 'Choice of BBQ meat over garlic rice with vegetables',
      rating: 4.5,
      popular: false
    },
    {
      id: 10,
      name: 'Family Pack',
      price: '₱850',
      image: beefBBQ,
      description: 'Perfect for 4-6 people with assorted BBQ and sides',
      rating: 4.9,
      popular: true
    }
  ];

  return (
    <section id="products" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Our Signature BBQ
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Authentic Filipino barbecue crafted with love and tradition since 1979
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-large transition-all duration-500 transform hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Product Image */}
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Popular Badge */}
                {product.popular && (
                  <div className="absolute top-4 left-4">
                    <span className="bg-gradient-button text-brand-white px-3 py-1 rounded-full text-sm font-semibold">
                      Popular
                    </span>
                  </div>
                )}

                {/* Rating */}
                <div className="absolute top-4 right-4 bg-brand-white/90 rounded-full px-2 py-1 flex items-center space-x-1">
                  <Star className="w-4 h-4 text-brand-orange fill-current" />
                  <span className="text-sm font-semibold text-foreground">
                    {product.rating}
                  </span>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-overlay opacity-0 group-hover:opacity-60 transition-opacity duration-300 flex items-center justify-center">
                  <Button
                    size="sm"
                    className="bg-brand-white text-primary-red hover:bg-brand-white/90 transform scale-95 group-hover:scale-100 transition-transform duration-300"
                  >
                    Quick Add
                  </Button>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-card-foreground mb-2 group-hover:text-primary-red transition-colors">
                  {product.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {product.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary-red">
                    {product.price}
                  </span>
                  <Button
                    size="sm"
                    className="bg-gradient-button hover:opacity-90 transition-opacity"
                  >
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Add to Cart
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button
            size="lg"
            variant="outline"
            className="border-primary-red text-primary-red hover:bg-primary-red hover:text-brand-white font-semibold px-8 py-4 rounded-2xl"
          >
            View Complete Menu
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Products;