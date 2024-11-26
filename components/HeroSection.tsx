"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
 return (
  <section className="relative bg-blue-50 text-gray-900 text-center px-4 py-20 sm:py-32">
   {/* Decorative Lines */}
   <div className="absolute top-10 left-4 w-16 h-16 border-l-4 border-t-4 border-yellow-400 transform rotate-45"></div>
   <div className="absolute bottom-10 right-4 w-16 h-16 border-r-4 border-b-4 border-orange-400 transform rotate-45"></div>

   {/* Animated Content */}
   <motion.div
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="mb-4"
   >
    <h1 className="text-5xl sm:text-6xl font-bold mb-4">
     Secure Access, Simplified.
    </h1>
   </motion.div>

   <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.2 }}
    className="mb-6"
   >
    <p className="text-lg sm:text-xl text-gray-600">
     Empower your applications with reliable,
     fast, and secure authentication. Built for
     developers, designed for ease of use.
    </p>
   </motion.div>

   <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.6, delay: 0.4 }}
   >
    <a
     href="/login"
     className="bg-blue-500 text-white py-3 px-6 rounded-full shadow-lg hover:bg-blue-600 transition"
    >
     Get Started for Free
    </a>
   </motion.div>
  </section>
 );
}
