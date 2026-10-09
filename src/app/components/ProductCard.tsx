
import Link from "next/link";
type ProductCardProps = {
  slug: string;
  name: string;
  price: string;
  unit: string;
  change: string;
  emoji: string;
  direction: "up" | "down" | "flat";
};
export default function ProductCard({
  slug,
  name,
  price,
  unit,
  change,
  emoji,
  direction,
}: ProductCardProps) {
  const changeColor =
    direction === "up"
      ? "text-red-600 bg-red-50"
      : direction === "down"
        ? "text-green-600 bg-green-50"
        : "text-gray-600 bg-gray-100";

  const arrow =
    direction === "up" ? "↑" : direction === "down" ? "↓" : "—";

  return (
    <Link
      href={`/product/${slug}`}
      className="block rounded-2xl border border-gray-100 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-gray-50 text-2xl">
          {emoji}
        </div>

        <span
          className={`rounded-full px-2.5 py-1 text-xs font-semibold ${changeColor}`}
        >
          {arrow} {change}%
        </span>
      </div>

      <h3 className="mt-4 font-bold text-gray-900">{name}</h3>

      <p className="mt-1 text-sm text-gray-500">প্রতি {unit}</p>

      <div className="mt-3 flex items-baseline gap-1">
        <span className="text-sm font-medium text-gray-500">৳</span>
        <span className="text-2xl font-extrabold text-gray-900">
          {price}
        </span>
      </div>

      <p className="mt-3 text-sm font-medium text-gray-500">
        বিস্তারিত দেখুন →
      </p>
    </Link>
  );
}