import { Suspense } from "react";
import CategoryProducts from "../../components/CategoryProducts";
import Navbar from "../../components/Navbar";
import PriceTicker from "../../components/PriceTicker";
import Footer from "@/app/components/Footer";

type Category ={
    id: string;
    slug: string;
    nameBn: string;
    icon: string;
};
type Product = {
    id: number;
    slug:  string;
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
type PageProps = {
    params: Promise<{ slug: string }>;
};
export default function CategoryPage({ params }: PageProps) {
    return (
        <Suspense
            fallback={
                <main className="min-h-screen bg-[#f5f8f5] px-4 py-12">
                    <div className="mx-auto max-w-[1050px]">
                        <div className="h-8 w-48 animate-pulse rounded bg-gray-200" />
                        <div className="mt-3 h-4 w-72 animate-pulse rounded bg-gray-200" />
                        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                            {Array.from({ length: 6 }).map((_, i) => (
                                <div key={i} className="h-36 animate-pulse rounded-2xl bg-gray-200" />
                            ))}
                        </div>
                    </div>
                </main>
            }
        >
            <CategoryContent params={params} />
        </Suspense>
    );
}
async function CategoryContent({ params }: PageProps) {
    const { slug } =await params;

    const [categoryResponse, productsResponse] = await Promise.all([
        fetch(`https://openapi.programming-hero.com/api/bazardor/categories/${slug}`, {
            cache: "no-store",
        }),
        fetch(
            `https://openapi.programming-hero.com/api/bazardor/products?category=${encodeURIComponent(slug)}`,
            { cache: "no-store" }
        ),
    ]);

    if (!categoryResponse.ok || !productsResponse.ok) {
        throw new Error ("Failed to fetch category data");
    }
    const category: Category = await categoryResponse.json();
    const products: Product[] =await productsResponse.json();
    return (
        <>
            <Navbar />
            <PriceTicker />
            <main className="min-h-screen bg-[#f5f8f5]">
                <div className="mx-auto max-w-[1050px] px-4 py-12">
                    <div className="mb-8">
                        <p className="mb-2 text-sm text-gray-500">
                            <a href="/" className="hover:text-green-600"> হোম</a>
                            {" / "}  {category.nameBn}
                        </p>
                        <div className="flex items-center gap-3">
                            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-3xl shadow-sm">
                                {category.icon}
                            </div>
                            <div>
                                <h1 className="text-3xl font-bold text-gray-900"> {category.nameBn}
                                </h1>
                                <p className="mt-1 text-sm text-gray-500"> এই ক্যাটাগরির {toBanglaNumber(products.length)}টি পণ্যের আজকের বাজারদর
                                </p>
                            </div>
                        </div>
                    </div>
                    {products.length === 0 ? (
                        <div className="rounded-2xl border border-gray-200 bg-white px-5 py-16 text-center">
                            <p className="text-4xl">🛒</p>
                            <h2 className="mt-4 text-xl  font-bold text-gray-900 "> কোনো পণ্য পাওয়া যায়নি
                            </h2>
                            <p className="mt-2 text-sm text-gray-500"> এই ক্যাটাগরিতে বর্তমানে কোনো পণ্য নেই।
                            </p>
                            <a href="/" className="mt-6 inline-block rounded-lg bg-green-600 px-5 py-3 font-semibold text-white hover:bg-green-700"
                            >হোম পেজে ফিরে যান
                            </a>
                        </div>
                    ) : (
                        <CategoryProducts products={products} />
                    )}
                </div>
                <Footer />
            </main>
        </>
    );
}