// src/pages/About.jsx
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#040613] via-[#0a0f29] to-[#040613]">
      <div className="relative z-10 pt-32">
        <div className="max-w-7xl mx-auto px-8 flex flex-col lg:flex-row gap-16">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="lg:w-1/2"
          >
            <h1 className="text-7xl font-light text-white mb-12">About me</h1>
            <div className="space-y-6">
              <p className="text-xl text-gray-300 font-light leading-relaxed">
                Harry Settel is a New York City based stand up comedian. Also known as "Lil Sasquatch" or "Lil Sas" Harry got started in comedy through sketches online and was later hired by the sports media company Barstool Sports, where he still currently works.
              </p>
              <p className="text-xl text-gray-300 font-light leading-relaxed">
                He has a podcast called "Son of a Boy Dad" featuring Adam Ferrone and Francis Ellis. He is also involved in a sketch comedy show "Out of Order" featuring John Feitlberg, Kyle Bauer, and Nick Turani.
              </p>
              <p className="text-xl text-gray-300 font-light leading-relaxed">
                Harry is from Massachusetts and is a Patriots fan. He really likes the Patriots. He just loves ball in general. Harry is really funny and is a great guy. 
                <span className="text-green-400 italic"> I wrote this myself.</span>
              </p>
              <p className="text-xl text-gray-300 font-light leading-relaxed">
                Harry is a regular at the Stand in New York City and he also has a {' '}
                <Link 
                  to="/dont-tell-set" 
                  className="text-green-400 hover:text-green-300 transition-colors duration-300"
                >
                  Don't Tell Comedy set
                </Link>
                {' '}out on youtube currently that you should go check out, it's great.
              </p>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <img 
              src="https://static.wixstatic.com/media/cb3c17_191d1616c0fe4f589da55325b016e151~mv2.jpeg"
              alt="Harry Settel performing"
              className="w-full rounded-lg shadow-2xl object-cover aspect-4/3"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;