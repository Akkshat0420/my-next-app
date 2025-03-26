"use clients"
import Image from "next/image";
import { FaLinkedinIn, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <>
    <footer className="bg-[#00142c] text-white py-10 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 sm:grid-cols-2 gap-8">
        {/* Company Info */}
        <div>
          
           <div className="flex items-center gap-2">
            <Image
              src="/images/logo_fully_transparent.png"
              alt="Logo"
              width={50}
              height={50}
            />
            <div className="text-1xl font-extrabold tracking-wide text-[#0EA9AC] leading-tight">
              CYB<span className="text-[#0EA9AC]">4X</span>
              <div className="relative text-center">
                <div className="text-xs font-light text-[#c7d6d6] mt-1">Fortify Digital Security</div>
                <div className="w-32 h-[1px] bg-[#0EA9AC] mt-1 mx-auto"></div>
              </div>
            </div>
          </div>
         
          <p className="text-gray-400 text-xs pt-4 pb-2">avinash.dixit@cyb4x.com</p>
          <p className=" text-xs text-gray-400">info@cyb4x.com</p>
          <div className="flex gap-4 mt-4">
            <FaLinkedinIn className="text-[#0EA9AC] text-xl cursor-pointer" />
            <FaTwitter className="text-[#0EA9AC] text-xl cursor-pointer" />
          </div>
        </div>

        {/* Solutions */}
        <div>
          <h3 className="text-lg text-1xl font-semibold text-[#0EA9AC]">Solutions</h3>
          <ul className="mt-2 text-xs space-y-2 text-gray-300">
            <li>Cyber Threat Intelligence</li>
            <li>Penetration Testing</li>
            <li>Vulnerability Management</li>
            <li>Security Consulting</li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-lg text-1xl font-semibold text-[#0EA9AC]">Resources</h3>
          <ul className="mt-2 text-xs space-y-2 text-gray-300">
            <li>News</li>
            <li>Case Studies</li>
            <li>White Papers</li>
            <li>Webinars</li>
          </ul>
        </div>

        {/* Policies */}
        <div>
          <h3 className="text-lg text-1xl font-semibold text-[#0EA9AC]">Policies</h3>
          <ul className="mt-2 text-xs space-y-2 text-gray-300">
            <li>Privacy Policy</li>
            <li>Terms of Use</li>
            <li>Disclaimer</li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-10 border-t border-gray-600 pt-4 text-center text-gray-400">
        <p>© {new Date().getFullYear()} Cyb4X. All rights reserved. | Web design by Cyb4X Team</p>
      </div>
    </footer>
    </>
  );
}
