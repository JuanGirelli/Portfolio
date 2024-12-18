import React from "react";
import HeroImage from "../assets/IMG_8485.jpg";

function Hero() {
  return (
    <div className="bg-black  text-white text-center py-20" id="hero">
      <img
        src={HeroImage}
        alt="Hero"
        className="mx-auto mb-8 w-48 h-38 rounded-full object-cover transform transition-transform duration-300 hover:scale-105"
      />
      <h1 className="text-4x1 font-bold">
        I'm{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
          Juan Girelli
        </span>
        , Full-Stack Developer
      </h1>
      <p className="mt-4 max-w- px-4 mx-auto text-lg text-gray-300">
        I specialize in building high-quality websites and applications with a focus on user experience. I am passionate about creating functional websites that help businesses grow and succeed.
      </p>
      <div className="mt-8 space-x-4">
        <a
          href="/contact"
          className="inline-block bg-gradient-to-r from-blue-400 to-green-500 text-white px-4 py-2 rounded-full hover:from-orange-500 hover:to-yellow-400 transform transition-transform duration-300 hover:scale-110"
        >
          Connect With Me
        </a>
        <a
          href="/resume"
          className="inline-block bg-gradient-to-r from-green-400 to-yellow-500 text-white px-4 py-2 rounded-full hover:from-orange-500 hover:to-yellow-400 transform transition-transform duration-300 hover:scale-110"
        >
          Resume
        </a>
      </div>
    </div>
  );
}

export default Hero;