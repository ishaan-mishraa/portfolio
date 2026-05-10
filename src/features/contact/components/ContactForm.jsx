import React, { useState } from 'react';
import { Send, Mail, Phone, User, MessageCircle } from 'lucide-react';
import { sendTransmission } from '../services/contactService';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', work: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' }); // Replaces alert()

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Clear status message when user starts typing again
    if (status.message) setStatus({ type: '', message: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });
    
    try {
      await sendTransmission(formData);
      setStatus({ type: 'success', message: 'Transmission sent successfully! Awaiting response...' });
      setFormData({ name: '', email: '', phone: '', work: '' }); // Clear form
    } catch (error) {
      console.error('Error sending message:', error);
      setStatus({ type: 'error', message: 'System error. Failed to establish connection.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="glass-morph p-8 rounded-2xl neon-border relative overflow-hidden">
      {/* Dynamic Status Message */}
      {status.message && (
        <div className={`mb-6 p-4 rounded-lg border text-sm flex items-center justify-center font-bold animate-in ${
          status.type === 'success' 
            ? 'bg-cyan-900/30 border-cyan-400 text-cyan-400' 
            : 'bg-red-900/30 border-red-500 text-red-500'
        }`} style={{ fontFamily: 'Orbitron, monospace' }}>
          {status.message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="flex items-center space-x-2 text-cyan-400 mb-2 font-bold" style={{ fontFamily: 'Orbitron, monospace' }}>
              <User className="w-5 h-5" />
              <span>Full Name</span>
            </label>
            <input
              type="text" name="name" value={formData.name} onChange={handleChange} required
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
              type="email" name="email" value={formData.email} onChange={handleChange} required
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
            type="tel" name="phone" value={formData.phone} onChange={handleChange} required
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
            name="work" value={formData.work} onChange={handleChange} required rows="6"
            className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:border-cyan-400 focus:outline-none transition-colors duration-300 resize-none"
            style={{ fontFamily: 'Orbitron, monospace' }}
            placeholder="Describe your project, requirements, timeline, and any specific technologies you'd like to use..."
          />
        </div>

        <button
          type="submit" disabled={isSubmitting}
          className={`w-full neon-border px-8 py-4 rounded-full text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-300 flex items-center justify-center space-x-2 font-bold ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover-glow'}`}
          style={{ fontFamily: 'Orbitron, monospace' }}
        >
          <Send className={`w-5 h-5 ${isSubmitting ? 'animate-pulse translate-x-2' : ''} transition-transform`} />
          <span>{isSubmitting ? 'Launching...' : 'Launch Message'}</span>
        </button>
      </form>
    </div>
  );
};

export default ContactForm;