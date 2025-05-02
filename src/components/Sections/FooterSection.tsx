"use client";

import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-[#121212] border-t border-[#2a2a2a] py-6"
    >
      <div className="max-w-[1600px] mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 font-bold">
              PORTFOLIO
            </span>
            <span className="text-gray-400 ml-2 text-sm">
              © {currentYear} All Rights Reserved
            </span>
          </div>

          <div className="flex space-x-4 text-gray-400 text-sm">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
