import { Plus, Minus, ArrowLeft, Trash2, Clock, MapPin, Info, Gift, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { useNavigate } from 'react-router-dom';
import { useCart } from '@/contexts/CartContext';
import { useState } from 'react';

const Order = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useCart();
  const [orderNotes, setOrderNotes] = useState('');
  const [deliveryOption, setDeliveryOption] = useState('pickup');
  const [promoCode, setPromoCode] = useState('');

  const updateQuantity = (itemId: number, newQuantity: number) => {
    if (newQuantity <= 0) {
      dispatch({ type: 'REMOVE_ITEM', payload: itemId });
    } else {
      dispatch({ type: 'UPDATE_QUANTITY', payload: { id: itemId, quantity: newQuantity } });
    }
  };

  const removeItem = (itemId: number) => {
    dispatch({ type: 'REMOVE_ITEM', payload: itemId });
  };

  const getTotalPrice = () => {
    return state.items.reduce((total, item) => {
      const price = parseInt(item.price.replace('₱', ''));
      return total + (price * item.quantity);
    }, 0);
  };

  const getEstimatedPickupTime = () => {
    const totalItems = state.totalItems;
    if (totalItems <= 5) return '15-20 minutes';
    if (totalItems <= 15) return '25-35 minutes';
    if (totalItems <= 30) return '40-50 minutes';
    return '1 hour+';
  };

  const getMinimumOrderMessage = () => {
    const total = getTotalPrice();
    if (total < 200) {
      return `Minimum order is ₱200. Add ₱${200 - total} more to proceed.`;
    }
    return null;
  };

  const minimumOrderMessage = getMinimumOrderMessage();

  if (state.items.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-muted/30 to-background">
        {/* Header */}
        <div className="bg-primary text-primary-foreground shadow-lg">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => navigate('/')}
                className="text-primary-foreground hover:bg-primary-foreground/20"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
              <h1 className="text-2xl font-bold">Your Cart</h1>
              <div></div>
            </div>
          </div>
        </div>

        {/* Empty Cart */}
        <div className="container mx-auto px-4 py-20">
          <div className="text-center">
            <div className="text-6xl mb-6">🛒</div>
            <h2 className="text-3xl font-bold text-foreground mb-4">Your Cart is Empty</h2>
            <p className="text-muted-foreground text-lg mb-8">
              Looks like you haven't added any items to your cart yet.
            </p>
            <Button
              onClick={() => navigate('/')}
              className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground py-3 px-8 text-lg font-semibold"
            >
              Browse Our Menu
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-muted/30 to-background">
      {/* Header */}
      <div className="bg-primary text-primary-foreground shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate('/')}
              className="text-primary-foreground hover:bg-primary-foreground/20"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
            <h1 className="text-2xl font-bold">Your Cart</h1>
            <div className="text-sm text-primary-foreground/80">
              {state.totalItems} item{state.totalItems !== 1 ? 's' : ''}
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">1</div>
              <span className="text-sm font-medium">Cart</span>
            </div>
            <div className="w-16 h-1 bg-muted rounded-full"></div>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-muted text-muted-foreground rounded-full flex items-center justify-center text-sm font-bold">2</div>
              <span className="text-sm text-muted-foreground">Checkout</span>
            </div>
            <div className="w-16 h-1 bg-muted rounded-full"></div>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-muted text-muted-foreground rounded-full flex items-center justify-center text-sm font-bold">3</div>
              <span className="text-sm text-muted-foreground">Confirmation</span>
            </div>
          </div>
        </div>

        {/* Cart Items */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items List */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-foreground mb-6">Order Summary</h2>
            <div className="space-y-4">
              {state.items.map((item) => (
                <Card key={item.id} className="p-6">
                  <div className="flex items-center space-x-4">
                    {/* Item Image */}
                    <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    {/* Item Details */}
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-foreground mb-1">
                        {item.name}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-2">
                        {item.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-xl font-bold text-primary">
                          ₱{parseInt(item.price.replace('₱', '')) * item.quantity}
                        </span>
                        <div className="flex items-center space-x-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-8 h-8 p-0"
                          >
                            <Minus className="w-3 h-3" />
                          </Button>
                          <span className="text-lg font-semibold min-w-[2rem] text-center">
                            {item.quantity}
                          </span>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-8 h-8 p-0"
                          >
                            <Plus className="w-3 h-3" />
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => removeItem(item.id)}
                            className="w-8 h-8 p-0 text-destructive hover:text-destructive"
                          >
                            <Trash2 className="w-3 h-3" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Order Notes */}
            <Card className="mt-6 p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                <Info className="w-5 h-5 mr-2 text-primary" />
                Special Instructions
              </h3>
              <Textarea
                placeholder="Any special requests, allergies, or cooking preferences? (Optional)"
                value={orderNotes}
                onChange={(e) => setOrderNotes(e.target.value)}
                className="min-h-[80px]"
              />
            </Card>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
              {/* Delivery Options */}
              <Card className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                  <MapPin className="w-5 h-5 mr-2 text-primary" />
                  Pickup Options
                </h3>
                <div className="space-y-3">
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="radio"
                      name="delivery"
                      value="pickup"
                      checked={deliveryOption === 'pickup'}
                      onChange={(e) => setDeliveryOption(e.target.value)}
                      className="text-primary"
                    />
                    <span className="text-sm">Pickup at Restaurant</span>
                  </label>
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="radio"
                      name="delivery"
                      value="curbside"
                      checked={deliveryOption === 'curbside'}
                      onChange={(e) => setDeliveryOption(e.target.value)}
                      className="text-primary"
                    />
                    <span className="text-sm">Curbside Pickup</span>
                  </label>
                </div>
              </Card>

              {/* Estimated Pickup Time */}
              <Card className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                  <Clock className="w-5 h-5 mr-2 text-accent" />
                  Estimated Pickup Time
                </h3>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent mb-2">
                    {getEstimatedPickupTime()}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Based on {state.totalItems} items
                  </p>
                </div>
              </Card>

              {/* Promo Code */}
              <Card className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                  <Tag className="w-5 h-5 mr-2 text-primary" />
                  Promo Code
                </h3>
                <div className="flex space-x-2">
                  <input
                    type="text"
                    placeholder="Enter promo code"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    className="flex-1 p-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <Button variant="outline" size="sm">
                    Apply
                  </Button>
                </div>
              </Card>

              {/* Order Summary */}
              <Card className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-4">Order Summary</h3>
                
                {/* Items Count */}
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-sm">
                    <span>Items ({state.totalItems}):</span>
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

                {/* Minimum Order Warning */}
                {minimumOrderMessage && (
                  <div className="mb-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <p className="text-sm text-yellow-800">{minimumOrderMessage}</p>
                  </div>
                )}

                {/* Checkout Button */}
                <Button 
                  className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground py-3 text-lg font-semibold"
                  onClick={() => navigate('/checkout')}
                  disabled={getTotalPrice() < 200}
                >
                  {getTotalPrice() < 200 ? 'Minimum Order ₱200' : 'Proceed to Checkout'}
                </Button>

                {/* Continue Shopping */}
                <Button 
                  variant="outline"
                  className="w-full mt-3"
                  onClick={() => navigate('/')}
                >
                  Continue Shopping
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
