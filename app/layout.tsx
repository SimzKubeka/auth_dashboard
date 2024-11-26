'use client';

/**
 * Root Layout
 * 
 * This component serves as the base layout for the application. It wraps all pages with:
 * - A consistent global style.
 * - The `Navbar` component for navigation.
 * - A `main` section to display child components (dynamic content).
 * 
 * Features:
 * - Mobile responsiveness.
 * - Clean and modular structure by separating navigation into its own component.
 */

import "../styles/globals.css";
import Navbar from "../components/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}

