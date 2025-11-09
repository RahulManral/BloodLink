import { useState } from 'react';
import { motion } from 'framer-motion';
import { findDonor, deleteDonor } from '../Services/donorService';

const DeleteData = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
  });
  const [isDeleting, setIsDeleting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleDelete = async (e) => {
    e.preventDefault();

    if (isDeleting) return;

    try {
      setIsDeleting(true);

      // Find the donor
      const donor = await findDonor(formData.name, formData.phone);

      if (!donor) {
        alert('Donor not found. Please check your details and try again.');
        return;
      }

      if (donor.isPermanent) {
        alert('This is a permanent record and cannot be deleted.');
        return;
      }

      // Delete the donor
      await deleteDonor(donor.id);

      alert('Your donation record has been successfully deleted.');
      setFormData({ name: '', phone: '' });
    } catch (error) {
      console.error('Error deleting donor record:', error);
      alert(`Error: ${error.message}`);
    } finally {
      setIsDeleting(false);
    }
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
          Delete Your Donation Record
        </motion.h2>
        <motion.p
          className="xs:text-sm lg:text-lg xl:text-lg text-center mb-6 text-white bg-black lg:mx-80 p-3 rounded-lg font-bold"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Enter your name and phone number to delete your donation record.
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
              <label className="block text-gray-700" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                disabled={isDeleting}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2 disabled:bg-gray-100"
              />
            </motion.div>

            <motion.div
              className="mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <label className="block text-gray-700" htmlFor="phone">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                disabled={isDeleting}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2 disabled:bg-gray-100"
              />
            </motion.div>

            <button
              type="submit"
              disabled={isDeleting}
              className="w-full bg-red-600 text-white hover:bg-red-500 py-2 rounded transition duration-200 disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              {isDeleting ? 'Deleting...' : 'Delete'}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default DeleteData;