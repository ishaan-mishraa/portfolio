import React from 'react';
import './Contact.css'; // Importing the separated CSS file

const Contact = () => {
  return (
    <div className="contact-container">

      <div className="contact-form bg-white p-6 max-w-3xl mx-auto rounded-lg shadow-md">
        <h2 className='font-bold text-2xl'>Contact Me</h2>
        <form action="mailto:ishaancodes01@gmail.com" method="post" encType="text/plain">
          <label htmlFor="first-name">First Name:</label>
          <input type="text" id="first-name" name="first-name" required className="w-full px-3 py-2 mb-4 border rounded-md" />

          <label htmlFor="last-name">Last Name:</label>
          <input type="text" id="last-name" name="last-name" required className="w-full px-3 py-2 mb-4 border rounded-md" />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required className="w-full px-3 py-2 mb-4 border rounded-md" />

          <label htmlFor="phone">Phone Number:</label>
          <input type="tel" id="phone" name="phone" required className="w-full px-3 py-2 mb-4 border rounded-md" />

          <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded-md cursor-pointer hover:bg-green-600">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
