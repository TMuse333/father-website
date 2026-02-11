"use client";

import React from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AboutModal: React.FC<AboutModalProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed inset-4 md:inset-10 lg:inset-20 bg-white rounded-lg shadow-2xl z-50 overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div
              className="p-4 flex justify-between items-center border-b"
              style={{
                backgroundImage: "url('/container.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <h2 className="text-xl md:text-2xl font-bold text-white">
                About Chris Musial
              </h2>
              <button
                onClick={onClose}
                className="p-2 hover:bg-white/20 rounded-full transition-colors"
              >
                <X size={24} className="text-white" />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-6 md:p-8">
              <div className="max-w-3xl mx-auto space-y-4 text-gray-700">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 text-center mb-6">
                  Chris Musial, B.A., CELTA REALTOR®, RE/MAX NOVA
                  <br />
                  <span className="text-lg font-normal text-gray-600">
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
                <div className="mt-8 p-6 bg-blue-50 rounded-lg border border-blue-200">
                  <p className="font-bold text-gray-900">
                    Chris Musial, B.A., CELTA REALTOR®
                  </p>
                  <p className="text-gray-700">
                    RE/MAX NOVA
                    <br />
                    5943 Spring Garden Road
                    <br />
                    Halifax, Nova Scotia B3H 1Y4
                  </p>
                  <div className="mt-4 space-y-2">
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
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default AboutModal;
