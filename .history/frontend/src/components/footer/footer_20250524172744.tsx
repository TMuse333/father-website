import React from "react";
import Image from "next/image";
const socialMedia = [
    {
        name: "Facebook",
        url: "https://www.facebook.com/Musial.Chris/",
        image: "/facebook.png",
      },


    {
      name: "Instagram",
      url: "https://www.instagram.com/chris_musial_real_estate/",
      image: "/instagram.png",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/musialchris/?originalSubdomain=ca",
      image: "/linkedin.png",
    },
    {
        name: "WhatsApp",
        url: "tel:+19028768000",
        image: "/whatsapp.png",
      },
    {
        name: "YouTube",
        url: "https://www.youtube.com/@ChrisMusialMarketingDirector",
        image: "/YouTube.png",
      },
  ];


  const Footer = () => {


    return (
        <footer className="py-6 relative z-10 text-black
        ">
        <div className="max-w-7xl mx-auto px-4 flex flex-col items-center">
        <div className="flex space-x-4 mb-2">
            {socialMedia.map((platform) => (
              <a
                key={platform.name}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-[1.1] transition-all"
              >
                <Image
                  src={platform.image}
                  alt={`${platform.name} Logo`}
                  width={32}
                  height={32}
                 
                  className={` transition-transform duration-300 object-contain ${
                    platform.name === "instagram" ? "w-[100px] h-[100px] scale-[2] hover:scale-[2.5]" : "w-[50px] hover:scale-110 h-[75px]"
                  }`}
                />
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
    )
  }

  export default Footer