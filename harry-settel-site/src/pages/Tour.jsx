// src/pages/Tour.jsx
import { motion } from 'framer-motion';

const Tour = () => {
  const show = {
    location: "Grand Rapids, MI",
    dates: "Dec 12-14",
    venue: "Dr. Grins Comedy Club",
    ticketLink: "#" // Add actual ticket link here
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#040613] via-[#0a0f29] to-[#040613]">
      {/* Main Content */}
      <div className="relative z-10 pt-32 px-12 md:px-16 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-7xl font-light text-white mb-24">
            Upcoming Shows
          </h1>

          {/* Show Details */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="group"
          >
            <div className="flex flex-col space-y-2">
              <div className="flex items-baseline space-x-4">
                <span className="text-4xl font-light text-white">
                  {show.location}
                </span>
                <span className="text-3xl text-white/80">
                  {show.dates}
                </span>
              </div>
              
              <span className="text-xl text-gray-500 font-light">
                {show.venue}
              </span>

              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="pt-6"
              >
                <a
                  href={show.ticketLink}
                  className="inline-block text-green-400 hover:text-green-300 transition-colors duration-300 group-hover:translate-x-2 transform transition-transform"
                >
                  Get Tickets →
                </a>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#040613] via-transparent to-transparent pointer-events-none" />
    </div>
  );
};

export default Tour;