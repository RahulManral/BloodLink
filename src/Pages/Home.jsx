import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {

  const textVariants = {
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

const buttonVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5, delay: 0.4, ease: "easeOut" } },
};

  return (
    <section 
      className="flex items-center h-screen bg-cover xs:w-full bg-left lg:bg-center text-red-500 font-customFont relative bg-home"
    >
      <div className="container mx-4 z-10 p-6 max-w-4xl text-center md:text-left">
          <motion.h1
            className="text-5xl md:text-7xl font-extrabold leading-tight mb-4 drop-shadow-lg"
            variants={textVariants}
            initial="hidden"
            animate="visible"
          >
            Your Donation <br /> Can Save a <span className="text-red-600">Life</span>.
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl font-semibold mb-8 max-w-xl mx-auto md:mx-0 opacity-90"
            variants={textVariants}
            initial="hidden"
            animate="visible"
            transition={{ ...textVariants.visible.transition, delay: 0.2 }}
          >
            Join our mission to connect blood donors with those in urgent need. Every drop counts.
          </motion.p>

          <motion.div
            variants={buttonVariants}
            initial="hidden"
            animate="visible"
          >
            <Link
              to="/donate"
              className="inline-block bg-red-600 text-white text-xl md:text-2xl font-bold px-10 py-4 rounded-full shadow-lg
                         hover:bg-red-700 hover:scale-105 transition-all duration-300 ease-in-out transform"
            >
              Donate Now
            </Link>
            <Link
              to="/about"
              className="inline-block border-2 border-white text-red text-xl md:text-2xl font-bold px-10 py-4 rounded-full ml-4 shadow-lg
                         hover:bg-white hover:text-red-600 hover:scale-105 transition-all duration-300 ease-in-out transform"
            >
              Learn More
            </Link>
          </motion.div>
        </div>
    </section>
  );
}

export default Home;