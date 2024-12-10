import React from "react";


function Navigation() {
  return (
    <nav className="bg-black text-white fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="container py-2 px-8 md:px-16 lg:px-24 flex justify-center md:justify-between items-center">
        <div className="text-2xl font-bold hidden md:inline">Juan Girelli</div>
        <div className="space-x-6">
          <a href="#hero" className="hover:text-gray-400">Home</a>
          <a href="#about" className="hover:text-gray-400">About Me</a>
          <a href="#skills" className="hover:text-gray-400">Services</a>
          <a href="#projects" className="hover:text-gray-400">Projects</a>
          <a href="#contact" className="hover:text-gray-400">Contact</a>
        </div>
        <a
          href="#contact"
          className="bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full"
        >
          Connect With Me
        </a>
      </div>
    </nav>
  );
}

export default Navigation;