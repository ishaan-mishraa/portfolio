import React, { useState } from 'react';
import { Send, Mail, Phone, User, MessageCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    work: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:ishaancodes01@gmail.com?subject=Project Inquiry from ${formData.name}&body=Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0APhone: ${formData.phone}%0D%0A%0D%0AProject Description:%0D%0A${formData.work}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="min-h-screen pt-20 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold glow-text mb-6" style={{ fontFamily: 'Zen Dots, cursive' }}>
            Mission Control
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto" style={{ fontFamily: 'Orbitron, monospace' }}>
            Ready to launch your next project? Send a transmission and let's explore the possibilities together.
          </p>
        </div>

        <div className="glass-morph p-8 rounded-2xl neon-border">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="flex items-center space-x-2 text-cyan-400 mb-2 font-bold" style={{ fontFamily: 'Orbitron, monospace' }}>
                  <User className="w-5 h-5" />
                  <span>Full Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:border-cyan-400 focus:outline-none transition-colors duration-300"
                  style={{ fontFamily: 'Orbitron, monospace' }}
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label className="flex items-center space-x-2 text-cyan-400 mb-2 font-bold" style={{ fontFamily: 'Orbitron, monospace' }}>
                  <Mail className="w-5 h-5" />
                  <span>Email Address</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:border-cyan-400 focus:outline-none transition-colors duration-300"
                  style={{ fontFamily: 'Orbitron, monospace' }}
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div>
              <label className="flex items-center space-x-2 text-cyan-400 mb-2 font-bold" style={{ fontFamily: 'Orbitron, monospace' }}>
                <Phone className="w-5 h-5" />
                <span>Phone Number</span>
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:border-cyan-400 focus:outline-none transition-colors duration-300"
                style={{ fontFamily: 'Orbitron, monospace' }}
                placeholder="+1 234 567 8900"
              />
            </div>

            <div>
              <label className="flex items-center space-x-2 text-cyan-400 mb-2 font-bold" style={{ fontFamily: 'Orbitron, monospace' }}>
                <MessageCircle className="w-5 h-5" />
                <span>Project Description</span>
              </label>
              <textarea
                name="work"
                value={formData.work}
                onChange={handleChange}
                required
                rows="6"
                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:border-cyan-400 focus:outline-none transition-colors duration-300 resize-none"
                style={{ fontFamily: 'Orbitron, monospace' }}
                placeholder="Describe your project, requirements, timeline, and any specific technologies you'd like to use..."
              />
            </div>

            <button
              type="submit"
              className="w-full neon-border px-8 py-4 rounded-full text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-300 flex items-center justify-center space-x-2 hover-glow font-bold"
              style={{ fontFamily: 'Orbitron, monospace' }}
            >
              <Send className="w-5 h-5" />
              <span>Launch Message</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
