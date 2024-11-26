"use client"

import React, { useState,useEffect } from "react";
import { useRouter } from 'next/navigation';

const Report = () => {
  const router = useRouter();
  const [color, setColor] = useState("#4bc0c0"); 
  
  useEffect(() => {
    const auth = localStorage.getItem("auth");
    if (!auth) router.push("/login");
  }, [router]);

  /**
   * Handles the color change based on the slider value.
   * - Updates the `color` state using the HSL model.
   */
  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const hue = e.target.value; 
    setColor(`hsl(${hue}, 100%, 50%)`);
  };

  return (
    <div className="max-h-screen mt-10 flex flex-col justify-center items-center">
      {/* Title and Subtitle */}
      <div className="text-center mb-10">
        <h1 className="text-6xl font-extrabold text-gray-900" style={{ color }}>
          808
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          New page incoming. Adjust the slider to change the mood!
        </p>
      </div>

      {/* Slider */}
      <div className="flex flex-col items-center">
        <input
          type="range"
          min="0"
          max="360"
          defaultValue="240"
          onChange={handleColorChange}
          className="w-64 h-2 bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500 rounded-lg appearance-none cursor-pointer"
        />
        <div className="mt-2 text-sm text-gray-500">
          Drag to change the color
        </div>
      </div>
    </div>
  );
};

export default Report;
