type ProductCardProps = {
    name: string;
    price: string;
    unit: string;
    change: string;
    emoji: string;
    direction: "up" | "down";
};

export default function ProductCard({
    name,
    price,
    unit,
    change,
    emoji,
    direction,
}: ProductCardProps) {
    const isUp = direction === "up";

    return (
        <div className="rounded-2xl border border-gray-200 bg-white p-4">
            {/* Top */}
            <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gray-50 text-2xl">
                        {emoji}
                    </div>

                    <div>
                        <h3 className="font-semibold text-gray-900">
                            {name}
                        </h3>

                        <p className="mt-0.5 text-xs text-gray-500">
                            প্রতি {unit}
                        </p>
                    </div>
                </div>
            </div>

            {/* Bottom */}
            <div className="mt-5 flex items-end justify-between">
                <div>
                    <p className="text-xs text-gray-500">
                        আজকের দাম
                    </p>

                    <p className="mt-1 text-xl font-bold text-gray-900">
                        {price} <span className="text-sm font-medium">টাকা</span>
                    </p>
                </div>

                <span
                    className={`rounded-full px-2.5 py-1 text-xs font-medium ${
                        isUp
                            ? "bg-red-50 text-red-500"
                            : "bg-green-50 text-green-600"
                    }`}
                >
                    {isUp ? "▲" : "▼"} {change}
                </span>
            </div>
        </div>
    );
}