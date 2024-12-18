import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav className="bg-black text-white fixed top-0 left-0 w-full z-50 shadow-md">
      <div className=" py-2 px-8 md:px-16 lg:px-24 flex justify-center justify-between items-center">
        <div className="text-2xl font-bold hidden md:inline">Juan Girelli</div>
        <div className="space-x-6">
          <Link to="/" className="hover:text-gray-400">Home</Link>
          <Link to="/about" className="hover:text-gray-400">About Me</Link>
          <Link to="/resume" className="hover:text-gray-400">Resume</Link>
          <Link to="/projects" className="hover:text-gray-400">Portfolio</Link>
          <Link to="/contact" className="hover:text-gray-400">Contact</Link>
        </div>
        <Link
          to="/contact"
          className="bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full"
        >
          Connect With Me
        </Link>
      </div>
    </nav>
  );
}

export default Navigation;