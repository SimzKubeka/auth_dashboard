/**
 * Sidebar Component
 *
 * This component renders a sidebar navigation for the application.
 * - Displays user details at the top.
 * - Includes navigation links dynamically generated from the `SIDEBAR_NAV` array.
 * - Highlights the currently active navigation item.
 * - Provides a logout button that clears user authentication and redirects to the home page.
 *
 * Features:
 * - Tracks and highlights the selected navigation item.
 * - Displays navigation items with associated icons.
 * - Allows the user to log out using the logout button.
 */

"use client";

import { USER_DETAILS, SIDEBAR_NAV } from "@/lib/common";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { FaSignOutAlt } from "react-icons/fa"; 
import { useState } from "react";

export function Sidebar() {
  const router = useRouter();
  const pathname = usePathname(); 
  const [activeNav, setActiveNav] = useState(pathname); 

  /*Handles user logout*/
  const handleLogout = () => {
    localStorage.removeItem("auth");
    router.replace("/");
    router.refresh();
  };

  return (
    <div className="w-64 bg-blue-950 text-white max-h-svh flex flex-col">
      {/* User Details Section */}
      <div className="p-4 border-b border-gray-700 text-center">
        <h2 className="text-xl font-bold">{USER_DETAILS.username}</h2>
        <p className="text-sm text-gray-400">{USER_DETAILS.email}</p>
      </div>

      {/* Sidebar Navigation Section */}
      <nav className="flex flex-col  py-2 space-y-6">
        <h3 className="text-gray-400 px-4 font-semibold text-sm tracking-widest uppercase">
          Simple Auth Nav
        </h3>
        <ul className="space-y-4 pr-4">
          {SIDEBAR_NAV.map((item, index) => {
            const Icon = item.icon;

            return (
              <li key={index}>
                <Link
                  href={item.linkTo}
                  className={`flex items-center py-2 transition ${
                    activeNav === item.linkTo
                      ? "bg-[#4bc0c0] pl-0 rounded-r-full text-white font-semibold"
                      : "text-gray-300 p-2 hover:text-white hover:font-semibold hover:scale-105 "
                  }`}
                  onClick={() => setActiveNav(item.linkTo)} 
                >
                  <Icon className="mx-4 text-lg" /> {item.name}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Logout Button Section */}
        <div className="p-4 mt-auto">
          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-center bg-red-500 hover:bg-red-700 hover:font-semibold hover:scale-105 text-white py-2 rounded-full transition"
          >
            <FaSignOutAlt className="mr-2 text-lg" /> Logout
          </button>
        </div>
      </nav>
    </div>
  );
}
