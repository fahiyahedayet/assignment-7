import ProductCard from "./ProductCard";

const products = [
    {
        name: "মিনিকেট চাল",
        price: "৭৫",
        unit: "কেজি",
        change: "২.১%",
        emoji: "🍚",
        direction: "up" as const,
    },
    {
        name: "মসুর ডাল",
        price: "১৩৫",
        unit: "কেজি",
        change: "১.২%",
        emoji: "🫘",
        direction: "down" as const,
    },
    {
        name: "সয়াবিন তেল",
        price: "১৭৫",
        unit: "লিটার",
        change: "০.৬%",
        emoji: "🧈",
        direction: "up" as const,
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
        name: "পেঁয়াজ",
        price: "৬৫",
        unit: "কেজি",
        change: "১.৫%",
        emoji: "🧅",
        direction: "down" as const,
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
];

export default function AllProducts() {
    return (
        <section
            id="সব-পণ্য"
            className="bg-white"
        >
            <div className="mx-auto max-w-[1050px] px-4 py-14">

                <div className="mb-6">
                    <h2 className="text-2xl font-bold text-gray-900">
                        সব পণ্য
                    </h2>

                    <p className="mt-1 text-sm text-gray-500">
                        প্রয়োজনীয় সব পণ্যের আজকের বাজারদর এক নজরে দেখুন
                    </p>
                </div>

                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {products.map((product) => (
                        <ProductCard
                            key={product.name}
                            {...product}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
}