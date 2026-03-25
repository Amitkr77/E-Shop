"use client";
import { useState } from "react";
import { shopProducts } from "../../data/product";
import FilterSidebar from "../../components/ui/FilterSidebar";
import ProductCard from "../../components/ui/ProductCard";

const materials = ["All", "Bamboo", "Cork", "Hemp", "Paper"];
const impacts = ["All", "Plastic-free", "Carbon Neutral"];

export default function page({ addToCart }) {
  const [filterMaterial, setFilterMaterial] = useState("All");
  const [filterImpact, setFilterImpact] = useState("All");
  const [maxPrice, setMaxPrice] = useState(100);

  const filteredProducts = shopProducts.filter((p) => {
    const matchMaterial =
      filterMaterial === "All" || p.material === filterMaterial;
    const matchImpact = filterImpact === "All" || p.impact === filterImpact;
    const matchPrice = p.price <= maxPrice;
    return matchMaterial && matchImpact && matchPrice;
  });

  return (
    <div className="grow flex flex-col lg:flex-row px-8 md:px-12 py-20 gap-12">
      {/* Desktop Sidebar */}
      <aside className="hidden lg:block w-64 shrink-0 sticky top-32 h-fit">
        <FilterSidebar
          materials={materials}
          impacts={impacts}
          filterMaterial={filterMaterial}
          setFilterMaterial={setFilterMaterial}
          filterImpact={filterImpact}
          setFilterImpact={setFilterImpact}
          maxPrice={maxPrice}
          setMaxPrice={setMaxPrice}
        />
      </aside>

      {/* Main content */}
      <main className="grow">
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h1 className="text-5xl font-light tracking-tighter mb-4 italic">
              Objects of Quiet
            </h1>
            <p className="text-zinc-400 text-sm max-w-md">
              Refined tools for a conscious lifestyle. Showing{" "}
              <span className="text-zinc-900 font-medium">
                {filteredProducts.length}
              </span>{" "}
              sustainable essentials.
            </p>
          </div>
          <div className="px-4 py-2 bg-white border border-zinc-100 rounded-full text-[10px] uppercase tracking-widest text-zinc-400">
            Sort: <span className="text-zinc-900 font-bold">Featured</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 md:gap-x-12 md:gap-y-32">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAdd={() => addToCart(product)}
            />
          ))}

          {filteredProducts.length === 0 && (
            <div className="col-span-full py-32 text-center">
              <p className="text-zinc-300 italic text-2xl font-light">
                No items found in this frequency.
              </p>
              <button
                onClick={() => {
                  setFilterMaterial("All");
                  setFilterImpact("All");
                  setMaxPrice(100);
                }}
                className="mt-6 text-xs uppercase tracking-widest border-b border-zinc-900 pb-1 hover:opacity-70"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
