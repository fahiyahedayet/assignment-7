
"use client";

import { useState } from "react";
import ProductCard from "./ProductCard";

type Product = {
  id: number;
  slug: string;
  nameBn: string;
  image: string;
  unit: string;
  today: number;
  change: {
    dir: "up" | "down" | "flat";
    pct: number;
  };
};

const toBanglaNumber = (value: number | string) =>
  String(value).replace(/\d/g, (digit) => "০১২৩৪৫৬৭৮৯"[Number(digit)]);

const unitMap: Record<string, string> = {
  kg: "কেজি",
  liter: "লিটার",
  piece: "পিস",
  dozen: "ডজন",
  gram: "গ্রাম",
};

type Props = {
  products: Product[];
};

export default function CategoryProducts({ products }: Props) {
  const [sortBy, setSortBy] = useState("default");

  const sortedProducts = [...products].sort((a, b) => {
    if (sortBy === "low-high") return a.today - b.today;
    if (sortBy === "high-low") return b.today - a.today;
    return 0;
  });

  return (
    <>
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm text-gray-600">
          মোট {toBanglaNumber(products.length)}টি পণ্য
        </p>

        <select
          value={sortBy}
          onChange={(event) => setSortBy(event.target.value)}
          className="rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm text-gray-700 outline-none focus:border-green-500"
          aria-label="পণ্যের দাম অনুযায়ী সাজান"
        >
          <option value="default">ডিফল্ট</option>
          <option value="low-high">দাম: কম থেকে বেশি</option>
          <option value="high-low">দাম: বেশি থেকে কম</option>
        </select>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {sortedProducts.map((product) => (
          <ProductCard
            key={product.id}
            name={product.nameBn}
            price={toBanglaNumber(product.today)}
            unit={unitMap[product.unit] ?? product.unit}
            change={`${toBanglaNumber(Math.abs(product.change.pct))}%`}
            emoji={product.image}
            direction={product.change.dir === "down" ? "down" : "up"}
          />
        ))}
      </div>
    </>
  );
}