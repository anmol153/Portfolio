import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';

const ContactMe = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_sk4r9ka',
      'template_2qycs6s',
      formRef.current,
      'VFxYSPulBO7qLq2T-'
    )
    .then((result) => {
      console.log(result.text);
      setDone(true);
      formRef.current.reset();
    }, (error) => {
      console.log(error.text);
    });
  };

  return (
    <div className="flex flex-col lg:flex-row border border-[#2A0E61] rounded-2xl px-6 py-12 lg:py-24 gap-10 lg:gap-20">
      
      {/* Left Section - Intro */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center">
        <span className="text-lg font-bold text-amber-600 mb-2">Hello!</span>
        <div className="text-start">
          <span className="text-4xl sm:text-6xl font-bold">I'm </span>
          <span className="text-4xl sm:text-6xl font-bold bg-gradient-to-r from-orange-400 via-blue-500 to-green-500 bg-clip-text text-transparent">
            Anmol
          </span>
        </div>
        <p className="mt-4 text-lg text-center sm:text-left bg-gradient-to-r from-green-500 via-blue-500 to-orange-400 bg-clip-text text-transparent">
          MNNIT Allahabad — CSE Pre-Final Year
        </p>
      </div>

      {/* Right Section - Contact Form */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center">
        <h1 className="text-3xl sm:text-4xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-green-400 bg-clip-text text-transparent">
          Contact Me
        </h1>

        <form ref={formRef} onSubmit={sendEmail} className="bg-black/50 shadow-lg rounded-lg p-6 w-full max-w-md">
          <div className="mb-4">
            <label className="block text-gray-300 mb-2">Your Name</label>
            <input type="text" name="user_name" required className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"/>
          </div>

          <div className="mb-4">
            <label className="block text-gray-300 mb-2">Your Email</label>
            <input type="email" name="user_email" required className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"/>
          </div>

          <div className="mb-6">
            <label className="block text-gray-300 mb-2">Message</label>
            <textarea name="message" rows="4" required className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
          </div>

          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
            Send
          </button>

          {done && (
            <p className="text-green-500 mt-4 text-center">Message sent successfully!</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
