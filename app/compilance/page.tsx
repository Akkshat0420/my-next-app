//import Image from "next/image";
"use client";
import Navbar1 from "../navbar";
import Footer from "../footer";

export default function SecurityCompliance() {
  return (
    <> 
      <Navbar1 />
      <div className="bg-[#00142c] text-white pt-20">
        {/* Hero Section */}
        <section className="relative text-center py-20 px-6 bg-[url('/images/compilance.webp')] bg-cover bg-center text-white">
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/10"></div>
          <div className="relative z-10">
            <h1 className="text-4xl font-bold">Security Compliance Preparedness</h1>
            <p className="mt-4 text-lg text-gray-200">
              Ensuring organizations adhere to critical security standards and regulations.
            </p>
          </div>
        </section>

        {/* Compliance Sections */}
        <section className="max-w-6xl mx-auto py-10 px-6 grid md:grid-cols-3 gap-8">
          <div className="bg-[#053f5c] p-6 rounded-lg shadow-lg">
            <img src="/iso27001.jpg" alt="ISO 27001" className="rounded-md mb-4" />
            <h3 className="text-xl font-bold text-white">ISO 27001 Certification</h3>
            <p className="mt-2 text-gray-300">
              Implement and maintain an Information Security Management System (ISMS) in line with ISO 27001 standards to manage sensitive data securely.
            </p>
          </div>
          <div className="bg-[#053f5c] p-6 rounded-lg shadow-lg">
            <img src="/rbi_irda.jpg" alt="RBI & IRDAI Compliance" className="rounded-md mb-4" />
            <h3 className="text-xl font-bold text-white">RBI & IRDAI Regulations</h3>
            <p className="mt-2 text-gray-300">
              Guiding financial and insurance organizations in complying with RBI & IRDAI cybersecurity requirements, ensuring regulatory adherence.
            </p>
          </div>
          <div className="bg-[#053f5c] p-6 rounded-lg shadow-lg">
            <img src="/pci_dss.jpg" alt="PCI DSS Compliance" className="rounded-md mb-4" />
            <h3 className="text-xl font-bold text-white">PCI DSS Compliance</h3>
            <p className="mt-2 text-gray-300">
              Assisting businesses handling payment card data to meet PCI DSS standards, ensuring secure transactions and compliance.
            </p>
          </div>
        </section>

        {/* Footer Section */}
        <Footer />
      </div>
    </>
  );
}
