
"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from 'next/link'

interface NavbarProps {
  excludedLink?: string;
}

const Navbar: React.FC<NavbarProps> = ({ excludedLink }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Education", href: "#education" },
    { name: "Specialties", href: "#specialties" },
    { name: "Services", href: "#services" },
    { name: "Listings", href: "#listings" },
    { name: "About Chris", href: "#about-chris" },
    { name: "Contact", href: "/contact" },
  ];

  const filteredNavItems = excludedLink
    ? navItems.filter(
        (item) => item.name.toLowerCase() !== excludedLink.toLowerCase()
      )
    : navItems;

  return (
    <nav
      className="text-white p-2 relative z-10"
      style={{
        backgroundImage: "url('/container.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center md:hidden">
          <button onClick={toggleMenu} className="p-2 focus:outline-none">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        <div
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } md:flex flex-col md:flex-row md:justify-around md:space-x-4 space-y-2 md:space-y-0 py-2 md:py-0 transition-all duration-300 ease-in-out`}
        >
          {filteredNavItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="px-4 py-2 rounded hover:scale-[1.15] text-center transition-all
              "
              style={{
                backgroundImage: "url('/button-bg.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name.toUpperCase()}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
