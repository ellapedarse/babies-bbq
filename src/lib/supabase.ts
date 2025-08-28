import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ratyttcfnlqfghodjjhq.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJhdHl0dGNmbmxxZmdob2RqamhxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTYzMjIxODUsImV4cCI6MjA3MTg5ODE4NX0.QMRXipfzZ66oAODk4UGcQ2ofEGR5aH3hBgQXtAfekQo';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Database types based on your schema
export interface Product {
  id: string;
  name: string;
  price: number;
  commission: number;
  image?: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface Branch {
  id: string;
  name: string;
  address: string;
  phone?: string;
  is_active: boolean;
  created_at: string;
}

export interface Order {
  id: string;
  customer_name: string;
  customer_phone: string;
  customer_email?: string;
  branch_id: string;
  pickup_time: string;
  total_amount: number;
  total_commission: number;
  promo_code?: string;
  promo_discount: number;
  payment_status: 'pending' | 'paid' | 'cancelled';
  gcash_reference?: string;
  payment_screenshot?: string;
  order_status: 'pending' | 'confirmed' | 'preparing' | 'ready' | 'completed' | 'cancelled';
  created_at: string;
  updated_at: string;
}

export interface OrderItem {
  id: string;
  order_id: string;
  product_id: string;
  quantity: number;
  unit_price: number;
  unit_commission: number;
  subtotal: number;
  created_at: string;
}

export interface User {
  id: string;
  email: string;
  password_hash: string;
  full_name: string;
  role: 'admin' | 'crew' | 'customer';
  branch_id?: string;
  is_active: boolean;
  created_at: string;
}

export interface CrewAttendance {
  id: string;
  user_id: string;
  branch_id: string;
  clock_in: string;
  clock_out?: string;
  total_hours?: number;
  date: string;
  created_at: string;
}

export interface PromoCode {
  id: string;
  code: string;
  discount_type: 'percentage' | 'fixed';
  discount_value: number;
  minimum_order: number;
  max_uses?: number;
  current_uses: number;
  is_active: boolean;
  expires_at?: string;
  created_at: string;
}

export interface SalesReport {
  id: string;
  report_type: 'daily' | 'weekly' | 'monthly' | 'custom';
  branch_id?: string;
  start_date: string;
  end_date: string;
  total_orders: number;
  total_revenue: number;
  total_commission: number;
  generated_by?: string;
  generated_at: string;
}

export interface SystemLog {
  id: string;
  log_type: string;
  user_id?: string;
  order_id?: string;
  message: string;
  error_details?: any;
  ip_address?: string;
  user_agent?: string;
  created_at: string;
}
