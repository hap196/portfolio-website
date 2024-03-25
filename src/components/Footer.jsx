import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaSpotify } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-300 text-white flex flex-col justify-center items-center p-12 w-full bg-lighter-blue text-navy dark:bg-navy dark:text-light-blue">
      <div className="lg:hidden flex justify-center space-x-4 mb-4">
        <a href="https://github.com/hap196" target="_blank" className="hover:text-gray-300">
          <FaGithub size="1.5em" />
        </a>
        <a href="https://linkedin.com/in/haileypan" target="_blank" className="hover:text-gray-300">
          <FaLinkedin size="1.5em" />
        </a>
        <a href="https://www.instagram.com/hailey.pan/" target="_blank" className="hover:text-gray-300">
          <FaInstagram size="1.5em" />
        </a>
        <a href="https://spotify.com" target="_blank" className="hover:text-gray-300">
          <FaSpotify size="1.5em" />
        </a>
      </div>
      <div>
        <p>© 2024 Hailey Pan. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
