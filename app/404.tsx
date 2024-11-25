export const metadata = {
  title: "404 - Page Not Found",
  description: "The page you are looking for does not exist.",
};
export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-gray-800">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-lg text-gray-600 mb-6">Oops! The page you are looking for does not exist.</p>
      <a
        href="/"
        className="px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
      >
        Go to Homepage
      </a>
    </div>
  );
}
