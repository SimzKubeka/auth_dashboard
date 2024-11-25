"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Widget } from "./components/Widget";
import { FAB } from "./components/FAB";
import { Drawer } from "./components/Drawer";

export default function Dashboard() {
  const router = useRouter();
  const [widgets, setWidgets] = useState([
    { type: "bar", title: "Users Per Department", labels: ["Eng", "Sales", "Mkt", "HR"], data: [4, 25, 16, 2] },
    { type: "line", title: "Daily Active Users", labels: ["Mon", "Tue", "Wed", "Thu", "Fri"], data: [49, 105, 62, 71, 98] },
  ]);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [newWidget, setNewWidget] = useState({ type: "bar", title: "", labels: "", data: "" });

  useEffect(() => {
    const auth = localStorage.getItem("auth");
    if (!auth) router.push("/login");
  }, [router]);

  const handleAddWidget = () => {
    const parsedLabels = newWidget.labels.split(",");
    const parsedData = newWidget.data.split(",").map(Number);

    setWidgets((prevWidgets) => [
      ...prevWidgets,
      { ...newWidget, labels: parsedLabels, data: parsedData },
    ]);
    setIsDrawerOpen(false);
    setNewWidget({ type: "bar", title: "", labels: "", data: "" });
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Dashboard</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
      <FAB onClick={() => setIsDrawerOpen(true)} />
      <Drawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
        <h2 className="text-xl font-bold mb-4">Add New Widget</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleAddWidget();
          }}
        >
          <div className="mb-4">
            <label className="block text-gray-700">Widget Title</label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded"
              value={newWidget.title}
              onChange={(e) => setNewWidget({ ...newWidget, title: e.target.value })}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Chart Type</label>
            <select
              className="w-full px-3 py-2 border rounded"
              value={newWidget.type}
              onChange={(e) => setNewWidget({ ...newWidget, type: e.target.value })}
              required
            >
              <option value="bar">Bar</option>
              <option value="line">Line</option>
              <option value="pie">Pie</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Labels (comma-separated)</label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded"
              value={newWidget.labels}
              onChange={(e) => setNewWidget({ ...newWidget, labels: e.target.value })}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Data (comma-separated)</label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded"
              value={newWidget.data}
              onChange={(e) => setNewWidget({ ...newWidget, data: e.target.value })}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          >
            Add Widget
          </button>
        </form>
      </Drawer>
    </div>
  );
}
