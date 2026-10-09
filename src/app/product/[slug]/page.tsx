import { connection } from "next/server";

import { notFound } from "next/navigation";
import Navbar from "../../components/Navbar";
import PriceTicker from "../../components/PriceTicker";

type Product = {
  id: number;
  slug: string;
  nameBn: string;
  category: string;
  categoryNameBn: string;
  categoryIcon: string;
  unit: string;
  image: string;
  today: number;
  yesterday: number;
  lastWeek: number;
  lastMonth: number;
  change: {
    dir: "up" | "down" | "flat";
    pct: number;
  };
  markets: {
    market: string;
    division: string;
    min: number;
    max: number;
  }[];
};

type ProductSummary = {
  id: number;
  slug: string;
};

type PageProps = {
  params: Promise<{ slug: string }>;
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

export default async function ProductDetailsPage({ params }: PageProps) {
  const { slug } = await params;

  const listResponse = await fetch(
    "https://api.abcz.workers.dev/api/bazardor/products",
    { cache: "no-store" }
  );

  if (!listResponse.ok) {
    throw new Error("Failed to fetch products");
  }

  const productList: ProductSummary[] = await listResponse.json();
  const matchingProduct = productList.find(
  (product) => String(product.slug).trim() === String(slug).trim()
);

  if (!matchingProduct) {
    notFound();
  }

  const detailResponse = await fetch(
    `https://api.abcz.workers.dev/api/bazardor/products/${matchingProduct.id}`,
    { cache: "no-store" }
  );

  if (!detailResponse.ok) {
    notFound();
  }

  const product: Product = await detailResponse.json();

  const marketPrices = product.markets.map((market) => ({
    ...market,
    average: (market.min + market.max) / 2,
  }));

  const minPrice = Math.min(...marketPrices.map((market) => market.min));
  const maxPrice = Math.max(...marketPrices.map((market) => market.max));
  const averagePrice =
    marketPrices.reduce((total, market) => total + market.average, 0) /
    marketPrices.length;

  const directionText =
    product.change.dir === "up"
      ? "দাম বেড়েছে"
      : product.change.dir === "down"
        ? "দাম কমেছে"
        : "দামের পরিবর্তন নেই";

  const directionColor =
    product.change.dir === "up"
      ? "text-red-600 bg-red-50"
      : product.change.dir === "down"
        ? "text-green-600 bg-green-50"
        : "text-gray-600 bg-gray-100";

  return (
    <>
      <Navbar />
      <PriceTicker />

      <main className="min-h-screen bg-[#f5f8f5]">
        <div className="mx-auto max-w-[1050px] px-4 py-10">
          <p className="mb-6 text-sm text-gray-500">
            <a href="/" className="hover:text-green-600"> হোম </a>
            {" / "}
            <a href={`/category/${product.category}`}className="hover:text-green-600"
            >
              {product.categoryNameBn}
            </a>
            {" / "}
            <span className="text-gray-800">{product.nameBn}</span>
          </p>
          <section className=" rounded-2xl border border-gray-200 bg-white p-6 md:p-8">
            <div className=" flex flex-col justify-between gap-6  sm:flex-row sm:items-center">
              <div className="flex items-center gap-4 ">
                <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-green-50 text-5xl">  {product.image}
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-gray-900 md:text-3xl"> {product.nameBn}
                  </h1>
                  <p className="mt-2 text-sm text-gray-500"> {product.categoryIcon} {product.categoryNameBn} · প্রতি{" "}
                    {unitMap[product.unit] ?? product.unit}
                  </p>
                  <span  className={`mt-3 inline-flex rounded-full px-3 py-1 text-sm font-medium ${directionColor}`}
                  >
                    {product.change.dir === "up" ? "▲"  : product.change.dir === "down" ? "▼" : "—"}{" "}
                    {toBanglaNumber(Math.abs(product.change.pct))}% ·{" "}
                    {directionText}
                  </span>
                </div>
              </div>
              <div className="rounded-xl bg-green-50 p-5 sm:min-w-48">
                <p className="text-sm text-gray-600">আজকের দাম</p>
                <p className="mt-2 text-3xl font-bold text-gray-900">
                  ৳{toBanglaNumber(product.today)}
                </p>
                <p className ="mt-1 text-sm text-gray-500">
                  প্রতি {unitMap[product.unit] ?? product.unit}
                </p>
              </div>
            </div>
          </section>

          <section className="mt-6 grid gap-4 sm:grid-cols-3">
            <div className ="rounded-2xl border border-gray-200 bg-white p-5">
              <p className="text-sm text-gray-500">সর্বনিম্ন দাম</p>
              <p className="mt-2 text-2xl font-bold text-green-600">
                ৳{toBanglaNumber(minPrice)}
              </p>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white p-5">
              <p className="text-sm text-gray-500">সর্বোচ্চ দাম</p>
              <p className="mt-2 text-2xl font-bold text-red-500">  ৳{toBanglaNumber(maxPrice)}
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-5">
              <p className="text-sm text-gray-500">গড় দাম</p>
              <p className="mt-2 text-2xl font-bold text-gray-900">
                ৳{toBanglaNumber(averagePrice.toFixed(2))}
              </p>
            </div>
          </section>
          <section className="mt-8 overflow-hidden rounded-2xl  border border-gray-200 bg-white">
            <div className="border-b  border-gray-100 p-5 md:p-6">
              <h2 className="text-xl font-bold text-gray-900"> বাজারভিত্তিক দাম
              </h2>
              <p className="mt-1 text-sm text-gray-500"> বিভিন্ন বাজারে পণ্যের সর্বনিম্ন ও সর্বোচ্চ দাম
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[650px] text-left text-sm">
                <thead className="bg-gray-50 text-gray-600">
                  <tr>
                    <th className="px-5 py-4 font-semibold">বাজার</th>
                    <th className="px-5 py-4 font-semibold">বিভাগ</th>
                    <th className="px-5 py-4 font-semibold">সর্বনিম্ন দাম</th>
                    <th className="px-5 py-4 font-semibold">সর্বোচ্চ দাম</th>
                    <th className="px-5 py-4 font-semibold">গড় দাম</th>
                  </tr>
                </thead>
                <tbody>
                  {marketPrices.map((market) => (
                    <tr key={`${market.market}-${market.division}`} className="border-t border-gray-100">
                      <td className="px-5 py-4 font-medium text-gray-900"> {market.market}
                      </td>
                      <td className="px-5 py-4 text-gray-600"> {market.division}
                      </td>
                      <td className="px-5 py-4 text-green-700">  ৳{toBanglaNumber(market.min)}
                      </td>
                      <td className="px-5 py-4 text-red-600"> ৳{toBanglaNumber(market.max)}
                      </td>
                      <td className="px-5 py-4 text-gray-900">  ৳{toBanglaNumber(
                          ((market.min + market.max) / 2).toFixed(2)
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}