// Import necessary components
//"use client";
import Footer from "@/app/footer";
import Navbar1 from "@/app/navbar";
//import Navbar1 from "navbar";
//import Footer from "/footer";

export default function ApplicationSecurity() {
  return (
    <>
      <Navbar1/>
      <div className="bg-[#00142c] text-white pt-20">
        {/* Hero Section */}
        <section className="relative text-center py-20 px-6 bg-[url('/images/appsec.webp')] bg-cover bg-center text-white">
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/10"></div>
          <div className="relative z-10">
            <h1 className="text-4xl font-bold">Application Security</h1>
            <p className="mt-4 text-lg text-gray-200">
              We help safeguard your applications by identifying and addressing vulnerabilities throughout their lifecycle.
            </p>
          </div>
        </section>

        {/* Application Security Section */}
        <section className="max-w-6xl mx-auto py-16 px-6">
          <h2 className="text-3xl font-semibold text-[#0EA9AC]">Our Application Security Services</h2>
          <p className="mt-4 text-gray-300">
            Our services include Static and Dynamic Application Security Testing to ensure comprehensive security coverage.
          </p>
        </section>

        {/* SAST & DAST Section */}
        <section className="max-w-6xl mx-auto py-10 px-6 grid md:grid-cols-2 gap-8">
          <div className="bg-[#053f5c] p-6 rounded-lg shadow-lg">
            <img src="/sast.jpg" alt="SAST" className="rounded-md mb-4" />
            <h3 className="text-xl font-bold text-white">Static Application Security Testing (SAST)</h3>
            <p className="mt-2 text-gray-300">
              We perform in-depth source code scanning to identify vulnerabilities early in the software development process,
              helping ensure secure code from the ground up.
            </p>
          </div>
          <div className="bg-[#053f5c] p-6 rounded-lg shadow-lg">
            <img src="/dast.jpg" alt="DAST" className="rounded-md mb-4" />
            <h3 className="text-xl font-bold text-white">Dynamic Application Security Testing (DAST)</h3>
            <p className="mt-2 text-gray-300">
              Our penetration testing simulates real-world cyber attacks to identify vulnerabilities in live applications,
              providing a comprehensive evaluation of application security.
            </p>
          </div>
        </section>

        {/* Footer Section */}
        <Footer/>
      </div>
    </>
  );
}
