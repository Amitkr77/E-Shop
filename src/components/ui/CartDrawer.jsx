"use client";

import { ShoppingBag } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

export default function CartDrawer({ cartCount }) {
  return (
    <Sheet>
      {/* Trigger (you can also move this to Navbar) */}
      <SheetTrigger asChild>
        <button className="relative p-2">
          <ShoppingBag className="w-5 h-5" />
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-[#4A5D4E] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </button>
      </SheetTrigger>

      {/* Drawer */}
      <SheetContent side="right" className="w-full max-w-md p-8 sm:p-10 md:p-12 flex flex-col">
        
        {/* Header */}
        <SheetHeader className="mb-10 md:mb-12 flex flex-row justify-between items-center">
          <SheetTitle className="text-2xl font-light uppercase tracking-widest">
            Cart
          </SheetTitle>

          <SheetClose asChild>
            <button className="text-xs uppercase tracking-widest opacity-60 hover:opacity-100">
              Close
            </button>
          </SheetClose>
        </SheetHeader>

        {/* Content */}
        <div className="flex-grow flex flex-col items-center justify-center text-center">
          {cartCount === 0 ? (
            <div>
              <div className="w-20 h-20 md:w-24 md:h-24 bg-zinc-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <ShoppingBag className="w-8 h-8 md:w-10 md:h-10 text-zinc-300" />
              </div>

              <p className="text-zinc-500 font-light italic text-lg">
                Your basket is waiting for light.
              </p>

              <SheetClose asChild>
                <button className="mt-8 text-xs uppercase tracking-widest border-b border-zinc-900 pb-1 hover:opacity-70">
                  Start Shopping
                </button>
              </SheetClose>
            </div>
          ) : (
            <div className="w-full flex flex-col h-full">
              {/* Item */}
              <div className="flex items-center gap-5 mb-8 pb-8 border-b">
                <div className="w-20 h-24 bg-zinc-100 rounded overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1602143393494-721d0030e50f?auto=format&fit=crop&w=400&q=80"
                    alt="Product"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex-grow">
                  <h4 className="font-medium text-base">
                    Bonsai Bamboo Vessel
                  </h4>
                  <p className="text-sm text-zinc-500 mt-1">$42.00</p>

                  <div className="mt-3 flex items-center gap-4 text-sm">
                    <button className="w-8 h-8 border">-</button>
                    <span>{cartCount}</span>
                    <button className="w-8 h-8 border">+</button>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="mt-auto pt-8 border-t">
                <div className="flex justify-between text-lg font-medium mb-6">
                  <span>Subtotal</span>
                  <span>${(cartCount * 42).toFixed(2)}</span>
                </div>

                <button className="w-full bg-zinc-900 text-white py-4 rounded-full uppercase tracking-widest text-xs hover:bg-zinc-800">
                  Proceed to Checkout
                </button>
              </div>
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}