// import necessary components
"use client";
import Navbar1 from "../navbar";
import Footer from "../footer";

export default function TechRiskManagement() {
  return (
    <>
      <Navbar1 />
      <div className="bg-[#00142c] text-white pt-20">
        {/* Hero Section */}
        <section className="relative text-center py-20 px-6 bg-[url('/images/techrisk.webp')] bg-cover bg-center text-white">
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/10"></div>
          <div className="relative z-10">
            <h1 className="text-4xl font-bold">Technology Risk Management Framework Setup</h1>
            <p className="mt-4 text-lg text-gray-200">
              Proactively manage and mitigate technology risks with a structured framework.
            </p>
          </div>
        </section>

        {/* About Section */}
        <section className="max-w-6xl mx-auto py-16 px-6">
          <h2 className="text-3xl font-semibold text-[#0EA9AC]">Overview</h2>
          <p className="mt-4 text-gray-300">
            Establishing a solid Technology Risk Management Framework is essential for organizations to proactively manage risks associated with technology and IT systems.
          </p>
        </section>

        {/* Services Section */}
        <section className="max-w-6xl mx-auto py-10 px-6 grid md:grid-cols-2 gap-8">
          <div className="bg-[#053f5c] p-6 rounded-lg shadow-lg">
            <img src="/framework.jpg" alt="Framework Development" className="rounded-md mb-4" />
            <h3 className="text-xl font-bold text-white">Framework Development</h3>
            <p className="mt-2 text-gray-300">
              We develop customized risk management frameworks to identify, assess, and mitigate technology-related risks.
            </p>
          </div>
          <div className="bg-[#053f5c] p-6 rounded-lg shadow-lg">
            <img src="/monitoring.jpg" alt="Monitoring & Reporting" className="rounded-md mb-4" />
            <h3 className="text-xl font-bold text-white">Monitoring & Reporting</h3>
            <p className="mt-2 text-gray-300">
              Continuous monitoring and risk reporting ensure the framework's effectiveness and alignment with business goals.
            </p>
          </div>
        </section>

        {/* Footer Section */}
        <Footer />
      </div>
    </>
  );
}