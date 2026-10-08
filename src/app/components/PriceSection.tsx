import ProductCard from "./ProductCard";

const risingProducts = [
    {
        name: "পেঁয়াজ",
        price: "৪৮",
        unit: "কেজি",
        change: "৫.৩%",
        emoji: "🧅",
        direction: "up" as const,
    },
    {
        name: "আদা",
        price: "৮৫",
        unit: "কেজি",
        change: "৯.০%",
        emoji: "🫚",
        direction: "up" as const,
    },
    {
        name: "বেগুন",
        price: "৮৮",
        unit: "কেজি",
        change: "৮.৪%",
        emoji: "🍆",
        direction: "up" as const,
    },
    {
        name: "কই মাছ",
        price: "৪৬",
        unit: "কেজি",
        change: "৮.৪%",
        emoji: "🐟",
        direction: "up" as const,
    },
    {
        name: "ডিম",
        price: "১৫৮",
        unit: "ডজন",
        change: "০.৯%",
        emoji: "🥚",
        direction: "up" as const,
    },
    {
        name: "সয়াবিন তেল",
        price: "১৪৮",
        unit: "লিটার",
        change: "০.৬%",
        emoji: "🧈",
        direction: "up" as const,
    },
];

const fallingProducts = [
    {
        name: "কাঁচামরিচ",
        price: "১২",
        unit: "কেজি",
        change: "৪.৮%",
        emoji: "🌶️",
        direction: "down" as const,
    },
    {
        name: "রসুন",
        price: "১১৫",
        unit: "কেজি",
        change: "২.৮%",
        emoji: "🧄",
        direction: "down" as const,
    },
    {
        name: "আলু",
        price: "৩০",
        unit: "কেজি",
        change: "৬.৩%",
        emoji: "🥔",
        direction: "down" as const,
    },
    {
        name: "কাতলা মাছ",
        price: "৪৬",
        unit: "কেজি",
        change: "৩.৮%",
        emoji: "🐠",
        direction: "down" as const,
    },
    {
        name: "ইলিশ মাছ",
        price: "২৮৫",
        unit: "কেজি",
        change: "০.৮%",
        emoji: "🐟",
        direction: "down" as const,
    },
    {
        name: "খাসির মাংস",
        price: "১,২৯০",
        unit: "কেজি",
        change: "০.৫%",
        emoji: "🍖",
        direction: "down" as const,
    },
];

export default function PriceSection() {
    return (
        <section className="bg-[#f5f8f5]">
            <div className="mx-auto max-w-[1050px] px-4 py-12">

                {/* Rising */}
                <div>
                    <h2 className="text-xl font-bold text-gray-900">
                        <span className="text-red-500">▲</span>{" "}
                        আজ দাম বেড়েছে
                    </h2>

                    <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                        {risingProducts.map((product) => (
                            <ProductCard
                                key={product.name}
                                {...product}
                            />
                        ))}
                    </div>
                </div>

                {/* Falling */}
                <div className="mt-10">
                    <h2 className="text-xl font-bold text-gray-900">
                        <span className="text-green-600">▼</span>{" "}
                        আজ দাম কমেছে
                    </h2>

                    <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                        {fallingProducts.map((product) => (
                            <ProductCard
                                key={product.name}
                                {...product}
                            />
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}