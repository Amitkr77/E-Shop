"use client"
import { useState } from "react";
import { products } from "../data/product";
import ProductCard from "./ProductCard";
import CategoryFilter from "./ui/CategoryFilter";

const categories = ["All", "Bamboo", "Cork", "Paper"];

export default function CuratedProducts({ onAddToCart }) {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts = products.filter(
    (p) => activeCategory === "All" || p.category === activeCategory,
  );

  return (
    <section className="py-32 px-8 md:px-24 bg-zinc-50">
      <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
        <div>
          <h2 className="text-4xl md:text-5xl font-light mb-4">
            Curated Objects
          </h2>
          <p className="text-zinc-500">
            Filtered by{" "}
            <span className="text-zinc-900 italic font-medium">
              {activeCategory}
            </span>
          </p>
        </div>

        <CategoryFilter
          categories={categories}
          active={activeCategory}
          onChange={setActiveCategory}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 md:gap-x-12 md:gap-y-32">
        {filteredProducts.map((product, idx) => (
          <ProductCard
            key={product.id}
            product={product}
            isRaised={idx % 2 !== 0}
            onAdd={() => onAddToCart()}
          />
        ))}
      </div>
    </section>
  );
}
