// src/pages/Checkout.jsx
"use client"

import { useState } from 'react';
import { ArrowLeft, ShoppingBag } from 'lucide-react';

export default function Checkout({ cartItems = [], onBackToCart, onPlaceOrder }) {
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    postalCode: '',
    country: 'India',
    paymentMethod: 'card',
  });

  const subtotal = cartItems.reduce((sum, item) => sum + item.price, 0);
  const shipping = subtotal > 50 ? 0 : 8; 
  const total = subtotal + shipping;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In real app → call payment gateway / API
    onPlaceOrder?.();
  };

  return (
    <div className="min-h-screen bg-zen-paper py-24 px-6 sm:px-8 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
        {/* Left: Form */}
        <div className="lg:col-span-3">
          <button
            onClick={onBackToCart}
            className="flex items-center gap-2 text-zinc-500 hover:text-zinc-900 mb-8 text-sm uppercase tracking-widest"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Cart
          </button>

          <h1 className="text-4xl md:text-5xl font-light tracking-tight mb-10 italic">Checkout</h1>

          <form onSubmit={handleSubmit} className="space-y-10">
            {/* Contact */}
            <section>
              <h2 className="text-xl font-light mb-6">Contact Information</h2>
              <input
                type="email"
                name="email"
                placeholder="Email address"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-5 py-4 border border-zinc-200 rounded-lg focus:outline-none focus:border-zen-moss bg-white/50 backdrop-blur-sm"
              />
            </section>

            {/* Shipping Address */}
            <section>
              <h2 className="text-xl font-light mb-6">Shipping Address</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  name="firstName"
                  placeholder="First name"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 border border-zinc-200 rounded-lg focus:outline-none focus:border-zen-moss bg-white/50 backdrop-blur-sm"
                />
                <input
                  name="lastName"
                  placeholder="Last name"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 border border-zinc-200 rounded-lg focus:outline-none focus:border-zen-moss bg-white/50 backdrop-blur-sm"
                />
              </div>
              <input
                name="address"
                placeholder="Street address"
                value={formData.address}
                onChange={handleChange}
                required
                className="w-full px-5 py-4 mt-6 border border-zinc-200 rounded-lg focus:outline-none focus:border-zen-moss bg-white/50 backdrop-blur-sm"
              />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                <input
                  name="city"
                  placeholder="City"
                  value={formData.city}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 border border-zinc-200 rounded-lg focus:outline-none focus:border-zen-moss bg-white/50 backdrop-blur-sm"
                />
                <input
                  name="postalCode"
                  placeholder="Postal code"
                  value={formData.postalCode}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 border border-zinc-200 rounded-lg focus:outline-none focus:border-zen-moss bg-white/50 backdrop-blur-sm"
                />
                <input
                  name="country"
                  placeholder="Country"
                  value={formData.country}
                  onChange={handleChange}
                  className="w-full px-5 py-4 border border-zinc-200 rounded-lg focus:outline-none focus:border-zen-moss bg-white/50 backdrop-blur-sm"
                />
              </div>
            </section>

            {/* Payment */}
            <section>
              <h2 className="text-xl font-light mb-6">Payment</h2>
              <div className="space-y-4">
                <label className="flex items-center gap-3">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="card"
                    checked={formData.paymentMethod === 'card'}
                    onChange={handleChange}
                    className="accent-zen-moss"
                  />
                  <span>Credit / Debit Card</span>
                </label>
                {/* Add more methods if needed */}
              </div>

              {/* Card fields – in real app use Stripe Elements */}
              <div className="mt-6 space-y-6">
                <input
                  placeholder="Card number"
                  className="w-full px-5 py-4 border border-zinc-200 rounded-lg focus:outline-none focus:border-zen-moss bg-white/50 backdrop-blur-sm"
                />
                <div className="grid grid-cols-2 gap-6">
                  <input placeholder="MM / YY" className="w-full px-5 py-4 border border-zinc-200 rounded-lg focus:outline-none focus:border-zen-moss bg-white/50 backdrop-blur-sm" />
                  <input placeholder="CVC" className="w-full px-5 py-4 border border-zinc-200 rounded-lg focus:outline-none focus:border-zen-moss bg-white/50 backdrop-blur-sm" />
                </div>
              </div>
            </section>

            <button
              type="submit"
              className="w-full bg-zen-ink text-zen-paper py-6 rounded-full text-xs uppercase tracking-[0.3em] font-medium hover:bg-zinc-800 transition-colors shadow-md"
            >
              Place Order • ${total.toFixed(2)}
            </button>

            <p className="text-center text-[10px] uppercase tracking-widest text-zinc-400 mt-4">
              Secure SSL checkout • All transactions encrypted
            </p>
          </form>
        </div>

        {/* Right: Order Summary */}
        <div className="lg:col-span-2">
          <div className="bg-white/70 backdrop-blur-sm border border-zinc-100 rounded-2xl p-8 sticky top-8">
            <h2 className="text-xl font-light mb-8 flex items-center gap-3">
              <ShoppingBag className="w-5 h-5" />
              Order Summary
            </h2>

            <div className="space-y-6 mb-10">
              {cartItems.map((item) => (
                <div key={item.id} className="flex gap-4">
                  <div className="w-20 h-24 bg-zinc-50 rounded overflow-hidden flex-shrink-0">
                    <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-grow">
                    <p className="text-sm font-light">{item.name}</p>
                    <p className="text-xs text-zinc-500 mt-1">${item.price}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-4 text-sm border-t border-zinc-100 pt-6">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>{shipping === 0 ? 'Free' : `$${shipping}`}</span>
              </div>
              <div className="flex justify-between font-medium text-base pt-4 border-t border-zinc-200">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>

            <div className="mt-10 text-[10px] uppercase tracking-[0.2em] text-zinc-400 text-center italic">
              Balanced goods • Returning to earth
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}