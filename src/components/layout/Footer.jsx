export default function Footer() {
  return (
    <footer className="bg-white py-20 md:py-24 px-6 sm:px-8 md:px-12 lg:px-24 border-t border-zinc-100">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-16">
        <div className="md:col-span-2">
          <h3 className="text-2xl md:text-3xl font-bold tracking-widest uppercase mb-8">
            Kokoro
          </h3>
          <p className="text-zinc-500 max-w-md leading-relaxed mb-10">
            Finding balance in the objects we touch. A study of nature, utility,
            and the space between.
          </p>
          <div className="flex gap-5">
            {["IG", "TW", "PT"].map((platform) => (
              <a
                key={platform}
                href="#"
                className="w-10 h-10 border border-zinc-200 rounded-full flex items-center justify-center text-sm hover:bg-zinc-900 hover:text-white transition-all"
              >
                {platform}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold mb-6 text-zinc-400">
            Shop
          </h4>
          <ul className="space-y-3 text-sm">
            <li>
              <a href="#" className="hover:text-zinc-600 transition-colors">
                All Collections
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-zinc-600 transition-colors">
                Bamboo Series
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-zinc-600 transition-colors">
                Cork Essentials
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-zinc-600 transition-colors">
                Paper & Ink
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold mb-6 text-zinc-400">
            Inquiry
          </h4>
          <ul className="space-y-3 text-sm">
            <li>
              <a href="#" className="hover:text-zinc-600 transition-colors">
                Our Story
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-zinc-600 transition-colors">
                Shipping & Returns
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-zinc-600 transition-colors">
                Wholesale
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-zinc-600 transition-colors">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-16 pt-10 border-t border-zinc-50 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-widest text-zinc-400">
        <span>© 2025 Kokoro Essentials. Designed for Peace.</span>
        <div className="flex gap-6 opacity-60">
          {/* You can use SVG icons or img tags for payment methods */}
          <span>Visa</span>
          <span>Mastercard</span>
          <span>Apple Pay</span>
        </div>
      </div>
    </footer>
  );
}
