import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Handle subscription logic here
    alert(`Subscribed with: ${email}`);
    setEmail('');
  };

  return (
    <footer className="bg-red-700 text-white py-8 ">
      <div className="container mx-auto text-center">
        <h2 className="xs:text-lg lg:text-xl xl:text-xl font-bold mb-2 text-">Join the Fight Against Blood Shortages</h2>
        <p className="mb-2 sm:text-md lg:text-lg xl:text-lg text-red-100">Your donation can save lives. Thank you for your support!</p>

        <div className="flex justify-center space-x-6 mb-4">
          <Link to="" className="hover:underline">Home</Link>
          <Link to="/about" className="hover:underline">About</Link>
          <Link to="/connect" className="hover:underline">Connect</Link>
          <Link to="/donate" className="hover:underline">Donate</Link>
          <Link to="/contact" className="hover:underline">Contact</Link>
        </div>

        <div className="text-center mt-6 border-t border-white pt-4 bg-red-700 text-white py-6 font-customFont">
        <p className="text-lg">&copy; {new Date().getFullYear()} Blood Donation. All rights reserved.</p>
      </div>
      </div>
    </footer>
  );
};

export default Footer;