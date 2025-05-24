```jsx
"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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
          {["Education", "Specialties", "Services", "Listings", "About Chris"].map(
            (item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="px-4 py-2 rounded hover:scale-[1.15] text-center transition-all"
                style={{
                  backgroundImage: "url('/button-bg.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.toUpperCase()}
              </a>
            )
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
