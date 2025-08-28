import { useState } from 'react';
import { ArrowLeft, User, Phone, Mail, MapPin, Calendar, Clock, CreditCard, Shield, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useNavigate } from 'react-router-dom';
import { useCart } from '@/contexts/CartContext';

const Checkout = () => {
  const navigate = useNavigate();
  const { state } = useCart();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    customerName: '',
    phone: '',
    email: '',
    pickupDate: '',
    pickupTime: '',
    pickupLocation: 'main',
    paymentMethod: 'cash',
    termsAccepted: false
  });

  const pickupLocations = [
    { id: 'main', name: 'Surigao Main Branch', address: 'Downtown Surigao City' },
    { id: 'borromeo', name: 'Borromeo Branch', address: 'Borromeo Street, Surigao' },
    { id: 'highway', name: 'National Highway Branch', address: 'National Highway, Surigao' },
    { id: 'siargao', name: 'Siargao Branch', address: 'General Luna, Siargao Island' }
  ];

  const paymentMethods = [
    { id: 'cash', name: 'Cash on Pickup', icon: '💵' },
    { id: 'card', name: 'Credit/Debit Card', icon: '💳' },
    { id: 'gcash', name: 'GCash', icon: '📱' }
  ];

  const getTotalPrice = () => {
    return state.items.reduce((total, item) => {
      const price = parseInt(item.price.replace('₱', ''));
      return total + (price * item.quantity);
    }, 0);
  };

  const generateOrderNumber = () => {
    const timestamp = Date.now().toString().slice(-6);
    const random = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
    return `BBQ${timestamp}${random}`;
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    const orderNumber = generateOrderNumber();
    alert(`Order submitted successfully! Your order number is: ${orderNumber}`);
    // Here you would typically send the order to your backend
    navigate('/order-confirmation', { state: { orderNumber } });
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return formData.customerName && formData.phone;
      case 2:
        return formData.pickupDate && formData.pickupTime && formData.pickupLocation;
      case 3:
        return formData.paymentMethod && formData.termsAccepted;
      default:
        return false;
    }
  };

  const renderStep1 = () => (
    <Card className="p-6">
      <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center">
        <User className="w-5 h-5 mr-2 text-primary" />
        Customer Information
      </h3>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">Full Name *</label>
          <Input
            placeholder="Enter your full name"
            value={formData.customerName}
            onChange={(e) => handleInputChange('customerName', e.target.value)}
            className="w-full"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">Phone Number *</label>
          <Input
            placeholder="Enter your phone number"
            value={formData.phone}
            onChange={(e) => handleInputChange('phone', e.target.value)}
            className="w-full"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">Email (Optional)</label>
          <Input
            type="email"
            placeholder="Enter your email address"
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            className="w-full"
          />
        </div>
      </div>
    </Card>
  );

  const renderStep2 = () => (
    <Card className="p-6">
      <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center">
        <MapPin className="w-5 h-5 mr-2 text-primary" />
        Pickup Details
      </h3>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">Pickup Date *</label>
          <Input
            type="date"
            value={formData.pickupDate}
            onChange={(e) => handleInputChange('pickupDate', e.target.value)}
            className="w-full"
            min={new Date().toISOString().split('T')[0]}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">Pickup Time *</label>
          <Input
            type="time"
            value={formData.pickupTime}
            onChange={(e) => handleInputChange('pickupTime', e.target.value)}
            className="w-full"
            min="10:00"
            max="21:30"
          />
          <p className="text-xs text-muted-foreground mt-1">Available: 10:00 AM - 9:30 PM</p>
        </div>
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">Pickup Location *</label>
          <div className="space-y-2">
            {pickupLocations.map((location) => (
              <label key={location.id} className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="radio"
                  name="pickupLocation"
                  value={location.id}
                  checked={formData.pickupLocation === location.id}
                  onChange={(e) => handleInputChange('pickupLocation', e.target.value)}
                  className="text-primary"
                />
                <div>
                  <span className="text-sm font-medium">{location.name}</span>
                  <p className="text-xs text-muted-foreground">{location.address}</p>
                </div>
              </label>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );

  const renderStep3 = () => (
    <Card className="p-6">
      <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center">
        <CreditCard className="w-5 h-5 mr-2 text-primary" />
        Payment & Review
      </h3>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">Payment Method *</label>
          <div className="space-y-2">
            {paymentMethods.map((method) => (
              <label key={method.id} className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="radio"
                  name="paymentMethod"
                  value={method.id}
                  checked={formData.paymentMethod === method.id}
                  onChange={(e) => handleInputChange('paymentMethod', e.target.value)}
                  className="text-primary"
                />
                <span className="text-2xl mr-2">{method.icon}</span>
                <span className="text-sm">{method.name}</span>
              </label>
            ))}
          </div>
        </div>
        
        <div>
          <label className="flex items-center space-x-3 cursor-pointer">
            <input
              type="checkbox"
              checked={formData.termsAccepted}
              onChange={(e) => handleInputChange('termsAccepted', e.target.checked)}
              className="text-primary"
            />
            <span className="text-sm text-muted-foreground">
              I agree to the <a href="#" className="text-primary hover:underline">Terms & Conditions</a> and <a href="#" className="text-primary hover:underline">Privacy Policy</a> *
            </span>
          </label>
        </div>
      </div>
    </Card>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-muted/30 to-background">
      {/* Header */}
      <div className="bg-primary text-primary-foreground shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate('/order')}
              className="text-primary-foreground hover:bg-primary-foreground/20"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Cart
            </Button>
            <h1 className="text-2xl font-bold">Checkout</h1>
            <div></div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                currentStep >= 1 ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
              }`}>
                {currentStep > 1 ? <CheckCircle className="w-4 h-4" /> : '1'}
              </div>
              <span className={`text-sm font-medium ${currentStep >= 1 ? 'text-foreground' : 'text-muted-foreground'}`}>
                Customer Info
              </span>
            </div>
            <div className={`w-16 h-1 rounded-full ${currentStep >= 2 ? 'bg-primary' : 'bg-muted'}`}></div>
            <div className="flex items-center space-x-2">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                currentStep >= 2 ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
              }`}>
                {currentStep > 2 ? <CheckCircle className="w-4 h-4" /> : '2'}
              </div>
              <span className={`text-sm font-medium ${currentStep >= 2 ? 'text-foreground' : 'text-muted-foreground'}`}>
                Pickup Details
              </span>
            </div>
            <div className={`w-16 h-1 rounded-full ${currentStep >= 3 ? 'bg-primary' : 'bg-muted'}`}></div>
            <div className="flex items-center space-x-2">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                currentStep >= 3 ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
              }`}>
                3
              </div>
              <span className="text-sm font-medium">Payment</span>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <div className="lg:col-span-2">
            {currentStep === 1 && renderStep1()}
            {currentStep === 2 && renderStep2()}
            {currentStep === 3 && renderStep3()}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-6">
              <Button
                variant="outline"
                onClick={handleBack}
                disabled={currentStep === 1}
              >
                Previous
              </Button>
              
              {currentStep < 3 ? (
                <Button
                  onClick={handleNext}
                  disabled={!isStepValid()}
                  className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground"
                >
                  Next Step
                </Button>
              ) : (
                <Button
                  onClick={handleSubmit}
                  disabled={!isStepValid()}
                  className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground"
                >
                  Place Order
                </Button>
              )}
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="p-6 sticky top-24">
              <h3 className="text-xl font-bold text-foreground mb-4">Order Summary</h3>
              
              {/* Items */}
              <div className="space-y-3 mb-4">
                {state.items.map((item) => (
                  <div key={item.id} className="flex justify-between text-sm">
                    <span className="flex-1">{item.name} x{item.quantity}</span>
                    <span className="font-medium">₱{parseInt(item.price.replace('₱', '')) * item.quantity}</span>
                  </div>
                ))}
              </div>
              
              <div className="border-t pt-4 space-y-3">
                <div className="flex justify-between text-sm">
                  <span>Subtotal:</span>
                  <span className="font-medium">₱{getTotalPrice()}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Service Fee:</span>
                  <span className="font-medium">₱0</span>
                </div>
                <div className="border-t pt-3">
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total:</span>
                    <span className="text-primary">₱{getTotalPrice()}</span>
                  </div>
                </div>
              </div>

              {/* Security Badge */}
              <div className="mt-6 p-3 bg-green-50 border border-green-200 rounded-lg">
                <div className="flex items-center space-x-2">
                  <Shield className="w-4 h-4 text-green-600" />
                  <span className="text-sm text-green-800 font-medium">Secure Checkout</span>
                </div>
                <p className="text-xs text-green-700 mt-1">Your information is protected</p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
