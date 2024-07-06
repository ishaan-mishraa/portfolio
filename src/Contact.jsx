import React from 'react';
import './Contact.css'; // Importing the separated CSS file

const Contact = () => {
  return (
    <div className="contact-container">

      <div className="contact-form bg-white p-6 max-w-3xl mx-auto rounded-lg shadow-md">
        <h2 className='font-bold text-2xl'>Hire Me For 💼:</h2>
        <form action="mailto:ishaancodes01@gmail.com" method="post" encType="text/plain">
          <label htmlFor="full-name">Your Full Name:</label>
          <input type="text" id="full-name" name="full-name" required className="w-full px-3 py-2 mb-4 border rounded-md" />

          <label htmlFor="work">Describe The Work/Reason:</label>
          <textarea type="text" id="work" name="work" required className="w-full px-3 py-2 mb-4 border rounded-md" rows="4" />

          <label htmlFor="email">Your Email:</label>
          <input type="email" id="email" name="email" required className="w-full px-3 py-2 mb-4 border rounded-md" />

          <label htmlFor="phone">Your Phone Number:</label>
          <input type="tel" id="phone" name="phone" required className="w-full px-3 py-2 mb-4 border rounded-md" />

          <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded-md cursor-pointer hover:bg-green-600">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
