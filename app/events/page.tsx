"use client";

//import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Navbar1 from "../navbar";
import Footer from "../footer";

const events = [
  {
    title: "Unlock the potential of cybersecurity operations center",
    location: "Crown plaza meeting room ,Gurugram",
    images: [
      "/images/event7.jpg",
      "/images/event5.jpg",
      "/images/event6.jpg",
      "/images/event2.jpg",
      "/images/event4.jpg",
      "/images/event3.jpg",
     
    ],
    description: "One of the biggest electronic dance music festivals in the world!",
  },
 
 
];

const EventsPage = () => {
  return (
    <>
    <Navbar1/>
    <div className="bg-gradient-to-b from-[#00142c] to-[#0EA9AC] text-white min-h-screen p-10">
      <motion.h1
        className="text-center text-4xl font-bold mb-10 pt-14"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        World’s Best Events
      </motion.h1>
       <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                {/* Left Side: Training Info */}
                <motion.div
                  className="w-full md:w-1/2 text-center items-start md:text-left"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1 }}
                >
                   <motion.h3
          className="text-xl md:text-2xl font-semibold text-[#0EA9AC] mb-3 md:mb-4 tracking-wide"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Conducting Impactful Events & Initiatives
        </motion.h3>
                  <motion.p
                    className="text-lg text-gray-300 mb-4 md:mb-6 leading-relaxed"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5 }}
                  >
                     We organize events and initiatives to spread awareness about cybersecurity 
      threats and best practices among the general public. Our goal is to build a safer 
      digital environment through proactive education.
                  </motion.p>
      
                  <div className="bg-white/10 p-5 md:p-6 rounded-lg border border-white/20 shadow-md">
                    <p className="text-gray-200 leading-relaxed">
                    We implement programs to support **women and underrepresented groups** 
      in cybersecurity, ensuring diversity and inclusion in this vital field.  
      <br /><br />
      Our **Educational Outreach** initiatives involve partnerships with institutions 
      to integrate cybersecurity into school and college curriculums, enhancing 
      awareness and knowledge at an early stage.
                    </p>
                    <motion.h4
          className="text-lg md:text-xl font-medium text-[#0EA9AC] mt-4 md:mt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Join Us to Elevate Your Skills!
        </motion.h4>
                  </div>
                </motion.div>
      
                {/* Right Side: Training Cards */}
                <div className="w-full md:w-1/2">
                  <div className="grid grid-cols-1 gap-6">
                    {events.map((event, index) => (
                      <motion.div
                        key={index}
                        className="bg-[#00142c] rounded-xl shadow-lg overflow-hidden p-5 md:p-6"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Carousel
                          showThumbs={false}
                          infiniteLoop
                          autoPlay
                          showArrows={true}
                          showStatus={false}
                          className="rounded-lg"
                        >
                          {event.images.map((img, i) => (
                            <div key={i}>
                              <Image
                                src={img}
                                alt={event.title}
                                width={500}
                                height={300}
                                className="rounded-lg object-cover w-full"
                              />
                            </div>
                          ))}
                        </Carousel>
                        <h2 className="text-2xl font-bold mt-4 text-[#0EA9AC]">{event.title}</h2>
                        <p className="text-gray-300 italic">{event.location}</p>
                        <p className="mt-2 text-sm md:text-base">{event.description}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
             </div>
     <Footer/>
    </>
  );
};

export default EventsPage;
