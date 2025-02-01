// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// import './Navbar.css'

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <nav className="bg-red-600 p-3">
//       <div className="container mx-auto flex justify-between items-center">
//         <div className="text-white text-3xl font-bold font-customFont">
//           <span className="text-red-900">Blood</span><span>-</span>Link
//         </div>
//         <div className="hidden md:flex space-x-6 text-xl font-medium">
//           <Link to="/" className="text-white font-customFont p-2 rounded transition duration-2000 transform hover:text-red-200">Home</Link>
//           <Link to="/about" className="text-white font-customFont p-2 rounded transition duration-2000 transform hover:text-red-200">About</Link>
//           <Link to="/connect" className="text-white font-customFont p-2 rounded transition duration-2000 transform hover:text-red-200">Connect</Link>
//           <Link to="/donate" className="text-white font-customFont p-2 rounded transition duration-2000 transform hover:text-red-200">Donate</Link>
//           <Link to="/contact" className="text-white font-customFont p-2 rounded transition duration-2000 transform hover:text-red-200">Contact</Link>
//         </div>
//         <div className="hidden md:flex">
//           <Link to="/donate" className="bg-white text-red-600 text-xl hover:bg-red-100 px-4 py-2 rounded transition font-customFont font-bold">Donate Now</Link>
//         </div>
//         <div className="md:hidden">
//           <button onClick={toggleMenu} className="text-white focus:outline-none">
//             {/* Conditional Hamburger/X Icon */}
//             {isOpen ? (
//               <svg className="w-7 h-7 transition-transform transform rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
//             </svg>
//             ) : (
//               <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M4 6h16M4 12h16m-7 6h7" />
//               </svg>
//             )}
//           </button>
//         </div>
//       </div>
//       <div className={`md:hidden menu-transition ${isOpen ? 'menu-open' : ''}`}>
//         <div className="bg-red-600 p-4 space-y-2 font-customFont text-center font-medium mt-2">
//           <Link to="/" className="block text-white hover:bg-red-400 p-2 rounded border-2">Home</Link>
//           <Link to="/about" className="block text-white hover:bg-red-400 p-2 rounded border-2">About</Link>
//           <Link to="/connect" className="block text-white hover:bg-red-400 p-2 rounded border-2">Connect</Link>
//           <Link to="/donate" className="block text-white hover:bg-red-400 p-2 rounded border-2">Donate</Link>
//           <Link to="/contact" className="block text-white hover:bg-red-400 p-2 rounded border-2">Contact</Link>
//           <Link to="/donate" className="block bg-white text-red-600 hover:bg-red-100 px-4 py-2 rounded transition">Donate Now</Link>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


"use client"

import React, { useState } from "react"
import { Link } from "react-router-dom"
import { Menu, X } from "lucide-react"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const handleLinkClick = () => {
    if (isOpen) {
      toggleMenu();
    }
  };

  return (
    <nav className="bg-red-600 fixed top-0 left-0 w-full z-50 p-3">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-3xl font-bold font-customFont">
          <span className="text-red-900">Blood</span>
          <span>-</span>Link
        </div>
        <div className="hidden md:flex space-x-6 text-xl font-medium">
          <Link
            to="/"
            onClick={handleLinkClick}
            className="text-white font-customFont p-2 rounded transition duration-2000 transform hover:text-red-200"
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={handleLinkClick}
            className="text-white font-customFont p-2 rounded transition duration-2000 transform hover:text-red-200"
          >
            About
          </Link>
          <Link
            to="/connect"
            onClick={handleLinkClick}
            className="text-white font-customFont p-2 rounded transition duration-2000 transform hover:text-red-200"
          >
            Connect
          </Link>
          <Link
            to="/donate"
            onClick={handleLinkClick}
            className="text-white font-customFont p-2 rounded transition duration-2000 transform hover:text-red-200"
          >
            Donate
          </Link>
          <Link
            to="/contact"
            onClick={handleLinkClick}
            className="text-white font-customFont p-2 rounded transition duration-2000 transform hover:text-red-200"
          >
            Contact
          </Link>
        </div>
        <div className="hidden md:flex">
          <Link
            to="/donate"
            onClick={handleLinkClick}
            className="bg-white text-red-600 text-xl hover:bg-red-100 px-4 py-2 rounded transition font-customFont font-bold"
          >
            Donate Now
          </Link>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isOpen ? <X className="w-7 h-7 transition-transform transform rotate-0" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`}
      >
        <div className="bg-red-600 p-4 space-y-2 font-customFont text-center font-medium mt-2">
          <Link 
            to="/" 
            onClick={handleLinkClick} 
            className="block text-white hover:bg-red-400 p-2 rounded border-2"
          >
            Home
          </Link>
          <Link 
            to="/about" 
            onClick={handleLinkClick} 
            className="block text-white hover:bg-red-400 p-2 rounded border-2"
          >
            About
          </Link>
          <Link 
            to="/connect" 
            onClick={handleLinkClick} 
            className="block text-white hover:bg-red-400 p-2 rounded border-2"
          >
            Connect
          </Link>
          <Link 
            to="/donate" 
            onClick={handleLinkClick} 
            className="block text-white hover:bg-red-400 p-2 rounded border-2"
          >
            Donate
          </Link>
          <Link 
            to="/contact" 
            onClick={handleLinkClick} 
            className="block text-white hover:bg-red-400 p-2 rounded border-2"
          >
            Contact
          </Link>
          <Link 
            to="/donate" 
            onClick={handleLinkClick} 
            className="block bg-white text-red-600 hover:bg-red-100 px-4 py-2 rounded transition"
          >
            Donate Now
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

