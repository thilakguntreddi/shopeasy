import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Loader } from 'lucide-react';
import axios from 'axios';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl: string;
  repoUrl: string;
}

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState('All');

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        // In a real application, this would be an actual API endpoint
        // For demo purposes, we're simulating an API response
        // setLoading(true);
        // const response = await axios.get('https://api.example.com/projects');
        // setProjects(response.data);
        
        // Simulated API response
        setTimeout(() => {
          setProjects([
            {
              id: 1,
              title: "E-commerce website and dash",
              description: "A comprehensive admin dashboard for managing online stores with real-time analytics and inventory management.",
              image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
              tags: ["React", "TypeScript", "Tailwind CSS", "Frontend"],
              demoUrl: "https://example.com",
              repoUrl: "https://github.com"
            },
            {
              id: 2,
              title: "AI Content Generator",
              description: "An application that leverages AI to generate high-quality content for various purposes including blog posts and social media.",
              image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
              tags: ["React", "Node.js", "AI", "Full Stack"],
              demoUrl: "https://example.com",
              repoUrl: "https://github.com"
            },
            
            {
              id: 4,
              title: "Weather Visualization",
              description: "An interactive weather visualization tool that displays current and historical weather data with beautiful animations.",
              image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
              tags: ["JavaScript", "D3.js", "API", "Frontend"],
              demoUrl: "https://example.com",
              repoUrl: "https://github.com"
            },
            
            {
              id: 6,
              title: "Portfolio Website",
              description: "A modern portfolio website with smooth animations, responsive design, and optimized performance.",
              image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
              tags: ["React", "Framer Motion", "Frontend"],
              demoUrl: "https://example.com",
              repoUrl: "https://github.com"
            }
          ]);
          setLoading(false);
        }, 1000);
      } catch (err) {
        setError('Failed to fetch projects. Please try again later.');
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const filters = ['All', 'Frontend', 'Full Stack', 'Mobile', 'API'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.tags.includes(activeFilter));

  return (
    <div className="max-w-6xl mx-auto space-y-12 py-10">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold mb-6">
          <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            My Projects
          </span>
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          A collection of my work, showcasing my skills and experience in web development and design.
        </p>
      </motion.div>

      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-4">
        {filters.map(filter => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeFilter === filter
                ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white'
                : 'bg-white/10 text-white hover:bg-white/20'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      {loading ? (
        <div className="flex justify-center items-center py-20">
          <Loader className="h-8 w-8 text-purple-400 animate-spin" />
          <span className="ml-2 text-lg">Loading projects...</span>
        </div>
      ) : error ? (
        <div className="text-center py-20">
          <p className="text-red-400 text-lg">{error}</p>
          <button 
            className="mt-4 px-4 py-2 bg-purple-500 rounded-lg hover:bg-purple-600 transition-colors"
            onClick={() => window.location.reload()}
          >
            Try Again
          </button>
        </div>
      ) : (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:from-white/10 hover:to-white/15 transition-colors"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className="text-xs px-2 py-1 bg-white/10 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between">
                  <a 
                    href={project.demoUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:text-purple-300 flex items-center"
                  >
                    Live Demo <ExternalLink className="ml-1 h-4 w-4" />
                  </a>
                  <a 
                    href={project.repoUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:text-purple-300 flex items-center"
                  >
                    Code <Github className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default Projects;