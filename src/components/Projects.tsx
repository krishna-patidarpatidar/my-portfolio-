import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'RoboSensy - Hospital Management',
    description: 'Advanced hospital management system with AI-powered patient care and resource optimization.',
    image: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=600&h=400&fit=crop',
    technologies: ['React', 'Node.js','express', 'MongoDB', 'WebSocket'],
    // github: 'https://github.com/krishna-patidarpatidar',
    demo: 'https://dev.robosensy.in/',
    features: [
      'Real-time patient monitoring',
      'AI-driven diagnosis assistance',
      'Resource management',
      'Staff scheduling'
    ]
  },
  {
    title: 'Shop Management System',
    description: 'A comprehensive solution for managing inventory, sales, and customer data.',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
    github: 'https://github.com/krishna-patidarpatidar/my-shop-management',
    // demo: 'https://shop-management-demo.com'
  },
  {
    title: 'Restaurant Management System',
    description: 'Digital solution for restaurant operations including ordering and inventory.',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop',
    technologies: ['React', 'Firebase', 'Tailwind CSS'],
    // github: 'https://github.com/krishnapatidar/restaurant-management',
    // demo: 'https://restaurant-management-demo.com'
  },
  {
    title: 'Personal Portfolio Website',
    description: 'Modern portfolio website with animations and responsive design.',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop',
    technologies: ['React', 'Framer Motion', 'Tailwind CSS'],
    // github: 'https://github.com/krishnapatidar/portfolio',
    // demo: 'https://krishnapatidar.com'
  }
];

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Featured <span className="gradient-text">Projects</span></h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full" />
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-gray-900 rounded-xl overflow-hidden group hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300"
              >
                <div className="relative overflow-hidden h-64">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60" />
                  <div className="absolute inset-0 bg-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-semibold text-white mb-3">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  
                  {project.features && (
                    <ul className="mb-4 space-y-2">
                      {project.features.map((feature, i) => (
                        <li key={i} className="text-gray-400 flex items-center">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  )}
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-sm bg-blue-600/20 text-blue-400 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-6">
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                    >
                      <Github size={20} />
                      <span>View Code</span>
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                    >
                      <ExternalLink size={20} />
                      <span>Live Demo</span>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;