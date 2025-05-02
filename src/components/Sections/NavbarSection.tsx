"use client";

import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#121212] py-3 border-b border-[#2a2a2a] shadow-md"
    >
      <div className="max-w-[1600px] mx-auto px-4 md:px-8">
        <div className="flex items-center">
          <a href="#" className="text-lg font-bold flex items-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              PORTFOLIO
            </span>
            <span className="text-gray-400 ml-2">IS INSANE</span>
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
