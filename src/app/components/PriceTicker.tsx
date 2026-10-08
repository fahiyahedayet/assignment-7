const tickerItems = [
    { name: "চাল", price: "১৪৮", unit: "কেজি", change: "২.১%", direction: "up" },
    { name: "ডাল", price: "১৩৫", unit: "কেজি", change: "১.২%", direction: "down" },
    { name: "আলু", price: "৪৫", unit: "কেজি", change: "০.৮%", direction: "up" },
    { name: "পেঁয়াজ", price: "৬৫", unit: "কেজি", change: "১.৫%", direction: "down" },
    { name: "সয়াবিন তেল", price: "১৭৫", unit: "লিটার", change: "০.৬%", direction: "up" },
];

export default function PriceTicker() {
    return (
        <div className="overflow-hidden border-b border-gray-100 bg-gray-50">
            <div className="mx-auto flex max-w-[1050px] items-center px-4">
                <div className="shrink-0 border-r border-gray-200 py-3 pr-4 text-sm font-semibold text-gray-800">
                    📈 আজকের বাজারদর
                </div>
                <div className="min-w-0 flex-1 overflow-hidden">
                    <div className="animate-marquee flex w-max gap-8 py-3 pl-5">
                        {[...tickerItems, ...tickerItems].map((item, index) => (
                            <div  key={`${item.name}-${index}`} className="flex shrink-0 items-center gap-2 text-sm"
                            >
                                <span>{item.name}</span>
                                <span className="font-semibold text-gray-900"> {item.price} টাকা/{item.unit}
                                </span>
                                <span
                                    className={
                                        item.direction === "up" ? "text-green-600" : "text-red-500"
                                    }
                                >
                                    {item.direction === "up" ? "▲" : "▼"} {item.change}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}