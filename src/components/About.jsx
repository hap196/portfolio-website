
import React, { useEffect, useState, useRef } from "react";
import ProfilePic from "../assets/profile_pic.jpg";
import "../index.css"

const About = () => {
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
      className="w-screen h-screen flex items-center justify-center bg-lighter-blue dark:bg-navy" id="about"
      ref={aboutRef}
    >
      <div className="text-center max-w-6xl mx-4 w-full px-4">
        <h2 className={`text-black text-4xl font-bold text-white dark:text-off-white mb-8 transition-opacity duration-700 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}>
          About Me
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-around gap-8">
          <div className={`text-navy dark:text-light-blue text-xl text-left transition-opacity duration-700 ${
              isVisible ? "animate-flyInFromBottom" : ""
            }`}>
           <p className="py-2 ">
              Since my first high school webdev class, I've been an avid web,{" "}
              <a
                href="https://www.congressionalappchallenge.us/21-va11/"
                className="underline underline-offset-4 text-brighter-coral dark:text-coral"
              >
                mobile
              </a>{" "}
              and AI developer. With a background in computational biology, I've
              also grown to be fascinated with healthcare tech. However, my interests
              go far beyond just this field, and what I'm most passionate
              about is creating products that solve problems for both users and
              the world.
              <br />
              <br />
              Outside of programming, I enjoy leadership, and have held such
              roles as a part of Woodson Science Olympiad, Computer Science
              Honor Society, and IT Girls.
            </p>
            <p className="py-2">
              <span className="underline underline-offset-4">Currently...</span>
              <br />
              <br />
              <b>• Learning</b> Next.js
              <br />
              <br />
              <b>• Picking up</b> figure skating
              <br />
              <br />
              <b>• Listening to</b>
              <i> Eastside</i> by Lyn Lapid
              <br />
              <br />
              <b>• Spending time</b> geocaching, growing plants, running, and
              trying new Boston-area restaurants
            </p>
          </div>
          <img
            src={ProfilePic}
            alt="Profile"
            className={`rounded max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg shadow-offset-coral transition-opacity duration-700 ${
              isVisible ? "animate-flyInFromBottom" : ""
            }`}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
