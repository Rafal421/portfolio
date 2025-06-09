"use client";

import { Button } from "@/components/ui/button";
import { FileText, Github, Linkedin } from "lucide-react";
import Image from "next/image";

export default function Sidebar() {
  return (
    <div className="rounded-xl border border-[#2a2a2a] overflow-hidden shadow-xl h-full">
      <div className="p-5 space-y-4 ">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <span className="w-3 h-3 bg-green-500 rounded-full"></span>
            <span className="text-sm text-gray-400">Available for Work</span>
          </div>
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="relative mb-4">
            <div className="w-30 h-30 rounded-full overflow-hidden border-2 border-[#2a2a2a] relative">
              <Image
                src="/RH.jpg"
                alt="Profile"
                width={96}
                height={96}
                className="auto-fit object-cover w-full h-full"
              />
            </div>
          </div>

          <h2 className="text-xl font-bold text-white mb-1">Rafał Haczek</h2>
          <p className="text-sm text-gray-400 mb-4">Full Stack Developer</p>

          <div className="flex space-x-2 mb-6">
            <a
              href="https://github.com/Rafal421"
              className="w-8 h-8 rounded-full bg-[#252525] flex items-center justify-center text-gray-400 hover:bg-gray-700 hover:text-white transition-colors duration-300"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/rafa%C5%82-haczek-4053b72a4/"
              className="w-8 h-8 rounded-full bg-[#252525] flex items-center justify-center text-gray-400 hover:bg-gray-700 hover:text-white transition-colors duration-300"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* About */}
        <div className="space-y-3 text-gray-400 text-sm text-justify">
          <p>
            Enthusiastic Full Stack Developer with a passion for crafting
            Passionate developer with a knack for creating dynamic web
            applications, exploring cutting-edge technologies, and delivering
            exceptional user experiences.
          </p>
        </div>

        <div className="flex items-center space-x-2 text-gray-400 text-sm">
          <span>📍</span>
          <span>Warsaw, Poland</span>
        </div>

        <div className="pt-4">
          <a
            href="/RHACZEK_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <Button className="w-full bg-gradient-to-r from-[#333333] to-[#444444] hover:from-[#444444] hover:to-[#555555] border border-[#2a2a2a]">
              <FileText className="mr-2 h-4 w-4" /> Download Resume
            </Button>
          </a>
        </div>

        <div className="pt-4">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
            Services
          </h3>
          <div className="space-y-2 text-sm">
            <div className="flex items-center space-x-2 text-gray-400">
              <span className="w-1.5 h-1.5 bg-gray-500 rounded-full"></span>
              <span>Web Development</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-400">
              <span className="w-1.5 h-1.5 bg-gray-500 rounded-full"></span>
              <span>Web Design</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-400">
              <span className="w-1.5 h-1.5 bg-gray-500 rounded-full"></span>
              <span>SEO Optimization</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-400">
              <span className="w-1.5 h-1.5 bg-gray-500 rounded-full"></span>
              <span>Mobile Development</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
