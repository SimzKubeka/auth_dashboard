"use client";

/**
 * About Us Section
 *
 * Provides information about the application or team with a blend of text and an image.
 * - Features animations for the text and image using Framer Motion.
 * - Responsive layout that adapts to different screen sizes.
 */

import React from "react";
import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";

interface AboutUsProps {
 text: string;
}

// Animation variants for the text content
const textVariants = {
 hidden: { opacity: 0, x: -50 },
 visible: {
  opacity: 1,
  x: 0,
  transition: { duration: 1 },
 },
};

// Animation variants for the image content
const imageVariants = {
 hidden: { opacity: 0, scale: 0.8 },
 visible: {
  opacity: 1,
  scale: 1,
  transition: { duration: 1 },
 },
};

const AboutUs: React.FC<AboutUsProps> = ({
 text,
}) => {
 return (
  <div className="container mx-auto px-8 py-16 md:flex md:flex-row md:items-center gap-4">
   {/* Text Content */}
   <motion.div
    className="md:w-1/2 mb-8 md:mb-0 text-center md:text-left"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={textVariants}
   >
    <h2 className="text-4xl font-bold mb-4">
     A Little Something{" "}
     <span className="text-blue-950">
      About Us
     </span>
    </h2>
    <ReactMarkdown className="text-md prose prose-yellow">
     {text}
    </ReactMarkdown>
   </motion.div>

   {/* Image Content */}
   <motion.div
    className="md:w-1/2"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={imageVariants}
   >
    <img
     src="/workplace-1.webp"
     alt="About Us"
     className="rounded-md shadow-md max-w-full"
     loading="lazy"
    />
   </motion.div>
  </div>
 );
};

export default AboutUs;
