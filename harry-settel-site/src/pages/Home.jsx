// src/pages/Home.jsx
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className="relative min-h-screen">
      {/* Hero Background Image */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#040613]/90 via-[#0a0f29]/50 to-[#040613]/90 z-10" />
        <img 
          src="https://static.wixstatic.com/media/cb3c17_989bc781745f4e3f9f1dc08918c3c68c~mv2.jpg"
          alt=""
          className="w-full h-screen object-cover"
        />
      </div>

      {/* Content Overlay */}
      <div className="relative z-20 min-h-screen flex items-center justify-start">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto px-12 md:px-16 lg:px-24"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-left"
          >
            <h1 className="font-light tracking-tight text-white opacity-90">
              <span className="block text-5xl mb-2">Harry</span>
              <span className="block text-7xl font-medium">Settel</span>
              <span className="block text-2xl mt-4 tracking-widest uppercase text-gray-400">Website</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-12 max-w-xl"
          >
            <blockquote className="text-xl font-light italic mb-3 text-gray-300 tracking-wide">
              "The Perfect Website For all things Harry Settel related."
            </blockquote>
            <cite className="text-sm text-gray-400 tracking-wider">- New York Times</cite>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;