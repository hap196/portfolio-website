import React, { useState, useEffect } from "react";

const Home = () => {
  const [index, setIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const words = [
    "React fiend.",
    "full-stack developer.",
    "startup enthusiast.",
    "lover of all things INNOVATION.",
    "mobile developer.",
  ];

  useEffect(() => {
    const currentIndex = index % words.length;
    const fullWord = words[currentIndex];

    const updateText = () => {
      const updateRate = isDeleting ? 120 : 90; // faster delete rate
      setTimeout(() => {
        setCurrentText(
          fullWord.substring(0, currentText.length + (isDeleting ? -1 : 1))
        );
      }, updateRate);
    };

    if (!isDeleting && currentText === fullWord) {
      setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && currentText === "") {
      setIsDeleting(false);
      setIndex(currentIndex + 1);
    } else {
      updateText();
    }
  }, [currentText, index, isDeleting, words]);

  return (
    <div
      className="min-h-screen w-screen bg-lighter-blue dark:bg-navy flex justify-center items-center py-20 px-10"
      id="home"
    >
      <div className="flex flex-col justify-center h-full w-full text-left max-w-7xl px-4 lg:mx-28">
        <div>
          <h5 className="text-xl text-brighter-coral dark:text-coral pb-4 float-up float-up-delay-1">
            Hey! My name is
          </h5>
          <h2 className="text-5xl md:text-7xl font-bold text-black dark:text-off-white py-2 float-up float-up-delay-2">
            Hailey Pan.
          </h2>
          <h2 className="text-5xl md:text-7xl font-bold text-darker-blue dark:text-light-blue py-2 float-up float-up-delay-3">
            I'm a {currentText}
            <span className="blink-cursor w-48">|</span>
          </h2>
          <p className="text-xl md:text-xl mt-8 md:mt-14 text-darker-blue dark:text-light-blue w-full md:w-3/5 float-up float-up-delay-4">
            I'm a Computer Science student at <span className="text-coral">MIT</span> excited about building my{" "}
            <span className="text-coral">next big idea</span>.
          </p>
          <p className="text-xl md:text-xl mt-2 md:mt-4 text-darker-blue dark:text-light-blue w-full md:w-3/5 float-up float-up-delay-4">
            There's nothing I love more than identifying problems in the world
            and using the tools I have to solve them. I truly live by the idea
            of <span className="text-coral">coding for good</span> while having fun doing so.
          </p>
          <a
            href="https://github.com/hap196"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="relative overflow-hidden dark:bg-navy mt-10 text-lg font-bold px-6 py-4 rounded-lg border-2 border-coral shadow-md shadow-coral/50 transition duration-300 ease-in-out btn-slide-fill float-up float-up-delay-5">
              Stop by my Github (please)!
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
