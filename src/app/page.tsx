"use client";

import * as React from "react";
import { useEffect, useState, useRef } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Hero from "@/components/Hero";
import Roles from "@/components/Roles";

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

      <Parallax ref={parallaxRef} pages={4.8} style={{ height: "100vh" }}>
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
          sticky={{ start: 0.8, end: 2.8 }}
          style={{ ...alignCenter, justifyContent: "center" }}
        >
          <div className="flex items-center gap-24 z-10">
            <div className="w-96">
              <img
                src="/about/me.jpeg"
                alt="Hailey Pan"
                className="w-96 h-full object-cover rounded-2xl shadow-xl border-4 border-white"
              />
            </div>
            <div className="w-140 text-right">
              <h3 className="font-playfair text-xl lg:text-2xl text-black leading-relaxed mb-12">
                {renderWords(visibleFirstWords)}
              </h3>
              {visibleSecondWords.length > 0 && (
                <p className="font-playfair text-xl lg:text-2xl text-black leading-relaxed">
                  {renderWords(visibleSecondWords)}
                </p>
              )}
            </div>
          </div>
        </ParallaxLayer>

        {/* Experiences */}
        <ParallaxLayer
          offset={3.8}
          speed={0}
          style={{ ...alignCenter, justifyContent: "center" }}
        >
          <div className="flex flex-col items-center justify-center h-full text-center">
            <h1 className="font-playfair text-8xl lg:text-9xl font-normal text-text-dark tracking-wide relative z-10 mb-8">
              EXPERIENCES
            </h1>
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}
