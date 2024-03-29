import React, { useEffect, useState, useRef } from "react";
import FolioLandingImage from "../assets/foliolandingpage.png";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import "../index.css"

const Folio = () => {
  const [isVisible, setIsVisible] = useState(false);
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  return (
    <div
      className="flex flex-col lg:flex-row relative items-center lg:mx-auto px-10"
      style={{ maxWidth: "1200px" }}
    >
      <div className="w-full lg:absolute lg:right-10 lg:pl-72 z-10 mt-10 lg:mt-0">
        <div className="flex justify-center lg:justify-end">
          <div className="text-center lg:text-right">
            <h3 className="font-semibold text-lg pb-2 text-brighter-coral dark:text-coral">
              Featured Project
            </h3>
            <h3 className="font-bold text-3xl pb-2 text-black dark:text-off-white">
              Folio
            </h3>
            <div
              className={`bg-light-blue-2 dark:bg-dark-blue p-4 my-3 max-w-lg rounded-md shadow-lg shadow-black transition-opacity duration-700 ${
                isVisible ? "animate-flyInFromBottom" : ""
              }`}
            >
              <p className="text-lg text-navy dark:text-light-blue">
                A personalized and accessible AI-powered college advisor aimed
                at helping high school students navigate the competitive college
                admissions process. The app focuses on developing their
                portfolios – the culmination of their courses, extracurriculars,
                and awards - to maximize their academic potential.
              </p>
            </div>
            <div className="flex justify-center lg:justify-end space-x-2 mt-4 text-md font-semibold text-navy dark:text-light-blue">
              <span className="px-3 py-1 text-blue-800">Swift</span>
              <span className="px-3 py-1 text-blue-800">Firebase</span>
              <span className="pl-3 py-1 text-blue-800">Node.js</span>
            </div>
            <div className="flex justify-center lg:justify-end space-x-5 text-xl mt-4 text-navy dark:text-light-blue">
              <a
                href="https://github.com/hap196/folio-app"
                target="_blank"
                className="hover:text-brighter-coral dark:hover:text-coral"
              >
                <FaGithub />
              </a>
              <a
                href="https://youtu.be/nptzYukaxPo"
                target="_blank"
                className="hover:text-brighter-coral dark:hover:text-coral"
              >
                <FaExternalLinkAlt />
              </a>
            </div>
          </div>
        </div>
      </div>
      <img
        src={FolioLandingImage}
        alt="Folio Landing Page"
        className="rounded-xl z-0 w-full lg:mr-auto mt-10 lg:mt-0"
        style={{ maxWidth: "70%", maxHeight: "800px", height: "auto" }}
      />
    </div>
  );
};

export default Folio;
