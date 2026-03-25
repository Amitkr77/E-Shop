export default function ProductCard({ product, onAdd }) {
  return (
    <div className="product-card group">
      <div className="product-image-container aspect-[3/4] bg-zinc-100 mb-8 relative overflow-hidden">
        <img
          src={product.img}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110"
        />

        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-[9px] uppercase tracking-widest font-bold">
            {product.impact}
          </span>
        </div>

        <div className="absolute inset-0 flex items-center justify-center bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <button
            onClick={onAdd}
            className="bg-white text-zinc-900 px-8 py-3 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold shadow-2xl hover:scale-105 active:scale-95 transition-all"
          >
            Quick Add
          </button>
        </div>
      </div>

      <div className="flex justify-between items-start">
        <div>
          <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-400 mb-1">{product.material}</p>
          <h3 className="text-lg font-light tracking-tight">{product.name}</h3>
        </div>
        <span className="text-sm font-medium pt-1">${product.price}</span>
      </div>
    </div>
  );
}