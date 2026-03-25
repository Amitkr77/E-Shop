export default function OverviewTab({ user, orders, wishlistCount }) {
  const recentOrders = orders.slice(0, 3);

  return (
    <div className="space-y-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-zinc-100">
          <p className="text-xs uppercase tracking-widest text-zinc-400">Total Orders</p>
          <p className="text-4xl font-light mt-3">{orders.length}</p>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-zinc-100">
          <p className="text-xs uppercase tracking-widest text-zinc-400">Wishlist Items</p>
          <p className="text-4xl font-light mt-3">{wishlistCount}</p>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-zinc-100">
          <p className="text-xs uppercase tracking-widest text-zinc-400">Member Since</p>
          <p className="text-4xl font-light mt-3">{user.joined.split(' ')[0]}</p>
        </div>
      </div>

      {/* Recent Orders */}
      <div>
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-light">Recent Orders</h3>
          <button className="text-xs uppercase tracking-widest text-zen-moss hover:underline">View All</button>
        </div>
        <div className="space-y-4">
          {recentOrders.map((order) => (
            <div key={order.id} className="flex justify-between items-center bg-white p-5 rounded-2xl border border-zinc-100">
              <div>
                <p className="font-medium text-sm">{order.id}</p>
                <p className="text-xs text-zinc-500">{order.date}</p>
              </div>
              <div className="text-right">
                <p className="font-medium">₹{order.total}</p>
                <p className="text-xs text-green-600">{order.status}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}