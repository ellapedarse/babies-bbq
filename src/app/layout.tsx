import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/contexts/CartContext";
import { AuthProvider } from "@/contexts/AuthContext";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Babies BBQ - Since 1979 | Filipino BBQ Excellence",
  description: "Authentic Filipino barbecue crafted with love and tradition since 1979. Serving the most delicious BBQ across Surigao and beyond.",
  keywords: "Filipino BBQ, Surigao, Pork BBQ, Chicken BBQ, Fish BBQ, Beef BBQ, Restaurant, Food Delivery",
  authors: [{ name: "Babies BBQ" }],
  openGraph: {
    title: "Babies BBQ - Since 1979",
    description: "Authentic Filipino barbecue crafted with love and tradition since 1979.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <CartProvider>
            <TooltipProvider>
              <Toaster />
              <Sonner />
              {children}
            </TooltipProvider>
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
