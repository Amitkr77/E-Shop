export default function FilterSidebar({
  materials,
  impacts,
  filterMaterial,
  setFilterMaterial,
  filterImpact,
  setFilterImpact,
  maxPrice,
  setMaxPrice,
}) {
  return (  
    <div className="space-y-12">
      {/* Material */}
      <div>
        <h3 className="text-[10px] uppercase tracking-[0.4em] text-zinc-400 mb-6 font-bold">Material</h3>
        <div className="space-y-4">
          {materials.map((mat) => (
            <button
              key={mat}
              onClick={() => setFilterMaterial(mat)}
              className={`block text-sm font-medium transition-all duration-300 ${
                filterMaterial === mat ? 'text-zinc-900 pl-4 border-l-2 border-zinc-900' : 'text-zinc-400 hover:text-zinc-600'
              }`}
            >
              {mat}
            </button>
          ))}
        </div>
      </div>

      {/* Impact */}
      <div>
        <h3 className="text-[10px] uppercase tracking-[0.4em] text-zinc-400 mb-6 font-bold">Impact</h3>
        <div className="space-y-4">
          {impacts.map((imp) => (
            <button
              key={imp}
              onClick={() => setFilterImpact(imp)}
              className={`flex items-center gap-3 text-sm ${
                filterImpact === imp ? 'text-zinc-900' : 'text-zinc-400 hover:text-zinc-600'
              }`}
            >
              <div
                className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                  filterImpact === imp ? 'bg-zinc-900 border-zinc-900' : 'border-zinc-200'
                }`}
              >
                {filterImpact === imp && <div className="w-1.5 h-1.5 bg-white rounded-full" />}
              </div>
              <span>{imp}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-[10px] uppercase tracking-[0.4em] text-zinc-400 font-bold">Price</h3>
          <span className="text-xs font-mono">${maxPrice}</span>
        </div>
        <input
          type="range"
          min="10"
          max="100"
          value={maxPrice}
          onChange={(e) => setMaxPrice(Number(e.target.value))}
          className="w-full accent-zen-ink"
        />
        <div className="flex justify-between mt-2 text-[9px] text-zinc-300 uppercase tracking-widest">
          <span>$10</span>
          <span>$100</span>
        </div>
      </div>

      {/* Decorative Enso */}
      <div className="pt-12 opacity-10">
        <svg viewBox="0 0 100 100" className="w-full h-auto">
          <path
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            className="enso-bg"
            d="M 50, 50 m -40, 0 a 40,40 0 1,0 80,0 a 40,40 0 1,0 -80,0"
          />
        </svg>
      </div>
    </div>
  );
}