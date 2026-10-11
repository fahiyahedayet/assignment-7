
"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { authClient } from "../../lib/auth-client";

export default function AuthButtons() {
  const router = useRouter();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isSigningOut, setIsSigningOut] = useState(false);

  const { data: session, isPending } = authClient.useSession();

  const isLoggedIn = !!session?.user;
  const userName = session?.user?.name || "User";
  const userImage = session?.user?.image;

  async function handleSignOut() {
    setIsSigningOut(true);

    try {
      const { error } = await authClient.signOut();

      if (error) {
        toast.error("সাইন আউট করা যায়নি। আবার চেষ্টা করুন।");
        console.error("Sign out error:", error);
        return;
      }
      setDropdownOpen(false) ;
      toast.success("সফলভাবে সাইন আউট হয়েছে!");

      router.push("/sign-in");
      router.refresh();
    } catch (error) {
      console.error("Sign out failed:", error);
      toast.error("সাইন আউট করা যায়নি। আবার চেষ্টা করুন।");
    } finally {
      setIsSigningOut(false);
    }
  }

  if (isPending) {
    return (
      <div
        className="h-9 w-20 animate-pulse rounded-lg bg-gray-100"
        aria-label="Checking session"
      />
    );
  }

  if (!isLoggedIn) {
    return (
      <div className="flex items-center gap-2">
        <Link href="/sign-in" className="rounded-lg px-3 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100"
        > Sign In
        </Link>

        <Link  href="/sign-up" className="rounded-lg bg-green-600 px-3 py-2 text-sm font-medium text-white transition hover:bg-green-700"
        >  Sign Up
        </Link>
      </div>
    );
  }

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setDropdownOpen((previous) => !previous)}
        aria-expanded={dropdownOpen}
        aria-haspopup="menu"
        className="flex items-center gap-2 rounded-lg px-2 py-1.5 transition hover:bg-gray-100"
      >
        {userImage ? (
          <img src={userImage} alt={`${userName}'s profile`}  className="h-9 w-9 rounded-full border border-gray-200 object-cover"
          />
        ) : (
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-200">
            👤
          </span>
        )}

        <span className="max-w-24 truncate text-sm font-medium text-gray-800">
          {userName}
        </span>

        <span className="text-xs text-gray-500">
          {dropdownOpen ? "▴" : "▾"}
        </span>
      </button>

      {dropdownOpen && (
        <div
          role="menu"
          className="absolute right-0 top-full z-50 mt-2 w-48 rounded-xl border border-gray-100 bg-white p-2 shadow-lg"
        >
          <Link  href="/profile"  role="menuitem"  onClick={() => setDropdownOpen(false)}
            className="block rounded-lg px-3 py-2.5 text-sm text-gray-700 transition hover:bg-gray-100"
          >
            👤 My Profile
          </Link>

          <button  type="button"  role="menuitem"
            disabled={isSigningOut}  onClick={handleSignOut}
            className="w-full rounded-lg px-3 py-2.5 text-left text-sm text-red-600 transition hover:bg-red-50 disabled:opacity-50"
          >
            {isSigningOut ? "Signing out..." : "Sign Out"}
          </button>
        </div>
      )}
    </div>
  );
}
