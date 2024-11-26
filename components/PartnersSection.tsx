"use client";

/**
 * Partners Section
 *
 * Displays partner logos in a static grid layout.
 * - Images scale to 110% on hover for a smooth interactive effect.
 * - Dynamically fetches images from the public folder.
 */

import { PARTNER_IMAGES } from "../lib/common";

export default function PartnersSection() {
 return (
  <section className="py-20 px-6 text-center">
   <h2 className="text-4xl font-bold mb-4">
    We Even Have Some{" "}
    <span className="text-[#4bc0c0]">
     Global Partners
    </span>
   </h2>
   <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 ">
    {PARTNER_IMAGES.map((image, index) => (
     <div
      key={index}
      className="overflow-hidden flex items-center justify-center mb-2"
     >
      <img
       src={image}
       alt={`Partner ${index + 1}`}
       className="max-w-[150px] max-h-[100px] object-contain transform transition-transform duration-300 hover:scale-105"
       loading="lazy"
      />
     </div>
    ))}
   </div>
  </section>
 );
}
