"use client";

/**
 * Services Section
 *
 * Displays services in an infinite carousel layout.
 * - Includes smooth sliding animation.
 * - Automatically scrolls with a loop effect.
 */

import { SERVICES } from "../lib/common";
import { motion } from "framer-motion";

export default function ServicesSection() {
 return (
  <section className="py-20 px-6 bg-blue-50 text-gray-900 text-center">
   <h2 className="text-4xl font-bold mb-4">
    A Few Of Our{" "}
    <span className="text-blue-950">
      Services
    </span>
   </h2>
   <div className="overflow-hidden relative">
    <motion.div
     className="flex space-x-8"
     initial={{ x: 0 }}
     animate={{ x: ["0%", "-100%", "0%"] }}
     transition={{
      repeat: Infinity,
      duration: 100,
      ease: "linear",
     }}
    >
     {SERVICES.concat(SERVICES).map(
      (service, index) => (
       <motion.div
        key={index}
        className="min-w-[300px] p-6 shadow-lg rounded-2xl mb-2 bg-white text-center flex flex-col items-center justify-center"
       >
        <div className="w-16 h-16 flex items-center justify-center mb-4 bg-gradient-to-r from-green-400 to-blue-500 text-white text-2xl rounded-full">
         {service.icon}
        </div>
        <h3 className="text-xl font-semibold mb-2">
         {service.title}
        </h3>
        <p className="text-sm text-gray-600">
         {service.description}
        </p>
       </motion.div>
      )
     )}
    </motion.div>
   </div>
  </section>
 );
}
