import React, { useState, useEffect } from "react";

const Home = () => {
  const [index, setIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const words = ["polished websites.", "easy-to-use mobile apps.", "innovative startups."];

  useEffect(() => {
    const currentIndex = index % words.length;
    const fullWord = words[currentIndex];

    const updateText = () => {
      const updateRate = isDeleting ? 120 : 90; // faster delete rate
      setTimeout(() => {
        setCurrentText(fullWord.substring(0, currentText.length + (isDeleting ? -1 : 1)));
      }, updateRate);
    };

    if (!isDeleting && currentText === fullWord) {
      // Word fully typed, wait before deleting
      setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && currentText === '') {
      // Word fully deleted, move to next word
      setIsDeleting(false);
      setIndex(currentIndex + 1);
    } else {
      updateText();
    }
  }, [currentText, index, isDeleting, words]);

  return (
    <div className="h-screen w-screen bg-lighter-blue dark:bg-navy flex justify-center items-center p-4">
      <div className="flex flex-col justify-center h-full w-full text-left max-w-7xl mx-10 lg:mx-28">
        <div>
          <h5 className="text-2xl text-brighter-coral dark:text-coral pb-4">Hey! My name is</h5>
          <h1 className="text-6xl md:text-8xl font-bold text-black dark:text-off-white py-2">
            Hailey Pan.
          </h1>
          <h2 className="text-6xl md:text-8xl font-bold text-darker-blue dark:text-light-blue py-2">
            I build {currentText}
            <span className="blink-cursor w-48">|</span>
          </h2>
          <p className="text-xl md:text-2xl mt-8 md:mt-14 text-darker-blue dark:text-light-blue w-full md:w-3/5">
            Thanks for checking out my website! I'm a computer science student
            at MIT excited about using software and AI to tackle issues in&nbsp;
            <a
              href="https://www.media.mit.edu/projects/sierra-leone-prosthetics-orthotics/overview/"
              className="text-brighter-coral dark:text-coral underline underline-offset-8 dark:hover:text-dark-coral"
            >
              healthcare
            </a>
            . I'm also very interested in entrepreneurship and recently
            co-founded a&nbsp;
            <a
              href="https://folio-ai-website.vercel.app/"
              className="text-brighter-coral dark:text-coral underline underline-offset-8 dark:hover:text-dark-coral"
            >
              startup
            </a>
            &nbsp;focused on democratizing the college admissions process.
          </p>
          <a
            href="https://github.com/hap196"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="relative overflow-hidden dark:bg-navy mt-10 text-xl font-bold px-6 py-4 rounded-lg border-2 border-coral shadow-md shadow-coral/50 transition duration-300 ease-in-out btn-slide-fill">
              Check out my Github!
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
