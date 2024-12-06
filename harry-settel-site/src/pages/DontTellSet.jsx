// src/pages/DontTellSet.jsx
import { motion } from 'framer-motion';

const DontTellSet = () => {
  // Function to handle video click
  const handleVideoClick = () => {
    window.open('https://www.youtube.com/watch?v=n_qNCi6gz5Q', '_blank');
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#040613] via-[#0a0f29] to-[#040613]">
      <div className="relative z-10 pt-32 px-12 md:px-16 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <h1 className="text-7xl font-light text-white mb-16">
            My Don't Tell Set
          </h1>

          {/* Video Container */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="relative w-full rounded-lg overflow-hidden aspect-video mb-12 group cursor-pointer transition-transform duration-300 hover:scale-[1.01] hover:shadow-2xl"
            onClick={handleVideoClick}
          >
            {/* Play button overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
              <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-green-500/90 text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 ml-1">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>

            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/n_qNCi6gz5Q"
              title="Why The Suburbs Freak Me Out | Harry Settel | Stand Up Comedy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </motion.div>

          {/* YouTube Channel Link */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-center"
          >
          </motion.div>
        </motion.div>
      </div>

      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#040613] via-transparent to-transparent pointer-events-none" />
    </div>
  );
};

export default DontTellSet;