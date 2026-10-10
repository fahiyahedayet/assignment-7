
import Link from "next/link";

export default function NotFound() {
    return (
        <main className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
            <p className="text-7xl font-extrabold text-[#079447]">  404
            </p>
            <h1 className="mt-4 text-3xl font-bold text-gray-900">
                পেজটি খুঁজে পাওয়া যায়নি!
            </h1>
            <p className="mt-3 max-w-md text-gray-600">
                দুঃখিত, আপনি যে পেজটি খুঁজছেন সেটি পাওয়া যায়নি।
                লিংকটি ভুল হতে পারে অথবা পেজটি সরিয়ে ফেলা হয়েছে।
            </p>

            <Link href="/" className="mt-6 rounded-lg bg-[#079447] px-6 py-3 font-semibold text-white transition hover:bg-[#067a3b]"
            > হোম পেজে ফিরে যান
            </Link>
        </main>
    );
}