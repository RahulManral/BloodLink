"use client"
import React, { useState}from "react"
import { NavLink, Link } from "react-router-dom"
import { Menu, X } from "lucide-react"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const handleLinkClick = () => {

    setIsOpen(false);
  }

  // Define common styles for desktop links
  const desktopLinkClass = ({ isActive }) =>
    `relative pb-1 group transition-all duration-300 ease-in-out ${
      isActive ? "text-white" : "text-red-200 hover:text-white " // Active text color, and hover for inactive
    }`;

  // Define common styles for mobile links
  const mobileLinkClass = ({ isActive }) =>
    `block text-lg py-3 rounded-md transition-colors duration-200 ${
      isActive ? "bg-red-600 text-white" : "text-red-100 hover:bg-red-600 active:bg-red-500 hover:text-white"
    }`;


  return (
    <nav className="bg-red-700 shadow-lg fixed top-0 left-0 w-full z-50 py-2.5 px-6 md:px-8">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo - Use Link, as it's not a navigation item to be 'active' itself */}
        <Link to="/" className="flex items-center text-white text-3xl font-extrabold tracking-tight font-sans" onClick={handleLinkClick}>
          <span className="text-red-300 transition-colors duration-300 hover:text-white">Blood</span>
          <span>-</span>Link
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-8 text-lg font-medium">
          {/* NavLink for Home */}
          <NavLink
            to="/"
            className={desktopLinkClass}
            onClick={handleLinkClick}
            end // 'end' prop is important for the root path '/' to be active only when it's the exact path
          >
            Home
            {/* The active underline will now be applied via a custom className logic */}
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out group-[.active]:scale-x-100"></span>
          </NavLink>
          {/* NavLink for About */}
          <NavLink
            to="/about"
            className={desktopLinkClass}
            onClick={handleLinkClick}
          >
            About
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out group-[.active]:scale-x-100"></span>
          </NavLink>
          {/* NavLink for Connect */}
          <NavLink
            to="/connect"
            className={desktopLinkClass}
            onClick={handleLinkClick}
          >
            Connect
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out group-[.active]:scale-x-100"></span>
          </NavLink>
          {/* NavLink for Donate */}
          <NavLink
            to="/donate"
            className={desktopLinkClass}
            onClick={handleLinkClick}
          >
            Donate
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out group-[.active]:scale-x-100"></span>
          </NavLink>
          {/* NavLink for Contact */}
          <NavLink
            to="/contact"
            className={desktopLinkClass}
            onClick={handleLinkClick}
          >
            Contact
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out group-[.active]:scale-x-100"></span>
          </NavLink>
        </div>

        {/* Desktop Donate Now Button */}
        <div className="hidden md:flex">
          <Link 
            to="/donate"
            onClick={handleLinkClick}
            className="bg-white text-red-700 text-lg font-bold px-6 py-2 rounded-full transition-all duration-300 ease-in-out
                       hover:bg-red-100 hover:text-red-800 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
          >
            Donate Now
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none p-1">
            {isOpen ? <X className="w-8 h-8 transition-transform duration-300 ease-in-out" /> : <Menu className="w-8 h-8 transition-transform duration-300 ease-in-out" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden absolute top-[calc(100%-1px)] left-0 w-full bg-red-700 shadow-md overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-screen opacity-100 border-t border-red-600" : "max-h-0 opacity-0"
        }`}
      >
        <div className="p-4 space-y-3 font-medium text-center">
          {/* NavLink for Home (Mobile) */}
          <NavLink
            to="/"
            onClick={handleLinkClick}
            className={mobileLinkClass}
            end
          >
            Home
          </NavLink>
          {/* NavLink for About (Mobile) */}
          <NavLink
            to="/about"
            onClick={handleLinkClick}
            className={mobileLinkClass}
          >
            About
          </NavLink>
          {/* NavLink for Connect (Mobile) */}
          <NavLink
            to="/connect"
            onClick={handleLinkClick}
            className={mobileLinkClass}
          >
            Connect
          </NavLink>
          {/* NavLink for Donate (Mobile) */}
          <NavLink
            to="/donate"
            onClick={handleLinkClick}
            className={mobileLinkClass}
          >
            Donate
          </NavLink>
          {/* NavLink for Contact (Mobile) */}
          <NavLink
            to="/contact"
            onClick={handleLinkClick}
            className={mobileLinkClass}
          >
            Contact
          </NavLink>
          <div className="pt-4 border-t border-red-600 mt-4">
            <Link // Use Link here for the button
              to="/donate"
              onClick={handleLinkClick}
              className="block bg-white text-red-700 text-lg font-bold px-4 py-3 rounded-full transition-all duration-300 ease-in-out
                         hover:bg-red-100 hover:text-red-800 shadow-md"
            >
              Donate Now
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar