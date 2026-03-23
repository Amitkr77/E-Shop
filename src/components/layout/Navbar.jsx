"use client";

import { useState } from "react";
import { Search, ShoppingBag, Menu } from "lucide-react";
import CartDrawer from "../ui/CartDrawer";

export default function Navbar({ cartCount }) {
  const [cartOpen, setCartOpen] = useState(false);
  // const [cartCount, setCartCount] = useState(0);

  return (
    <nav className="fixed top-0 w-full z-50 px-6 sm:px-8 md:px-12 py-6 flex justify-between items-center mix-blend-difference text-white pointer-events-auto">
      <div className="flex items-center gap-10 md:gap-12">
        <a
          href="#"
          className="text-2xl md:text-3xl font-bold tracking-widest uppercase"
        >
          Kokoro
        </a>

        <div className="hidden md:flex gap-8 text-sm uppercase tracking-widest font-medium">
          <a href="#" className="hover:opacity-60 transition-opacity">
            Philosophy
          </a>
          <a href="#" className="hover:opacity-60 transition-opacity">
            Shop
          </a>
          <a href="#" className="hover:opacity-60 transition-opacity">
            Journal
          </a>
        </div>
      </div>

      <div className="flex items-center gap-5 md:gap-6">
        <button className="p-2 hover:scale-110 transition-transform">
          <Search className="w-5 h-5" />
        </button>

        <button
          onClick={() => setCartOpen(true)}
          className="relative p-2 group"
        >
          <ShoppingBag className="w-5 h-5" />
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-[#4A5D4E] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </button>

        <button className="md:hidden p-2">
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {cartOpen && (
        <CartDrawer
          isOpen={cartOpen}
          onClose={() => setCartOpen(false)}
          cartCount={cartCount}
        />
      )}
    </nav>
  );
}
