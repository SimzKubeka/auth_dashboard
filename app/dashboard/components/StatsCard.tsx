/**
 * StatsCard Component
 *
 * Displays a single statistics card with a title, value, and optional percentage change.
 * Dynamically renders the passed icon component.
 *
 * Props:
 * - `icon`: Icon component (e.g., FaDollarSign).
 * - `title`: Title of the card (e.g., "Revenue").
 * - `value`: The main value (e.g., "$201K").
 * - `change`: Percentage change (e.g., "+15%").
 */

import React from "react";
import { IconType } from "react-icons";

interface StatsCardProps {
  icon: IconType;
  title: string;
  value: string;
  change?: string; 
}

export const StatsCard: React.FC<StatsCardProps> = ({ icon: Icon, title, value, change }) => {
  const isPositiveChange = change?.startsWith("+");

  return (
    <div className="flex items-center p-4 bg-white shadow rounded-lg">
      {/* Icon */}
      <div className="w-12 h-12 flex items-center justify-center bg-gray-100 rounded-full mr-4">
        <Icon className="text-xl" /> 
      </div>
      {/* Text */}
      <div>
        <h4 className="text-sm text-gray-500 uppercase font-semibold">{title}</h4>
        <div className="flex items-baseline">
          <span className="text-xl font-bold text-gray-900">{value}</span>
          {change && (
            <span
              className={`ml-2 text-sm ${
                isPositiveChange ? "text-green-500" : "text-red-500"
              }`}
            >
              {change}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
