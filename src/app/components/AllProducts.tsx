import ProductCard from "./ProductCard";
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
};
export default async function AllProducts() {
    const response = await fetch(  "https://openapi.programming-hero.com/api/bazardor/products",
        { cache: "no-store", }
    );
    if (!response.ok) {
        throw new Error("Failed to fetch products");
    }
    const products: Product[]= await response.json();
    return (
        <section id="সব-পণ্য" className="bg-white"  >
            <div className=" mx-auto max-w-[1050px] px-4 py-14">
                <div className="mb-6">
                    <h2 className="text-2xl font-bold text-gray-900"> সব পণ্য
                    </h2>
                    <p className="mt-1 text-sm text-gray-500"> প্রয়োজনীয় সব পণ্যের আজকের বাজারদর এক নজরে দেখুন
                    </p>
                </div>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {products.map((product) => (
                        <ProductCard key={product.id} slug={product.slug} name={product.nameBn}price={String(product.today) }  unit={product.unit }
                            change={`${Math.abs(product.change.pct)}%`}  emoji={product.image}  direction={product.change.dir}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
}