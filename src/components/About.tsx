import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Database, Layout, Palette, Server, Brain, Globe, Shield } from 'lucide-react';

const skills = [
  { name: 'Frontend Development', icon: Layout, level: 90 },
  { name: 'Backend Development', icon: Database, level: 85 },
  { name: 'UI/UX Design', icon: Palette, level: 80 },
  { name: 'Problem Solving', icon: Brain, level: 95 },
  { name: ' Deployment', icon: Server, level: 75 },
  { name: 'API Development', icon: Globe, level: 88 },
  { name: 'Security & Performance', icon: Shield, level: 82 },
  { name: 'Algorithm Design', icon: Code2, level: 85 },
];

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl font-bold text-white mb-4"
            >
              About <span className="gradient-text">Me</span>
            </motion.h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-8" />
          </div>
          
          <div className="grid md:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="text-2xl font-semibold text-blue-500 mb-6">My Journey</h3>
              <div className="space-y-6 text-gray-300">
                <p className="leading-relaxed">
                  With over 1 years of experience in full-stack development, I've had the privilege
                  of working on diverse projects that have shaped my expertise in creating scalable,
                  user-centric applications.
                </p>
                <p className="leading-relaxed">
                  After graduating from DAVV Indore with a degree in Computer Science, I've dedicated
                  myself to mastering modern web technologies and best practices in software development.
                </p>
                <p className="leading-relaxed">
                  My approach combines technical excellence with creative problem-solving, ensuring
                  that every project not only meets but exceeds expectations.
                </p>
              </div>
              
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="bg-gray-800/50 p-4 rounded-lg backdrop-blur-sm border border-gray-700">
                  <h4 className="text-blue-400 font-semibold mb-2">Education</h4>
                  <p className="text-gray-300">B.sc in Computer Science</p>
                  <p className="text-gray-400">DAVV Indore</p>
                </div>
                <div className="bg-gray-800/50 p-4 rounded-lg backdrop-blur-sm border border-gray-700">
                  <h4 className="text-blue-400 font-semibold mb-2">Experience</h4>
                  <p className="text-gray-300"> Full Stack Developer</p>
                  <p className="text-gray-400">1+ Years</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="text-2xl font-semibold text-blue-500 mb-6">Technical Expertise</h3>
              <div className="grid grid-cols-1 gap-6">
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                  >
                    <div className="flex items-center mb-2">
                      <skill.icon className="w-5 h-5 text-blue-500 mr-3" />
                      <span className="text-gray-300 flex-1">{skill.name}</span>
                      <span className="text-blue-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                        className="h-full rounded-full bg-gradient-to-r from-blue-500 to-blue-700"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;