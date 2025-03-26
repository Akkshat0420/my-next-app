// import Image from "next/image";
"use client";
import Navbar1 from "../navbar";
import Footer from "../footer";

export default function VendorRiskManagement() {
  return (
    <> 
      <Navbar1 />
      <div className="bg-[#00142c] text-white pt-20">
        {/* Hero Section */}
        <section className="relative text-center py-20 px-6 bg-[url('/images/vendor-risk.webp')] bg-cover bg-center text-white">
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/10"></div>
          <div className="relative z-10">
            <h1 className="text-4xl font-bold">Third-Party or Vendor Risk Management</h1>
            <p className="mt-4 text-lg text-gray-200">
              Mitigating security risks introduced by third-party vendors to protect your organization.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="max-w-6xl mx-auto py-16 px-6">
          <h2 className="text-3xl font-semibold text-[#0EA9AC]">Vendor Risk Management Services</h2>
          <p className="mt-4 text-gray-300">
            Third-party vendors can introduce risks that may compromise your security. Our Vendor Risk Management services help mitigate these risks by:
          </p>
          <ul className="list-disc mt-4 pl-5 text-gray-300 space-y-3">
            <li>Conducting thorough assessments of third-party vendors to evaluate their cybersecurity practices.</li>
            <li>Implementing contractual security controls to ensure that vendor relationships align with your organization’s security and compliance requirements.</li>
            <li>Ongoing monitoring of third-party security postures to ensure continued alignment with your risk management framework.</li>
          </ul>
        </section>

        {/* Footer Section */}
        <Footer />
      </div>
    </>
  );
}
