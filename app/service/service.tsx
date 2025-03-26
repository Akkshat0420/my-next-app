"use client";

import { motion } from "framer-motion";
import { FaShieldAlt, FaUserShield, FaFileContract, FaChalkboardTeacher, FaCogs } from "react-icons/fa";

const services = [
  {
    title: "Application Security",
    description:
      "We help safeguard your applications by identifying and addressing vulnerabilities throughout their lifecycle.",
    icon: <FaShieldAlt className="text-[#0EA9AC] text-3xl" />,
  },
  {
    title: "Security Compliance Preparedness",
    description:
      "We assist organizations in achieving and maintaining compliance with critical security standards like ISO 27001, PCI DSS, RBI, and IRDAI regulations.",
    icon: <FaFileContract className="text-[#0EA9AC] text-3xl" />,
  },
  {
    title: "Third-Party Risk Management",
    description:
      "Mitigate vendor risks with thorough assessments, security control implementation, and ongoing monitoring of third-party security postures.",
    icon: <FaUserShield className="text-[#0EA9AC] text-3xl" />,
  },
  {
    title: "Information Security Trainings",
    description:
      "We offer tailored cybersecurity training programs for employees, leadership, and specific organizational roles.",
    icon: <FaChalkboardTeacher className="text-[#0EA9AC] text-3xl" />,
  },
  {
    title: "Technology Risk Management ",
    description:
      "Developing a structured risk management framework to identify, assess, and mitigate technology-related risks.",
    icon: <FaCogs className="text-[#0EA9AC] text-3xl" />,
  },
];

export default function OurServices() {
  return (
    <div className="relative bg-[#00142c] text-white py-16 px-6 md:px-12">
      <div className="text-center mb-12">
        <motion.h2
          className="text-4xl font-bold text-white"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our Services
        </motion.h2>
        <p className="text-gray-400 mt-2">
          We provide cutting-edge cybersecurity solutions to protect your business.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-[#162d55] p-6 rounded-lg shadow-lg border border-gray-700 hover:border-[#0EA9AC] transition transform hover:scale-105 hover:shadow-[#0EA9AC]/50"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className="flex items-center gap-4">
              {service.icon}
              <h3 className="text-lg font-semibold text-white">{service.title}</h3>
            </div>
            <p className="text-gray-300 mt-2">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
