import { CheckCircle, MapPin, Clock, Phone, Mail, ArrowLeft, Download, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useNavigate, useLocation } from 'react-router-dom';
import { useCart } from '@/contexts/CartContext';

const OrderConfirmation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { state: cartState, dispatch } = useCart();
  const orderNumber = location.state?.orderNumber || 'BBQ123456';

  const getTotalPrice = () => {
    return cartState.items.reduce((total, item) => {
      const price = parseInt(item.price.replace('₱', ''));
      return total + (price * item.quantity);
    }, 0);
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  const handleDownloadReceipt = () => {
    // This would generate and download a PDF receipt
    alert('Receipt download functionality coming soon!');
  };

  const handleShareOrder = () => {
    // This would share order details
    if (navigator.share) {
      navigator.share({
        title: 'My Babies BBQ Order',
        text: `I just ordered from Babies BBQ! Order #${orderNumber}`,
        url: window.location.href
      });
    } else {
      // Fallback for browsers that don't support Web Share API
      navigator.clipboard.writeText(`My Babies BBQ Order #${orderNumber}`);
      alert('Order details copied to clipboard!');
    }
  };

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
            <h1 className="text-2xl font-bold">Order Confirmation</h1>
            <div></div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Success Message */}
        <div className="text-center mb-12">
          <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-12 h-12 text-green-600" />
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-4">Thank You!</h1>
          <p className="text-xl text-muted-foreground">
            Your order has been successfully placed. We're preparing your delicious BBQ!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Order Details */}
          <Card className="p-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">Order Details</h2>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Order Number:</span>
                <span className="text-xl font-bold text-primary">{orderNumber}</span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Order Date:</span>
                <span className="font-medium">{new Date().toLocaleDateString()}</span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Total Amount:</span>
                <span className="text-xl font-bold text-primary">₱{getTotalPrice()}</span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Items:</span>
                <span className="font-medium">{cartState.totalItems}</span>
              </div>
            </div>

            {/* Order Items */}
            <div className="mt-6 pt-6 border-t">
              <h3 className="font-semibold text-foreground mb-3">Your Order:</h3>
              <div className="space-y-2">
                {cartState.items.map((item) => (
                  <div key={item.id} className="flex justify-between text-sm">
                    <span>{item.name} x{item.quantity}</span>
                    <span className="font-medium">₱{parseInt(item.price.replace('₱', '')) * item.quantity}</span>
                  </div>
                ))}
              </div>
            </div>
          </Card>

          {/* Pickup Instructions */}
          <Card className="p-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">Pickup Instructions</h2>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground">Pickup Location</h3>
                  <p className="text-muted-foreground">Surigao Main Branch</p>
                  <p className="text-sm text-muted-foreground">Downtown Surigao City</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-accent mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground">Estimated Pickup Time</h3>
                  <p className="text-muted-foreground">25-35 minutes</p>
                  <p className="text-sm text-muted-foreground">We'll call you when it's ready!</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground">Contact Us</h3>
                  <p className="text-muted-foreground">+63 912 345 6789</p>
                  <p className="text-sm text-muted-foreground">Call if you have questions</p>
                </div>
              </div>
            </div>

            {/* Important Notes */}
            <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <h4 className="font-semibold text-blue-900 mb-2">Important Notes:</h4>
              <ul className="text-sm text-blue-800 space-y-1">
                <li>• Please bring a valid ID for pickup</li>
                <li>• Orders are held for 2 hours after completion</li>
                <li>• Call us if you need to change pickup time</li>
                <li>• Enjoy your authentic Filipino BBQ!</li>
              </ul>
            </div>
          </Card>
        </div>

        {/* Action Buttons */}
        <div className="text-center mt-12 space-y-4">
          <div className="flex justify-center space-x-4">
            <Button
              onClick={handleDownloadReceipt}
              variant="outline"
              className="flex items-center space-x-2"
            >
              <Download className="w-4 h-4" />
              <span>Download Receipt</span>
            </Button>
            
            <Button
              onClick={handleShareOrder}
              variant="outline"
              className="flex items-center space-x-2"
            >
              <Share2 className="w-4 h-4" />
              <span>Share Order</span>
            </Button>
          </div>
          
          <Button
            onClick={() => {
              clearCart();
              navigate('/');
            }}
            className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground py-3 px-8 text-lg font-semibold"
          >
            Order More BBQ
          </Button>
        </div>

        {/* Contact Support */}
        <div className="text-center mt-12">
          <Card className="p-6 max-w-2xl mx-auto">
            <h3 className="text-lg font-semibold text-foreground mb-3">Need Help?</h3>
            <p className="text-muted-foreground mb-4">
              If you have any questions about your order, don't hesitate to contact us.
            </p>
            <div className="flex justify-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-sm">+63 912 345 6789</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-sm">info@babiesbbq.com</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;
