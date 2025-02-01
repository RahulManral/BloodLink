// import { useState } from 'react';
// import backgroundImage from '../Images/backgroundImage.png';
// import { motion } from 'framer-motion';

// const Donate = () => {

//     const binId = "679a509be41b4d34e480bdde";
//     const apiKey = "$2a$10$/VUNoPk/2riJ8yzO7YAV9OsRJ0nZ6qJ.CohwzkJTJ2P5d/Ms4cVQ6";

//     const [formData, setFormData] = useState({
//         name: '',
//         phone: '',
//         bloodType: '',
//         district: '',
//     });
    
//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({ ...formData, [name]: value });
//     };
    
//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         try {
//             const response = await fetch(`https://api.jsonbin.io/v3/b/${binId}`, {
//                 method: 'POST',
//                 headers: {
//                     'X-Access-Key': apiKey, 
//                 },
//                 body: JSON.stringify(formData),
//             });

//             if (!response.ok) {
//                 throw new Error('Network response was not ok');
//             }

//             const data = await response.json();
//             console.log('Success:', data);
            
        
//             alert('Thank you for your donation! Your information has been submitted.');

            
//             setFormData({
//                 name: '',
//                 phone: '',
//                 bloodType: '',
//                 district: '',
//             });
//         } catch (error) {
//             console.error('Error adding donor:', error);
//             alert('There was an error submitting your information. Please try again.');
//         }
//     };
    
//     return (
//         <section className="py-6 bg-red-50 font-customFont bg-fixed bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
//           <div className="container mx-auto">
//             <motion.h2 
//              className="text-3xl font-bold text-center mb-3"
//             initial={{ opacity: 0, y: -20 }} 
//           animate={{ opacity: 1, y: 0 }} 
//           transition={{ duration: 0.5 }}
//         >
//           Become a <span className="text-red-600">Donor</span>
//         </motion.h2>
//         <motion.p 
//           className="xs:text-sm lg:text-lg xl:text-lg text-center mb-6 text-white bg-black lg:mx-80 p-3 rounded-lg font-bold"
//           initial={{ opacity: 0, y: -20 }} 
//           animate={{ opacity: 1, y: 0 }} 
//           transition={{ duration: 0.5, delay: 0.1 }}
//           >
//               Your donation can save lives! Please fill out the form below to get started. 
//           </motion.p>
            
//             <div className="flex justify-center">
//               <motion.form 
//                 onSubmit={handleSubmit} 
//                 className="bg-red-50 p-8 rounded-lg shadow-md w-full max-w-lg border-4 border-black mb-24"
//                 initial={{ opacity: 0, y: 20 }} 
//                 animate={{ opacity: 1, y: 0 }} 
//                 transition={{ duration: 0.5 }}
//               >
//                 <motion.div 
//                   className="mb-4"
//                   initial={{ opacity: 0, y: 20 }} 
//                   animate={{ opacity: 1, y: 0 }} 
//                   transition={{ duration: 0.5, delay: 0.1 }}
//                 >
//                   <label className="block text-gray-700" htmlFor="name">Name</label>
//                   <input 
//                     type="text" 
//                     id="name" 
//                     name="name" 
//                     value={formData.name} 
//                     onChange={handleChange} 
//                     required 
//                     className="mt-1 block w-full border border-gray-300 rounded-md p-2"
//                   />
//                 </motion.div>
                
//                 <motion.div 
//                   className="mb-4"
//                   initial={{ opacity: 0, y: 20 }} 
//                   animate={{ opacity: 1, y: 0 }} 
//                   transition={{ duration: 0.5, delay: 0.2 }}
//                 >
//                   <label className="block text-gray-700" htmlFor="phone">Phone</label>
//                   <input 
//                     type="tel" 
//                     id="phone" 
//                     name="phone" 
//                     value={formData.phone} 
//                     onChange={handleChange} 
//                     required 
//                     className="mt-1 block w-full border border-gray-300 rounded-md p-2"
//                   />
//                 </motion.div>

//                 <motion.div 
//                   className="mb-4"
//                   initial={{ opacity: 0, y: 20 }} 
//                   animate={{ opacity: 1, y: 0 }} 
//                   transition={{ duration: 0.5, delay: 0.3 }}
//                 >
//                   <label className="block text-gray-700" htmlFor="district">District</label>
//                   <select 
//                     id="district" 
//                     name="district" 
//                     value={formData.district} 
//                     onChange={handleChange} 
//                     required 
//                     className="mt-1 block w-full border border-gray-300 rounded-md p-2"
//                   >
//                     <option value="">Select your District</option>
//                     <option value="Central and Western">Central and Western</option>
//                     <option value="Eastern District">Eastern</option>
//                     <option value="Southern">Southern</option>
//                     <option value="Yau Tsim Mong">Yau Tsim Mong</option>
//                     <option value="Sham Shui Po">Sham Shui Po</option>
//                     <option value="Kowloon City District">Kowloon City District</option>
//                     <option value="Wong Tai Sin">Wong Tai Sin</option>
//                     <option value="Kwun Tong">Kwun Tong</option>
//                     <option value="Tsuen Wan">Tsuen Wan</option>
//                     <option value="Tsing Yi">Tsing Yi</option>
//                     <option value="Sai Kung">Sai Kung</option>
//                     <option value="Tai Po">Tai Po</option>
//                     <option value="North">North</option>
//                     <option value="Yuen Long">Yuen Long</option>
//                     <option value="Tuen Mun">Tuen Mun</option>
//                     <option value="Islands">Islands</option>
//                     <option value="Lantau Island">Lantau Island</option>
//                     <option value="Sha Tin District">Sha Tin District</option>
//                   </select>
//                 </motion.div>

