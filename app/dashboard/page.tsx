"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Widget } from "./components/Widget";
import { FAB } from "./components/FAB";
import { Drawer } from "./components/Drawer";
import { StatsCard } from "../dashboard/components/StatsCard";
import {
 DASHBOARD_STATS,
 DASHBOARD_WIDGETS,
} from "@/lib/common";
import { FaTrashAlt } from "react-icons/fa";

/**
 * Dashboard Component
 *
 * Displays a dashboard with:
 * - Summary statistics cards.
 * - Dynamic widgets (bar, line, pie charts).
 * - A floating action button (FAB) to add new widgets via a drawer.
 *
 * Features:
 * - Tracks and updates widgets dynamically.
 * - Ensures authenticated access with a redirect to login if unauthenticated.
 */
export default function Dashboard() {
 const router = useRouter();

 const [widgets, setWidgets] = useState(
  DASHBOARD_WIDGETS
 );
 const [isDrawerOpen, setIsDrawerOpen] =
  useState(false);
 const [newWidget, setNewWidget] = useState({
  type: "bar",
  title: "",
  labels: [""],
  data: [0],
 });

 /*useEffect Hook */
 useEffect(() => {
  const auth = localStorage.getItem("auth");
  if (!auth) router.push("/login");
 }, [router]);

 /**
  * Handles adding a new widget.
  * - Appends the new widget to the existing widgets array.
  * - Resets the form and closes the drawer.
  */
 const handleAddWidget = () => {
  setWidgets((prevWidgets) => [
   ...prevWidgets,
   { ...newWidget },
  ]);

  setIsDrawerOpen(false);
  setNewWidget({
   type: "bar",
   title: "",
   labels: [""],
   data: [0],
  });
 };

 /**
  * Adds a new input field for labels and data.
  */
 const addInputField = () => {
  setNewWidget((prevWidget) => ({
   ...prevWidget,
   labels: [...prevWidget.labels, ""],
   data: [...prevWidget.data, 0],
  }));
 };

 /**
  * Removes an input field for a specific label-data pair.
  * @param {number} index - Index of the input to remove.
  */
 const removeInputField = (index: number) => {
  setNewWidget((prevWidget) => ({
   ...prevWidget,
   labels: prevWidget.labels.filter(
    (_, i) => i !== index
   ),
   data: prevWidget.data.filter(
    (_, i) => i !== index
   ),
  }));
 };

 /**
  * Updates a specific label or data value in the array.
  * @param {number} index - Index of the input being updated.
  * @param {string | number} value - New value for the input.
  * @param {string} field - Field to update ("labels" or "data").
  */
 const updateField = (
  index: number,
  value: string | number,
  field: "labels" | "data"
 ) => {
  setNewWidget((prevWidget) => ({
   ...prevWidget,
   [field]: prevWidget[field].map((item, i) =>
    i === index ? value : item
   ),
  }));
 };

 return (
  <div className="p-6">
   {/* Header Section */}
   <div className="flex justify-between items-center mb-6">
    <h1 className="text-4xl font-bold mb-4">
     Welcome to your{" "}
     <span className="text-[#4bc0c0]">
      Dashboard!
     </span>
     <span className="text-[#4bc0c099]">!</span>
     <span className="text-[#4bc0c04c]">!</span>
     <span className="text-[#4bc0c01a]">!</span>
     <span className="text-[#4bc0c00d]">!</span>
    </h1>
   </div>
   
   {/* Stats Cards Section */}
   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
    {DASHBOARD_STATS.map((stat, index) => (
     <StatsCard
      key={index}
      icon={stat.icon}
      title={stat.title}
      value={stat.value}
      change={stat.change}
     />
    ))}
   </div>

   {/* Widgets Section */}
   <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
    {widgets.map((widget, index) => (
     <Widget
      key={index}
      type={widget.type as "bar" | "line" | "pie"}
      title={widget.title}
      labels={widget.labels}
      data={widget.data}
     />
    ))}
   </div>

   {/* Floating Action Button (FAB) */}
   <FAB onClick={() => setIsDrawerOpen(true)} />

   {/* Drawer Component */}
   <Drawer
    isOpen={isDrawerOpen}
    onClose={() => setIsDrawerOpen(false)}
   >
    <h2 className="text-xl font-bold mb-4">
     Add New Widget
    </h2>
    <form
     onSubmit={(e) => {
      e.preventDefault();
      handleAddWidget();
     }}
    >
     {/* Widget Title Input */}
     <div className="mb-4">
      <label className="block text-gray-700">
       Widget Title
      </label>
      <input
       type="text"
       className="w-full px-3 py-2 border rounded"
       value={newWidget.title}
       onChange={(e) =>
        setNewWidget({
         ...newWidget,
         title: e.target.value,
        })
       }
       required
      />
     </div>

     {/* Chart Type Select */}
     <div className="mb-4">
      <label className="block text-gray-700">
       Chart Type
      </label>
      <select
       className="w-full px-3 py-2 border rounded"
       value={newWidget.type}
       onChange={(e) =>
        setNewWidget({
         ...newWidget,
         type: e.target.value,
        })
       }
       required
      >
       <option value="bar">Bar</option>
       <option value="line">Line</option>
       <option value="pie">Pie</option>
      </select>
     </div>

     {/* Labels and Data Input Section */}
     <div className="mb-4">
      <label className="block text-gray-700">
       Labels and Data
      </label>
      {newWidget.labels.map((label, index) => (
       <div
        key={index}
        className="flex justify-between mb-2"
       >
        <input
         type="text"
         placeholder="Label"
         className="w-2/5 px-3 py-2 border rounded"
         value={label}
         onChange={(e) =>
          updateField(
           index,
           e.target.value,
           "labels"
          )
         }
        />
        <input
         type="number"
         placeholder="Data"
         className="w-2/5 px-3 py-2 border rounded"
         value={newWidget.data[index]}
         onChange={(e) =>
          updateField(
           index,
           parseFloat(e.target.value),
           "data"
          )
         }
        />
        <button
         type="button"
         className="text-red-500 hover:text-red-700"
         onClick={() => removeInputField(index)}
        >
         <FaTrashAlt className="text-xl" />{" "}
         {/* Trash icon */}
        </button>
       </div>
      ))}
      <button
       type="button"
       onClick={addInputField}
       className="bg-[#4bc0c0] text-white px-4 py-2 rounded-full hover:bg-[#1faaaa] mt-2"
      >
       Add More
      </button>
     </div>

     {/* Submit Button */}
     <button
      type="submit"
      className="w-full bg-blue-500 text-white py-2 rounded-full hover:bg-blue-600"
     >
      Add Widget
     </button>
    </form>
   </Drawer>
  </div>
 );
}
