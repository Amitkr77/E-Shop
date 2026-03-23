export default function CategoryFilter({ categories, active, onChange }) {
  return (
    <div className="flex flex-wrap gap-3 md:gap-4">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onChange(cat)}
          className={`
            px-5 sm:px-6 py-2 rounded-full text-xs uppercase tracking-widest transition-all duration-300
            ${
              active === cat
                ? 'bg-zinc-900 text-white shadow-md'
                : 'border border-zinc-300 hover:border-zinc-500 bg-white/70 backdrop-blur-sm'
            }
          `}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}