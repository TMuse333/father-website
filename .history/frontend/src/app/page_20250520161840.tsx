"use client";

import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen bg-gray-100 text-black flex flex-col relative">
      {/* Background Image */}
      <Image
        src="/portrait.png"
        alt="Cityscape Background"
        fill
        className="object-cover z-0"
        priority
      />

      {/* Header Section */}
      <header className="relative z-10">
        <div className="relative w-full h-64">
          <Image
            src="/father-cove.jpg"
            alt="Chris Musial Realtor"
            fill
            className="object-cover"
            priority
          />
          <h1 className="text-2xl font-bold text-black text-center absolute inset-0 flex items-center justify-center z-[2]">
            Chris Musial
          </h1>
        </div>
        <div className="max-w-7xl mx-auto py-6 flex flex-col sm:flex-row justify-between items-center bg-white shadow">
          <div className="flex flex-col md:flex-row justify-between items-center w-full px-4 text-center">
            <div className="flex flex-col md:flex-row text-xs md:text-sm md:w-1/2 justify-around mb-4 md:mb-0">
              <p>Chris Musial, B.A, REALTOR®</p>
              <p className="text-gray-600">RE/MAX NOVA</p>
            </div>
            <div className="flex flex-col md:flex-row text-xs md:text-sm md:w-1/2 justify-around">
              <p>5943 Spring Garden Road, Halifax, Nova Scotia B3H 1Y4</p>
              <p>(902) 876-8000 | Musial.Chris@gmail.com</p>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Section */}
      <nav className="bg-blue-600 text-white p-2 relative z-10">
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
            {["Education", "Specialties", "Services", "Listings", "About Chris"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  className="px-4 py-2 bg-blue-700 rounded hover:bg-blue-800 text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.toUpperCase()}
                </a>
              )
            )}
          </div>
        </div>
      </nav>

      {/* Brochure Section */}
      <section className="max-w-7xl mx-auto py-12 px-4 relative z-10">
        <h2 className="text-3xl font-bold text-black mb-8">Resources</h2>
        <div className="flex flex-col gap-6 w-full md:w-1/3">
          {[
            { src: "/home.png", alt: "Home Buyer's Course" },
            { src: "/buyer.png", alt: "Selling My Home" },
            { src: "/condo.png", alt: "Selling My Condominium" },
          ].map((item, index) => (
            <motion.div
              key={item.alt}
              className="relative w-48 h-48
              "
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover rounded-lg"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      {/* <section className="max-w-7xl mx-auto py-12 px-4 relative z-10">
        <h2 className="text-3xl font-bold text-black mb-8">Contact Me</h2>
        <p className="pr-10 w-full text-lg text-gray-700 mb-8">
          Fill out this form with your project details, and we’ll respond promptly
          to discuss elevating your online presence and taking your business{" "}
          <span className="font-semibold">to the next level.</span>
        </p>
        <form className="max-w-lg">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 mb-4 border rounded"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 mb-4 border rounded"
          />
          <textarea
            placeholder="Your Project Details"
            className="w-full p-3 mb-4 border rounded"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-600 text-white p-3 rounded hover:bg-blue-700"
          >
            Submit
          </button>
        </form>
      </section> */}

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-6 relative z-10">
        <div className="max-w-7xl mx-auto px-4 flex flex-col items-center">
          <div className="flex space-x-4 mb-2">
            {["🇫", "📸", "🔵", "💚", "🎥"].map((icon) => (
              <a key={icon} href="#" className="text-2xl">
                {icon}
              </a>
            ))}
          </div>
          <p className="text-sm text-center">
            Copyright© Chris Musial, REALTOR® 2025. No portion of the information
            presented on this site can be used without express written permission.
            All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}