import { CiCamera } from "react-icons/ci";
import { PiUploadSimpleLight } from "react-icons/pi";
import { CiHeart } from "react-icons/ci";
import { AiOutlineUser } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";
import type { FC, JSX } from "react";

//  Type for a single nav item
type NavLinkItem = {
  name: string;
  path: string;
  icon: JSX.Element;
};

// Array of nav items
const navLink: NavLinkItem[] = [
  { name: "gallery", path: "/", icon: <CiCamera /> },
  { name: "uploads", path: "/uploads", icon: <PiUploadSimpleLight /> },
  { name: "favourites", path: "/favourites", icon: <CiHeart /> },
];

const Navbar: FC = () => {
  return (
    <nav className="flex justify-between items-center px-4 md:px-8 py-3 bg-white shadow-md">
      {/* Logo gradient */}
      <Link
        to="/"
        className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-600"
      >
        Pixel
      </Link>

      {/* Navigation Links */}
      <div className="flex items-center gap-4 md:gap-8">
        <ul className="flex gap-1 md:gap-6">
          {navLink.map((item, index) => {
            const Icon = item.icon; // get the component
            return (
              <li key={index}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `flex items-center gap-1 px-3 py-1 rounded-md transition-colors ${
                      isActive
                        ? "bg-white text-purple-900 font-semibold"
                        : "text-gray-800 hover:bg-purple-100 hover:text-gray-900"
                    }`
                  }
                >
                  <span className="hidden md:inline">{Icon}</span>
                  <span className="capitalize text-xs md:text-sm">
                    {item.name}
                  </span>
                </NavLink>
              </li>
            );
          })}
        </ul>

        {/* User Avatar */}
        <Link
          to="/profile"
          className="w-8 h-8 rounded-full flex justify-center items-center bg-indigo-200 text-78o7l77ol97h-800 hover:bg-gray-500 transition-colors cursor-pointer"
        >
          <AiOutlineUser size={18} />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
