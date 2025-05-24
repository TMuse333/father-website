// app/page.tsx
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 relative">
      {/* Header with Father Cove Image */}
      <header className="relative w-full">
        <div className="relative w-full h-64">
          <Image
            src="/father-cove.jpg" // Replace with your header image path
            alt="Chris Musial Realtor"
            fill
            className="md:object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row justify-between items-center bg-white shadow z-10 relative">
          <div className="relative w-48 h-24 mb-4 sm:mb-0">
            {/* Empty div for potential logo alignment */}
          </div>
          <div className="text-center sm:text-left">
            <h1 className="text-2xl font-bold">Chris Musial</h1>
            <p className="text-sm text-gray-600">REALTOR® | RE/MAX NOVA</p>
            <p className="text-sm">5943 Spring Garden Road, Halifax, Nova Scotia B3H 1Y4</p>
            <p className="text-sm">(902) 876-8000 | Musial.Chris@gmail.com</p>
          </div>
          <div className="w-24 h-12 relative">
            <Image
              src="/remax-logo.jpg" // Replace with your RE/MAX logo path
              alt="RE/MAX Nova"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-blue-600 text-white p-2">
        <div className="max-w-7xl mx-auto px-4 flex justify-around">
          <a href="#education" className="px-4 py-2 bg-blue-700 rounded">EDUCATION</a>
          <a href="#specialties" className="px-4 py-2 bg-blue-700 rounded">SPECIALTIES</a>
          <a href="#services" className="px-4 py-2 bg-blue-700 rounded">SERVICES</a>
          <a href="#listings" className="px-4 py-2 bg-blue-700 rounded">LISTINGS</a>
          <a href="#about" className="px-4 py-2 bg-blue-700 rounded">ABOUT CHRIS</a>
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

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="max-w-7xl mx-auto px-4 flex flex-col items-center">
          <div className="relative w-full h-64 mb-4">
            <Image
              src="/cityscape.jpg" // Replace with your cityscape image path
              alt="Cityscape"
              fill
              className="object-cover"
            />
          </div>
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