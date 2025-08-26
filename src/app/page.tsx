"use client";

import * as React from "react";
import { useEffect, useState, useRef } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Hero from "@/components/Hero";
import Roles from "@/components/Roles";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const parallaxRef = useRef<any>(null);
  const alignCenter = { display: "flex", alignItems: "center" };
  const lastScrollTime = useRef(0);
  const scrollVelocity = useRef(0);

  const firstParagraph =
    "I'm Hailey, a CS student at MIT with experience in full stack development and machine learning.";
  const secondParagraph =
    "In my free time, I enjoy reading, photography, running, and going to hackathons.";

  const firstWords = firstParagraph.split(" ");
  const secondWords = secondParagraph.split(" ");
  const totalWords = firstWords.length + secondWords.length;

  const boldWords = new Set([
    "CS",
    "student",
    "at",
    "MIT",
    "full",
    "stack",
    "development",
    "machine",
    "learning.",
  ]);

  useEffect(() => {
    const handleParallaxScroll = () => {
      if (parallaxRef.current) {
        const now = Date.now();
        const container = parallaxRef.current.container.current;
        const scrollTop = container.scrollTop;
        const maxScroll = container.scrollHeight - container.clientHeight;

        sessionStorage.setItem("scrollPosition", scrollTop.toString());

        // scroll velocity
        const deltaTime = now - lastScrollTime.current;
        const deltaScroll = Math.abs(
          scrollTop - (scrollVelocity.current || scrollTop)
        );
        const velocity = deltaTime > 0 ? deltaScroll / deltaTime : 0;

        // throttle if scrolling too fast
        if (velocity > 1.25 && deltaTime < 15) {
          return;
        }

        lastScrollTime.current = now;
        scrollVelocity.current = scrollTop;

        const animationStart = maxScroll * 0.2;
        const animationEnd = maxScroll * 0.6;
        const animationSpan = animationEnd - animationStart;
        const animationProgress =
          Math.max(0, scrollTop - animationStart) / Math.max(animationSpan, 1);
        const progress = Math.min(animationProgress, 1);

        setScrollProgress(progress);
      }
    };

    const timer = setTimeout(() => {
      if (parallaxRef.current) {
        const container = parallaxRef.current.container.current;
        container.addEventListener("scroll", handleParallaxScroll);

        // restore scroll position when refreshing
        const savedScrollPosition = sessionStorage.getItem("scrollPosition");
        if (savedScrollPosition) {
          container.scrollTop = parseInt(savedScrollPosition, 10);
        }

        handleParallaxScroll();
      }
    }, 100);

    return () => {
      clearTimeout(timer);
      if (parallaxRef.current?.container?.current) {
        parallaxRef.current.container.current.removeEventListener(
          "scroll",
          handleParallaxScroll
        );
      }
    };
  }, []);

  const visibleWordsTotal = Math.floor(scrollProgress * totalWords);
  const firstParagraphWords = Math.min(visibleWordsTotal, firstWords.length);
  const secondParagraphWords = Math.max(
    0,
    visibleWordsTotal - firstWords.length
  );

  const visibleFirstWords = firstWords.slice(0, firstParagraphWords);
  const visibleSecondWords = secondWords.slice(0, secondParagraphWords);

  const renderWords = (words: string[]) => {
    return words.map((word, index) => {
      const isBold = boldWords.has(word);
      return (
        <span key={index} className={isBold ? "font-bold" : ""}>
          {word}
          {index < words.length - 1 ? " " : ""}
        </span>
      );
    });
  };

  return (
    <div className="relative">
      <div className="mesh-gradient-background"></div>

      <Parallax ref={parallaxRef} pages={9} style={{ height: "100vh" }}>
        {/* Hero */}
        <ParallaxLayer
          offset={0}
          speed={0.2}
          style={{ ...alignCenter, justifyContent: "center" }}
        >
          <div className="flex flex-col items-center justify-center h-full relative">
            <Hero />
            <Roles />
          </div>
        </ParallaxLayer>

        {/* About */}
        <ParallaxLayer
          sticky={{ start: 1, end: 5 }}
          style={{ ...alignCenter, justifyContent: "center" }}
        >
          <div className="w-full max-w-[74rem] flex flex-col px-4 md:px-8 lg:px-16">
            <div className="relative mb-16 text-center lg:text-right mb-8">
              <div className="absolute inset-0 flex flex-col items-center lg:items-end justify-center pointer-events-none">
                <h2 className="text-5xl lg:text-6xl font-normal text-white/20 tracking-wide transform -translate-y-8">
                  ABOUT ME
                </h2>
                <h2 className="text-5xl lg:text-6xl font-normal text-white/20 tracking-wide transform translate-y-8">
                  ABOUT ME
                </h2>
              </div>
              <h2 className="text-5xl lg:text-6xl font-normal text-text-dark tracking-wide whitespace-nowrap relative z-10">
                ABOUT ME
              </h2>
            </div>
            <div className="flex flex-col md:flex-row items-center md:gap-24 gap-12 z-10">
              <div className="w-full max-w-sm md:w-120 order-2 md:order-1">
                <div className="backdrop-blur-md bg-white/10 border-2 border-white/30 rounded-2xl p-4 shadow-lg">
                  <img
                    src="/about/apple1.jpeg"
                    alt="Hailey Pan"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
              </div>
              <div className="w-full md:w-160 text-center md:text-right order-1 md:order-2 px-4 mt-8 md:mt-0 md:px-0">
                <h3 className="text-xl lg:text-2xl text-text-dark leading-relaxed mb-12">
                  {renderWords(visibleFirstWords)}
                </h3>
                {visibleSecondWords.length > 0 && (
                  <p className="text-xl lg:text-2xl text-text-dark leading-relaxed">
                    {renderWords(visibleSecondWords)}
                  </p>
                )}
              </div>
            </div>
          </div>
        </ParallaxLayer>

        {/* Experience */}
        <ParallaxLayer
          offset={6}
          speed={0}
          style={{ ...alignCenter, justifyContent: "center" }}
        >
          <Experience />
        </ParallaxLayer>

        {/* Projects */}
        <ParallaxLayer
          offset={7}
          speed={0}
          style={{ ...alignCenter, justifyContent: "center" }}
        >
          <Projects />
        </ParallaxLayer>

        {/* Contact */}
        <ParallaxLayer
          offset={8}
          speed={0.2}
          style={{ ...alignCenter, justifyContent: "center" }}
        >
          <Contact />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}
