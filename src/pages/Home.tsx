import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Database, Layout, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="space-y-20 py-10">
      {/* Hero Section */}
      <section className="flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Creative Developer & Designer
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Building beautiful, functional, and accessible web experiences
            that bring ideas to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/projects"
              className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full font-medium hover:opacity-90 transition-opacity flex items-center justify-center"
            >
              View Projects <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/contact"
              className="px-6 py-3 bg-white/10 border border-white/20 rounded-full font-medium hover:bg-white/20 transition-colors"
            >
              Contact Me
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Code className="h-8 w-8 text-blue-400" />,
                title: "Frontend Development",
                description: "Creating responsive, accessible, and performant user interfaces with modern frameworks."
              },
              {
                icon: <Database className="h-8 w-8 text-green-400" />,
                title: "Backend Development",
                description: "Building robust APIs and server-side applications with scalable architecture."
              },
              {
                icon: <Layout className="h-8 w-8 text-purple-400" />,
                title: "UI/UX Design",
                description: "Designing intuitive and engaging user experiences with a focus on usability."
              },
              {
                icon: <Sparkles className="h-8 w-8 text-pink-400" />,
                title: "Creative Coding",
                description: "Exploring the intersection of code, design, and interactive experiences."
              }
            ].map((skill, index) => (
              <div 
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors"
              >
                <div className="mb-4">{skill.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
                <p className="text-gray-300">{skill.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Featured Project Preview */}
      <section>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Check out some of my recent work. Each project represents a unique challenge and solution.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="group">
            <div className="overflow-hidden rounded-xl mb-4 border border-white/10">
              <img 
                src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                alt="E-commerce Dashboard" 
                className="w-full h-64 object-cover object-center group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">E-commerce website and dashboard</h3>
            <p className="text-gray-300 mb-4">A comprehensive admin dashboard for managing online stores with real-time analytics.</p>
            <Link to="/projects" className="text-purple-400 hover:text-purple-300 flex items-center">
              View Project <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          <div className="group">
            <div className="overflow-hidden rounded-xl mb-4 border border-white/10">
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                alt="AI Content Generator" 
                className="w-full h-64 object-cover object-center group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">AI Content Generator</h3>
            <p className="text-gray-300 mb-4">An application that leverages AI to generate high-quality content for various purposes.</p>
            <Link to="/projects" className="text-purple-400 hover:text-purple-300 flex items-center">
              View Project <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
        <div className="text-center mt-10">
          <Link 
            to="/projects"
            className="px-6 py-3 bg-white/10 border border-white/20 rounded-full font-medium hover:bg-white/20 transition-colors inline-flex items-center"
          >
            View All Projects <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;