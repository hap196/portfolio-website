import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaSpotify } from "react-icons/fa";

const SocialSidebar = () => {
  return (
    <div className="hidden lg:flex flex-col items-center fixed left-10 top-3/4 transform -translate-y-1/2 z-50 text-xl text-navy dark:text-light-blue">
      <a
        href="https://github.com/hap196"
        target="_blank"
        className="text-white hover:text-brighter-coral coraldark:hover:text-coral mb-6"
      >
        <FaGithub size="1.5em" />
      </a>
      <a
        href="https://linkedin.com/in/haileypan"
        target="_blank"
        className="text-white hover:text-brighter-coral dark:hover:text-coral mb-6"
      >
        <FaLinkedin size="1.5em" />
      </a>
      <a
        href="https://www.instagram.com/hailey.pan/"
        target="_blank"
        className="text-white hover:text-brighter-coral dark:hover:text-coral mb-6"
      >
        <FaInstagram size="1.5em" />
      </a>
      <a
        href="https://spotify.com"
        target="_blank"
        className="text-white hover:text-brighter-coral dark:hover:text-coral"
      >
        <FaSpotify size="1.5em" />
      </a>
    </div>
  );
};

export default SocialSidebar;
