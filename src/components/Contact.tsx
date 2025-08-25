import React from "react";
import Gallery from "./Gallery";

const Contact = () => {
  const contactLinks = [
    {
      name: "Email",
      url: "mailto:hpan27@mit.edu",
    },
    {
      name: "GitHub",
      url: "https://github.com/hap196",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/haileypan",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow flex flex-col justify-center px-16">
        <div className="w-full max-w-[74rem] flex flex-col mx-auto text-center">
          <div className="mb-16">
            <div className="pointer-events-none flex flex-col items-center">
              <h1 className="text-7xl lg:text-8xl font-normal text-white/20 tracking-wide whitespace-nowrap">
                GET IN TOUCH
              </h1>
              <h1 className="text-7xl lg:text-8xl font-normal text-text-dark tracking-wide whitespace-nowrap">
                GET IN TOUCH
              </h1>
              <h1 className="text-7xl lg:text-8xl font-normal text-white/20 tracking-wide whitespace-nowrap">
                GET IN TOUCH
              </h1>
            </div>
          </div>

          <div className="flex justify-center items-center relative z-10 mt-16">
            <div className="flex items-center space-x-8">
              {contactLinks.map((link, index) => (
                <React.Fragment key={index}>
                  <a
                    href={link.url}
                    target={link.name !== "Email" ? "_blank" : undefined}
                    rel={
                      link.name !== "Email" ? "noopener noreferrer" : undefined
                    }
                    className="text-2xl text-text-dark tracking-wide hover:text-gray-600 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                  {index < contactLinks.length - 1 && (
                    <span className="text-text-dark text-lg">✦</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* <div className="mt-auto">
        <Gallery />
      </div> */}
      <div className="text-center py-8">
        <p className="text-gray-500 text-sm">Copyright 2025</p>
      </div>
    </div>
  );
};

export default Contact;
