"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Navbar from "@/components/navbar/navbar";
import Link from "next/link";
import Footer from "../footer/footer";

const Homepage = () => {
  const [showAbout, setShowAbout] = useState(false);

  return (
    <div
      className="min-h-screen bg-gray-100 text-black flex flex-col relative
    w-screen overflow-x-hidden"
    >
      {/* Background Image */}
      <Image
        src="/portrait.png"
        alt="Cityscape Background"
        fill
        className="object-cover z-0 object-[50%_100%]
        sm:object-[0_120%] md:object-[0_100%]
        absolute h-full w-full"
        priority
      />

      {/* Header Section */}
      <header className="relative z-10 bg-white">
        <div className="relative w-screen h-[15vh] max-h-[150px]">
          <Image
            src="/father-header.webp"
            alt="Chris Musial Realtor"
            fill
            className="object-contain mx-auto"
            priority
          />
        </div>
        <div
          className="w-screen mx-auto flex flex-col sm:flex-row justify-between items-center bg-white shadow
       bg-blue-200"
        >
          <div
            className="flex flex-col
          py-2  bg-blue-100 md:flex-row justify-between items-center w-full px-4 text-center
          max-w-[2000px]"
          >
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
      <Navbar
        excludedLink="Home"
        onAboutClick={() => setShowAbout(!showAbout)}
      />

      {/* Content Section - Toggle between Brochure and About */}
      <section className="py-12 px-4 relative z-10 flex-1">
        <AnimatePresence mode="wait">
          {!showAbout ? (
            <motion.div
              key="brochure"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col md:flex-row gap-6 w-full ml-0 pl-0 md:pl-4 max-w-[1200px] justify-start items-center"
            >
              {/* Left column with images */}
              <div className="flex flex-col gap-6">
                {[
                  { src: "/home.png", alt: "Home Buyer's Course", link: "/SellingMyHome" },
                  { src: "/buyer.png", alt: "Selling My Home", link: "/HomeBuyersCourse" },
                  { src: "/condo.png", alt: "Selling My Condominium", link: "/SellingMyCondo" },
                ].map((item, index) => (
                  <motion.div
                    key={item.alt}
                    className="relative w-48 h-48 max-w-[120px] hover:scale-[1.1] transition-transform"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                  >
                    <Link href={item.link}>
                      <Image
                        src={item.src}
                        alt={item.alt}
                        fill
                        className="object-contain rounded-lg"
                      />
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Right side with YouTube iframe */}
              <div className="flex flex-col items-center justify-center md:justify-start md:items-start md:w-auto mx-auto md:-translate-x-[8rem]">
                <h3 className="text-center font-semibold text-xl sm:text-2xl md:text-3xl mb-4">
                  Homebuyers Video Course
                </h3>
                <iframe
                  src="https://www.youtube.com/embed/7xcR72XgTR4?si=NSXCk_eXCk_eWkQbpS_U_"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="w-[90vw] h-[60.5vw] max-w-[500px] max-h-[315px] rounded-lg shadow-lg mt-auto"
                />
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="about"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="max-w-[1200px] mx-auto"
            >
              <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-xl p-6 md:p-8">
                <div className="flex flex-col lg:flex-row gap-8">
                  {/* Image */}
                  <div className="lg:w-1/3 flex-shrink-0">
                    <Image
                      src="/chris-waterfront.jpg"
                      alt="Chris Musial at Halifax Waterfront"
                      width={400}
                      height={500}
                      className="rounded-lg shadow-lg w-full h-auto object-cover"
                    />
                  </div>

                  {/* Bio Content */}
                  <div className="lg:w-2/3 space-y-4 text-gray-700 text-sm md:text-base max-h-[60vh] overflow-y-auto pr-2">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                      Chris Musial, B.A., CELTA REALTOR®, RE/MAX NOVA
                      <br />
                      <span className="text-base font-normal text-gray-600">
                        Biographical Sketch 2026
                      </span>
                    </h3>

                    <p>
                      Chris Musial is a REALTOR® with RE/MAX NOVA, based at 5943
                      Spring Garden Road in Halifax, Nova Scotia. He serves clients
                      throughout Halifax, including the South End, West End, and the
                      Parks of West Bedford.
                    </p>

                    <p>
                      Chris works in both residential and commercial real estate. On
                      the residential side, he assists first-time homebuyers,
                      move-up buyers, sellers, right-sizers, down-sizers, and
                      military transfers. In commercial real estate, he works with
                      investors and builders involved in the acquisition and sale of
                      apartment buildings and multifamily residential properties
                      representing both buyers and sellers.
                    </p>

                    <p>
                      He brings a strong background in residential new construction,
                      having spent seven years as a seller&apos;s agent with Rooftight
                      Construction, the residential construction division of Clayton
                      Developments. This experience provides him with practical
                      insight into how homes are built, evaluated, and positioned in
                      the market.
                    </p>

                    <p>
                      Before entering real estate, Chris&apos;s first career was in
                      international student recruiting for Nova Scotia&apos;s university
                      sector. That work allowed him to study in London, England,
                      live in Egypt for one year, work in Japan for six years, and
                      travel to 75 cities in 22 countries. He has a functional
                      knowledge of Japanese and brings a global perspective to his
                      work. Chris has three adult children and lives in Bedford.
                    </p>

                    <p>
                      Real estate also runs deep in the Musial family. Chris&apos;s
                      great-grandfather and grandfather owned construction
                      companies. While his father pursued a career in university
                      teaching and administration, he also built eight Musial family
                      homes over a 45-year span, reinforcing a long-standing
                      connection to construction.
                    </p>

                    <p>
                      Chris believes that successful real estate outcomes begin with
                      clear communication and strong professional relationships. He
                      views the journey to home ownership as a multi-step process
                      involving lenders, REALTORS®, lawyers, and other
                      professionals, and emphasizes the importance of establishing
                      the right team early to chart a course that meets each
                      client&apos;s needs.
                    </p>

                    <p className="font-medium">
                      To start a conversation, reach out by phone or email to
                      discuss your real estate goals.
                    </p>

                    {/* Contact Info */}
                    <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                      <p className="font-bold text-gray-900">
                        Chris Musial, B.A., CELTA REALTOR®
                      </p>
                      <p className="text-gray-700">
                        RE/MAX NOVA | 5943 Spring Garden Road, Halifax, Nova Scotia B3H 1Y4
                      </p>
                      <div className="mt-2 flex flex-wrap gap-4">
                        <p>
                          <span className="font-medium">Mobile:</span>{" "}
                          <a
                            href="tel:902-876-8000"
                            className="text-blue-600 hover:underline"
                          >
                            (902) 876-8000
                          </a>
                        </p>
                        <p>
                          <span className="font-medium">Email:</span>{" "}
                          <a
                            href="mailto:Musial.Chris@gmail.com"
                            className="text-blue-600 hover:underline"
                          >
                            Musial.Chris@gmail.com
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      <Footer />
    </div>
  );
};

export default Homepage;
