import { useState } from 'react';
import profileImg from '../assets/profile.png';
import project1 from '../assets/Project1.jpg';
import project2 from '../assets/project2.jpg';
import project3 from '../assets/Project3.jpg';
import project4 from '../assets/Project4.jpg';
import {FaFigma,FaReact,FaJs} from "react-icons/fa";
import {SiAdobephotoshop,SiAdobexd,SiCanva} from "react-icons/si";

const projects = [
  {
    title: "Branding Design",
    category: "Branding Design",
    image: project2,
    link: "#"
  },
  {
    title: "Announcement flyer",
    category: "Graphic Design",
    image: project1,
    link: "#"
  },
  {
    title:"Community Hub",
    category: "Web Design",
    image: project3,
    link: "#"
  },
  {
    title:"Portfolio App",
    category:"App Design",
    image: project4,
    link:"#"
  }
  // Add more projects here
];

export default function Home() {
  const [formData, setFormData] = useState({ name: '', email: '', content: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert("Message sent successfully!");
        setFormData({ name: '', email: '', content: '' });
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <div className="bg-[#0f0715] text-white min-h-screen font-sans">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-12 py-6">
        <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-white bg-clip-text text-transparent">
          EO.
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium">
          <a href="#services" className="hover:text-purple-400 transition">Services</a>
          <a href="#works" className="hover:text-purple-400 transition">Works</a>
          <a href="#skills" className="hover:text-purple-400 transition">Skills</a>
          <a href="#contact" className="bg-gradient-to-r from-purple-600 to-indigo-600 px-6 py-2 rounded-full hover:opacity-90 transition">Hire Me!</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-12 py-20 gap-12">
        <div className="md:w-1/2">
          <h2 className="text-2xl font-bold text-white mb-2">I am Emmanuella</h2>
          <h1 className="text-6xl md:text-7xl font-black leading-tight bg-gradient-to-r from-purple-400 via-purple-200 to-white bg-clip-text text-transparent">
            Full Stack Developer +<br />Graphics Designer
          </h1>
          <p className="text-gray-400 mt-6 max-w-lg text-lg">
           I bridge the gap between code and design, building powerful<br/> powerful web applications and creative visual entities.
          </p>
          <div className="flex gap-4 mt-10">
           <a 
            href="/cv.pdf" 
            download="Emmanuella_Orjih_CV.pdf"
            className="border border-purple-500 text-purple-400 px-8 py-3 rounded-full font-bold hover:bg-purple-500 hover:text-white transition inline-block text-center"
            >
            Download CV
            </a>
          </div>
        </div>
        
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-80 h-80 bg-gradient-to-b from-purple-600 to-transparent rounded-3xl rotate-6 border-2 border-purple-500/30 overflow-hidden shadow-[0_0_50px_rgba(168,85,247,0.4)]">
             {/* Replace the src with your actual photo later */}
             <img src={profileImg} alt="Emmanuella Orjih" className="w-full h-full object-cover -rotate-6 scale-110" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="px-12 py-20 bg-[#140b1c]">
        <h2 className="text-4xl font-bold text-center mb-12">My Quality Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {['Branding Design', 'Graphic Design', 'Web Design', 'App Design'].map((service, index) => (
            <div key={index} className="flex justify-between items-center p-8 rounded-2xl bg-[#0f0715] border border-purple-900/20 hover:bg-gradient-to-r hover:from-purple-900/40 transition group cursor-pointer">
              <span className="text-xl font-bold text-gray-300 group-hover:text-white">{service}</span>
              <span className="text-purple-500 text-2xl">→</span>
            </div>
          ))}
        </div>
      </section>
    <section id="works" className="px-12 py-20 bg-[#0f0715]">
    <h2 className="text-4xl font-bold text-center mb-4">My Recent Works</h2>
    <p className="text-gray-400 text-center mb-12">Bringing ideas to life through design and code.</p>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
      {projects.map((project, index) => (
        <div key={index} className="group relative bg-[#140b1c] rounded-3xl p-6 border border-purple-900/10 hover:border-purple-500/50 transition-all duration-500">
          {/* Image Container */}
          <div className="relative overflow-hidden rounded-2xl h-80 w-full mb-6">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
            />
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-purple-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <button className="bg-white text-purple-900 font-bold px-6 py-2 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform">
                View Project
              </button>
            </div>
          </div>
          
          {/* Text Content */}
          <div className="px-2">
            <p className="text-purple-400 text-sm font-semibold uppercase tracking-widest mb-1">{project.category}</p>
            <h3 className="text-2xl font-bold text-white group-hover:text-purple-300 transition-colors">{project.title}</h3>
          </div>
        </div>
      ))}
    </div>
  </section>
      
      {/* Skills Section */}
<section id="skills" className="px-12 py-20 bg-[#0f0715]">
  <h2 className="text-4xl font-bold text-center mb-4">My Skills</h2>
  <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
    We put your ideas and thus your wishes in the form of a unique web project that inspires you and your customers.
  </p>
  
  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 max-w-6xl mx-auto">
    {[
      { name: 'Figma', percent: '92%', icon: <FaFigma className="text-[#F24E1E]"/> },
      { name: 'Canva', percent: '80%', icon: <SiCanva className="text-[#00C4CC]" /> },
      { name: 'XD', percent: '85%', icon: <SiAdobexd className="text-[#FF61F6]" /> },
      { name: 'Photoshop', percent: '90%', icon:<SiAdobephotoshop className="text-[#31A8FF]" />  },
      { name: 'React', percent: '89%', icon: <FaReact className="text-[#61DAFB]" /> },
      { name: 'JavaScript', percent: '93%', icon: <FaJs className="text-[#F7DF1E]" /> }
    ].map((skill, index) => (
      <div key={index} className="flex flex-col items-center group cursor-pointer">
        <div className="w-32 h-40 bg-[#140b1c] rounded-3xl border border-purple-900/20 flex flex-col items-center justify-center gap-4 group-hover:border-purple-500/50 group-hover:bg-[#1d1129] transition-all duration-300">
          <div className="text-5xl group-hover:scale-110 transition-transform">{skill.icon}</div>
          <span className="text-2xl font-bold text-gray-400 group-hover:text-purple-400">{skill.percent}</span>
        </div>
        <span className="mt-4 font-semibold text-purple-400 uppercase tracking-wider text-sm">{skill.name}</span>
      </div>
    ))}
  </div>
</section>
{/* Experience & Education Section */}
<section className="px-12 py-20 bg-[#0f0715]">
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
    
    {/* Experience Column */}
    <div>
      <div className="flex items-center gap-4 mb-10">
        <div className="p-3 bg-purple-900/30 rounded-xl">
          <span className="text-3xl">💼</span>
        </div>
        <h2 className="text-4xl font-bold">My Experience</h2>
      </div>
      
      <div className="space-y-6">
        {[
          { date: '2025 - Present', title: 'Ui Designer', company: 'Freelance' },
          { date: '2024 - 2025', title: 'Full Stack Web Developer', company: 'Freelance' },
          { date: '2023 - 2024', title: 'Graphic Designer', company: 'Freelance' }
        ].map((exp, index) => (
          <div key={index} className="group bg-[#140b1c] p-6 rounded-2xl border border-purple-900/20 hover:bg-gradient-to-r hover:from-purple-900/40 transition duration-300">
            <span className="text-purple-400 font-bold text-lg">{exp.date}</span>
            <h3 className="text-2xl font-black mt-2 uppercase">{exp.title}</h3>
            <p className="text-gray-400 mt-1">{exp.company}</p>
          </div>
        ))}
      </div>
    </div>
    {/* Education Column */}
    <div>
      <div className="flex items-center gap-4 mb-10">
        <div className="p-3 bg-purple-900/30 rounded-xl">
          <span className="text-3xl">🎓</span>
        </div>
        <h2 className="text-4xl font-bold">My Education</h2>
      </div>

      <div className="space-y-6">
        {[
          { date: '2024-till date', title: 'Chemical engineering Degree', school: 'Afe Bablola University' },
          { date: '2021 - 2022', title: 'Graphic Design Course', school: 'Online Certification' },
          { date: '2023 - 2024', title: 'Web Development Bootcamp', school: 'Online Certification' }
        ].map((edu, index) => (
          <div key={index} className="group bg-[#140b1c] p-6 rounded-2xl border border-purple-900/20 hover:bg-gradient-to-r hover:from-purple-900/40 transition duration-300">
            <span className="text-purple-400 font-bold text-lg">{edu.date}</span>
            <h3 className="text-2xl font-black mt-2 uppercase">{edu.title}</h3>
            <p className="text-gray-400 mt-1">{edu.school}</p>
          </div>
        ))}
      </div>
    </div>

  </div>
</section>
<section id="contact" className="px-12 py-20 bg-[#140b1c]">
  <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16">
    
    {/* Contact Information */}
    <div className="lg:w-2/5 space-y-8">
      <h2 className="text-5xl font-black bg-gradient-to-r from-purple-400 to-white bg-clip-text text-transparent">
        Let’s work together!
      </h2>
      <p className="text-gray-400 text-lg">
        I design and build modern digital products. Reach out if you have a project in mind or just want to say hello.
      </p>
      
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-full flex items-center justify-center text-xl">
            📞
          </div>
          <div>
            <p className="text-gray-400 text-sm">Phone</p>
            <p className="font-bold">+234 704 455 2311</p>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-full flex items-center justify-center text-xl">
            ✉️
          </div>
          <div>
            <p className="text-gray-400 text-sm">Email</p>
            <p className="font-bold">orjihemmanuella@gmail.com</p>
          </div>
        </div>
      </div>
    </div>

    {/* Contact Form */}
    <div className="lg:w-3/5 bg-[#0f0715] p-8 md:p-10 rounded-3xl border border-purple-900/30 shadow-2xl">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input 
            type="text" placeholder="First name" required
            className="w-full bg-[#140b1c] border border-purple-900/20 p-4 rounded-xl focus:border-purple-500 outline-none transition"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
          />
          <input 
            type="email" placeholder="Email address" required
            className="w-full bg-[#140b1c] border border-purple-900/20 p-4 rounded-xl focus:border-purple-500 outline-none transition"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
          />
        </div>
        <textarea 
          placeholder="Message" required rows="5"
          className="w-full bg-[#140b1c] border border-purple-900/20 p-4 rounded-xl focus:border-purple-500 outline-none transition"
          value={formData.content}
          onChange={(e) => setFormData({...formData, content: e.target.value})}
        ></textarea>
        
        <button type="submit" className="bg-gradient-to-r from-purple-600 to-indigo-600 px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform">
          Send Message
        </button>
        
        {status && (
          <p className={`mt-4 text-center font-bold ${status.includes('success') ? 'text-green-400' : 'text-purple-400'}`}>
            {status}
          </p>
        )}
      </form>
    </div>

  </div>
</section>
{/* Footer Section */}
<footer className="bg-[#0f0715] pt-20 pb-10 border-t border-purple-900/20">
  <div className="max-w-6xl mx-auto px-12 flex flex-col items-center">
    {/* Logo / Name */}
    <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-white bg-clip-text text-transparent mb-8">
      Emmanuella Orjih
    </div>

    {/* Footer Navigation */}
    <div className="flex flex-wrap justify-center gap-8 mb-10 text-sm font-medium text-gray-400">
      <a href="#services" className="hover:text-purple-400 transition">Services</a>
      <a href="#works" className="hover:text-purple-400 transition">Works</a>
      <a href="#resume" className="hover:text-purple-400 transition">Resume</a>
      <a href="#skills" className="hover:text-purple-400 transition">Skills</a>
      <a href="#contact" className="hover:text-purple-400 transition">Contact</a>
    </div>

    {/* Social Icons */}
    <div className="flex gap-4 mb-10">
      {['Twitter', 'LinkedIn', 'Github', 'Dribbble'].map((platform) => (
        <a 
          key={platform}
          href="#" 
          className="w-10 h-10 rounded-full border border-purple-500/30 flex items-center justify-center text-purple-400 hover:bg-purple-600 hover:text-white transition-all duration-300"
        >
          {/* Icons will go here */}
          <span className="text-xs">{platform[0]}</span>
        </a>
      ))}
    </div>

    {/* Copyright */}
    <p className="text-gray-500 text-sm">
      © {new Date().getFullYear()} <span className="text-purple-500">Emmanuella Orjih</span>. All Rights Reserved.
    </p>
  </div>
</footer>
    </div>
  );
}