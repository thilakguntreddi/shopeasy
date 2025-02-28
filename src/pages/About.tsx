import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Briefcase, GraduationCap, Award } from 'lucide-react';

const About = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-16 py-10">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold mb-6">
          <span className="bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
            About Me
          </span>
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          I'm a passionate developer with a focus on creating beautiful, functional, and accessible web experiences.
        </p>
      </motion.div>

      {/* Bio Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        <div className="md:col-span-1">
          <div className="bg-gradient-to-br from-purple-500 to-pink-600 p-1 rounded-xl">
            <img 
              src="https://plus.unsplash.com/premium_photo-1669075651585-4410950e2eb8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGhpbGFrfGVufDB8fDB8fHww
              //" 
              alt="Profile" 
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div className="mt-6 space-y-4">
            <div className="flex items-center text-gray-300">
              <MapPin className="h-5 w-5 mr-2 text-purple-400" />
              <span>Andra pradesh , parvathipuram</span>
            </div>
            <div className="flex items-center text-gray-300">
              <Calendar className="h-5 w-5 mr-2 text-purple-400" />
              <span>Student</span>
            </div>
          </div>
        </div>
        <div className="md:col-span-2">
          <h2 className="text-2xl font-semibold mb-4">My Journey</h2>
          <div className="space-y-6 text-gray-300">
            <p>
              I'm a full-stack developer trainee with months  of experience building web applications and digital experiences. My passion lies in creating intuitive, accessible, and performant user interfaces that solve real problems.
            </p>
            <p>
              With a background in both design and development, I bring a unique perspective to projects, focusing on both aesthetics and functionality. I believe in writing clean, maintainable code and staying up-to-date with the latest technologies and best practices.
            </p>
            <p>
              When I'm not coding, you can find me exploring new hiking trails, experimenting with photography, or contributing to open-source projects. I'm always looking for new challenges and opportunities to grow as a developer.
            </p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-8 text-center">
          <span className="bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
            Experience & Education
          </span>
        </h2>
        <div className="space-y-8">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
            <div className="flex items-start">
              <div className="mr-4">
                <Briefcase className="h-6 w-6 text-blue-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Beginner Backend Developer</h3>
                <p className="text-purple-400 mb-2">Techwing trainee • Present</p>
                <p className="text-gray-300">
                  Led the Backend development at techwing.org, improving performance by day by day. Mentored junior developers and implemented modern Backend practices across the team.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
            <div className="flex items-start">
              <div className="mr-4">
                <Briefcase className="h-6 w-6 text-blue-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Full Stack Developer</h3>
                <p className="text-purple-400 mb-2">techwing • trainee - 2024</p>
                <p className="text-gray-300">
                  Developed and maintained multiple client projects using React, Node.js, and various databases. Implemented CI/CD pipelines and improved development workflows.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
            <div className="flex items-start">
              <div className="mr-4">
                <GraduationCap className="h-6 w-6 text-green-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Computer Science and Engineering</h3>
                <p className="text-purple-400 mb-2">godavari global university • present</p>
                <p className="text-gray-300">
                  Graduated with honors. Specialized in web technologies and human-computer interaction. Completed a thesis on optimizing user experiences in progressive web applications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-8 text-center">
          <span className="bg-gradient-to-r from-green-400 to-teal-500 bg-clip-text text-transparent">
            Skills & Technologies
          </span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            "JavaScript", "TypeScript", "React", , 
            "Node.js", 
            "Mysql", , "REST APIs",
            "CSS","springboot" , , "UI/UX Design",
            "Git", , , 
          ].map((skill, index) => (
            <div 
              key={index} 
              className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-white/10 rounded-lg p-3 text-center hover:from-purple-500/30 hover:to-pink-500/30 transition-colors"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;