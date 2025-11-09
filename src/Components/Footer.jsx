import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin} from 'lucide-react'; // Example icons

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      alert(`Thank you for subscribing, ${email}!`);
      setEmail('');
    } else {
      alert("Please enter a valid email address.");
    }
  };

  return (
    <footer className="bg-red-800 text-white py-12 px-6 font-customFont shadow-inner"> {/* Deeper red, more padding, inner shadow */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8 items-start"> {/* Multi-column layout */}

        {/* Column 1: Logo and Mission Statement */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left mb-6 md:mb-0">
          <Link to="/" className="flex items-center text-white text-3xl font-extrabold tracking-tight mb-4 group">
           
            <span className="text-red-300 transition-colors duration-300 group-hover:text-white">Blood</span>
            <span>-</span>Link
          </Link>
          <p className="text-red-100 text-sm md:text-base leading-relaxed">
            Uniting donors and recipients to save lives. Your contribution makes a real difference.
          </p>
          <div className="flex space-x-4 mt-6"> {/* Social Media Icons */}
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-red-300 hover:text-white transition-colors">
              <Facebook size={24} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-red-300 hover:text-white transition-colors">
              <Twitter size={24} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-red-300 hover:text-white transition-colors">
              <Instagram size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-red-300 hover:text-white transition-colors">
              <Linkedin size={24} />
            </a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="text-center md:text-left mb-6 md:mb-0">
          <h3 className="text-xl font-bold mb-4 border-b-2 border-red-600 pb-2 inline-block">Quick Links</h3>
          <ul className="space-y-3">
            <li><Link to="/" className="text-red-100 hover:text-white transition-colors">Home</Link></li>
            <li><Link to="/about" className="text-red-100 hover:text-white transition-colors">About Us</Link></li>
            <li><Link to="/connect" className="text-red-100 hover:text-white transition-colors">Connect</Link></li>
            <li><Link to="/donate" className="text-red-100 hover:text-white transition-colors">Donate Blood</Link></li>
            <li><Link to="/contact" className="text-red-100 hover:text-white transition-colors">Contact Us</Link></li>
            <li><Link to="/faq" className="text-red-100 hover:text-white transition-colors">FAQ</Link></li> {/* Added a common footer link */}
          </ul>
        </div>

        {/* Column 3: Contact Information */}
        <div className="text-center md:text-left mb-6 md:mb-0">
          <h3 className="text-xl font-bold mb-4 border-b-2 border-red-600 pb-2 inline-block">Get In Touch</h3>
          <ul className="space-y-3 text-red-100">
            <li className="flex items-center justify-center md:justify-start">
              <Mail size={18} className="mr-3 text-red-300" />
              <a href="mailto:info@bloodlink.com" className="hover:text-white transition-colors">info@bloodlink.com</a>
            </li>
            <li className="flex items-center justify-center md:justify-start">
              <Phone size={18} className="mr-3 text-red-300" />
              <a href="tel:+1234567890" className="hover:text-white transition-colors">+1 (234) 567-890</a>
            </li>
            <li className="flex items-start justify-center md:justify-start">
              <MapPin size={18} className="mr-3 mt-1 text-red-300" />
              <span>123 Donor Drive, <br/> Lifesaver City, LS 54321</span>
            </li>
          </ul>
        </div>

        {/* Column 4: Newsletter Subscription */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold mb-4 border-b-2 border-red-600 pb-2 inline-block">Stay Connected</h3>
          <p className="text-red-100 text-sm mb-4">
            Subscribe to our newsletter for the latest updates on blood drives and urgent needs.
          </p>
          <form onSubmit={handleSubscribe} className="flex flex-col gap-3">
            <input
              type="email"
              placeholder="Your Email Address"
              className="p-3 rounded-md bg-red-700 text-white placeholder-red-200 border border-red-600 focus:outline-none focus:ring-2 focus:ring-white"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button
              type="submit"
              className="bg-white text-red-700 font-bold py-3 rounded-md hover:bg-red-100 hover:text-red-800 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-white"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-red-600 pt-8 mt-12 text-center text-red-200 text-sm"> {/* Refined border and text color */}
        <p>&copy; {new Date().getFullYear()} Blood-Link. All rights reserved.</p>
        <p className="mt-1">
          <Link to="/privacy-policy" className="hover:underline mx-2">Privacy Policy</Link> |
          <Link to="/terms-of-service" className="hover:underline mx-2">Terms of Service</Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;