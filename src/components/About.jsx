import React from "react";
import ProfilePic from "../assets/profile_pic.jpg";

const About = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-lighter-blue dark:bg-navy">
      <div className="text-center max-w-4xl mx-10 w-full px-4">
        <h2 className="text-black text-4xl font-bold text-white dark:text-off-white mb-8">About Me</h2>
        <div className="flex flex-col md:flex-row items-center justify-around gap-8">
          <div className="text-navy dark:text-light-blue text-xl text-left">
            <p className="py-2 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur.
            </p>
            <p className="py-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur.
            </p>
          </div>
          <img
            src={ProfilePic}
            alt="Profile"
            className="rounded max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg shadow-offset-coral"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
