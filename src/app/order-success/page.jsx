// src/pages/OrderSuccess.jsx
import { CheckCircle, ArrowRight, Mail } from 'lucide-react';

export default function OrderSuccess({ orderId = 'KOKORO-20260324-789', email = 'your@email.com' }) {
  return (
    <div className="min-h-screen bg-zen-paper flex items-center justify-center px-6 py-20">
      <div className="max-w-2xl w-full text-center">
        <div className="mb-12">
          <CheckCircle className="w-20 h-20 mx-auto text-zen-moss mb-6" strokeWidth={1.2} />
          <h1 className="text-5xl md:text-6xl font-light tracking-tighter mb-6 italic">
            Thank You for Your Order
          </h1>
          <p className="text-zinc-600 text-lg max-w-md mx-auto leading-relaxed">
            Your mindful selection is on its way. A quiet ripple of balance begins.
          </p>
        </div>

        <div className="bg-white/60 backdrop-blur-sm border border-zinc-100 rounded-2xl p-10 mb-12">
          <div className="space-y-8">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-zinc-400 mb-2">Order Number</p>
              <p className="text-2xl font-light">{orderId}</p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-zinc-400 mb-2">Confirmation Sent To</p>
              <div className="flex items-center justify-center gap-3 text-lg">
                <Mail className="w-5 h-5 text-zen-moss" />
                <span>{email}</span>
              </div>
            </div>

            <div className="pt-6 border-t border-zinc-100">
              <p className="text-sm text-zinc-600 italic">
                Estimated delivery: 5–9 business days • We plant one tree per order
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <p className="text-zinc-500 text-sm">
            Questions? Reach us at hello@kokoro.earth or track your order below.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#"
              className="inline-flex items-center gap-2 px-8 py-4 bg-zen-ink text-zen-paper rounded-full text-xs uppercase tracking-[0.3em] hover:bg-zinc-800 transition-colors"
            >
              Track Order
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="/"
              className="inline-flex items-center gap-2 px-8 py-4 border border-zinc-300 rounded-full text-xs uppercase tracking-[0.3em] hover:bg-zinc-50 transition-colors"
            >
              Continue Exploring
            </a>
          </div>
        </div>

        <div className="mt-16 text-[10px] uppercase tracking-widest text-zinc-400 italic">
          © 2026 Kokoro Essentials – Designed for Peace
        </div>
      </div>
    </div>
  );
}