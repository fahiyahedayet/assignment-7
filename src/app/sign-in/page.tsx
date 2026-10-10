"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Navbar from "../components/Navbar";
import PriceTicker from "../components/PriceTicker";
import { authClient } from "../../lib/auth-client";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import Footer from "../components/Footer";
import { toast } from "react-toastify";

export default function SignInPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function handleSignIn(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setErrorMessage("");
    setIsLoading(true);

    try {
      const { data, error } = await authClient.signIn.email({
        email,
        password,
      });

      if (error) {
        setErrorMessage(
          error.message || "ইমেইল অথবা পাসওয়ার্ড সঠিক নয়।"
        );
        return;
      }

      if (data) {
        router.push("/profile");
        router.refresh();
      }
    } catch {
      setErrorMessage(
        "সাইন ইন করা যায়নি। আবার চেষ্টা করুন।"
      );
    } finally {
      setIsLoading(false);
    }
  }
  const handleSignInGoogle = async () => {
    setErrorMessage("");
    setIsLoading(true);

    try {
      const { error } = await authClient.signIn.social({
        provider: "google",
        callbackURL: "/profile",
      });

      if (error) {
        setErrorMessage(
          error.message || "Google দিয়ে সাইন ইন করা যায়নি।"
        );
        setIsLoading(false);
      }
    } catch {
      setErrorMessage("Google দিয়ে সাইন ইন করা যায়নি। আবার চেষ্টা করুন।");
      setIsLoading(false);
    }
  };
  const handleSignInGitHub = async () => {
  setErrorMessage("");
  setIsLoading(true);

  try {
    const { error } = await authClient.signIn.social({
      provider: "github",
      callbackURL: "/profile",
    });

    if (error) {
      setErrorMessage(
        error.message || "GitHub দিয়ে সাইন ইন করা যায়নি।"
      );
      setIsLoading(false);
    }
  } catch {
    setErrorMessage(
      "GitHub দিয়ে সাইন ইন করা যায়নি। আবার চেষ্টা করুন।"
    );
    setIsLoading(false);
  }
};
  return (
    <main className="min-h-screen bg-[#f0f6f1]">
      <Navbar />
      <PriceTicker />

      <section className="mx-auto flex w-full max-w-md flex-col items-center px-4 pb-12 pt-10">
        <h1 className="text-2xl font-bold text-gray-900"> সাইন ইন
        </h1>

        <p className="mt-2 text-center text-sm text-gray-500">
          বিশ্বস্ত দাম, বাজার তথ্য ও প্রোফাইল দেখতে অ্যাকাউন্টে ঢুকুন।
        </p>

        <div className="mt-7 w-full rounded-2xl border border-[#dfe8e0] bg-[#fbfdfb] p-6">
          <form onSubmit={handleSignIn} className="space-y-5">
            <div>
              <label htmlFor="email"
                className="mb-2 block text-sm font-medium text-gray-900"
              > ইমেইল
              </label>

              <input id="email" name="email" type="email" autoComplete="email"
                required value={email}  onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-lg border border-[#dfe8e0] bg-transparent px-3 py-2.5 outline-none transition focus:border-[#079447] focus:ring-1 focus:ring-[#079447]"
              />
            </div>
            <div>
              <label htmlFor="password" className="mb-2 block text-sm font-medium text-gray-900"
              > পাসওয়ার্ড
              </label>

              <input id="password" name="password" type="password"
                autoComplete="current-password"
                required  value={password} onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-lg border border-[#dfe8e0] bg-transparent px-3 py-2.5 outline-none transition focus:border-[#079447] focus:ring-1 focus:ring-[#079447]"
              />
            </div>
            {errorMessage && (
              <p role="alert"  className="rounded-lg bg-red-50 p-3 text-sm text-red-600"
              >
                {errorMessage}
              </p>
            )}
            <button type="submit" disabled={isLoading}
              className="w-full rounded-lg border border-[#079447] bg-[#079447] px-4 py-2.5 font-medium text-white transition hover:bg-[#067a3b] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isLoading ? "সাইন ইন হচ্ছে..." : "সাইন ইন করুন"}
            </button>
          </form>
          <div className="my-5 flex items-center gap-4">
            <div className="h-px flex-1 bg-[#dfe8e0]" />
            <span className="text-sm text-gray-500">অথবা</span>
            <div className="h-px flex-1 bg-[#dfe8e0]" />
          </div>


          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <button type="button"  onClick={handleSignInGoogle}
              disabled={isLoading} className="flex items-center justify-center gap-2 rounded-lg border border-[#dfe8e0] px-2 py-2.5 text-sm font-medium transition hover:bg-gray-50 disabled:opacity-60"
            >
              <FcGoogle size={20} />
              Google দিয়ে চালিয়ে যান
            </button>

            <button type="button"  onClick={handleSignInGitHub}
              disabled={isLoading} className="flex items-center justify-center gap-2 rounded-lg border border-[#dfe8e0] px-2 py-2.5 text-sm font-medium transition hover:bg-gray-50"
            >
              <FaGithub size={20} />
              GitHub দিয়ে চালিয়ে যান
            </button>
          </div>

          <p className="mt-5 text-center text-sm text-gray-700">
            অ্যাকাউন্ট নেই?{" "}
            <Link href="/sign-up" className="font-medium text-[#079447] hover:underline"
            >
              সাইন আপ করুন
            </Link>
          </p>
        </div>
        <Link  href="/" className="mt-6 text-sm text-gray-500 transition hover:text-[#079447]"
        >
          হোম পেজে ফিরে যান
        </Link>
      </section>
    <Footer />
    </main>
  );
}
