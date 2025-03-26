"use client";
import { FaClock, FaMapMarkerAlt, FaPhone, FaInstagram, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import Navbar1 from "../navbar";

export default function Contact() {
  return (
    <>
      <Navbar1 />
      <div className="min-h-screen flex items-center justify-center bg-[#00142c] p-6">
        <motion.div
          className="w-full max-w-6xl mx-auto p-6 md:p-12 bg-gradient-to-br from-[#00142c] via-[#0c1c3d] to-[#00142c] shadow-xl rounded-lg"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="text-3xl pt-3 md:text-4xl font-bold text-white text-center mb-8"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Get In Touch
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Left Section: Contact Info */}
            <motion.div
              className="space-y-6 text-white"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <h3 className="text-2xl font-semibold text-[#0EA9AC]">Contact Us</h3>

              <div className="flex items-center space-x-4 bg-[#0c1c3d] bg-opacity-70 p-4 rounded-lg shadow-md">
                <FaClock className="text-teal-400 text-2xl" />
                <div>
                  <p className="text-lg">Working Hours</p>
                  <p className="text-sm opacity-80">10AM - 11:30PM</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 bg-[#0c1c3d] bg-opacity-70 p-4 rounded-lg shadow-md">
                <FaMapMarkerAlt className="text-blue-400 text-2xl" />
                <div>
                  <p className="text-lg">Location</p>
                  <p className="text-sm opacity-80">(M.P.), INDIA</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 bg-[#0c1c3d] bg-opacity-70 p-4 rounded-lg shadow-md">
                <FaPhone className="text-green-400 text-2xl" />
                <div>
                  <p className="text-lg">Phone</p>
                  <p className="text-sm opacity-80">+91 7470391011</p>
                </div>
              </div>

              <div className="flex space-x-4 mt-4">
                <a href="#" className="text-[#0EA9AC] hover:text-white text-2xl">
                  <FaLinkedin />
                </a>
                <a href="#" className="text-[#0ea9acd9] hover:text-white text-2xl">
                  <FaInstagram />
                </a>
              </div>
            </motion.div>

            {/* Right Section: Contact Form */}
            <motion.div
              className="bg-[#0c1c3d] bg-opacity-80 p-6 rounded-lg shadow-md"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <h3 className="text-2xl font-semibold text-[#0eaca4e6] mb-4">Send a Message</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="p-3 w-full bg-transparent border border-gray-500 rounded-md text-white focus:outline-none focus:border-[#0EA9AC]"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="p-3 w-full bg-transparent border border-gray-500 rounded-md text-white focus:outline-none focus:border-[#0EA9AC]"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="p-3 w-full bg-transparent border border-gray-500 rounded-md text-white focus:outline-none focus:border-[#0EA9AC]"
                />
                <textarea
                  placeholder="Tell us about your project..."
                  className="p-3 w-full bg-transparent border border-gray-500 rounded-md text-white h-28 focus:outline-none focus:border-[#0EA9AC]"
                ></textarea>
                <motion.button
                  type="submit"
                  className="w-full bg-gradient-to-r from-teal-500 via-blue-500 to-green-500 text-white py-3 rounded-md text-lg font-semibold hover:opacity-90 transition"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Send Message
                </motion.button>
                <p className="text-sm text-center text-gray-400 mt-2">
                  By submitting this form, you agree to our {" "}
                  <a href="#" className="text-[#0EA9AC] hover:underline">
                    Terms of Service
                  </a>{" "}
                  and {" "}
                  <a href="#" className="text-[#0EA9AC] hover:underline">
                    Privacy Policy
                  </a>.
                </p>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </>
  );
}