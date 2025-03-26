"use client";

//import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
//import Link from "next/link";
import Navbar1 from "./navbar";
import OurServices from "./service/service";
//import Navbar from "./navbar";
import { useEffect, useState } from "react";
import Footer from "./footer";
//import Head from "next/head";

export default function HomePage() {
  
  return (
    <>
   
    <div className="relative min-h-screen text-white bg-[#00142c]">
      <Navbar1/>
      {/* Background Image */}
      <div className="absolute inset-0 bg-[url('/yt2.webp')] bg-cover bg-center opacity-20"></div>

   
      {/* Hero Section */}
      <div className="relative flex flex-col justify-center items-center text-center h-screen px-6 md:px-12">
        <motion.h1
          className="text-5xl md:text-5xl font-bold leading-tight"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Navigating Risk <br /> Ensuring Compliance Securing Digital Landscape
        </motion.h1>
        <p className="text-xl mt-4 md:w-3/5">
          Empowering businesses with enterprise risk, digital risk, and cyber risk solutions.
        </p>
        <div className="mt-6 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
  <motion.button
    className="bg-[#0EA9AC] text-[#00142c] px-4 py-2 rounded-lg text-sm md:text-base font-semibold flex items-center gap-2 hover:bg-opacity-80 transition w-full md:w-auto justify-center"
    whileHover={{ scale: 1.05 }}
  >
    Get Started <FaArrowRight />
  </motion.button>
  <motion.button
    className="border border-white px-4 py-2 rounded-lg text-sm md:text-base font-semibold hover:bg-white hover:text-[#00142c] transition w-full md:w-auto justify-center"
    whileHover={{ scale: 1.05 }}
  >
    Why CYB4X?
  </motion.button>
</div>

      </div>
    </div>
   
    <div className="bg-gradient-to-b from-[#3f5372d6] ] to-[#1E3A5F] text-gray-800 py-16 px-6 sm:px-12 md:px-24 lg:px-32">
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-3xl sm:text-4xl font-bold text-[#ffffff]">CYB4X</h2>
    <p className="mt-4 text-lg sm:text-xl font-medium text-gray-300">
      CYB4X Services LLLP is an innovative company founded by a passionate team of experts with extensive experience in 
      <span className="font-semibold text-white"> Cyber Security, Information Security, 3rd Party Risk Management, & GRC.</span> 
      Our leadership has successfully guided numerous organizations across various industries in establishing robust risk 
      management frameworks.
    </p>

    <p className="mt-4 text-lg text-gray-300">
      If you are in search of certified Cyber Security professionals equipped with years of high-quality experience, look no further. 
      At CYB4X, our dedicated leadership and skilled team set us apart and drive us toward our goal of becoming a leading 
      <span className="font-semibold text-white"> Cyber Security company in India.</span>
    </p>

    {/* <h3 className="mt-8 text-2xl font-bold text-white">Founder: Avinash Dixit</h3>
    <p className="mt-4 text-lg text-gray-300">
      An esteemed alumnus of IIT Kanpur, Avinash Dixit is the visionary founder of CYB4X Services Limited. With decades of experience 
      garnered from prestigious multinational companies, he has honed his expertise in Cyber Security and Risk Management, making him 
      a prominent figure in the field.
    </p> */}

    {/* <p className="mt-4 text-lg text-gray-300">
      Prior to establishing CYB4X, Mr. Dixit founded 
      <span className="font-semibold text-white"> Digitech Shiksha,</span> 
      a venture dedicated to empowering individuals with digital literacy and skills. His journey has been marked by a commitment to 
      innovation and excellence, driven by a passion for enhancing the security of the digital landscape.
    </p> */}

    {/* <p className="mt-4 text-lg text-gray-300">
      With CYB4X, Mr. Dixit aims to leverage his extensive experience and knowledge to provide cutting-edge solutions that protect 
      organizations from emerging cyber threats. His leadership is grounded in a strong belief that securing the digital space is 
      essential for the growth and sustainability of businesses in today’s technology-driven world.
    </p> */}

    
  </div>
</div>

    <OurServices/>
    <div className="bg-[#00142c] text-white min-h-screen p-6 sm:p-10">
  {/* Hero Section */}
  <motion.div 
    className="text-center max-w-3xl mx-auto mb-8"
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
  >
    <h1 className="text-4xl font-bold mb-4 text-white">Why Choose CYB4X?</h1>
    <p className="text-gray-300 text-lg leading-relaxed">
      At CYB4X, we dedicate extensive time to understanding our clients' challenges, business bottlenecks, and efficiency gaps.
      This allows us to craft cutting-edge, cost-effective cybersecurity solutions tailored to their needs.
    </p>
  </motion.div>

  {/* Content Section - Horizontal Layout */}
  <motion.div 
    className="max-w-6xl mx-auto flex flex-wrap justify-between items-stretch gap-6"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
  >
    <div className="flex-1 bg-[#0A1F44] p-6 rounded-xl">
      <p className="text-gray-300 text-lg leading-relaxed mb-4">
        We go beyond conventional security approaches, leveraging disruptive and innovative methodologies to stay ahead of evolving threats.
        If you're looking to hire a cybersecurity company in India, CYB4X is a trusted choice.
      </p>
      <p className="text-gray-400 text-base leading-relaxed">
        Our leadership team comprises highly experienced cybersecurity professionals with a proven track record across diverse projects.
      </p>
    </div>

    {/* Features Section */}
    <div className="flex-1 bg-[#0A1F44] p-6 rounded-xl">
      <ul className="space-y-3 text-gray-300 text-base">
        <li className="flex items-center gap-3">
          <span className="text-[#0EA9AC] text-xl">✔</span> Certified Cybersecurity Experts – CISSP, CEH, and CISA-certified professionals.
        </li>
       
        <li className="flex items-center gap-3">
          <span className="text-[#0EA9AC] text-xl">✔</span> End-to-End Security Solutions – Consulting to managed security solutions.
        </li>
        <li className="flex items-center gap-3">
          <span className="text-[#0EA9AC] text-xl">✔</span> Industry-Specific Expertise – Trusted services for BFSI, FinTech, Healthcare.
        </li>
        <li className="flex items-center gap-3">
          <span className="text-[#0EA9AC] text-xl">✔</span> Customer-Centric Approach – Tailored security strategies.
        </li>
      </ul>
    </div>
  </motion.div>
</div>
<Footer/>

</>
  );
}
