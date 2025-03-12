import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/images/Home/logo.png"; // Import your logo image
import signupIcon from "../assets/images/Home/get involved.png"; // Import sign-up icon
import { FiMenu, FiX } from "react-icons/fi"; // Import icons for the menu

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  return (
    <nav className="flex justify-between items-center p-4 bg-white shadow-md relative">
      {/* Logo */}
      <div className="flex items-center">
        <img src={logo} alt="Rooted in Worship Conference" className="h-12 w-auto" />
      </div>

      {/* Desktop Navigation */}
      <ul className="hidden lg:flex space-x-6 text-gray-700">
        <li className="font-bold text-black cursor-pointer">Home</li>
        <li className="cursor-pointer hover:text-gray-900">About the Conference</li>
        <li className="cursor-pointer hover:text-gray-900">Key Highlights</li>
      </ul>

      {/* Sign-up Button (Hidden on small screens) */}
      <button
        className="hidden lg:flex bg-[#30B295] text-white px-5 py-2 rounded-full font-medium items-center gap-2 hover:bg-[#28a081]"
        onClick={() => navigate("/register")} // Navigate to /register on click
      >
        <img src={signupIcon} alt="Sign-up Icon" className="w-5 h-5" />
        SIGN-UP
      </button>

      {/* Mobile Menu Button */}
      <button className="lg:hidden text-black text-2xl" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FiX /> : <FiMenu />}
      </button>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center py-4 lg:hidden z-50">
          <ul className="flex flex-col space-y-4 text-gray-700 w-full text-center">
            <li className="font-bold text-black cursor-pointer py-2 border-b">Home</li>
            <li className="cursor-pointer hover:text-gray-900 py-2 border-b">About the Conference</li>
            <li className="cursor-pointer hover:text-gray-900 py-2">Key Highlights</li>
          </ul>

          {/* Sign-up Button for Mobile */}
          <button
            className="mt-4 bg-[#30B295] text-white px-5 py-2 rounded-full font-medium flex items-center gap-2 hover:bg-[#28a081]"
            onClick={() => navigate("/register")} // Navigate to /register on click
          >
            <img src={signupIcon} alt="Sign-up Icon" className="w-5 h-5" />
            SIGN-UP
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
