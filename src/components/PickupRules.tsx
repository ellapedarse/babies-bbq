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

  const branches = [
    {
      name: 'Surigao Main Branch',
      address: 'Downtown Surigao City',
      phone: '+63 912 345 6789',
      isMain: true
    },
    {
      name: 'Borromeo Branch',
      address: 'Borromeo Street, Surigao',
      phone: '+63 912 345 6790',
      isMain: false
    },
    {
      name: 'National Highway Branch',
      address: 'National Highway, Surigao',
      phone: '+63 912 345 6791',
      isMain: false
    },
    {
      name: 'Siargao Branch',
      address: 'General Luna, Siargao Island',
      phone: '+63 912 345 6792',
      isMain: false
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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
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

        {/* Branch Locations */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-foreground mb-4">
            Our Locations
          </h3>
          <p className="text-lg text-muted-foreground">
            Visit any of our branches for the authentic Babies BBQ experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {branches.map((branch, index) => (
            <div
              key={branch.name}
              className={`relative bg-card rounded-2xl p-6 shadow-soft hover:shadow-medium transition-all duration-300 transform hover:-translate-y-1 ${
                branch.isMain ? 'ring-2 ring-primary-red' : ''
              }`}
            >
              {branch.isMain && (
                <div className="absolute -top-3 left-6">
                  <span className="bg-gradient-button text-brand-white px-3 py-1 rounded-full text-sm font-semibold">
                    Main Branch
                  </span>
                </div>
              )}
              
              <div className="flex items-start space-x-3">
                <div className="w-3 h-3 bg-primary-red rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-card-foreground mb-2">
                    {branch.name}
                  </h4>
                  <p className="text-muted-foreground text-sm mb-2">
                    {branch.address}
                  </p>
                  <p className="text-primary-red font-semibold text-sm">
                    {branch.phone}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PickupRules;