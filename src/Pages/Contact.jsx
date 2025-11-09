import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <section className="py-6 bg-[#ffefe3] font-customFont bg-fixed bg-cover bg-center">
      <div className="container mx-auto">
        <motion.h2 
          className="text-3xl font-bold text-center mb-3"
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }}
        >
          Contact <span className="text-red-600">Us</span>
        </motion.h2>
        <motion.p 
          className="bg-red-600 xs:text-sm lg:text-lg xl:text-lg text-center mb-6 text-red-50 font-bold border-4 border-black lg:mx-96 p-2 rounded-full"
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Please fill out the form below or reach us via the provided contact details.
        </motion.p>

        <div className="flex justify-center mb-4">
          <motion.form 
            onSubmit={handleSubmit} 
            className="bg-white p-8 rounded-3xl shadow-md w-full max-w-lg border-4 border-black "
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5 }}
          >
            <motion.div 
              className="mb-4"
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <label className="block text-gray-700" htmlFor="name">Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                required 
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              />
            </motion.div>
            <motion.div 
              className="mb-4"
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <label className="block text-gray-700" htmlFor="email">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                required 
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              />
            </motion.div>
            <motion.div 
              className="mb-4"
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <label className="block text-gray-700" htmlFor="message">Message</label>
              <textarea 
                id="message" 
                name="message" 
                value={formData.message} 
                onChange={handleChange} 
                required 
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                rows="4"
              ></textarea>
            </motion.div>
            <button 
              type="submit" 
              className="w-full bg-red-600 text-white hover:bg-red-500 py-2 rounded-xl transition duration-200"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;