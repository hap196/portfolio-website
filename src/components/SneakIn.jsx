import React, { useEffect, useState, useRef } from "react";
import MotifImage from "../assets/sneakin.png";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const SneakIn = () => {
  const [isVisible, setIsVisible] = useState(false);
  const antibodyRef = useRef(null);

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

    if (antibodyRef.current) {
      observer.observe(antibodyRef.current);
    }

    return () => {
      if (antibodyRef.current) {
        observer.unobserve(antibodyRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={antibodyRef}
      className={`flex flex-col lg:flex-row relative items-center mx-auto px-10 max-w-5xl ${
        isVisible ? "float-up" : ""
      }`}
    >
      <div className="w-full lg:absolute right-10 mb-10 md:pl-0 lg:pl-72 z-10">
        <div className="flex justify-center lg:justify-end">
          <div className="text-center lg:text-right">
            <h3 className="font-semibold text-lg pb-2 text-brighter-coral dark:text-coral">
              Featured Project
            </h3>
            <h3 className="font-bold text-2xl pb-2 text-black dark:text-off-white">
              SneakIn
            </h3>
            <div
              className={`bg-light-blue-2 dark:bg-dark-blue p-4 my-3 max-w-lg rounded-md shadow-lg shadow-black transition-opacity duration-700 ${
                isVisible ? "animate-floatUp" : ""
              }`}
            >
              <p className="text-md text-navy dark:text-light-blue">
                An interactive webapp where users can input sneaker
                details and predict the shoe's current and future sales prices
                to help make informed decisions for favorable purchases and
                profitable transactions.
              </p>
            </div>
            <div className="flex justify-center lg:justify-end space-x-2 mt-4 text-sm font-semibold text-navy dark:text-light-blue">
              <span className="px-3 py-1">React</span>
              <span className="pl-3 py-1">Python</span>
              <span className="pl-3 py-1">Flask</span>
              <span className="pl-3 py-1">Tensorflow</span>
            </div>
            <div className="flex justify-center lg:justify-end space-x-5 text-xl mt-4 text-navy dark:text-light-blue">
              <a
                href="https://github.com/hap196/SneakIn"
                target="_blank"
                className="hover:text-brighter-coral dark:hover:text-coral"
              >
                <FaGithub />
              </a>
              <a
                href="https://sneakin-ai.vercel.app/"
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
        src={MotifImage}
        alt="Antibody Motif"
        className="rounded-xl z-0 lg:mr-auto w-full transition-all duration-700 ${isVisible ? 'animate-floatUp' : ''}"
        style={{ maxWidth: "70%", maxHeight: "800px", height: "auto" }}
      />
    </div>
  );
};

export default SneakIn;
