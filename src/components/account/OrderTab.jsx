export default function OrdersTab({ orders, onViewDetail }) {
  if (orders.length === 0) {
    return (
      <div className="py-16 text-center">
        <p className="text-zinc-400 italic text-lg">
          No orders yet. Start your mindful collection today.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {orders.map((order) => (
        <div
          key={order.id}
          className="border border-zinc-100 rounded-xl p-6 hover:border-zen-moss/50 transition-colors"
        >
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-4">
            <div>
              <p className="text-xs uppercase tracking-widest text-zinc-400 mb-1">
                Order {order.id}
              </p>
              <p className="font-medium">{order.date}</p>
            </div>
            <span
              className={`px-4 py-1 rounded-full text-xs uppercase tracking-widest ${
                order.status === "Delivered"
                  ? "bg-green-100 text-green-800"
                  : "bg-amber-100 text-amber-800"
              }`}
            >
              {order.status}
            </span>
          </div>

          <div className="text-sm text-zinc-600 mb-4">
            {order.items.join(" • ")}
          </div>

          <div className="flex justify-between items-center">
            <span className="text-sm font-medium">
              ${order.total.toFixed(2)}
            </span>
            <button
              onClick={() => onViewDetail(order)}
              className="text-xs uppercase tracking-widest text-zen-moss hover:underline"
            >
              View Details
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
