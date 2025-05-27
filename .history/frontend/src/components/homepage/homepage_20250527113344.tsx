"use client";

import Image from "next/image";


import { motion } from "framer-motion";

import Navbar from "@/components/navbar/navbar";
import Link from "next/link";
import Footer from "../footer/footer";
const Homepage = () => {






  return (
    <div className="min-h-screen bg-gray-100 text-black flex flex-col relative">
      {/* Background Image */}
      <Image
        src="/portrait.png"
        alt="Cityscape Background"
        fill
        className="object-cover z-0 object-[50%_100%]
        sm:object-[0_120%] md:object-[0_100%]"
        priority
        // style={{ objectPosition: "0 100%" }}
      />

      {/* Header Section */}
      <header className="relative z-10 bg-white">
        <div className="relative w-screen h-[15vh] max-h-[150px]">
          <Image
            src="/father-header.webp"
            alt="Chris Musial Realtor"
            fill
            className="object-contain 
            mx-auto"
            priority
          />
          {/* <div className=" absolute left-1/2 -translate-x-1/2
          top-1/2 flex flex-col">
             <h1 className="text-2xl font-bold text-black text-center  flex items-center justify-center z-[2]">
            Chris Musial
            <br/>REALTOR
          </h1> */}
        
          {/* <Image 
          width={600}
          height={1300}
          src="/signature.png"
          alt='Chris musial signature'
          className="object-cover 
          w-[40vw] max-w-[200px] mx-auto
          
         "
          />
          </div> */}
           
        
        </div>
        <div className="w-screen mx-auto flex flex-col sm:flex-row justify-between items-center bg-white shadow
       bg-blue-200">
          <div className="flex flex-col
          py-2  bg-blue-100 md:flex-row justify-between items-center w-full px-4 text-center
          max-w-[2000px]">
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
     />
      

      {/* Brochure Section */}
      <section className="py-12 px-0 relative z-10">
      {/* <h2 className="text-3xl font-bold text-black mb-8 pl-4 md:pl-8">Resources</h2> */}
      <div className="flex flex-col gap-6 w-full md:w-48 ml-0 pl-4 md:pl-8">
        {[
          { src: "/home.png", alt: "Home Buyer's Course",
        link:'/SellingMyHome' },
          { src: "/buyer.png", alt: "Selling My Home",
          link:'/HomeBuyersCourse' },
          { src: "/condo.png", alt: "Selling My Condominium",
          link:'/SellingMyCondo' },
        ].map((item, index) => (
          <motion.div
            key={item.alt}
            className="relative w-[10vw] h-[]
            hover:scale-[1.1] transition-transform"
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
      
  <Footer/>
      
    </div>
  );
}

export default Homepage