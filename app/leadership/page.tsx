import Image from 'next/image';
import Navbar1 from '../navbar';
import Footer from '../footer';

export default function Leadership() {
  return (
    <> <Navbar1/> 
    <div className="bg-gradient-to-b from-[#00142c]  min-h-screen py-12 px-6 text-white">
      {/* Header Section */}
      <h2 className="text-4xl font-bold text-center pt-12 mb-6">Our Leadership</h2>
      <p className="text-center max-w-2xl mx-auto text-gray-300">
        Cyb4x was founded by visionary leaders with deep expertise in Cyber Security, Risk
        Management, and Compliance. Our leadership team is committed to driving innovation and
        excellence in the industry.
      </p>
      
      {/* Founder Section */}
      <div className="mt-12 flex flex-col md:flex-row items-center gap-6 max-w-5xl mx-auto bg-white bg-opacity-5 p-6 rounded-lg shadow-lg">
        {/* Founder Image */}
        <div className="w-full md:w-1/3">
          <Image 
            src="/images/founder.jpg" 
            alt="Founder of Cyb4x" 
            width={300} 
            height={300} 
            className="shadow-lg rounded-lg " 
          />
        </div>
        
        {/* Founder Details */}
        <div className="w-full md:w-2/3">
  <h3 className="text-4xl font-extrabold text-[#F8FAFC] drop-shadow-lg">Avinash Dixit</h3>
  <p className="text-[#76D8D7] font-semibold text-xl mt-2">(Founder & CEO)</p>
  
  <p className="mt-6 text-gray-100 leading-relaxed text-lg">
    Avinash Dixit, an esteemed alumnus of <span className="font-semibold text-[#FFD700]">IIT Kanpur</span>, is the visionary founder of 
    <span className="font-semibold text-[#76D8D7]"> CYB4X Services Limited</span>. With decades of experience in prestigious 
    multinational companies, he has honed his expertise in <span className="font-semibold text-[#FFD700]">Cyber Security</span> 
    and <span className="font-semibold text-[#FFD700]">Risk Management</span>, making him a prominent leader in the field.
  </p>

  <p className="mt-4 text-gray-200 leading-relaxed text-lg">
    Prior to establishing <span className="font-semibold text-[#76D8D7]">CYB4X</span>, Mr. Dixit founded 
    <span className="font-semibold text-[#FFD700]"> Digitech Shiksha</span>, a venture dedicated to empowering individuals 
    with <span className="italic text-[#76D8D7]">digital literacy</span> and skills. His journey reflects a deep commitment 
    to <span className="italic text-[#FFD700]">innovation and excellence</span>, fueled by his passion for securing the 
    digital landscape.
  </p>

  <p className="mt-4 text-gray-100 leading-relaxed text-lg">
    Through <span className="font-semibold text-[#76D8D7]">CYB4X</span>, Mr. Dixit aims to leverage his extensive experience 
    to provide cutting-edge solutions that protect organizations from evolving cyber threats. His leadership is rooted in the 
    belief that <span className="italic text-[#FFD700]">securing the digital space</span> is essential for businesses to 
    thrive in today’s technology-driven world.
  </p>
</div>

      </div>
    </div>
    <Footer/>
    </>
  );
}
