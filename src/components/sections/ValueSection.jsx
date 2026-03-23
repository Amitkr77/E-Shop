export default function ValuesSection() {
  return (
    <section className="py-28 md:py-32 px-6 sm:px-8 md:px-12 lg:px-24">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 lg:gap-12">
        {/* Main promise card */}
        <div className="md:col-span-7 bg-zinc-900 text-white p-10 md:p-16 lg:p-20 rounded-3xl relative overflow-hidden group">
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-8 italic">
              Responsibility is not a choice,<br className="hidden sm:block" /> but a lifestyle.
            </h2>
            <p className="text-zinc-300 max-w-xl leading-relaxed mb-10 text-lg">
              We source only from regenerative forests and local artisans. Our packaging is 100% compostable, returning to the earth just as it came.
            </p>
            <a
              href="#"
              className="inline-block text-xs uppercase tracking-[0.3em] border-b border-white/70 pb-2 hover:opacity-70 transition-opacity"
            >
              Our Promise
            </a>
          </div>

          {/* Decorative circle */}
          <div className="absolute -bottom-20 -right-20 w-80 h-80 md:w-96 md:h-96 border border-white/10 rounded-full group-hover:scale-110 transition-transform duration-1000" />
        </div>

        {/* Secondary card */}
        <div
          className="md:col-span-5 bg-[#E2E2DF] p-10 md:p-12 lg:p-16 rounded-3xl flex flex-col justify-end min-h-[420px] md:min-h-[auto]"
        >
          <h3 className="text-2xl md:text-3xl font-light mb-5">Crafted for Quiet</h3>
          <p className="text-zinc-700 leading-relaxed mb-10">
            Our materials are selected for their tactile nature. The warmth of cork, the strength of bamboo, the soul of recycled paper.
          </p>

          <div className="flex -space-x-3">
            <div className="w-11 h-11 md:w-12 md:h-12 rounded-full border-2 border-white overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-11 h-11 md:w-12 md:h-12 rounded-full border-2 border-white overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&q=80"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-11 h-11 md:w-12 md:h-12 rounded-full border-2 border-white bg-zinc-400 flex items-center justify-center text-xs text-white font-medium">
              +12
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}