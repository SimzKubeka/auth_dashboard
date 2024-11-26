'use client';

/**
 * Navbar Component
 * 
 * This component renders the navigation bar for the application. It includes:
 * - A brand logo/title that links to the homepage.
 * - A "Sign In" button that redirects to the login page.
 * 
 * The navbar is responsive, stacking content on smaller screens and aligning them horizontally on larger screens.
 */

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-blue-950 text-white py-4 px-6 sm:py-6 sm:px-8 flex flex-col sm:flex-row justify-between items-center">
      <Link
        href="/"
        className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-0"
      >
        Bulltech Simple Auth
      </Link>
      <div>
        <Link
          href="/login"
          className="bg-blue-500 text-white py-3 px-6 rounded-full shadow-lg hover:bg-blue-600 transition"
        >
          Sign In
        </Link>
      </div>
    </nav>
  );
}
