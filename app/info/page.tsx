// app/information-security-trainings/page.js
"use client";
import Navbar1 from "../navbar";
import Footer from "../footer";

export default function InformationSecurityTrainings() {
  return (
    <> 
      <Navbar1 />
      <div className="bg-[#00142c] text-white pt-20">
        {/* Hero Section */}
        <section className="relative text-center py-20 px-6 bg-[url('/images/info-security.webp')] bg-cover bg-center text-white">
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/10"></div>
          <div className="relative z-10">
            <h1 className="text-4xl font-bold">Information Security Trainings</h1>
            <p className="mt-4 text-lg text-gray-200">
              Strengthen your security culture with tailored training programs.
            </p>
          </div>
        </section>

        {/* Training Details Section */}
        <section className="max-w-6xl mx-auto py-16 px-6">
          <h2 className="text-3xl font-semibold text-[#0EA9AC]">Our Training Programs</h2>
          <p className="mt-4 text-gray-300">
            We provide a variety of security training programs to ensure employees, leadership, and stakeholders are well-prepared to handle cybersecurity threats.
          </p>
        </section>

        {/* Training Types */}
        <section className="max-w-6xl mx-auto py-10 px-6 grid md:grid-cols-3 gap-8">
          <div className="bg-[#053f5c] p-6 rounded-lg shadow-lg">
            <img src="/employee_training.jpg" alt="Employee Training" className="rounded-md mb-4" />
            <h3 className="text-xl font-bold text-white">Employee Training</h3>
            <p className="mt-2 text-gray-300">
              Regular security awareness training to help employees recognize phishing and social engineering attacks.
            </p>
          </div>
          <div className="bg-[#053f5c] p-6 rounded-lg shadow-lg">
            <img src="/board_training.jpg" alt="Board Training" className="rounded-md mb-4" />
            <h3 className="text-xl font-bold text-white">Board Member Training</h3>
            <p className="mt-2 text-gray-300">
              Specialized training for senior leadership to understand cybersecurity risks and responsibilities.
            </p>
          </div>
          <div className="bg-[#053f5c] p-6 rounded-lg shadow-lg">
            <img src="/role_based_training.jpg" alt="Role-Based Training" className="rounded-md mb-4" />
            <h3 className="text-xl font-bold text-white">Role-Based Training</h3>
            <p className="mt-2 text-gray-300">
              Customized training tailored to specific job roles to ensure security awareness at all levels.
            </p>
          </div>
        </section>

        {/* Footer Section */}
        <Footer />
      </div>
    </>
  );
}
