import { Clock, MapPin, Phone, CreditCard } from 'lucide-react';

const PickupRules = () => {
  const rules = [
    {
      icon: Clock,
      title: 'Operating Hours',
      description: 'Daily: 10:00 AM - 10:00 PM',
      detail: 'Last orders accepted 30 minutes before closing'
    },
    {
      icon: Phone,
      title: 'Advance Orders',
      description: 'Call ahead for large orders',
      detail: 'Recommended for groups of 10+ people'
    },
    {
      icon: MapPin,
      title: 'Multiple Locations',
      description: '4 branches across Surigao',
      detail: 'Choose your preferred pickup location'
    },
    {
      icon: CreditCard,
      title: 'Payment Options',
      description: 'Cash, Cards & GCash accepted',
      detail: 'Pay online or upon pickup'
    }
  ];

  return (
    <section id="branches" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Pickup Rules */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            How to Order & Pickup
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Simple, convenient ordering process designed for your comfort
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {rules.map((rule, index) => (
            <div
              key={rule.title}
              className="group bg-card rounded-2xl p-6 shadow-soft hover:shadow-medium transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-gradient-hero rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <rule.icon className="w-8 h-8 text-brand-white" />
              </div>
              <h3 className="text-xl font-bold text-card-foreground mb-2">
                {rule.title}
              </h3>
              <p className="text-primary-red font-semibold mb-2">
                {rule.description}
              </p>
              <p className="text-muted-foreground text-sm">
                {rule.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PickupRules;