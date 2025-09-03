import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div
      className="relative w-screen h-[90vh] bg-cover bg-no-repeat bg-center flex justify-center items-center flex-col text-center px-4"
      style={{ backgroundImage: "url('/images/bg-image.jpg')" }}
    >
      {/* Dark Gradient Overlay for better readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 via-gray-800/40 to-gray-900/80"></div>

      {/* Content */}
      <div className="relative z-10 text-white flex flex-col items-center gap-4 max-w-2xl">
        <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
          Welcome to{" "}
          <span className="bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent">
            Pixel
          </span>
        </h1>
        <p className="text-gray-300 text-sm md:text-base leading-relaxed">
          Discover, upload, and share stunning photography with a vibrant
          community of visual storytellers.
        </p>
        <Link
          to="/uploads"
          className="mt-4 px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-semibold rounded-lg shadow-md transition-transform transform hover:scale-105"
        >
          Start Uploading
        </Link>
      </div>
    </div>
  );
};

export default Hero;