//                 <motion.div 
//                   className="mb-4"
//                   initial={{ opacity: 0, y: 20 }} 
//                   animate={{ opacity: 1, y: 0 }} 
//                   transition={{ duration: 0.5, delay: 0.4 }}
//                 >
//                   <label className="block text-gray-700" htmlFor="bloodType">Blood Type</label>
//                   <select 
//                     id="bloodType" 
//                     name="bloodType" 
//                     value={formData.bloodType} 
//                     onChange={handleChange} 
//                     required 
//                     className="mt-1 block w-full border border-gray-300 rounded-md p-2"
//                   >
//                     <option value="">Select your blood type</option>
//                     <option value="A+">A+</option>
//                     <option value="A-">A-</option>
//                     <option value="B+">B+</option>
//                     <option value="B-">B-</option>
//                     <option value="O+">O+</option>
//                     <option value="O-">O-</option>
//                     <option value="AB+">AB+</option>
//                     <option value="AB-">AB-</option>
//                   </select>
//                 </motion.div>
                
//                 <button 
//                   type="submit" 
//                   className="w-full bg-red-600 text-white hover:bg-red-500 py-2 rounded transition duration-200"
//                 >
//                   Submit
//                 </button>
//               </motion.form>
//             </div>
//           </div>
//         </section>
//     );
// };

// export default Donate;




















// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



import { useState } from 'react';
import backgroundImage from '../Images/backgroundImage.png';
import { motion } from 'framer-motion';

const Donate = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    district: '',
    bloodType: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  
  //   try {
  //     const response = await fetch('https://blood-link-server-phi.vercel.app/api/donors', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(formData),
  //     });
  
  //     if (!response.ok) {
  //       throw new Error('Network response was not ok');
  //     }
  
  //     const data = await response.json();
  //     console.log('Success:', data);
      
  //     // Show success alert
  //     alert('Thank you for your donation! Your information has been submitted.');
  
  //     // Optionally reset form or show success message here
  //     setFormData({ name: '', phone: '', district: '', bloodType: '' });
  //   } catch (error) {
  //     console.error('Error:', error);
  //     alert('There was an error submitting your information. Please try again.');
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
        const response = await fetch('https://blood-link-server-phi.vercel.app/api/donors', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(`Error: ${errorData.message}`);
        }

        const data = await response.json();
        console.log('Success:', data);
        alert('Thank you for your donation! Your information has been submitted.');

        setFormData({ name: '', phone: '', district: '', bloodType: '' });
    } catch (error) {
        console.error('Error adding donor:', error);
        alert('There was an error submitting your information. Please try again.');
    }
};

  return (
    <section 
      className="py-6 bg-red-50 font-customFont bg-fixed bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="container mx-auto">
        <motion.h2 
          className="text-3xl font-bold text-center mb-3"
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }}
        >
          Become a <span className="text-red-600">Donor</span>
        </motion.h2>
        <motion.p 
          className="xs:text-sm lg:text-lg xl:text-lg text-center mb-6 text-white bg-black lg:mx-80 p-3 rounded-lg font-bold"
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Your donation can save lives! Please fill out the form below to get started. 
        </motion.p>
        
        <div className="flex justify-center">
          <motion.form 
            onSubmit={handleSubmit} 
            className="bg-red-50 p-8 rounded-lg shadow-md w-full max-w-lg border-4 border-black mb-24"
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5 }}
          >
            <motion.div 
              className="mb-4"
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5, delay: 0.1 }}
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
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <label className="block text-gray-700" htmlFor="phone">Phone</label>
              <input 
                type="tel" 
                id="phone" 
                name="phone" 
                value={formData.phone} 
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
              <label className="block text-gray-700" htmlFor="district">District</label>
              <select 
                id="district" 
                name="district" 
                value={formData.district} 
                onChange={handleChange} 
                required 
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              >
                <option value="">Select your District</option>
                <option value="Central and Western">Central and Western</option>
                <option value="Eastern District">Eastern</option>
                <option value="Southern">Southern</option>
                <option value="Yau Tsim Mong">Yau Tsim Mong</option>
                <option value="Sham Shui Po">Sham Shui Po</option>
                <option value="Kowloon City District">Kowloon City District</option>
                <option value="Wong Tai Sin">Wong Tai Sin</option>
                <option value="Kwun Tong">Kwun Tong</option>
                <option value="Tsuen Wan">Tsuen Wan</option>
                <option value="Tsing Yi">Tsing Yi</option>
                <option value="Sai Kung">Sai Kung</option>
                <option value="Tai Po">Tai Po</option>
                <option value="North">North</option>
                <option value="Yuen Long">Yuen Long</option>
                <option value="Tuen Mun">Tuen Mun</option>
                <option value="Islands">Islands</option>
                <option value="Lantau Island">Lantau Island</option>
                <option value="Sha Tin District">Sha Tin District</option>
              </select>
            </motion.div>

            <motion.div 
              className="mb-4"
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <label className="block text-gray-700" htmlFor="bloodType">Blood Type</label>
              <select 
                id="bloodType" 
                name="bloodType" 
                value={formData.bloodType} 
                onChange={handleChange} 
                required 
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              >
                <option value="">Select your blood type</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
              </select>
            </motion.div>
            
            <button 
              type="submit" 
              className="w-full bg-red-600 text-white hover:bg-red-500 py-2 rounded transition duration-200"
            >
              Submit
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Donate;