import React from "react";
import { FaPaperPlane } from "react-icons/fa";

const Contact = () => {
  return (
    <div
      id="contact"
      className="w-screen h-screen bg-slate-300 bg-lighter-blue dark:bg-navy flex flex-col items-center justify-center p-4 md:pt-64"
    >
      <h1 className="text-3xl md:text-4xl font-bold text-black dark:text-off-white mb-8 md:mb-12">
        Get In Touch
      </h1>
      {/* Form */}
      <div className="w-full max-w-xl md:max-w-2xl bg-slate-300 bg-lighter-blue dark:bg-navy text-white p-8 rounded">
        <form className="space-y-6">
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="First Name"
              className="flex-1 p-4 md:p-6 rounded bg-lighter-blue border-light-blue-2 dark:bg-dark-blue border-2 dark:border-dark-blue text-lg md:text-xl focus:border-dark-blue focus:text-dark-blue dark:focus:border-light-blue dark:focus:text-light-blue outline-none"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="flex-1 p-4 md:p-6 rounded bg-lighter-blue border-light-blue-2 dark:bg-dark-blue border-2 dark:border-dark-blue text-lg md:text-xl focus:border-dark-blue focus:text-dark-blue dark:focus:border-light-blue dark:focus:text-light-blue outline-none"
            />
          </div>
          <input
            type="email"
            placeholder="Email"
            className="w-full p-4 md:p-6 rounded bg-lighter-blue border-light-blue-2 dark:bg-dark-blue border-2 dark:border-dark-blue text-lg md:text-xl focus:border-dark-blue focus:text-dark-blue dark:focus:border-light-blue dark:focus:text-light-blue outline-none"
          />
          <textarea
            placeholder="Message"
            className="w-full p-4 md:p-6 rounded bg-lighter-blue border-light-blue-2 dark:bg-dark-blue border-2 dark:border-dark-blue text-lg md:text-xl focus:border-dark-blue focus:text-dark-blue dark:focus:border-light-blue dark:focus:text-light-blue outline-none"
            rows="4"
          ></textarea>
          <button
            type="submit"
            className="relative overflow-hidden bg-lighter-blue dark:bg-navy mt-10 text-2xl font-bold px-6 py-5 w-full rounded-lg border-2 border-coral shadow-md shadow-coral/50 transition duration-300 ease-in-out btn-slide-fill"
          >
            <FaPaperPlane className="inline-block mr-2" />
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
