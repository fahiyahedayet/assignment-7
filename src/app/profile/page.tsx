"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Navbar from "../components/Navbar";
import PriceTicker from "../components/PriceTicker";
import { authClient } from "../../lib/auth-client";

import Footer from "../components/Footer";

export default function ProfilePage() {
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();
  const [isSigningOut, setIsSigningOut] = useState(false);

  const user = session?.user;

  useEffect(() => {
    if (!isPending && !user) {
      router.replace("/sign-in");
    }
  }, [isPending, user, router]);

  async function handleSignOut() {
    setIsSigningOut(true);

    try {
      const { error } = await authClient.signOut();

      if (error) {
        alert(error.message || "সাইন আউট করা যায়নি।");
        return;
      }

      router.replace("/sign-in");
      router.refresh();
    } catch {
      alert("সাইন আউট করার সময় সমস্যা হয়েছে।");
    } finally {
      setIsSigningOut(false);
    }
  }

  if (isPending || !user) {
    return (
      <main className="min-h-screen bg-[#f0f6f1]">
        <Navbar />
        <PriceTicker />
        <p className="py-16 text-center text-sm text-gray-500">
          প্রোফাইল লোড হচ্ছে...
        </p>
      </main>
    );
  }

  const initial = user.name?.trim().charAt(0).toUpperCase() || "U";

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
              {initial}
            </div>

            <div>
              <h2 className="text-lg font-medium text-gray-900">
                {user.name || "ব্যবহারকারী"}
              </h2>
              <p className="mt-1 break-all text-sm text-gray-500">
                {user.email}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={handleSignOut}
            disabled={isSigningOut}
            className="rounded-lg border border-red-400 px-4 py-2 text-sm font-medium text-red-500 transition hover:bg-red-50 disabled:opacity-50"
          >
            {isSigningOut ? "সাইন আউট হচ্ছে..." : "← সাইন আউট"}
          </button>
        </div>

        <div className="mt-6 rounded-2xl border border-[#dfe8e0] bg-[#fbfdfb] p-6">
          <h2 className="text-base font-bold text-gray-900">
            ব্যক্তিগত তথ্য
          </h2>

          <div className="mt-5 space-y-4">
            <div>
              <p className="text-sm text-gray-500">নাম</p>
              <p className="mt-1 font-medium text-gray-900">
                {user.name || "নাম দেওয়া হয়নি"}
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500">ইমেইল</p>
              <p className="mt-1 break-all font-medium text-gray-900">
                {user.email}
              </p>
            </div>

            <Link
              href="/profile/update"
              className="block w-full rounded-lg border border-[#079447] bg-[#079447] px-4 py-2.5 text-center font-medium text-white transition hover:bg-[#067a3b]"
            >
              পরিবর্তন সংরক্ষণ করুন
            </Link>
          </div>
        </div>

        <div className="mt-6 text-center">
          <Link
            href="/"
            className="text-sm text-gray-500 transition hover:text-[#079447]"
          >
            হোম পেজে ফিরে যান
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}