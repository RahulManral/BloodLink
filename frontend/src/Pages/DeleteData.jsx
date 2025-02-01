// import backgroundImage from '../Images/backgroundImage.png';
// import { useState } from 'react';
// import { motion } from 'framer-motion';

// const DeleteData = () => {

//     const binId = "679a509be41b4d34e480bdde";
//     const apiKey = "$2a$10$/VUNoPk/2riJ8yzO7YAV9OsRJ0nZ6qJ.CohwzkJTJ2P5d/Ms4cVQ6";

//     const [formData, setFormData] = useState({
//         name: '',
//         phone: '',
//     });

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({ ...formData, [name]: value });
//     };

//     const handleDelete = async (e) => {
//         e.preventDefault();

//         try {
//             const response = await fetch(`https://api.jsonbin.io/v3/b/${binId}`, {
//                 method: 'GET',
//                 headers: {
//                     'X-Access-Key': apiKey, 
//                 },
//             });

//             if (!response.ok) {
//                 throw new Error('Network response was not ok');
//             }

//             const donors = await response.json();
//             const donorToDelete = donors.find(donor => donor.name === formData.name && donor.phone === formData.phone);

//             if (donorToDelete) {
//                 const deleteResponse = await fetch(`api/donors/${donorToDelete.id}`, {
//                     method: 'DELETE',
//                 });

//                 if (deleteResponse.ok) {
//                     alert('Your donation record has been deleted successfully.');
//                     setFormData({ name: '', phone: '' }); 
//                 } else {
//                     throw new Error('Error deleting the donor record.');
//                 }
//             } else {
//                 alert('No matching donor record found.');
//             }
//         } catch (error) {
//             console.error('Error deleting donor:', error);
//             alert('There was an error deleting your information. Please try again.');
//         }
//     };

//     return (
//         <section className="py-6 bg-red-50 font-customFont bg-fixed bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
//             <div className="container mx-auto">
//                 <motion.h2 
//                     className="text-3xl font-bold text-center mb-3"
//                     initial={{ opacity: 0, y: -20 }} 
//                     animate={{ opacity: 1, y: 0 }} 
//                     transition={{ duration: 0.5 }}
//                 >
//                     Delete Your Donation Record
//                 </motion.h2>
//                 <motion.p 
//                     className="xs:text-sm lg:text-lg xl:text-lg text-center mb-6 text-white bg-black lg:mx-80 p-3 rounded-lg font-bold"
//                     initial={{ opacity: 0, y: -20 }} 
//                     animate={{ opacity: 1, y: 0 }} 
//                     transition={{ duration: 0.5, delay: 0.1 }}
//                 >
//                     Please enter your name and phone number to delete your donation record.
//                 </motion.p>

//                 <div className="flex justify-center">
//                     <motion.form 
//                         onSubmit={handleDelete} 
//                         className="bg-red-50 p-8 rounded-lg shadow-md w-full max-w-lg border-4 border-black mb-36"
//                         initial={{ opacity: 0, y: 20 }} 
//                         animate={{ opacity: 1, y: 0 }} 
//                         transition={{ duration: 0.5 }}
//                     >
//                         <motion.div 
//                             className="mb-4"
//                             initial={{ opacity: 0, y: 20 }} 
//                             animate={{ opacity: 1, y: 0 }} 
//                             transition={{ duration: 0.5, delay: 0.2 }}
//                         >
//                             <label className="block text-gray-700" htmlFor="name">Name</label>
//                             <input 
//                                 type="text" 
//                                 id="name" 
//                                 name="name" 
//                                 value={formData.name} 
//                                 onChange={handleChange} 
//                                 required 
//                                 className="mt-1 block w-full border border-gray-300 rounded-md p-2"
//                             />
//                         </motion.div>
                        
//                         <motion.div 
//                             className="mb-4"
//                             initial={{ opacity: 0, y: 20 }} 
//                             animate={{ opacity: 1, y: 0 }} 
//                             transition={{ duration: 0.5, delay: 0.3 }}
//                         >
//                             <label className="block text-gray-700" htmlFor="phone">Phone</label>
//                             <input 
//                                 type="tel" 
//                                 id="phone" 
//                                 name="phone" 
//                                 value={formData.phone} 
//                                 onChange={handleChange} 
//                                 required 
//                                 className="mt-1 block w-full border border-gray-300 rounded-md p-2"
//                             />
//                         </motion.div>

//                         <button 
//                             type="submit" 
//                             className="w-full bg-red-600 text-white hover:bg-red-500 py-2 rounded transition duration-200"
//                         >
//                             Delete
//                         </button>
//                     </motion.form>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default DeleteData;














///////////////////////////////////////////////////////////////////////////////////////////////////////








import backgroundImage from '../Images/backgroundImage.png';
import { useState } from 'react';
import { motion } from 'framer-motion';

const DeleteData = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleDelete = async (e) => {
    e.preventDefault();
  
    try {
      // Fetch the current list of donors to find the matching record
      const response = await fetch('https://blood-link-server-phi.vercel.app/api/donors');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const donors = await response.json();
  
      // Find the donor record that matches the provided name and phone
      const donorToDelete = donors.find(donor => donor.name === formData.name && donor.phone === formData.phone);
  
      if (donorToDelete) {
        // Perform the delete operation
        const deleteResponse = await fetch(`https://blood-link-server-phi.vercel.app/api/donors/${donorToDelete.id}`, {
          method: 'DELETE',
        });
  
        if (!deleteResponse.ok) {
          throw new Error('Failed to delete the record');
        }
  
        console.log('Donation record deleted successfully');
  
        // Show success alert
        alert('Your donation record has been successfully deleted.');
  
        // Optionally reset the form or show a success message
        setFormData({ name: '', phone: '' });
      } else {
        alert('Donor not found. Please check your details and try again.');
        console.error('Donor not found');
      }
    } catch (error) {
      console.error('Error deleting donor record:', error);
      alert('There was an error deleting your record. Please try again.');
    }
  };

  return (
    <section className="py-6 bg-red-50 font-customFont bg-fixed bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="container mx-auto">
        <motion.h2 
          className="text-3xl font-bold text-center mb-3"
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }}
        >
          Delete Your Donation Record
        </motion.h2>
        <motion.p 
          className="xs:text-sm lg:text-lg xl:text-lg text-center mb-6 text-white bg-black lg:mx-80 p-3 rounded-lg font-bold"
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Please enter your name and phone number to delete your donation record.
        </motion.p>

        <div className="flex justify-center">
          <motion.form 
            onSubmit={handleDelete} 
            className="bg-red-50 p-8 rounded-lg shadow-md w-full max-w-lg border-4 border-black mb-36"
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

            <button 
              type="submit" 
              className="w-full bg-red-600 text-white hover:bg-red-500 py-2 rounded transition duration-200"
            >
              Delete
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default DeleteData;