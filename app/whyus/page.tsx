"use client";

import { motion } from "framer-motion";
import Navbar1 from "../navbar";

const WhyUsPage = () => {
  return (
    <>
      <Navbar1 />
      <div className="bg-[#00142c] text-white min-h-screen p-6 sm:p-10">
        {/* Hero Section */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-white">Why Choose CYB4X?</h1>
          <p className="text-gray-300 text-lg sm:text-xl leading-relaxed">
            At CYB4X, we dedicate extensive time to understanding our clients' challenges, business bottlenecks, and efficiency gaps. 
            This allows us to craft cutting-edge, cost-effective cybersecurity solutions tailored to their needs.
          </p>
        </motion.div>

        {/* Content Section */}
        <motion.div 
          className="max-w-4xl mx-auto bg-[#002b4e] p-6 sm:p-10 rounded-xl shadow-lg border border-gray-600"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="text-gray-300 text-lg sm:text-xl leading-relaxed mb-6">
            We go beyond conventional security approaches, leveraging disruptive and innovative methodologies to stay ahead of evolving threats. 
            If you're looking to hire a cybersecurity company in India, CYB4X is a trusted choice.
          </p>
          <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
            Our leadership team comprises highly experienced cybersecurity professionals with a proven track record across diverse projects. 
            As a leading IT security firm with a global client base, we offer:
          </p>

          {/* List of Features */}
          <ul className="mt-6 space-y-4 text-gray-300 text-base sm:text-lg">
            <li className="flex items-center gap-3">
              <span className="text-[#0EA9AC] text-xl">✔</span> <span>Certified Cybersecurity Experts – A team of CISSP, CEH, and CISA-certified professionals ensuring world-class security consulting.</span>
            </li>
            
            <li className="flex items-center gap-3">
              <span className="text-[#0EA9AC] text-xl">✔</span> <span>End-to-End Security Solutions – Comprehensive services from consulting to managed security solutions.</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-[#0EA9AC] text-xl">✔</span> <span>Industry-Specific Expertise – Trusted cybersecurity services for BFSI, FinTech, Healthcare, E-commerce, Manufacturing, and Digital Natives.</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-[#0EA9AC] text-xl">✔</span> <span>Customer-Centric Approach – Tailored security strategies to meet unique business needs with precision and efficiency.</span>
            </li>
          </ul>
        </motion.div>
      </div>
    </>
  );
};

export default WhyUsPage;
