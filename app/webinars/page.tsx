"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Navbar1 from "../navbar";
import Footer from "../footer";

const upcomingWebinars = [
  {
    title: "Exclusive Webinar: Kickstart Your Career in Cybersecurity GRC",
    description:
      "Looking to switch careers or enter Governance, Risk, and Compliance (GRC) within Cybersecurity? This webinar guides you with expert insights and strategies!",
    date: "5th April 2025",
    time: "10:30 AM – 12:30 PM (IST)",
    location: "Online (Live Session)",
    speakers: "Expert Speakers with 20+ years of domain experience",
    registrationLink: "https://docs.google.com/forms/d/1VGm9bNfovBMJGs2fijN6CH9nCkLdAqRN2soFsjbTs8A/edit",
    thumbnail: "/images/thumbnail1.jpeg",
  },
];

const previousWebinars = [
  {
    title: "Unlock the Future of Cyber Risk Management",
    images: ["/images/webinar5.jpg"],
    description:
      "Discover the risk of how TransAsia`s intelligent system are transforming the way buisnesses manages Risk adapt to technological  trends and enhance profitabilty",
  },
 
  
];

const WebinarPage = () => {
  return (
    <>
      <Navbar1 />
      <div className="bg-gradient-to-b from-[#00142c] to-[#0EA9AC] text-white min-h-screen p-6 sm:p-10">
        <motion.h1
          className="text-center text-3xl sm:text-4xl font-bold mb-8 sm:mb-10 pt-20 sm:pt-10"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Upcoming Webinars
        </motion.h1>
        <div className="flex flex-col md:flex-row items-start gap-8 md:gap-12">
  {/* About Webinars Section */}
  <motion.div 
    className="w-full md:w-1/2 text-center md:text-left self-start"
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
      Engaging Webinars & Knowledge Sharing
    </motion.h3>

    <motion.p
      className="text-lg text-gray-300 mb-4 md:mb-6 leading-relaxed"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      Our webinars connect industry experts with participants worldwide, providing 
      insights into cybersecurity trends, best practices, and emerging threats.  
      Join our live sessions to stay informed and ahead in the digital security space.
    </motion.p>
    <motion.div
    className="w-full md:w-1/1.5 bg-white/10 p-5 md:p-6 rounded-lg border border-white/20 shadow-md self-start"
    initial={{ opacity: 0, x: 50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 1 }}
  >
    <p className="text-gray-200 leading-relaxed">
      Our interactive sessions cover **cybersecurity awareness, risk management, 
      and ethical hacking** while featuring Q&A segments with industry leaders.  
      <br /><br />
      We aim to make cybersecurity knowledge **accessible to students, 
      professionals, and organizations** through structured online learning experiences.
    </p>

    <motion.h4
      className="text-lg md:text-xl font-medium text-[#0EA9AC] mt-4 md:mt-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      Join Our Next Webinar & Expand Your Knowledge!
    </motion.h4>
  </motion.div>
  </motion.div>

  {/* Upcoming Webinars Section */}
  <motion.div className="w-full md:w-1/2">
    <div className="grid grid-cols-1 sm:grid-cols-1 gap-6 sm:gap-10">
      {upcomingWebinars.map((webinar, index) => (
        <motion.div
          key={index}
          className="bg-[#00142c] rounded-xl shadow-lg p-4 sm:p-6"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src={webinar.thumbnail}
            alt={webinar.title}
            width={400}
            height={250}
            className="rounded-lg mb-3 sm:mb-4 w-full"
          />
          <h2 className="text-xl sm:text-2xl font-bold text-[#0EA9AC]">{webinar.title}</h2>
          <p className="text-gray-300 mt-2 text-sm sm:text-base">{webinar.description}</p>
          <p className="mt-2 text-sm sm:text-base">📅 {webinar.date}</p>
          <p className="text-sm sm:text-base">⏰ {webinar.time}</p>
          <p className="text-sm sm:text-base">📍 {webinar.location}</p>
          <p className="text-sm sm:text-base">🎙 {webinar.speakers}</p>
          <a
            href={webinar.registrationLink}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-[#0EA9AC] text-black text-center font-bold py-2 mt-4 rounded-lg hover:bg-[#eab308]"
          >
            Reserve Your Spot
          </a>
        </motion.div>
      ))}
    </div>
  </motion.div>
</div>
        <motion.h1
          className="text-center text-3xl sm:text-4xl font-bold mt-12 sm:mt-16 mb-8 sm:mb-10"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Previous Webinars
        </motion.h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10">
               {previousWebinars.map((webinar, index) => (
                 <motion.div
                   key={index}
                   className="bg-[#00142c] rounded-xl shadow-lg overflow-hidden p-6"
                   whileHover={{ scale: 1.05 }}
                   transition={{ duration: 0.5 }}
                 >
                   <Carousel showThumbs={false} infiniteLoop autoPlay>
                     {webinar.images.map((img, i) => (
                       <div key={i}>
                         <Image src={img} alt={webinar.title} width={500} height={300} className="rounded-lg" />
                       </div>
                     ))}
                   </Carousel>
                   <h2 className="text-2xl font-bold mt-4 text-[#0EA9AC]">{webinar.title}</h2>
                  
                   <p className="mt-2">{webinar.description}</p>
                 </motion.div>
               ))}
             </div>
      </div>
      <Footer/>
    </>
  );
};

export default WebinarPage;
