import React from "react";
import AboutImage from "../assets/IMG_8485.jpg";

function About() {
    return (
        <div className="bg-black text-white py-20" id="about">
            <div className="container mx-auto px-8 md:px-16 lg:px-24">
                <h2 className="text-4xl font-bold text-center mb-12">Hi Nice To Meet You!</h2>
                <div className="flex flex-col md:flex-row items-center md:space-x-12">
                    <img src={AboutImage} alt="About" className="w-72 mx-auto mb-8 w-48 h-38 rounded-full object-cover transform transition-transform duration-300 hover:scale-105 rounded object-cover mb-8 md:mb-0" />
                    <div className="felx-1">
                        <p className="text-lg mb-8">
                            I am a Full-Stack Developer with a passion for creating beautiful and functional websites. I have a strong foundation in web development and programming. I am proficient in HTML, CSS, JavaScript, React, Node.js, Express, and MongoDB. I am a quick learner and always eager to learn new technologies. I am a team player and have excellent communication skills. I am a creative thinker and always looking for new ways to solve problems. I am a hard worker and always strive to deliver high-quality work. I am looking for an opportunity to work with a team of talented developers and designers to create amazing websites and applications.
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-center">
                                <label htmlFor="htmlandcss" className="w-2/12">HTML & CSS</label>
                                <div className="grow bg-gray-800 rounded-full h-2.5">
                                    <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-11/12">
                                    </div>

                                </div>
                            </div>
                            <div className="flex items-center">
                                <label htmlFor="htmlandcss" className="w-2/12">REACT JS</label>
                                <div className="grow bg-gray-800 rounded-full h-2.5">
                                    <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-9/12">
                                    </div>

                                </div>
                            </div>
                            <div className="flex items-center">
                                <label htmlFor="htmlandcss" className="w-2/12">NODE JS</label>
                                <div className="grow bg-gray-800 rounded-full h-2.5">
                                    <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-8/12">
                                    </div>

                                </div>
                                
                            </div>
                            
                        </div> 
                        <div className="mt-12 flex justify-between text-center ">
                            <div>
                                <h3 className="text-2x1 font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                                1+
                                </h3>
                                <p>Years Experience</p>
                            </div>
                            <div>
                                <h3 className="text-2x1 font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                                10+
                                </h3>
                                <p>Projectsn completed</p>
                            </div>
                            <div>
                                <h3 className="text-2x1 font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                                10+
                                </h3>
                                <p>Satisfied Clients</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default About;