import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';

const ContactMe = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_sk4r9ka',     
      'template_2qycs6s',     // Replace with your EmailJS template ID
      formRef.current,
      'VFxYSPulBO7qLq2T-',    // Replace with your EmailJS public key
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
    <div className='flex flex-row border border-[#2A0E61] rounded-2xl'>
        <div className='w-full flex flex-col py-40 px-30'>
        <span className='text-lg font-bold text-start text-amber-600 '>Hello!</span>
        <span className='text-start flex flex-row gap-4'>
        <span className='text-6xl font-bold text-start '>I'm</span>
        <span className='text-6xl font-bold  text-start bg-gradient-to-r from-orange-400  via-blue-500 to-green-500 bg-clip-text text-transparent'>Anmol</span>
        </span>
        <span className='ml-13 text-center bg-clip-text text-transparent bg-gradient-to-r from-green-500 via-blue-500 to-orange-400 mt-3'>MNNIT ALLAHABAD  CSE Pre-Final Year</span>
        </div>
    <div className="w-full py-10 bg-transparent ]  rounded-3xl flex flex-col justify-center items-center px-1 z-[50] relative pointer-events-auto">
      <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-green-400 bg-clip-text text-transparent">Contact Me</h1>

      <form ref={formRef} onSubmit={sendEmail} className="bg-black/50 shadow-lg rounded-lg p-8 w-full max-w-md">
        <div className="mb-4">
          <label className="block text-gray-600 mb-2">Your Name</label>
          <input type="text" name="user_name" required className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 "/>
        </div>

        <div className="mb-4">
          <label className="block text-gray-600 mb-2">Your Email</label>
          <input type="email" name="user_email" required className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"/>
        </div>

        <div className="mb-6">
          <label className="block text-gray-600 mb-2">Message</label>
          <textarea name="message" rows="4" required className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
        </div>

        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">Send</button>

        {done && <p className="text-green-600 mt-4 text-center">Message sent successfully!</p>}
      </form>
    </div>
    </div>
  );
};

export default ContactMe;
