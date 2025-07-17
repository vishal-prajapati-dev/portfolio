import React from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink,
  Code,
  Server,
  Database,
  Cloud,
  Shield,
  Zap,
  GitBranch,
  Terminal
} from 'lucide-react';

function App() {
  const skills = [
    { name: 'Node.js', icon: Server, level: 95 },
    { name: 'Express.js', icon: Zap, level: 90 },
    { name: 'TypeScript', icon: Code, level: 85 },
    { name: 'MongoDB', icon: Database, level: 88 },
    { name: 'PostgreSQL', icon: Database, level: 82 },
    { name: 'REST APIs', icon: Server, level: 92 },
    { name: 'GraphQL', icon: Code, level: 78 },
    { name: 'Docker', icon: Cloud, level: 80 },
    { name: 'AWS', icon: Cloud, level: 75 },
    { name: 'Redis', icon: Database, level: 85 },
    { name: 'JWT Auth', icon: Shield, level: 90 },
    { name: 'Git', icon: GitBranch, level: 95 },
    { name: 'Socket.io', icon: Zap, level: 82 },
    { name: 'Testing', icon: Terminal, level: 80 }
  ];

  const projects = [
    {
      name: 'Fancall',
      description: 'A comprehensive video calling platform with real-time communication features, user authentication, and scalable architecture.',
      tech: ['Node.js', 'Express.js', 'Socket.io', 'MongoDB','Cashfree'],
      liveLink: 'https://fancall.in/',
      githubLink: '#'
    },
    {
      name: 'Loanhood',
      description: 'A platform for renting clothes with secure payment processing, inventory management, and user authentication.',
      tech: ['Node.js', 'TypeScript', 'PostgreSQL', 'Stripe API', 'JWT','AWS S3'],
      liveLink: 'https://loanhood.com/',
      githubLink: '#'
    },
    {
      name: 'AssetSnap',
      description: 'Asset management system with real-time tracking, inventory management, and comprehensive reporting dashboard.',
      tech: ['Node.js', 'Express.js', 'MongoDB', 'Redis','Gemini API','AWS S3'],
      liveLink: '#',
      githubLink: '#'
    },
    {
      name: 'Bookiitt',
      description: 'Event ticket booking system,payment gateway integration, admin dashboard, organization management and scanner module',
      tech: ['Node.js', 'GraphQL', 'PostgreSQL', 'AWS S3', 'Nodemailer'],
      liveLink: 'https://bookiitt.com/',
      githubLink: '#'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="text-center">
            <div className="mb-8">
              <div className="w-32 h-32 bg-gradient-to-r from-green-400 to-blue-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                <Server className="w-16 h-16 text-white" />
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                Vishal Prajapati
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Node.js Developer | Building scalable backend solutions with 2+ years of experience
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <span className="px-4 py-2 bg-green-500/20 border border-green-500 rounded-full text-green-400">
                  Backend Development
                </span>
                <span className="px-4 py-2 bg-blue-500/20 border border-blue-500 rounded-full text-blue-400">
                  API Design
                </span>
                <span className="px-4 py-2 bg-purple-500/20 border border-purple-500 rounded-full text-purple-400">
                  Database Architecture
                </span>
              </div>
              <div className="flex justify-center space-x-6">
                <a href="#projects" className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                  View Projects
                </a>
                <a href="#contact" className="border border-green-500 text-green-500 hover:bg-green-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300">
                  Get in Touch
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-800">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white">Technical Skills</h2>
            <p className="text-xl text-gray-400">Technologies I work with to build robust applications</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div key={index} className="bg-gray-900 p-6 rounded-lg border border-gray-700 hover:border-green-500 transition-all duration-300 transform hover:scale-105">
                <div className="flex items-center mb-4">
                  <skill.icon className="w-8 h-8 text-green-500 mr-3" />
                  <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                  <div 
                    className="bg-gradient-to-r from-green-400 to-blue-500 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <p className="text-sm text-gray-400">{skill.level}% Proficiency</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white">Featured Projects</h2>
            <p className="text-xl text-gray-400">Some of my recent work and contributions</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700 hover:border-green-500 transition-all duration-300 transform hover:scale-105">
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-white">{project.name}</h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="px-3 py-1 bg-green-500/20 border border-green-500/50 rounded-full text-green-400 text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-4">
                    <a 
                      href={project.liveLink}
                      className="flex items-center text-green-400 hover:text-green-300 transition-colors duration-200"
                    >
                      <ExternalLink className="w-4 h-4 mr-1" />
                      Live Demo
                    </a>
                    <a 
                      href={project.githubLink}
                      className="flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-200"
                    >
                      <Github className="w-4 h-4 mr-1" />
                      Source Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-800">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white">About Me</h2>
            <p className="text-xl text-gray-400">Passionate about building scalable solutions</p>
          </div>
          
          <div className="bg-gray-900 rounded-lg p-8 border border-gray-700">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-green-400">My Journey</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  As a dedicated Node.js developer with over 2 years of experience, I specialize in building 
                  robust, scalable backend systems and APIs. My passion lies in creating efficient solutions 
                  that solve real-world problems.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  I have hands-on experience with modern technologies including Express.js, TypeScript, 
                  MongoDB, PostgreSQL, and cloud platforms. I'm always eager to learn new technologies 
                  and improve my craft.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-4 text-blue-400">What I Do</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center">
                    <Server className="w-5 h-5 text-green-500 mr-3" />
                    Backend API Development
                  </li>
                  <li className="flex items-center">
                    <Database className="w-5 h-5 text-green-500 mr-3" />
                    Database Design & Optimization
                  </li>
                  <li className="flex items-center">
                    <Shield className="w-5 h-5 text-green-500 mr-3" />
                    Authentication & Security
                  </li>
                  <li className="flex items-center">
                    <Cloud className="w-5 h-5 text-green-500 mr-3" />
                    Cloud Infrastructure
                  </li>
                  <li className="flex items-center">
                    <Zap className="w-5 h-5 text-green-500 mr-3" />
                    Performance Optimization
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white">Get In Touch</h2>
            <p className="text-xl text-gray-400">Let's discuss your next project</p>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-8 border border-gray-700">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-green-400">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-300">prajapativishal1545@gmail.com</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-300">+91 95105 95866</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-300">Ahmedabad, Gujarat, India</span>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h4 className="text-lg font-semibold mb-4 text-white">Follow Me</h4>
                  <div className="flex space-x-4">
                    <a href="https://github.com/vishal-prajapati-dev" className="text-gray-400 hover:text-green-400 transition-colors duration-200">
                      <Github className="w-6 h-6" />
                    </a>
                    <a href="https://www.linkedin.com/in/vishalkumar-prajapati-436221336/" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                      <Linkedin className="w-6 h-6" />
                    </a>
                    <a href="mailto:prajapativishal1545@gmail.com" className="text-gray-400 hover:text-green-400 transition-colors duration-200">
                      <Mail className="w-6 h-6" />
                    </a>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-6 text-blue-400">Let's Work Together</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  I'm always interested in new opportunities and challenging projects. 
                  Whether you need a backend developer for your team or want to discuss 
                  a project, feel free to reach out.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    <span className="text-gray-300">Available for freelance work</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    <span className="text-gray-300">Open to full-time opportunities</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    <span className="text-gray-300">Available for consulting</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 border-t border-gray-700 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-gray-400">
            © 2024 Node.js Developer Portfolio. Built with React and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;