import React from 'react';
import { Link } from "react-router-dom";
import bookflixImage from '../assets/bookflix_1.png';
import TaskManagerImage from '../assets/TaskManager.png';
import PortfolioImage from '../assets/Portfolio.png';
import ComingSoonImage from  '../assets/comingsoonpage.jpg'

const projects = [
  {
    id: 1,
    name: "BookFlix",
    technologies: "API | Typescript",
    image: bookflixImage,
    github: "https://github.com/JuanGirelli/Bookflix",
    website: "https://bookflix-ekwz.onrender.com",
  },
  {
    id: 2,
    name: "Task Manager",
    technologies: "Java | HTML | CSS",
    image: TaskManagerImage,
    github: "https://github.com/JuanGirelli/Task-Manager",
    website: "https://juangirelli.github.io/Task-Manager/",
  },
  {
    id: 3,
    name: "Portfolio",
    technologies: "React | Tailwind CSS | Vite",
    image: PortfolioImage,
    github: "https://github.com/JuanGirelli/Bookflix",
    website:"https://spiffy-biscuit-3e8863.netlify.app/",
  },
  {
    id: 4,
    name: "Book MS",
    technologies: "MERN Stack",
    image: ComingSoonImage,
    github: "https://github.com/YouafKhan1",
    website: "https://bookms.example.com",
  },
  {
    id: 5,
    name: "Book MS",
    technologies: "MERN Stack",
    image: ComingSoonImage,
    github: "https://github.com/YouafKhan1",
    website: "https://bookms.example.com",
  },
  {
    id: 6,
    name: "Book MS",
    technologies: "MERN Stack",
    image: ComingSoonImage,
    github: "https://github.com/YouafKhan1",
    website: "https://bookms.example.com",
  },
];


import { FaGithub } from 'react-icons/fa';

function Project() {
  return (
    <div className="bg-black text-white py-20" id="projects">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 p-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105"
            >
              <img
                src={project.image}
                alt={project.name}
                className="rounded-lg mb-4 w-full h-48 object-cover"
              />
              <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
              <p className="text-gray-400 mb-4">{project.technologies}</p>
              <div className="flex space-x-4">
                {/* GitHub Button */}
                <a
                  href={project.github}
                  className="flex items-center justify-center bg-gray-700 hover:bg-gray-600 text-white p-2 rounded-full transition-transform duration-300 hover:scale-110"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub size={24} />
                </a>
                {/* Live Demo Button */}
                <a
                  href={project.website}
                  className="inline-block bg-gradient-to-r from-blue-400 to-green-500 text-white px-4 py-2 rounded-full hover:from-orange-500 hover:to-yellow-400 transform transition-transform duration-300 hover:scale-110"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Project;