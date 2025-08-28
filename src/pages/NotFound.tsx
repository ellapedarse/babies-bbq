import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary-red/10 rounded-full animate-float"></div>
        <div className="absolute bottom-32 right-16 w-16 h-16 bg-brand-orange/10 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 right-1/4 w-12 h-12 bg-brand-brown/10 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="text-center relative z-10 max-w-2xl mx-auto px-4">
        {/* 404 Error */}
        <div className="mb-8">
          <h1 className="text-8xl lg:text-9xl font-bold text-primary-red mb-4 animate-glow">
            404
          </h1>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Oops! Page Not Found
          </h2>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            The page you're looking for doesn't exist. It might have been moved, deleted, 
            or you entered the wrong URL. But don't worry, our BBQ is still here!
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-gradient-button hover:opacity-90 font-semibold text-lg px-8 py-4 rounded-2xl shadow-large"
            onClick={() => window.location.href = '/'}
          >
            <Home className="w-5 h-5 mr-2" />
            Back to Home
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-primary-red text-primary-red hover:bg-primary-red hover:text-brand-white font-semibold text-lg px-8 py-4 rounded-2xl"
            onClick={() => window.history.back()}
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Go Back
          </Button>
        </div>

        {/* Additional Info */}
        <div className="mt-12 p-6 bg-card rounded-2xl shadow-soft">
          <h3 className="text-lg font-semibold text-card-foreground mb-2">
            Still Hungry?
          </h3>
          <p className="text-muted-foreground">
            Check out our delicious BBQ menu while you're here!
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
