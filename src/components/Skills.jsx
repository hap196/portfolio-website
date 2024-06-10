import React from "react";
import SkillCard from "./SkillCard";

// pulled from devicon
const skills = {
  "Programming Languages": [
    {
      name: "Java",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      experience: 6,
    },
    {
      name: "Python",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      experience: 5,
    },
    {
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      experience: 5,
    },
    {
      name: "Swift",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg",
      experience: 3,
    },
    {
      name: "C",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
      experience: 1,
    },
  ],
  Frontend: [
    {
      name: "HTML",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      experience: 5,
    },
    {
      name: "CSS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      experience: 5,
    },
    {
      name: "React",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      experience: 2,
    },
    {
      name: "Tailwind CSS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
      experience: 2,
    },
  ],
  "Backend and Databases": [
    {
      name: "Firebase",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-original.svg",
      experience: 4,
    },
    {
      name: "Flask",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
      experience: 3,
    },
    {
      name: "MongoDB",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      experience: 2,
    },
    {
      name: "Express.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      experience: 2,
    },
    {
      name: "Node.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      experience: 2,
    },
  ],
  "Data Science and AI": [
    {
      name: "Tensorflow",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
      experience: 4,
    },
    {
      name: "Scikit-learn",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg",
      experience: 4,
    },
    {
      name: "Numpy",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg",
      experience: 4,
    },
    {
      name: "Pandas",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
      experience: 4,
    },
    {
      name: "Matplotlib",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matplotlib/matplotlib-original.svg",
      experience: 2,
    },
  ],
  Tools: [
    {
      name: "Git/Github",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      experience: 4,
    },
    {
      name: "Jupyter",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg",
      experience: 4,
    },
    {
      name: "Android Studio",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg",
      experience: 4,
    },
    {
      name: "XCode",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xcode/xcode-original.svg",
      experience: 3,
    },
    {
      name: "Arduino",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg",
      experience: 3,
    },
    {
      name: "Figma",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
      experience: 1,
    },
  ],
};

const Skills = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-lighter-blue dark:bg-navy py-20 lg:py-32 px-10" id="skills">
      <div className="max-w-5xl w-full">
        <h2 className="text-3xl font-bold text-black dark:text-off-white mb-8 text-center transition-opacity duration-700">My Skills</h2>
        {Object.entries(skills).map(([category, skills]) => (
          <div key={category} className="mb-8 w-full">
            <h3 className="text-xl font-semibold text-black dark:text-off-white mb-4">{category}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {skills.map(skill => (
                <SkillCard key={skill.name} name={skill.name} icon={skill.icon} experience={skill.experience} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
