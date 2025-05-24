"use client"

import Image from 'next/image';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen bg-gray-100 relative text-black flex flex-col">
      {/* Header with Father Cove Image */}
      <header className="relative w-full">
        <div className="relative w-full h-64 flex">
        <h1 className="text-2xl font-bold text-black relative z-[2]
        text-center self-center m-auto">Chris Musial</h1>
          <Image
            src="/father-cove.jpg" // Replace with your header image path
            alt="Chris Musial Realtor"
            fill
            className="object-contain "
          />
        </div>
        <div className="max-w-7xl mx-auto py-6 flex flex-col sm:flex-row justify-between items-center bg-white shadow z-10 relative
        bg-red-200">
  
          <div className="text-center  flex md:flex-row w-screen
          justify-between items-center
           mx-auto px-2
          ">
            <div className='flex flex-col md:flex-row
            text-xs text-left'>
            <p>Chris Musial, B.A, REALTOR®</p>
            <p className="text-xs text-gray-600">RE/MAX NOVA</p>
            </div>
            <div className='flex flex-col md:flex-row text-left
            px-4'>
            <p className="text-xs">5943 Spring Garden Road, Halifax, Nova Scotia B3H 1Y4</p>
            <p className="text-xs ">(902) 876-8000 | Musial.Chris@gmail.com</p>
            </div>

          </div>
          {/* <div className="w-24 h-12 relative">
            <Image
              src="/remax-logo.jpg" // Replace with your RE/MAX logo path
              alt="RE/MAX Nova"
              fill
              className="object-contain"
            />
          </div> */}
        </div>
      </header>

      {/* Main Content with Cityscape Background */}
      <div className="relative flex-1 w-full">
        <Image
          src="/bg.jpg" // Replace with your cityscape image path
          alt="Cityscape"
          fill
          className="object-cover z-0"
        />
        <div className="relative z-10">
          {/* Navigation */}
          <nav className="bg-blue-600 text-white p-2">
            <div className="max-w-7xl mx-auto px-4">
              {/* Mobile Menu Button */}
              <div className="flex justify-between items-center md:hidden">
                <button onClick={toggleMenu} className="p-2 focus:outline-none">
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>

              {/* Menu Items */}
              <div
                className={`${
                  isMenuOpen ? 'flex' : 'hidden'
                } md:flex flex-col md:flex-row md:justify-around md:space-x-4 space-y-2 md:space-y-0 py-2 md:py-0 transition-all duration-300 ease-in-out`}
              >
                <a
                  href="#education"
                  className="px-4 py-2 bg-blue-700 rounded hover:bg-blue-800 text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  EDUCATION
                </a>
                <a
                  href="#specialties"
                  className="px-4 py-2 bg-blue-700 rounded hover:bg-blue-800 text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  SPECIALTIES
                </a>
                <a
                  href="#services"
                  className="px-4 py-2 bg-blue-700 rounded hover:bg-blue-800 text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  SERVICES
                </a>
                <a
                  href="#listings"
                  className="px-4 py-2 bg-blue-700 rounded hover:bg-blue-800 text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  LISTINGS
                </a>
                <a
                  href="#about"
                  className="px-4 py-2 bg-blue-700 rounded hover:bg-blue-800 text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  ABOUT CHRIS
                </a>
              </div>
            </div>
          </nav>

          {/* Brochure Section */}
          <section className="max-w-7xl mx-auto px-4 py-12 flex flex-col gap-6">
            <div className="relative h-64">
              <Image
                src="/brochure-1.jpg" // Replace with your "Home Buyer's Course" image path
                alt="Home Buyer's Course"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="relative h-64">
              <Image
                src="/brochure-2.jpg" // Replace with your "Selling My Home" image path
                alt="Selling My Home"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="relative h-64">
              <Image
                src="/brochure-3.jpg" // Replace with your "Selling My Condominium" image path
                alt="Selling My Condominium"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </section>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="max-w-7xl mx-auto px-4 flex flex-col items-center">
          <div className="flex space-x-4 mb-2">
            <a href="#"><span className="text-2xl">🇫</span></a>
            <a href="#"><span className="text-2xl">📸</span></a>
            <a href="#"><span className="text-2xl">🔵</span></a>
            <a href="#"><span className="text-2xl">💚</span></a>
            <a href="#"><span className="text-2xl">🎥</span></a>
          </div>
          <p className="text-sm">Copyright© Chris Musial, REALTOR® 2025. No portion of the information presented on this site can be used without express written permission. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}