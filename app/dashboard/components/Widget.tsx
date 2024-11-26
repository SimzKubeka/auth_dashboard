import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import { Bar, Line, Pie } from "react-chartjs-2";


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

type WidgetProps = {
  type: "bar" | "line" | "pie"; // Type of chart
  title: string; 
  labels: string[]; 
  data: number[]; 
};

/**
 * Generates random colors for chart data points.
 * - Returns an array of random colors with a length matching the provided data.
 *
 * @param {number} count - Number of colors to generate.
 * @returns {string[]} Array of random color strings.
 */
const generateRandomColors = (count: number): string[] => {
  return Array.from({ length: count }, () =>
    `hsl(${Math.floor(Math.random() * 360)}, 70%, 60%)` // Generates random HSL colors
  );
};

export function Widget({ type, title, labels, data }: WidgetProps) {
  const chartData = {
    labels,
    datasets: [
      {
        label: title,
        data,
        backgroundColor:
          type === "pie"
            ? generateRandomColors(data.length) 
            : "rgba(75, 192, 192, 0.75)", 
        borderColor:
          type === "line"
            ? "rgba(75, 192, 192,1)" 
            : undefined,
        borderWidth: type === "line" ? 2.5 : 1, 
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales:
      type === "bar" || type === "line"
        ? {
            y: { beginAtZero: true }, // Ensure Y-axis starts at zero
          }
        : undefined, // Pie charts don't need scales
  };

  return (
    <div className="p-4 border rounded-lg shadow-md bg-white">
      <h3 className="text-lg font-bold mb-4">{title}</h3>
      <div
        className={`${
          type === "pie" ? "h-64 w-64 mx-auto" : "h-64"
        }`} // Center pie chart
      >
        {type === "bar" && <Bar data={chartData} options={options} />}
        {type === "line" && <Line data={chartData} options={options} />}
        {type === "pie" && <Pie data={chartData} />}
      </div>
    </div>
  );
}
