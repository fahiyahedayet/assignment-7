"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import AuthButtons from "./AuthButtons";

type Category = {
  slug: string;
  nameBn: string;
  icon?: string;
};

export default function Navbar() {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    async function fetchCategories() {
      try {
        const response = await fetch(
          "https://api.abcz.workers.dev/api/bazardor/categories"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch categories");
        }

        const data = await response.json();

        const categoryList = Array.isArray(data)
          ? data
          : data.categories ?? data.data ?? [];

        setCategories(categoryList);
      } catch (error) {
        console.error("Category fetch error:", error);
      }
    }

    fetchCategories();
  }, []);
const [today, setToday] = useState("");
  useEffect(() => {
  const date = new Date();

  const formattedDate = new Intl.DateTimeFormat("bn-BD", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Asia/Dhaka",
  }).format(date);

  setToday(formattedDate);
}, []);

  return (
    <header className="bg-white">
      <div className="border-b border-gray-100">
        <div className="mx-auto flex h-[60px] max-w-[1050px] items-center justify-between gap-3 px-4">
          <Link href="/" className="flex shrink-0 items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-600">
              <img src="/logo-icon.png"  alt="Bazar Dor logo" className="h-7 w-7" />
            </div>
            <div>
              <h1 className="text-xl font-bold leading-none text-gray-900">  বাজার দর </h1>

              <p className="mt-1 text-[10px] text-gray-500">
                {today}
              </p>
            </div>
          </Link>

          <AuthButtons />
        </div>
      </div>

      <nav className="border-b border-gray-100">
        <div className="mx-auto flex max-w-[1050px] items-center gap-7 overflow-x-auto px-4 py-3">
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/category/${category.slug}`}
              className="flex shrink-0 items-center gap-1.5 text-sm text-gray-800 transition hover:text-green-600"
            >
              <span>{category.icon ?? "🛒"}</span>
              <span>{category.nameBn}</span>
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}