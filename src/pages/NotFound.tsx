import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 to-purple-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <p className="text-xl text-gray-700 mb-8">Page not found</p>
        <Link to="/" className="text-purple-600 hover:text-purple-800 underline">
          Go back home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
