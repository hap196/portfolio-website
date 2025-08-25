"use client";

import { useState } from "react";
import Link from "next/link";
import { Send_Flowers } from "next/font/google";

const sendFlowers = Send_Flowers({
  variable: "--font-send-flowers",
  subsets: ["latin"],
  weight: "400",
});

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/experience", label: "Experience" },
    { href: "/works", label: "Works" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      <nav className="absolute top-0 left-0 right-0 z-50 px-16 py-8">
        <div className="flex justify-between items-center">
          <Link
            href="/"
            className={`${sendFlowers.className} text-4xl text-text-dark`}
          >
            HP
          </Link>
          <button
            onClick={toggleMenu}
            className="text-2xl tracking-wider text-text-dark z-50"
            aria-label="Toggle menu"
          >
            {isOpen ? "Close" : "Menu"}
          </button>
        </div>
      </nav>
      <div
        className={`fixed inset-0 z-40 bg-[#fde8f0] backdrop-blur-lg transition-transform duration-500 ease-in-out ${
          isOpen ? "transform translate-y-0" : "transform -translate-y-full"
        }`}
        style={{ backgroundColor: "hsla(340, 60%, 96%, 0.8)" }}
      >
        <div className="flex flex-col items-center justify-center h-full">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={toggleMenu}
              className="text-6xl text-text-dark my-6 transition-colors duration-300 hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
