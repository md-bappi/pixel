import { FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300  pt-12">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Brand Section */}
        <div className=" md:col-span-2 md:w-10/12">
          <h2 className="font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            Pixel
          </h2>

          <p className="text-sm leading-6 text-gray-400">
            A beautiful platform for photographers and visual artists to
            showcase their work, connect with others, and discover amazing
            imagery from around the world.
          </p>
          <div className="flex gap-4 mt-4 text-gray-400">
            <Link to="#" className="hover:text-white">
              <FaGithub size={18} />
            </Link>
            <Link to="#" className="hover:text-white">
              <FaTwitter size={18} />
            </Link>
            <Link to="#" className="hover:text-white">
              <FaInstagram size={18} />
            </Link>
          </div>
        </div>

        {/* Product Links */}
        <div>
          <h4 className="font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            Product
          </h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>
              <Link to="/" className="hover:text-gray-300">
                Gallery
              </Link>
            </li>
            <li>
              <Link to="/uploads" className="hover:text-gray-300">
                Upload
              </Link>
            </li>
            <li>
              <Link to="/favourites" className="hover:text-gray-300">
                Favorites
              </Link>
            </li>
          </ul>
        </div>

        {/* Community Links */}
        <div>
          <h4 className="font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            Community
          </h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>
              <Link to="#" className="hover:text-gray-300">
                Featured
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-gray-300">
                Popular
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-gray-300">
                Recent
              </Link>
            </li>
          </ul>
        </div>

        {/* Support Links */}
        <div>
          <h4 className="font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            Support
          </h4>
          <ul className="space-y-2 text-sm  text-gray-400">
            <li>
              <Link to="#" className="hover:text-gray-300">
                Help Center
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-gray-300">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-gray-300">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-6">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Pixel. All rights reserved.</p>
          <p className="flex items-center gap-1 mt-2 md:mt-0">
            Made with <AiOutlineHeart className="text-red-500" /> for
            photographers
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
