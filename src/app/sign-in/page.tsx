
import Link from "next/link";
import Navbar from "../components/Navbar";
import PriceTicker from "../components/PriceTicker";

export default function SignInPage() {
  return (
    <main className="min-h-screen bg-[#f0f6f1]">
      <Navbar />
      <PriceTicker />

      <section className="mx-auto flex w-full max-w-md flex-col items-center px-4 pb-12 pt-10">
        <h1 className="text-2xl font-bold text-gray-900">
          সাইন ইন
        </h1>

        <p className="mt-2 text-center text-sm text-gray-500">
          বিশ্বস্ত দাম, বাজার তথ্য ও প্রোফাইল দেখতে অ্যাকাউন্টে ঢুকুন।
        </p>

        <div className="mt-7 w-full rounded-2xl border border-[#dfe8e0] bg-[#fbfdfb] p-6">
          <form className="space-y-5">
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-gray-900"
              >
                ইমেইল
              </label>

              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="w-full rounded-lg border border-[#dfe8e0] bg-transparent px-3 py-2.5 outline-none transition focus:border-[#079447] focus:ring-1 focus:ring-[#079447]"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-medium text-gray-900"
              >
                পাসওয়ার্ড
              </label>

              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="w-full rounded-lg border border-[#dfe8e0] bg-transparent px-3 py-2.5 outline-none transition focus:border-[#079447] focus:ring-1 focus:ring-[#079447]"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-lg border border-[#079447] bg-[#079447] px-4 py-2.5 font-medium text-white transition hover:bg-[#067a3b]"
            >
              সাইন ইন করুন
            </button>
          </form>

          <div className="my-5 flex items-center gap-4">
            <div className="h-px flex-1 bg-[#dfe8e0]" />
            <span className="text-sm text-gray-500">অথবা</span>
            <div className="h-px flex-1 bg-[#dfe8e0]" />
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <button
              type="button"
              className="flex items-center justify-center gap-2 rounded-lg border border-[#dfe8e0] px-2 py-2.5 text-sm font-medium transition hover:bg-gray-50"
            >
              <span className="font-bold text-[#4285F4]">G</span>
              Google দিয়ে চালিয়ে যান
            </button>

            <button
              type="button"
              className="flex items-center justify-center gap-2 rounded-lg border border-[#dfe8e0] px-2 py-2.5 text-sm font-medium transition hover:bg-gray-50"
            >
              <span className="font-bold">●</span>
              GitHub দিয়ে চালিয়ে যান
            </button>
          </div>

          <p className="mt-5 text-center text-sm text-gray-700">
            অ্যাকাউন্ট নেই?{" "}
            <Link
              href="/sign-up"
              className="font-medium text-[#079447] hover:underline"
            >
              সাইন আপ করুন
            </Link>
          </p>
        </div>

        <Link
          href="/"
          className="mt-6 text-sm text-gray-500 transition hover:text-[#079447]"
        >
          ← হোম পেজে ফিরে যান
        </Link>
      </section>
    </main>
  );
}