    import aboutimage from '../Images/aboutimage1.png';
    import dashboard from '../Images/dashboard.png';
    import find from '../Images/find.png';
    import register from '../Images/Register.png';
    import { motion } from 'framer-motion';

    const AboutUsCard = ({ title, description, image }) => {
      return (
        <motion.div 
          className="flex flex-col items-center bg-red-50 shadow-lg rounded-3xl border-4 border-black h-96 font-customFont max-w-xs w-full transform transition-transform duration-300 hover:-translate-y-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img src={image} alt={title} className="w-44 h-44 p-4" />
          <div>
            <h2 className="block text-xl font-bold mb-2 text-center bg-red-600 bg-cover p-2">{title}</h2>
            <p className="text-gray-700 p-4 text-center">{description}</p>
          </div>
        </motion.div>
      );
    };

    const AboutUsSection = () => {
      const cards = [
        {
          title: 'Our Mission',
          description: 'To save lives by facilitating blood donations and raising awareness about the importance of donating blood.',
          image: dashboard,
        },
        {
          title: 'Our Vision',
          description: 'A world where every patient in need of blood has access to safe and sufficient blood supplies.',
          image: find,
        },
        {
          title: 'Get Involved',
          description: 'Join us in our mission to save lives. Learn how you can help by donating blood or volunteering.',
          image: register,
        },
      ];

      return (
        <section className="bg-[#ffefe3] bg-fixed bg-cover bg-center px-3 xs:pt-4 ms:pt-4 lg:pt-0 xl:pt-0" 
         >
          <div className="bg-transparent xs:bg-auto lg:p-8 xl:p-8 max-w-screen-xl mx-auto">
            <motion.div 
              className="flex flex-col md:flex-row items-center p-6 bg-red-600 rounded-3xl border-4 border-black"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex-1 mx-10">
                <img
                  src={aboutimage}
                  alt="Blood Donation"
                  className="ms:max-w-ms xs:max-w-ms lg:max-w-sm"
                />
              </div>
              <div className="flex-col items-start font-customFont">
                <h2 className="xs:text-4xl lg:text-5xl xl:text-5xl text-white font-bold mb-5 xs:text-center sm:text-center lg:text-left xl:text-left">About Us</h2>
                <p className="text-red-200 font-semibold xs:text-center sm:text-center lg:text-left ms:text-ms xs:text-ms lg:text-xl xl:text-xl ">
                  At Blood-Link, our mission is to save lives by bridging the gap between blood donors and those in need. We are dedicated to fostering a community where compassion and generosity are at the forefront. Our goal is to make blood donation easy, accessible, and impactful for everyone involved.
                </p>
              </div>
            </motion.div>

            <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-32 mt-10 text-red-100">
              {cards.map((card, index) => (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, y: 20 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  transition={{ duration: 0.5, delay: index * 0.2 }} // Staggering effect
                >
                  <AboutUsCard title={card.title} description={card.description} image={card.image} />
                </motion.div>
              ))}
            </div>

            <p className='bg-red-600 mt-7 rounded-full p-3 text-white font-customFont text-center border-4 border-black font-bold mb-6'>
              24x7 availability of blood so that No one should die waiting for Blood, Blood should wait to give a life.
            </p>
          </div>
        </section>
      );
    };

    export default AboutUsSection;