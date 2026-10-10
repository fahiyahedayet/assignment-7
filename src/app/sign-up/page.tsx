"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import Link from "next/link";

import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

import Navbar from "../components/Navbar";
import PriceTicker from "../components/PriceTicker";
import { authClient } from "../../lib/auth-client";
import Footer from "../components/Footer";

export default function SignUpPage() {
  const router = useRouter();

  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage("");

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const confirmPassword = formData.get("confirmPassword") as string;

    if (password !== confirmPassword) {
      setErrorMessage("দুটি পাসওয়ার্ড মিলছে না!");
      return;
    }

    setIsLoading(true);

    try {
      const { data, error } = await authClient.signUp.email({
        name,
        email,
        password,
        callbackURL: "/",
      });

      if (error) {
        setErrorMessage(
          error.message || "অ্যাকাউন্ট তৈরি করা যায়নি।"
        );
        return;
      }

      if (data) {
        router.push("/");
        router.refresh();
      }
    } catch {
      setErrorMessage("সমস্যা হয়েছে। আবার চেষ্টা করুন।");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignInGoogle = async () => {
    setErrorMessage("");
    setIsLoading(true);

    try {
      const { error } = await authClient.signIn.social({
        provider: "google",
        callbackURL: "/",
      });

      if (error) {
        setErrorMessage(
          error.message || "Google দিয়ে সাইন আপ করা যায়নি।"
        );
        setIsLoading(false);
      }
    } catch {
      setErrorMessage(
        "Google দিয়ে সাইন আপ করা যায়নি। আবার চেষ্টা করুন।"
      );
      setIsLoading(false);
    }
  };

  const handleSignInGitHub = async () => {
    setErrorMessage("");
    setIsLoading(true);

    try {
      const { error } = await authClient.signIn.social({
        provider: "github",
        callbackURL: "/",
      });

      if (error) {
        setErrorMessage(
          error.message || "GitHub দিয়ে সাইন আপ করা যায়নি।"
        );
        setIsLoading(false);
      }
    } catch {
      setErrorMessage(
        "GitHub দিয়ে সাইন আপ করা যায়নি। আবার চেষ্টা করুন।"
      );
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#f0f6f1]">
      <Navbar />
      <PriceTicker />
      <section className="flex items-center justify-center px-4 py-10">
        <div className="w-full max-w-md rounded-2xl border border-gray-100 bg-white p-6 shadow-sm sm:p-8">
          <div className="mb-7 text-center">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100 text-2xl">
              🛒
            </div>

            <h1 className="text-2xl font-bold text-gray-900">
              নতুন অ্যাকাউন্ট তৈরি করুন
            </h1>
            <p className="mt-2 text-sm text-gray-500">
              বাজারের পণ্যের দাম সম্পর্কে আপডেট পেতে বাজার দরে যোগ দিন।
            </p>
          </div>
          <form className="space-y-4" onSubmit={onSubmit}>
            <div>
              <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-gray-700"
              >
                আপনার পুরো নাম
              </label>

              <input
                id="name" name="name"  type="text"  placeholder="আপনার পুরো নাম লিখুন" autoComplete="name"
                required className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-100"
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-gray-700"
              > ইমেইল ঠিকানা
              </label>
              <input
                id="email" name="email" type="email"
                placeholder="আপনার ইমেইল লিখুন"
                autoComplete="email" required className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-100"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="mb-1.5 block text-sm font-medium text-gray-700"
              >
                পাসওয়ার্ড
              </label>

              <input
                id="password"
                name="password"
                type="password"
                placeholder="একটি পাসওয়ার্ড তৈরি করুন"
                autoComplete="new-password"
                minLength={8}
                required
                className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-100"
              />

              <p className="mt-1 text-xs text-gray-400">
                পাসওয়ার্ড কমপক্ষে ৮ অক্ষরের হতে হবে।
              </p>
            </div>

            <div>
              <label  htmlFor="confirmPassword"
                className="mb-1.5 block text-sm font-medium text-gray-700"
              > পাসওয়ার্ড নিশ্চিত করুন
              </label>

              <input  id="confirmPassword"  name="confirmPassword"
                type="password"  placeholder="আবার পাসওয়ার্ড লিখুন" autoComplete="new-password"
                minLength={8} required
                className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-100"
              />
            </div>
            {errorMessage && (
              <p role="alert"
                className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-600"
              > {errorMessage}
              </p>
            )}
            <button  type="submit"
              disabled={isLoading}  className="w-full rounded-lg bg-green-600 py-3 text-sm font-semibold text-white transition hover:bg-green-700 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isLoading ? "অ্যাকাউন্ট তৈরি হচ্ছে..." : "অ্যাকাউন্ট তৈরি করুন"}
            </button>
          </form>

          <div className="my-5 flex items-center gap-3">
            <div className="h-px  flex-1 bg-gray-200 " />
            <span className="text-xs text-gray-400">অথবা</span>
            <div className=" h-px  flex-1 bg-gray-200" />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <button type="button" onClick={handleSignInGoogle}
              disabled={isLoading} className ="flex items-center justify-center gap-2 rounded-lg border border-gray-200 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-60"
            >
              <FcGoogle size={20} />
              Google
            </button>
            <button  type="button" onClick={handleSignInGitHub} disabled={isLoading}
              className="flex items-center justify-center gap-2 rounded-lg border border-gray-200 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-60"
            >
              <FaGithub size={20} />
              GitHub
            </button>
          </div>

          <p className="mt-6 text-center text-sm text-gray-600">
            ইতিমধ্যে অ্যাকাউন্ট আছে?{" "}
            <Link href="/sign-in"
              className="font-semibold text-green-600 hover:text-green-700"
            > সাইন ইন করুন
            </Link>
          </p>

          <div className="mt-4 text-center">
            <Link  href="/" className="text-sm text-gray-500 transition hover:text-green-600"
            >
              হোম পেজে ফিরে যান
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
