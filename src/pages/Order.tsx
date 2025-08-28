import { Plus, Minus, ArrowLeft, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import { useCart } from '@/contexts/CartContext';

const Order = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useCart();

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
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24 p-6">
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

              {/* Checkout Button */}
              <Button 
                className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground py-3 text-lg font-semibold"
                onClick={() => alert('Checkout functionality coming soon!')}
              >
                Proceed to Checkout
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
  );
};

export default Order;
