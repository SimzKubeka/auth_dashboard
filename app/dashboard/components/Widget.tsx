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

// Register Chart.js components
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
  type: "bar" | "line" | "pie"; 
  title: string;
  labels: string[];
  data: number[];
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
            ? ["#FF6384", "#36A2EB", "#FFCE56"] 
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
            y: { beginAtZero: true },
          }
        : undefined, // Pie charts don't need scales
  };

  return (
    <div className="p-4 border rounded shadow-md bg-whitesmoke">
      <h3 className="text-lg font-bold mb-4">{title}</h3>
      <div
        className={`${
          type === "pie" ? "h-64 w-64 mx-auto" : "h-64"
        }`} 
      >
        {type === "bar" && <Bar data={chartData} options={options} />}
        {type === "line" && <Line data={chartData} options={options} />}
        {type === "pie" && <Pie data={chartData} />}
      </div>
    </div>
  );
}
