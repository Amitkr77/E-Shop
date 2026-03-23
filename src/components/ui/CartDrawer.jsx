import { X, ShoppingBag, Menu } from "lucide-react";

export default function CartDrawer({ isOpen, onClose, cartCount }) {
  // For now we show dummy content — later replace with real cart items array

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-100 flex">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Drawer panel */}
          <div
            className={`
              absolute right-0 top-0 h-full w-full max-w-md bg-white p-8 sm:p-10 md:p-12 
              flex flex-col transition-transform duration-500
              ${isOpen ? "translate-x-0" : "translate-x-full"}
            `}
          >
            <div className="flex justify-between items-center mb-10 md:mb-12">
              <h3 className="text-2xl font-light uppercase tracking-widest">
                Cart
              </h3>
              <button
                onClick={onClose}
                className="text-xs uppercase tracking-widest opacity-60 hover:opacity-100 transition-opacity"
              >
                Close
              </button>
            </div>

            <div className="flex-grow flex flex-col items-center justify-center text-center">
              {cartCount === 0 ? (
                <div>
                  <div className="w-20 h-20 md:w-24 md:h-24 bg-zinc-50 rounded-full flex items-center justify-center mx-auto mb-6">
                    <ShoppingBag className="w-8 h-8 md:w-10 md:h-10 text-zinc-300" />
                  </div>
                  <p className="text-zinc-500 font-light italic text-lg">
                    Your basket is waiting for light.
                  </p>
                  <button
                    onClick={onClose}
                    className="mt-8 text-xs uppercase tracking-widest border-b border-zinc-900 pb-1 hover:opacity-70"
                  >
                    Start Shopping
                  </button>
                </div>
              ) : (
                <div className="w-full">
                  {/* Example item — in real app map over cartItems */}
                  <div className="flex items-center gap-5 md:gap-6 mb-8 pb-8 border-b border-zinc-100">
                    <div className="w-20 h-24 bg-zinc-100 rounded overflow-hidden flex-shrink-0">
                      <img
                        src="https://images.unsplash.com/photo-1602143393494-721d0030e50f?auto=format&fit=crop&w=400&q=80"
                        alt="Bamboo Bottle"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-grow">
                      <h4 className="font-medium text-base">
                        Bonsai Bamboo Vessel
                      </h4>
                      <p className="text-sm text-zinc-500 mt-1">$42.00</p>
                      <div className="mt-3 flex items-center gap-4 text-sm">
                        <button className="w-8 h-8 flex items-center justify-center border">
                          -
                        </button>
                        <span>{cartCount}</span>
                        <button className="w-8 h-8 flex items-center justify-center border">
                          +
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="mt-auto pt-8 border-t border-zinc-100">
                    <div className="flex justify-between text-lg font-medium mb-6">
                      <span>Subtotal</span>
                      <span>${(cartCount * 42).toFixed(2)}</span>
                    </div>
                    <button className="w-full bg-zinc-900 text-white py-4 md:py-5 rounded-full uppercase tracking-widest text-xs hover:bg-zinc-800 transition-colors">
                      Proceed to Checkout
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
