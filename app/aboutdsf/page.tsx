//import Image from "next/image";
"use clients"
import { FaCalendarAlt, FaChalkboardTeacher, FaUsers } from "react-icons/fa";
import Navbar1 from "../navbar";
import Footer from "../footer";

export default function AboutDSF() {
  return (
    <> <Navbar1/>
    <div className="bg-[#00142c] text-white pt-20 " >
      {/* Hero Section */}
      <section className="relative text-center py-20 px-6 bg-[url('/yt2.webp')] bg-cover bg-center text-white">
  <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/10"></div>
  <div className="relative z-10">
    <h1 className="text-4xl font-bold">Welcome to Digitech Shiksha (DSF)</h1>
    <p className="mt-4 text-lg text-gray-200">
      Empowering individuals with Cybersecurity Training, Events, and Webinars.
    </p>
  </div>
</section>

      {/* About Section */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-semibold text-[#0EA9AC]">About DSF</h2>
        <p className="mt-4 text-gray-300">
          Digitech Shiksha (DSF) is dedicated to providing top-notch training in cybersecurity. 
          We conduct various training sessions, industry-relevant events, and insightful webinars 
          to help individuals and organizations stay ahead in the ever-evolving digital world.
        </p>
      </section>
      <section className="max-w-6xl mx-auto py-10 px-6 grid md:grid-cols-2 gap-8">
          <div className="bg-[#053f5c] p-6 rounded-lg shadow-lg">
            <img src="/images/overview.jpg" alt="Overview" className="rounded-md mb-4" />
            <h3 className="text-xl font-bold text-white">Overview</h3>
            <p className="mt-2 text-gray-300">
              DSF operates with over 500+ members in major tech cities such as Delhi/NCR, 
              Mumbai, Bangalore, Ahmedabad, Hyderabad, and Chennai.
            </p>
          </div>
          <div className="bg-[#053f5c] p-6 rounded-lg shadow-lg">
            <img src="/images/objective1.png" alt="Objective" className="rounded-md mb-4" />
            <h3 className="text-xl font-bold text-white">Objective</h3>
            <p className="mt-2 text-gray-300">
              The forum aims to unite and empower IT & Security leaders, foster collaboration, 
              share knowledge, and explore IT, security & GRC solutions for the overall improvement 
              of the industry and organization.
            </p>
          </div>
        </section>

        {/* Purpose Section */}
        <section className="max-w-6xl mx-auto py-10 px-6 text-center">
          <h2 className="text-3xl font-semibold text-[#0EA9AC]">Purpose</h2>
          <p className="mt-4 text-gray-300">
            The DSFs’ purpose is to build a dynamic community of technology, security & GRC leaders 
            who drive collaboration and knowledge sharing. Our goal is to foster an environment where 
            members can elevate both their technical and leadership skills, ultimately benefiting their 
            organizations and the broader industry.
          </p>
        </section>
      {/* Feature Cards */}
      <section className="max-w-6xl mx-auto py-10 px-6 grid md:grid-cols-3 sm:grid-cols-2 gap-8">
        {/* Training Card */}
        <div className="bg-[#053f5c] p-6 rounded-lg shadow-lg hover:shadow-xl transition">
          <FaChalkboardTeacher className="text-[#0EA9AC] text-4xl mx-auto" />
          <h3 className="mt-4 text-xl font-bold">Cybersecurity Training</h3>
          <p className="mt-2 text-gray-300">
            Learn from industry experts with hands-on sessions in ethical hacking, security analytics, and more.
          </p>
        </div>

        {/* Events Card */}
        <div className="bg-[#053f5c] p-6 rounded-lg shadow-lg hover:shadow-xl transition">
          <FaCalendarAlt className="text-[#0EA9AC] text-4xl mx-auto" />
          <h3 className="mt-4 text-xl font-bold">Industry Events</h3>
          <p className="mt-2 text-gray-300">
            Join cybersecurity conferences, workshops, and networking events to enhance your skills.
          </p>
        </div>

        {/* Webinars Card */}
        <div className="bg-[#053f5c] p-6 rounded-lg shadow-lg hover:shadow-xl transition">
          <FaUsers className="text-[#0EA9AC] text-4xl mx-auto" />
          <h3 className="mt-4 text-xl font-bold">Expert Webinars</h3>
          <p className="mt-2 text-gray-300">
            Participate in online webinars by cybersecurity professionals covering the latest trends and threats.
          </p>
        </div>
      </section>

      {/* Footer Section */}
      <Footer/>
    </div>
    </>
  );
}
