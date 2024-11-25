'use client';

import "../styles/globals.css";
import Link from "next/link";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900">
        
          <nav className="bg-blue-950 text-white py-4 px-8 flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold">
              Bulltech Simple Auth
            </Link>
            <div>
              <Link
                href="/login"
                className="text-white font-semibold bg-blue-500 py-2 px-4 rounded-full shadow-lg hover:text-blue-100 hover:bg-blue-700 hover:font-semibold hover:shadow-md"
              >
                Sign In
              </Link>
            </div>
          </nav>
        
        <main>{children}</main>
      </body>
    </html>
  );
}
