import { useState } from 'react';
import { motion } from 'framer-motion';
import { addDonor } from '../Services/donorService';

const Donate = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    district: '',
    bloodType: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSubmitting) return;

    try {
      setIsSubmitting(true);
      await addDonor(formData);

      alert(
        'Thank you for your donation! Your information has been submitted and will be visible for 1 hour.'
      );

      setFormData({ name: '', phone: '', district: '', bloodType: '' });
    } catch (error) {
      console.error('Error adding donor:', error);
      alert(
        `There was an error submitting your information: ${error.message}`
      );
    } finally {
      setIsSubmitting(false);
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
          Become a <span className="text-red-600">Donor</span>
        </motion.h2>
        <motion.p
          className="bg-red-600 xs:text-sm lg:text-lg xl:text-lg text-center mb-6 text-red-50 font-bold border-4 border-black lg:mx-96 p-2 rounded-full"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Your donation can save lives! Fill out the form below.
        </motion.p>

        <div className="flex justify-center">
          <motion.form
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-3xl shadow-md w-full max-w-lg border-4 border-black"
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
                disabled={isSubmitting}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2 disabled:bg-gray-100"
              />
            </motion.div>

            <motion.div
              className="mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
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
                disabled={isSubmitting}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2 disabled:bg-gray-100"
              />
            </motion.div>

            <motion.div
              className="mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <label className="block text-gray-700" htmlFor="district">
                District
              </label>
              <select
                id="district"
                name="district"
                value={formData.district}
                onChange={handleChange}
                required
                disabled={isSubmitting}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2 disabled:bg-gray-100"
              >
                <option value="">Select your District</option>
                <option value="Central and Western">
                  Central and Western
                </option>
                <option value="Eastern">Eastern</option>
                <option value="Southern">Southern</option>
                <option value="Yau Tsim Mong">Yau Tsim Mong</option>
                <option value="Sham Shui Po">Sham Shui Po</option>
                <option value="Kowloon City District">
                  Kowloon City District
                </option>
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
              <label className="block text-gray-700" htmlFor="bloodType">
                Blood Type
              </label>
              <select
                id="bloodType"
                name="bloodType"
                value={formData.bloodType}
                onChange={handleChange}
                required
                disabled={isSubmitting}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2 disabled:bg-gray-100"
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
              disabled={isSubmitting}
              className="w-full bg-red-600 text-white hover:bg-red-500 py-2 rounded-xl transition duration-200 disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Donate;