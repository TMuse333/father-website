
"use client";

import React from "react";
import Image from "next/image";
import Head from "next/head";
import { motion } from "framer-motion";
import { InlineWidget } from "react-calendly";
import Nav
// import ApplicationForm from "../components/ApplicationForm";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-100 text-black flex flex-col relative">
      {/* Background Image */}
      <Image
        src="/portrait.png"
        alt="Cityscape Background"
        fill
        className="object-cover z-0"
        priority
        style={{ objectPosition: "0 100%" }}
      />

      {/* Header Section */}
      <header className="relative z-10 bg-white">
        <div className="relative w-full h-[15vh] max-h-[150px]">
          <Image
            src="/father-header.webp"
            alt="Chris Musial Realtor"
            fill
            className="object-contain max-w-[1200px] mx-auto"
            priority
          />
        </div>
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center bg-white shadow max-w-[1200px] bg-blue-200">
          <div className="flex flex-col py-2 bg-blue-100 md:flex-row justify-between items-center w-full px-4 text-center">
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

      {/* Navigation */}
      <Navbar />

      {/* Contact Section */}
      <section className="w-screen mx-auto py-12 px-4 relative z-10">
        <motion.h2
          className="text-3xl font-bold text-black mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Book a Consultation
        </motion.h2>
        <motion.div
          className="mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <InlineWidget
            url="https://calendly.com/chrisc_yournetworkrealtor/book-initial-client-consultation"
            styles={{
              height: "700px",
              borderRadius: "8px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            }}
          />
        </motion.div>
        <motion.h2
          className="text-3xl font-bold text-black mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Get in Touch
        </motion.h2>
        <motion.div
          className="max-w-lg mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {/* <ApplicationForm /> */}
        </motion.div>
      </section>

      {/* Footer Section */}
      <footer className="py-6 relative z-10 text-black">
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
