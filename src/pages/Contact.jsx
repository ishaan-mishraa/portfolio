import React from 'react';
import ContactForm from '../features/contact/components/ContactForm';

const Contact = () => {
  return (
    <div className="min-h-screen pt-20 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto w-full">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold glow-text mb-6" style={{ fontFamily: 'Zen Dots, cursive' }}>
            Mission Control
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto" style={{ fontFamily: 'Orbitron, monospace' }}>
            Ready to launch your next project? Send a transmission and let's explore the possibilities together.
          </p>
        </div>

        {/* Modular Form Component */}
        <ContactForm />
        
      </div>
    </div>
  );
};

export default Contact;