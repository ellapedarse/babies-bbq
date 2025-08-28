'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  ShoppingCart, 
  Users, 
  Building2, 
  TrendingUp, 
  Package,
  Clock,
  CheckCircle,
  AlertCircle,
  LogOut
} from 'lucide-react';
import ProtectedRoute from '@/components/ProtectedRoute';
import { useAuth } from '@/contexts/AuthContext';

export default function AdminDashboard() {
  const { signOut } = useAuth();
  const [stats, setStats] = useState({
    totalOrders: 0,
    pendingPayments: 0,
    readyForPickup: 0,
    totalRevenue: 0,
    totalCommission: 0
  });

  const [recentOrders, setRecentOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // TODO: Fetch data from Supabase
    // This will be implemented when we connect to your database
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary-red/5 via-brand-orange/5 to-brand-yellow/5 p-6">
        <div className="max-w-7xl mx-auto">
          <div className="animate-pulse">
            <div className="h-8 bg-primary-red/20 rounded w-1/4 mb-6"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="h-32 bg-brand-white/80 rounded shadow-soft"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gradient-to-br from-primary-red/5 via-brand-orange/5 to-brand-yellow/5">
        {/* Header */}
        <div className="bg-brand-white shadow-large border-b border-primary-red/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-6">
              <div>
                <h1 className="text-3xl font-bold text-primary-red">Admin Dashboard</h1>
                <p className="text-brand-brown/80">Manage your BBQ business operations</p>
              </div>
              <div className="flex space-x-3">
                <Button variant="outline" className="border-primary-red/30 text-primary-red hover:bg-primary-red/10">
                  <Package className="w-4 h-4 mr-2" />
                  Manage Products
                </Button>
                <Button variant="outline" className="border-primary-red/30 text-primary-red hover:bg-primary-red/10">
                  <Building2 className="w-4 h-4 mr-2" />
                  Manage Branches
                </Button>
                <Button 
                  variant="outline" 
                  onClick={signOut}
                  className="border-primary-red/30 text-primary-red hover:bg-primary-red/10"
                >
                  <LogOut className="w-4 h-4 mr-2" />
                  Sign Out
                </Button>
              </div>
            </div>
          </div>
        </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="border-0 shadow-large bg-brand-white/95 hover:shadow-glow transition-all duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-brand-brown">Total Orders</CardTitle>
              <ShoppingCart className="h-4 w-4 text-primary-red" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary-red">{stats.totalOrders}</div>
              <p className="text-xs text-brand-brown/60">
                All time orders
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-large bg-brand-white/95 hover:shadow-glow transition-all duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-brand-brown">Pending Payments</CardTitle>
              <Clock className="h-4 w-4 text-brand-orange" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-brand-orange">{stats.pendingPayments}</div>
              <p className="text-xs text-brand-brown/60">
                Awaiting verification
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-large bg-brand-white/95 hover:shadow-glow transition-all duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-brand-brown">Ready for Pickup</CardTitle>
              <CheckCircle className="h-4 w-4 text-brand-yellow" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-brand-yellow">{stats.readyForPickup}</div>
              <p className="text-xs text-brand-brown/60">
                Orders ready
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-large bg-brand-white/95 hover:shadow-glow transition-all duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-brand-brown">Total Revenue</CardTitle>
              <TrendingUp className="h-4 w-4 text-primary-red" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary-red">₱{stats.totalRevenue.toLocaleString()}</div>
              <p className="text-xs text-brand-brown/60">
                All time earnings
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <Card className="border-0 shadow-large bg-brand-white/95 hover:shadow-glow transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center text-brand-brown">
                <AlertCircle className="w-5 h-5 mr-2 text-brand-orange" />
                Pending Payment Verification
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-brand-brown/80 mb-4">
                Orders waiting for GCash payment verification
              </p>
              <Button className="w-full bg-primary-red hover:bg-accent-red text-brand-white">
                Review Pending Payments
              </Button>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-large bg-brand-white/95 hover:shadow-glow transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center text-brand-brown">
                <Users className="w-5 h-5 mr-2 text-primary-red" />
                Crew Management
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-brand-brown/80 mb-4">
                Manage crew members and branch assignments
              </p>
              <Button variant="outline" className="w-full border-primary-red/30 text-primary-red hover:bg-primary-red/10">
                Manage Crew
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Recent Orders */}
        <Card className="border-0 shadow-large bg-brand-white/95">
          <CardHeader>
            <CardTitle className="text-brand-brown">Recent Orders</CardTitle>
          </CardHeader>
          <CardContent>
            {recentOrders.length === 0 ? (
              <div className="text-center py-8 text-brand-brown/60">
                <Package className="w-12 h-12 mx-auto mb-4 text-primary-red/30" />
                <p>No orders yet</p>
                <p className="text-sm">Orders will appear here once customers start placing them</p>
              </div>
            ) : (
              <div className="space-y-4">
                {/* Order items will be rendered here */}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </ProtectedRoute>
  );
}
