
import Link from "next/link";
import Navbar from "../components/Navbar";
import PriceTicker from "../components/PriceTicker";

export default function ProfilePage() {
  return (
    <main className="min-h-screen bg-[#f0f6f1]">
      <Navbar />
      <PriceTicker />

      <section className="mx-auto w-full max-w-3xl px-4 pb-16 pt-10">
        <div className="mb-7">
          <h1 className="text-2xl font-bold text-gray-900">
            আমার প্রোফাইল
          </h1>
          <p className="mt-1 text-sm text-gray-500">
            আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন
          </p>
        </div>
        <div className="flex flex-col items-center justify-between gap-5 rounded-2xl border border-[#dfe8e0] bg-[#fbfdfb] p-6 sm:flex-row">
          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#e8f0e9] text-2xl font-semibold text-[#079447]">
              F
            </div>

            <div>
              <h2 className="text-lg font-medium text-gray-900">
                Fahiya
              </h2>
              <p className="mt-1 break-all text-sm text-gray-500">
                fahiya@gmail.com
              </p>
            </div>
          </div>

          <button
            type="button"
            className="rounded-lg border border-red-400 px-4 py-2 text-sm font-medium text-red-500 transition hover:bg-red-50"
          > ← সাইন আউট
          </button>
        </div>
        <div className="mt-6 rounded-2xl border border-[#dfe8e0] bg-[#fbfdfb] p-6">
          <h2 className="text-base font-bold text-gray-900">  তথ্য
          </h2>
          <form className="mt-7 space-y-5">
            <div>
              <label htmlFor="name"  className="mb-2 block text-sm font-medium text-gray-900"  > নাম
              </label>
              <input
                id="name"
                name="name"
                type="text"  defaultValue="fahiya"
                autoComplete="name" className="w-full rounded-lg border border-[#dfe8e0] bg-transparent px-3 py-2.5 outline-none transition focus:border-[#079447] focus:ring-1 focus:ring-[#079447]"
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-900"  > ইমেইল
              </label>
              <input
                id="email" name="email"
                type="email"
                defaultValue ="fahiya@gmail.com"
                autoComplete="email" disabled className="w-full rounded-lg border border-[#dfe8e0] bg-gray-50 px-3 py-2.5 text-gray-500 outline-none disabled:cursor-not-allowed"
              />
              <p className="mt-1 text-xs  text-gray-500"> ইমেইল পরিবর্তনের সুবিধা পরে যুক্ত করা হবে।
              </p>
            </div>
            <button
              type="submit"  className="w-full rounded-lg  border border-[#079447] bg-[#079447] px-4 py-2.5 font-medium text-white transition hover:bg-[#067a3b]"
            >পরিবর্তন সংরক্ষণ করুন
            </button>
          </form>
        </div>
        <div className="mt-6 text-center">
          <Link  href="/" className="text-sm text-gray-500 transition hover:text-[#079447]"  >
            ← হোম পেজে ফিরে যান
          </Link>
        </div>
      </section>
    </main>
  );
}