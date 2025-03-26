"use client";

//import Image from "next/image";
import { useState } from "react";
import Navbar1 from "../navbar";
import { FaBullseye, FaEye, FaBalanceScale } from "react-icons/fa"; // Icons for mission, vision, and values
import Footer from "../footer";

const AboutUs = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message sent successfully!");
  };

  return (
    <div className="relative bg-gray-900 text-white py-12">
      <Navbar1 />

      {/* About Section */}
      <div className="bg-gray-900 py-12 ">
  <div className="max-w-5xl mx-auto">
    {/* Title */}
    <h2 className="text-4xl text-center font-bold text-white">About Us</h2>

    {/* Description */}
    <p className="mt-4 text-gray-300 text-lg leading-relaxed">
      Cyb4X is a leading <span className="font-semibold text-blue-400">Cyber Security solutions provider </span> 
      specializing in proactive security strategies to safeguard businesses from digital threats. Our expert team 
      ensures compliance, risk mitigation, and security resilience through cutting-edge methodologies.
    </p>

    {/* Services Section (Better Spacing & Alignment) */}
    <div className="mt-6 bg-gray-800 p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold text-white">Our Expertise</h3>
      <ul className="mt-3 text-gray-300 list-disc list-inside space-y-2">
        <li>🔍 Vulnerability Assessment and Penetration Testing</li>
        <li>🛡️ Network Security Testing</li>
        <li>🌐 Website and Web Service Security Testing</li>
        <li>📜 Certifications & Audits (ISO 27001, GDPR Gap Assessment, VAPT Audit, HIPAA Audit)</li>
        <li>🔐 Cloud Security & Infrastructure Protection</li>
        <li>⚡ Incident Response and Threat Intelligence</li>
      </ul>
    </div>

    {/* CTA Section */}
    <div className="mt-6">
      <p className="text-gray-300 text-lg">
        Our approach integrates manual methodologies with the latest security tools, ensuring robust protection 
        against cyber threats. <span className="font-semibold text-blue-400">Connect with us</span> today to 
        secure your business.
      </p>
    </div>
  </div>
</div>


      {/* Mission, Vision, Values Section */}
      <div className="grid md:grid-cols-3 gap-8 mt-12 mx-5">
        {/* Mission Card */}
        <div className="bg-gray-800 hover:bg-gray-700 transition-all duration-300 rounded-lg shadow-lg p-6 text-center">
          <FaBullseye className="text-4xl text-blue-400 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-white">Our Mission</h3>
          <p className="text-gray-400 mt-2">
            To empower businesses with cutting-edge cyber security solutions, ensuring robust digital protection and risk mitigation.
          </p>
          <ul className="mt-4 text-gray-300 list-disc list-inside text-left">
      <li>🔐 Strengthening cybersecurity infrastructure</li>
      <li>🛡️ Proactive threat detection & response</li>
      <li>📊 Enhancing compliance & regulatory standards</li>
      <li>🚀 Driving innovation in security solutions</li>
      <li>👨‍💻 Educating businesses on cybersecurity best practices</li>
    </ul>
        </div>

        {/* Vision Card */}
        <div className="bg-gray-800 hover:bg-gray-700 transition-all duration-300 rounded-lg shadow-lg p-6 text-center">
          <FaEye className="text-4xl text-blue-400 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-white">Our Vision</h3>
          <p className="text-gray-400 mt-2">
            To be the most trusted cyber security partner, setting global standards in risk management and data protection.
          </p>
          <ul className="mt-4 text-gray-300 list-disc list-inside text-left">
      <li>🌍 Establishing trust in the digital world</li>
      <li>🔍 Continuous innovation in cybersecurity</li>
      <li>💡 Promoting ethical hacking & security awareness</li>
      <li>⚡ Adapting to evolving cyber threats</li>
      <li>📈 Driving growth with security-first strategies</li>
    </ul>
        </div>

        {/* Values Card */}
        <div className="bg-gray-800 hover:bg-gray-700 transition-all duration-300 rounded-lg shadow-lg p-6 text-center">
          <FaBalanceScale className="text-4xl text-blue-400 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-white">Our Values</h3>
          <p className="text-gray-400 mt-2">
            Integrity, Innovation, and Excellence drive us forward, ensuring top-tier security solutions and customer satisfaction.
          </p>
          <ul className="mt-4 text-gray-300 list-disc list-inside text-left">
      <li>🤝 Integrity & transparency</li>
      <li>💡 Commitment to innovation</li>
      <li>🔬 Excellence in security solutions</li>
      <li>🎯 Customer-centric approach</li>
      <li>🚀 Empowering businesses through knowledge</li>
    </ul>
        </div>
      </div>

      {/* Contact Form */}
      <div className="text-center max-w-3xl mx-auto mt-12">
        <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500 text-3xl font-bold">
          Get in Touch
        </h3>
        <div className="max-w-lg mx-auto bg-gray-800 p-6 rounded-lg shadow-lg mt-6">
          <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="p-3 rounded bg-gray-900 text-white border border-gray-600 focus:outline-none focus:border-blue-400"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="p-3 rounded bg-gray-900 text-white border border-gray-600 focus:outline-none focus:border-blue-400"
              required
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows={4}
              className="p-3 rounded bg-gray-900 text-white border border-gray-600 focus:outline-none focus:border-blue-400"
              required
            ></textarea>
            <button
              type="submit"
              className="py-3 rounded text-white font-bold bg-gradient-to-r from-blue-500 to-indigo-600 hover:opacity-80 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default AboutUs;
