export default function MobileFilterDrawer({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] lg:hidden">
      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" onClick={onClose} />
      <div className="absolute bottom-0 left-0 w-full bg-white rounded-t-[3rem] p-12 max-h-[80vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-2xl font-light italic">Refine Catalog</h2>
          <button onClick={onClose} className="text-xs uppercase tracking-widest">
            Close [x]
          </button>
        </div>

        {/* Simplified mobile filters – you can extend with full logic later */}
        <div className="space-y-12">
          <div>
            <h3 className="text-[10px] uppercase tracking-[0.4em] text-zinc-400 mb-6 font-bold">Material</h3>
            <div className="flex flex-wrap gap-3">
              {['All', 'Bamboo', 'Cork', 'Hemp', 'Paper'].map((mat) => (
                <button
                  key={mat}
                  className="px-5 py-2 rounded-full border text-xs"
                  // Add state connection in real version
                >
                  {mat}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-[10px] uppercase tracking-[0.4em] text-zinc-400 mb-6 font-bold">Max Price</h3>
            <input type="range" min="10" max="100" className="w-full accent-zen-ink" />
            <p className="text-center mt-4 text-xl font-light">$50</p>
          </div>

          <button
            onClick={onClose}
            className="w-full bg-zinc-900 text-white py-5 rounded-full text-xs uppercase tracking-widest"
          >
            Apply Selection
          </button>
        </div>
      </div>
    </div>
  );
}