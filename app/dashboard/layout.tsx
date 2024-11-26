"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Sidebar } from "../dashboard/components/Sidebar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("auth");
    if (!isAuthenticated) {
      router.push("/login");
    }
  }, [router]);
  return (
    <div className="flex h-screen">
      <Sidebar/>
      <main className="flex-1 bg-blue-50 p-6 overflow-auto">{children}</main>
    </div>
  );
}
