import React, { useEffect, useState, useRef } from "react";
import ProfilePic from "../assets/profile_pic.jpg";
import "../index.css";

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
      className="min-h-screen w-screen flex items-center justify-center bg-lighter-blue dark:bg-navy py-20 px-10"
      id="about"
      ref={aboutRef}
    >
      <div className="text-center max-w-5xl w-full px-4">
        <h2
          className={`text-black text-3xl font-bold text-white dark:text-off-white mb-8 transition-opacity duration-700 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          About Me
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-around gap-8">
          <div
            className={`text-navy dark:text-light-blue text-xl text-left transition-opacity duration-700 ${
              isVisible ? "animate-flyInFromBottom" : ""
            }`}
          >
            <p className="py-2 text-md">
              Since my first high school webdev class, I've been an avid web,{" "}
              <a
                href="https://www.congressionalappchallenge.us/21-va11/"
                className="underline underline-offset-4 text-brighter-coral dark:text-coral"
                target="_blank"
              >
                mobile
              </a>{" "}
              and AI developer. Though I started in computational biology
              research, I've grown to love software development. I started out
              by creating simple tools for healthcare clinics, then expanded to
              create all kinds of applications that aimed to solve other
              problems I saw (check them out below!!).
              <br />
              <br />
              Outside of programming, I enjoy leadership and LOVE working in a
              team, and have held such roles as a part of{" "}
              <a
                href="https://woodsonscioly.org/"
                className="underline underline-offset-4 text-brighter-coral dark:text-coral"
                target="_blank"
              >
                Science Olympiad
              </a>
              , Computer Science Honor Society, and IT Girls club.
            </p>
            <p className="py-2">
              <span className="underline underline-offset-4">Currently...</span>
              <br />
              <br />
              <b>• Learning</b> Next.js
              <br />
              <br />
              <b>• Listening to</b>
              <i> Eastside</i> by Lyn Lapid
              <br />
              <br />
              <b>• Spending time</b> geocaching🪨, growing plants🪴, running🏃‍♀️,
              and eating Chipotle Burritos🌯
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
