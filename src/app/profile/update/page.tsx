"use client";

import { useEffect, useState, type FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Navbar from "../../components/Navbar";
import PriceTicker from "../../components/PriceTicker";
import { authClient } from "../../../lib/auth-client";
import Footer from "../../components/Footer";

export default function UpdateProfilePage() {
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();

  const user = session?.user;

  const [name, setName] = useState("");
  const [isSaving, setIsSaving] = useState(false);
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (!isPending && !user) {
      router.replace("/sign-in");
    }
  }, [isPending, user, router]);

  useEffect(() => {
    if (user) {
      setName(user.name ?? "");
    }
  }, [user]);

  async function handleUpdate(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setMessage("");

    const trimmedName = name.trim();

    if (!trimmedName) {
      setMessage("নাম লিখুন।");
      setIsError(true);
      return;
    }

    setIsSaving(true);

    try {
      const { error } = await authClient.updateUser({
        name: trimmedName,
      });

      if (error) {
        setMessage(error.message || "তথ্য আপডেট করা যায়নি।");
        setIsError(true);
        return;
      }

      setMessage("আপনার তথ্য সফলভাবে আপডেট হয়েছে।");
      setIsError(false);

      router.push("/profile");
      router.refresh();
    } catch {
      setMessage("একটি সমস্যা হয়েছে। আবার চেষ্টা করুন।");
      setIsError(true);
    } finally {
      setIsSaving(false);
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

  return (
    <main className="min-h-screen bg-[#f0f6f1]">
      <Navbar />
      <PriceTicker />

      <section className="mx-auto w-full max-w-3xl px-4 pb-16 pt-10">
        <div className="mb-7">
          <h1 className="text-2xl font-bold text-gray-900">
            আপনার তথ্য পরিবর্তন করুন
          </h1>
          <p className="mt-1 text-sm text-gray-500">
            নাম পরিবর্তন করুন
          </p>
        </div>

        <div className="rounded-2xl border border-[#dfe8e0] bg-[#fbfdfb] p-6">
          <form onSubmit={handleUpdate} className="space-y-5">
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium text-gray-900"
              >
                নাম
              </label>

              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full rounded-lg border border-[#dfe8e0] bg-transparent px-3 py-2.5 outline-none transition focus:border-[#079447] focus:ring-1 focus:ring-[#079447]"
              />
            </div>

            {message && (
              <p
                role="status"
                className={`rounded-lg p-3 text-sm ${
                  isError
                    ? "bg-red-50 text-red-600"
                    : "bg-green-50 text-green-700"
                }`}
              >
                {message}
              </p>
            )}

            <button
              type="submit"
              disabled={isSaving}
              className="w-full rounded-lg bg-[#079447] px-4 py-2.5 font-medium text-white transition hover:bg-[#067a3b] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSaving ? "Updating..." : "পরিবর্তন সংরক্ষণ করুন"}
            </button>
          </form>

          <Link
            href="/profile"
            className="mt-5 block text-center text-sm text-gray-500 transition hover:text-[#079447]"
          >
            হোম পেজে ফিরে যান
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}