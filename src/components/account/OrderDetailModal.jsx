import { X } from 'lucide-react';

export default function OrderDetailModal({ isOpen, onClose, order }) {
  if (!isOpen || !order) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/60 backdrop-blur-sm p-6">
      <div className="bg-white rounded-3xl max-w-lg w-full max-h-[90vh] overflow-hidden shadow-2xl">
        <div className="p-8 border-b flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-light">Order Details</h2>
            <p className="text-sm text-zinc-500 mt-1">{order.id}</p>
          </div>
          <button onClick={onClose} className="text-zinc-400 hover:text-zinc-900">
            <X size={24} />
          </button>
        </div>

        <div className="p-8 space-y-8">
          <div>
            <p className="text-xs uppercase tracking-widest text-zinc-400 mb-2">Date</p>
            <p className="font-medium">{order.date}</p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-zinc-400 mb-3">Items</p>
            <div className="space-y-4">
              {order.items.map((item, i) => (
                <div key={i} className="flex justify-between text-sm">
                  <span>{item}</span>
                  <span className="font-medium">₹{Math.floor(Math.random() * 50) + 20}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-6 border-t flex justify-between text-lg font-light">
            <span>Total</span>
            <span>₹{order.total}</span>
          </div>
        </div>

        <div className="p-8 border-t bg-zinc-50 flex gap-4">
          <button
            onClick={onClose}
            className="flex-1 py-4 border border-zinc-300 rounded-2xl text-sm uppercase tracking-widest"
          >
            Close
          </button>
          <button className="flex-1 py-4 bg-zen-ink text-white rounded-2xl text-sm uppercase tracking-widest">
            Track Order
          </button>
        </div>
      </div>
    </div>
  );
}