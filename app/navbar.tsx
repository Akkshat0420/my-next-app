"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Navbar1() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { name: "Home", href: "/" },
    {
      name: "About Us",
      dropdown: [
        { name: "About", href: "/about" },
        { name: "Leadership", href: "/leadership" },
        { name: "Partnerships", href: "/partner" },
      ],
    },
    {
      name: "Services",
      dropdown: [
        { name: "Application Security", href: "/application-security" },
        { name: "Security Compliance", href: "/compilance" },
        { name: "Vendor Risk Management", href: "/vendor" },
        { name: "Info Security Training", href: "/info" },
        { name: "Tech Risk Framework", href: "/tech" },
      ],
    },
    {
      name: "Forum",
      dropdown: [
        { name: "About DSF", href: "/aboutdsf" },
        { name: "Events", href: "/events" },
        { name: "Webinars", href: "/webinars" },
        { name: "Training & Awareness", href: "/training" },
        { name: "Whitepapers", href: "/whitepaper" },
      ],
    },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <nav className="flex justify-between items-center py-5 px-4 bg-[#00142c] bg-opacity-80 fixed w-full top-0 shadow-lg z-50 ">
      {/* Logo Section */}
      
      <div className="flex items-center gap-2">
  <Image
    src="/images/logo_fully_transparent.png"
    alt="Logo"
    width={50}
    height={50}
  />
  <div className="text-2xl font-extrabold tracking-wide text-[#0EA9AC] leading-tight">
    CYB<span className="text-[#0EA9AC]">4X</span>
    <div className="relative text-center">
      <div className="text-xs font-light text-[#c7d6d6] mt-1">Fortify Digital Security</div>
      <div className="w-32 h-[1px] bg-[#0EA9AC] mt-1 mx-auto"></div>
    </div>
  </div>
</div>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex space-x-6 text-lg font-medium text-white relative">
        {menuItems.map((item, index) => (
          <li
            key={index}
            className="relative group cursor-pointer"
            onMouseEnter={() => setOpenDropdown(item.dropdown ? item.name : null)}
            onMouseLeave={() => setOpenDropdown(null)}
            role="button"
            aria-haspopup="true"
            tabIndex={0}
          >
            {item.dropdown ? (
              <span className="hover:text-[#0EA9AC]">{item.name}</span>
            ) : (
              <Link href={item.href} className="hover:text-[#0EA9AC]">
                {item.name}
              </Link>
            )}

            {/* Dropdown Menu */}
            <AnimatePresence>
              {openDropdown === item.name && item.dropdown && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute left-0 mt-2 w-56 bg-[#00142c] shadow-lg rounded-lg overflow-hidden"
                >
                  {item.dropdown.map((subItem, subIndex) => (
                    <Link
                      href={subItem.href}
                      key={subIndex}
                      className="block px-5 py-3 text-white hover:bg-[#0EA9AC] hover:text-black transition"
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-white text-2xl focus:outline-none"
        onClick={() => {
          setIsMobileMenuOpen(!isMobileMenuOpen);
          setOpenDropdown(null); // Close dropdowns when opening mobile menu
        }}
      >
        &#9776;
      </button>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed top-0 right-0 w-64 h-full bg-[#00142c] text-white shadow-lg z-50 p-6"
          >
            {/* Close Button */}
            <button
              className="text-3xl absolute top-5 right-5 focus:outline-none"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              &times;
            </button>

            {/* Mobile Menu Items */}
            <ul className="mt-10 space-y-6 text-lg">
              {menuItems.map((item, index) => (
                <li key={index} className="relative">
                  {item.dropdown ? (
                    <>
                      <span
                        className="cursor-pointer hover:text-[#0EA9AC] block"
                        onClick={() =>
                          setOpenDropdown(openDropdown === item.name ? null : item.name)
                        }
                      >
                        {item.name}
                      </span>
                      {openDropdown === item.name && (
                        <motion.ul
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="ml-4 mt-2 space-y-2 text-sm"
                        >
                          {item.dropdown.map((subItem, subIndex) => (
                            <li key={subIndex}>
                              <Link
                                href={subItem.href}
                                className="block px-3 py-2 hover:bg-[#0EA9AC] rounded"
                                onClick={() => setIsMobileMenuOpen(false)} // Close mobile menu on selection
                              >
                                {subItem.name}
                              </Link>
                            </li>
                          ))}
                        </motion.ul>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className="block hover:text-[#0EA9AC]"
                      onClick={() => setIsMobileMenuOpen(false)} // Close menu on selection
                    >
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
