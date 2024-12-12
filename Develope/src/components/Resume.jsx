import React from "react";

function Resume() {
  const frontEndSkills = [
    "HTML & CSS",
    "JavaScript (ES6+)",
    "React.js",
    "TypeScript",
    "Tailwind CSS",
    "Bootstrap",
    "Webpack",
    "Responsive Design",
    "GraphQL",
  ];

  const backEndSkills = [
    "Node.js",
    "Express.js",
    "MongoDB",
    "REST APIs",
    "SQL & PostgreSQL",
    "Python",
    "Django",
    "Microservices",
    "Authentication & Authorization",
  ];

  return (
    <div className="bg-black text-white py-20" id="resume">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Resume</h2>
        <div className="text-center mb-8">
          <a
            href="https://drive.google.com/uc?export=download&id=1O7hgqJYq_1kDucq_XTYT12NSk_D4-0P_"
            download="Juan_Girelli_Resume"
            className="inline-block bg-gradient-to-r from-blue-400 to-green-500 text-white px-4 py-2 rounded-full hover:from-orange-500 hover:to-yellow-400 transform transition-transform duration-300 hover:scale-110"
          >
            Download Resume
          </a>
        </div>
        <div className="mt-8">
          <h3 className="text-3xl font-bold text-center mb-12">
            Proficiencies
          </h3>
          <div className="flex flex-col md:flex-row justify-center items-center md:space-x-16">
            {/* Front-End Skills */}
            <div className="flex-1 text-center">
              <h4 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-8 text-center">Front-End</h4>
              <ul className="list-inside text-gray-300 text-lg space-y-2">
                {frontEndSkills.map((skill, index) => (
                  <li key={index} className="hover:text-green-400 transition-colors">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
            {/* Back-End Skills */}
            <div className="flex-1 text-center mt-8 md:mt-0">
              <h4 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-8 text-center">Back-End</h4>
              <ul className=" list-inside text-gray-300 text-lg space-y-2">
                {backEndSkills.map((skill, index) => (
                  <li key={index} className="hover:text-green-400 transition-colors">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;