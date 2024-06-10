import React, { useState } from 'react';
import { FaPaperPlane } from 'react-icons/fa';
import emailjs from 'emailjs-com';

const Contact = () => {

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_7d7t0ne',
      'template_ckq9bmn',
      e.target,
      'EGxbaD8PGrPd88r1z'
    ).then((result) => {
      alert('Email sent successfully!');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
      });
    }, (error) => {
      alert('Error sending email.');
    });
  };

  return (
    <div
      id="contact"
      className="w-screen h-screen bg-slate-300 bg-lighter-blue dark:bg-navy flex flex-col items-center justify-center px-4 py-32 md:pt-64"
    >
      <h1 className="text-3xl md:text-3xl font-bold text-black dark:text-off-white mb-8 md:mb-12">
        Get In Touch
      </h1>
      {/* Form */}
      <div className="w-full max-w-xl md:max-w-2xl bg-slate-300 bg-lighter-blue dark:bg-navy text-white p-8 rounded">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              className="flex-1 p-4 md:p-6 rounded bg-lighter-blue border-light-blue-2 dark:bg-dark-blue border-2 dark:border-dark-blue text-md focus:border-dark-blue focus:text-dark-blue dark:focus:border-light-blue dark:focus:text-light-blue outline-none"
              value={formData.firstName}
              onChange={handleChange}
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              className="flex-1 p-4 md:p-6 rounded bg-lighter-blue border-light-blue-2 dark:bg-dark-blue border-2 dark:border-dark-blue text-md focus:border-dark-blue focus:text-dark-blue dark:focus:border-light-blue dark:focus:text-light-blue outline-none"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full p-4 md:p-6 rounded bg-lighter-blue border-light-blue-2 dark:bg-dark-blue border-2 dark:border-dark-blue text-md focus:border-dark-blue focus:text-dark-blue dark:focus:border-light-blue dark:focus:text-light-blue outline-none"
            value={formData.email}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Message"
            className="w-full p-4 md:p-6 rounded bg-lighter-blue border-light-blue-2 dark:bg-dark-blue border-2 dark:border-dark-blue text-md focus:border-dark-blue focus:text-dark-blue dark:focus:border-light-blue dark:focus:text-light-blue outline-none"
            rows="4"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          <button
            type="submit"
            className="relative overflow-hidden bg-lighter-blue dark:bg-navy mt-10 text-lg font-bold px-6 py-5 w-full rounded-lg border-2 border-coral shadow-md shadow-coral/50 transition duration-300 ease-in-out btn-slide-fill"
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
