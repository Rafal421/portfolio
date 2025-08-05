"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  FileText,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Download,
  Star,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function Sidebar() {
  const [copiedMessage, setCopiedMessage] = useState<"email" | "phone" | null>(
    null
  );
  const handleCopy = async (text: string, type: "email" | "phone") => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedMessage(type);
      setTimeout(() => setCopiedMessage(null), 2000); // Clear message after 2 seconds
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };
  return (
    <div className="rounded-xl border border-[#2a2a2a] overflow-hidden shadow-xl h-full">
      <div className="p-6 space-y-6">
        {/* Status Badge */}
        <div className="flex justify-center">
          <div className="flex items-center space-x-2 bg-green-500/10 border border-green-500/30 rounded-full px-4 py-2 backdrop-blur-sm">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            <span className="text-xs text-green-400 font-semibold">
              Available for Work
            </span>
          </div>
        </div>

        {/* Profile Section */}
        <div className="flex flex-col items-center text-center mb-0">
          <div className="relative ">
            {/* Gradient Ring */}
            <div className="w-32 h-32 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-1">
              <div className="w-full h-full rounded-full overflow-hidden bg-[#1a1a1a]  p-1">
                <Image
                  src="/RH.jpg"
                  alt="Profile"
                  width={120}
                  height={120}
                  className="object-cover w-full h-full rounded-full"
                />
              </div>
            </div>
            {/* Verified Badge */}
          </div>

          <h2 className="text-2xl font-bold text-white mb-2">Rafał Haczek</h2>
          <div className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent font-bold text-lg mb-6">
            Full Stack Developer
          </div>

          {/* Social Links */}
          <div className="flex space-x-3 mb-6">
            <a
              href="https://github.com/Rafal421"
              className="group w-10 h-10 rounded-xl border border-[#2a2a2a] flex items-center justify-center text-gray-400 hover:text-white hover:from-[#444444] hover:to-[#555555] transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
            >
              <Github className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
            </a>
            <a
              href="https://www.linkedin.com/in/rafa%C5%82-haczek-4053b72a4/"
              className="group w-10 h-10 rounded-xl border border-[#2a2a2a] flex items-center justify-center text-gray-400 hover:text-white hover:from-[#444444] hover:to-[#555555] transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
            >
              <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
            </a>
            <a
              href="/RHACZEK_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-10 h-10 rounded-xl border border-[#2a2a2a] flex items-center justify-center text-gray-400 hover:text-white hover:from-[#444444] hover:to-[#555555] transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
            >
              <FileText className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
            </a>
          </div>
        </div>

        {/* About Section */}
        <div className=" rounded-xl p-5 border border-[#333333] shadow-inner mb-3">
          <p className="text-gray-300 text-sm leading-relaxed">
            Enthusiastic Full Stack Developer with a passion for crafting
            dynamic web applications, exploring cutting-edge technologies, and
            delivering exceptional user experiences.
          </p>
        </div>

        {/* Contact Information */}
        <div className="space-y-3 mb-3">
          <div className="space-y-3">
            <div
              className="group relative rounded-xl border border-[#333333] p-4 flex items-center space-x-4  hover:bg-[#242323] transition-all duration-300 cursor-pointer"
              onClick={() => handleCopy("rhaczek421@gmail.com", "email")}
              title="Click to copy email"
            >
              <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-[#333333] group-hover:bg-blue-500/30 transition-colors duration-200">
                <Mail className="w-5 h-5 text-blue-400" />
              </div>
              <div className="flex-1">
                <p className="text-xs text-gray-400 font-medium">Email</p>
                <p className="text-sm text-white font-semibold">
                  rhaczek421@gmail.com
                </p>
              </div>
              {copiedMessage === "email" && (
                <motion.span
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  className="absolute top-2 right-2 text-xs text-green-400 bg-green-900/50 px-2 py-1 rounded-full"
                >
                  Copied!
                </motion.span>
              )}
            </div>
            <div
              className="group relative rounded-xl border border-[#333333] p-4 flex items-center space-x-4  hover:bg-[#242323] transition-all duration-300 cursor-pointer"
              onClick={() => handleCopy("+48 123 456 789", "phone")}
              title="Click to copy phone number"
            >
              <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-[#333333] group-hover:bg-green-500/30 transition-colors duration-200">
                <Phone className="w-5 h-5 text-green-400" />
              </div>
              <div className="flex-1">
                <p className="text-xs text-gray-400 font-medium">Phone</p>
                <p className="text-sm text-white font-semibold">
                  +48 123 456 789
                </p>
              </div>
              {copiedMessage === "phone" && (
                <motion.span
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  className="absolute top-2 right-2 text-xs text-green-400 bg-green-900/50 px-2 py-1 rounded-full"
                >
                  Copied!
                </motion.span>
              )}
            </div>

            <div className="group rounded-xl border border-[#333333] p-4 flex items-center space-x-4  hover:bg-[#242323] transition-all duration-300 cursor-pointer">
              <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-[#333333] group-hover:bg-purple-500/30 transition-colors duration-200">
                <MapPin className="w-5 h-5 text-purple-400" />
              </div>
              <div className="flex-1">
                <p className="text-xs text-gray-400 font-medium">Location</p>
                <p className="text-sm text-white font-semibold">
                  Warsaw, Poland
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="rounded-xl p-5 border border-[#333333] shadow-inner block md:hidden">
          <div className="flex items-center ">
            <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mr-3"></div>
            <h3 className="text-sm font-bold text-white">Services</h3>
          </div>
          <div className="grid grid-cols-1 gap-3">
            <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-[#333333] transition-colors duration-200 cursor-pointer">
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              <span className="text-sm text-gray-300 font-medium">
                Web Development
              </span>
            </div>
            <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-[#333333] transition-colors duration-200 cursor-pointer">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span className="text-sm text-gray-300 font-medium">
                Web Design
              </span>
            </div>
            <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-[#333333] transition-colors duration-200 cursor-pointer">
              <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
              <span className="text-sm text-gray-300 font-medium">
                SEO Optimization
              </span>
            </div>
            <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-[#333333] transition-colors duration-200 cursor-pointer">
              <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
              <span className="text-sm text-gray-300 font-medium">
                Mobile Development
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
