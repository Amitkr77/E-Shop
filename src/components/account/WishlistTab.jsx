export default function WishlistTab({ items }) {
  if (items.length === 0) {
    return (
      <div className="py-16 text-center">
        <p className="text-zinc-400 italic text-lg">Your wishlist is empty. Discover more quiet essentials.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {items.map((item) => (
        <div key={item.id} className="border border-zinc-100 rounded-xl overflow-hidden group">
          <div className="aspect-[4/3] bg-zinc-50 relative">
            <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
          </div>
          <div className="p-5">
            <h4 className="font-light mb-1">{item.name}</h4>
            <p className="text-sm text-zinc-600">${item.price}</p>
            <div className="mt-4 flex gap-3">
              <button className="flex-1 bg-zen-ink text-zen-paper py-2 rounded-lg text-xs uppercase tracking-widest hover:bg-zinc-800">
                Add to Cart
              </button>
              <button className="px-4 py-2 border border-zinc-200 rounded-lg text-xs hover:border-zinc-400">
                Remove
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}