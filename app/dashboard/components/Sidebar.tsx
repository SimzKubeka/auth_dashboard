"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

type SidebarProps = {
  username: string;
  email: string;
};

export function Sidebar({ username, email }: SidebarProps) {
  const router = useRouter();
  const handleLogout = () => {
    localStorage.removeItem("auth");
    router.replace("/");
    router.refresh();
  };

  return (
    <div className="w-64 bg-blue-950 text-white h-full flex flex-col">
      <div className="p-4 border-b border-gray-700">
        <h2 className="text-lg font-bold">{username}</h2>
        <p className="text-sm text-gray-400">{email}</p>
      </div>
      <nav className="flex p-4">
        <ul className="space-y-4">
          <li>
            <Link href="/dashboard" className="block text-gray-300 hover:text-white">
              Dashboard
            </Link>
          </li>
          <li>
            <Link href="/dashboard/reports" className="block text-gray-300 hover:text-white">
              Reports
            </Link>
          </li>
          <li>
            <Link href="/dashboard/user_details" className="block text-gray-300 hover:text-white">
              User Details
            </Link>
          </li>
        </ul>
      </nav>
      <div className="p-4 border-t border-gray-700">
        <button
          onClick={handleLogout}
          className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
