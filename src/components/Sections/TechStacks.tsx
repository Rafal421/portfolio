"use client";

import { BiLogoTypescript } from "react-icons/bi";
import { FaFigma, FaReact } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiExpress } from "react-icons/si";
import { BsGit } from "react-icons/bs";

export default function TechStack() {
  const technologies = [
    {
      title: "Figma",
      icon: <FaFigma className="w-5.5 h-5.5 text-red-400" />,
      description: "Design Tool",
    },
    {
      title: "TypeScript",
      icon: <BiLogoTypescript className="w-6.5 h-6.5   text-sky-700" />,
      description: "JavaScript But Better",
    },
    {
      title: "React",
      icon: <FaReact className="w-6 h-6 text-cyan-400" />,
      description: "JavaScript But Better",
    },
    {
      title: "Next.js",
      icon: <RiNextjsFill className="w-7 h-7 text-gray-100" />,
      description: "Rreact Framework",
    },
    {
      title: "Express.js",
      icon: <SiExpress className="w-6 h-6 text-gray-100" />,
      description: "Backend Framework",
    },
    {
      title: "Git",
      icon: <BsGit className="w-6 h-6 text-orange-500" />,
      description: "Version Controler",
    },
    {
      title: "TailwindCSS",
      icon: <RiTailwindCssFill className="w-6 h-6  text-sky-500" />,
      description: "Design Tool",
    },
  ];

  return (
    <div className=" rounded-xl border border-[#2a2a2a] overflow-hidden shadow-xl min-h-[500px] content-center ">
      <div className="p-7 h-full ">
        <div className="flex items-center mb-6">
          <div className="w-6 h-6 bg-[#252525] rounded-full flex items-center justify-center mr-3">
            <span className="text-purple-400">🚀</span>
          </div>
          <h2 className="text-lg font-semibold text-white">My Tech Stacks</h2>
        </div>

        <p className="text-gray-400 text-sm mb-6">
          Technologies Ive been working with recently
        </p>

        <div className="grid grid-cols-2 gap-5">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="flex items-center space-x-3 rounded-xl border border-[#2a2a2a] p-3 rounded-lg"
            >
              <div className="w-10 h-10 rounded-lg bg-[#333333] flex items-center justify-center">
                {tech.icon}
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-center mb-1">
                  <h3 className="text-sm font-medium text-white">
                    {tech.title}
                  </h3>
                </div>
                <p className="text-xs text-gray-400">{tech.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
