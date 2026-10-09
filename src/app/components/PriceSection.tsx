
import ProductCard from "./ProductCard";

type Product = {
  id: number;
  slug: string; 
  nameBn: string;
  image: string;
  today: number;
  unit: string ;
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

export default async function PriceSection() {
  const response = await fetch(
    "https://api.abcz.workers.dev/api/bazardor/products",
    { cache: "no-store" }
  );
  if (!response.ok ) {
    throw new Error("Failed to fetch today's prices");
  }

  const  products: Product[] = await response.json();

  const risingProducts = products
    .filter((product) => product.change.dir === "up") .slice(0, 6);

  const fallingProducts = products
    .filter((product) => product.change.dir === "down") .slice(0, 6);
  return (
    <section className="bg-[#f5f8f5]">
      <div className="mx-auto max-w-[1050px] px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900">  <span className="text-red-500">▲</span> আজ দাম বেড়েছে
        </h2>

        <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {risingProducts.map((product) => (
            <ProductCard  slug={product.slug} key={product.id} name={product.nameBn}
              price={toBanglaNumber(product.today)}  unit={unitMap[product.unit] ?? product.unit} change={`${toBanglaNumber(Math.abs(product.change.pct))}%`}  emoji={product.image} direction={product.change.dir}
            />
          ))}
        </div>

        <h2 className="mt-10 text-2xl font-bold text-gray-900">
          <span className="text-green-600">▼</span> আজ দাম কমেছে
        </h2>

        <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {fallingProducts.map((product) => (
            <ProductCard slug={product.slug}  key={product.id}  name={product.nameBn}  price={toBanglaNumber(product.today)}  unit={unitMap[product.unit] ?? product.unit}
              change={`${toBanglaNumber(Math.abs(product.change.pct))}%`} emoji={product.image}  direction={product.change.dir}
            />
          ))}
        </div>
      </div>
    </section>
  );
}