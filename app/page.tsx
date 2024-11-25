export default function LandingPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-4xl font-bold mb-6">Welcome to My App</h1>
      <p className="text-lg text-gray-600 mb-4">
        A modern analytics dashboard for your business.
      </p>
      <a
        href="/login"
        className="bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-600"
      >
        Get Started
      </a>
    </div>
  );
}
