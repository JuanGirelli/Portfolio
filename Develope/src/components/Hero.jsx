import React from "react";
import HeroImage from "../assets/IMG_8485.jpg";


 function Hero () {
  return (
    <div className="bg-black text-white text-center py-16" id="hero">
      <img src={HeroImage} alt="Hero" className="mx-auto mb-8 w-48 h-38 rounded-full object-cover transform transition-transform duration-300 hover:scale-105"/>
      <h1 className="text-4x1 font-bold">
        I'm {" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">Juan Girelli</span>
        , Full-Stack Developer
      </h1>
      <p className="mt-4 text-lg text-gray-300">
        I specialize in building high-quality websites and applications. 
      </p>
      <div className="mt-8 space-x-4 ">
      <a
            href="#contact"
            className="bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full"
          >
            Connect With Me
          </a>
          <a
            href="https://drive.google.com/uc?export=download&id=1O7hgqJYq_1kDucq_XTYT12NSk_D4-0P_"
            className="bg-gradient-to-r from-green-400 to-yellow-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full"
          >
             Resume
          </a>
      </div>
    </div>
  );
}
export default Hero;