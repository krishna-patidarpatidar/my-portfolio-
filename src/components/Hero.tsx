import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Github, Linkedin, Mail } from 'lucide-react';
import krishnaImg from "../assets/images/krishnaPatidar.png";
const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800">
      {/* Updated background pattern */}
      <div className="absolute inset-0 w-full h-full bg-[radial-gradient(#ffffff22_1px,transparent_1px)] [background-size:32px_32px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      
      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="inline-block px-6 py-2 border border-blue-500 rounded-full text-blue-400 mb-4"
            >
              Welcome to my portfolio
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              <span className="text-white">Hi, I'm </span>
              <span className="gradient-text">Krishna Patidar</span>
            </h1>
            <div className="text-xl md:text-2xl text-gray-300 mb-6 h-[60px]">
              <TypeAnimation
                sequence={[
                  'Full Stack Developer',
                  2000,
                  'UI/UX Designer',
                  2000,
                  'Problem Solver',
                  2000,
                ]}
                repeat={Infinity}
              />
            </div>
            <p className="text-gray-300 mb-8 text-lg leading-relaxed">
              Transforming ideas into elegant, scalable solutions. Specialized in React.js, 
              modern web technologies, and creating exceptional user experiences.
            </p>
            <div className="flex flex-wrap gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-full font-semibold hover:from-blue-700 hover:to-blue-900 transition-all shadow-lg"
              >
                View My Work
              </motion.button>
              <div className="flex gap-6 items-center">
                <motion.a
                  whileHover={{ y: -3, color: '#60A5FA' }}
                  href="https://github.com/krishna-patidarpatidar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  <Github size={24} />
                </motion.a>
                <motion.a
                  whileHover={{ y: -3, color: '#60A5FA' }}
                  href="https://www.linkedin.com/in/krishna-patidar-19b24330a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  <Linkedin size={24} />
                </motion.a>
                <motion.a
                  whileHover={{ y: -3, color: '#60A5FA' }}
                  href="mailto:krishna.patidar115@gmail.com"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  <Mail size={24} />
                </motion.a>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 relative"
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 opacity-20 blur-2xl animate-pulse" />
              <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 opacity-30 animate-spin-slow" />
              <img
                src={krishnaImg}
                alt="Krishna Patidar"
                className="w-full h-full object-cover rounded-full border-2 border-blue-500/50 p-1 backdrop-blur-sm"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;