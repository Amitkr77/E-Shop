export default function ProductCard({ product, isRaised = false, onAdd }) {
  return (
    <div
      className={`product-card group relative ${isRaised ? 'md:mt-24' : 'md:mt-0'}`}
    >
      <div className="relative overflow-hidden aspect-4/5 bg-zinc-200 rounded-sm">
        <img
          src={product.img}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />

        <button
          onClick={onAdd}
          className="absolute bottom-6 right-6 w-12 h-12 bg-white rounded-full flex items-center justify-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 shadow-xl"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
        </button>
      </div>

      <div className="mt-8 flex justify-between items-start">
        <div>
          <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-400">{product.category}</span>
          <h3 className="text-lg font-light mt-1">{product.name}</h3>
        </div>
        <span className="text-sm font-medium">${product.price}</span>
      </div>
    </div>
  );
}