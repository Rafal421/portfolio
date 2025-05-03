"use client";

import { Code2, Database, Globe, Server } from "lucide-react";

export default function TechStack() {
  const technologies = [
    {
      title: "React JS",
      icon: <div className="w-5 h-5 text-blue-400">⚛️</div>,
      description: "JavaScript But Better",
    },
    {
      title: "Tailwind CSS",
      icon: <Code2 className="w-5 h-5 text-blue-400" />,
      description: "JavaScript But Better",
    },
    {
      title: "Next.js",
      icon: <div className="w-5 h-5 text-white">N</div>,
      description: "JavaScript But Better",
    },
    {
      title: "Node.js",
      icon: <Server className="w-5 h-5 text-green-400" />,
      description: "JavaScript But Better",
    },
    {
      title: "PostgreSQL",
      icon: <Database className="w-5 h-5 text-blue-400" />,
      description: "JavaScript But Better",
    },
    {
      title: "REST APIs",
      icon: <Globe className="w-5 h-5 text-purple-400" />,
      description: "JavaScript But Better",
    },
    {
      title: "REST APIs",
      icon: <Globe className="w-5 h-5 text-purple-400" />,
      description: "JavaScript But Better",
    },
  ];

  return (
    <div className="bg-[#1a1a1a] rounded-xl border border-[#2a2a2a] overflow-hidden shadow-xl min-h-[500px] content-center     ">
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
              className="flex items-center space-x-3 bg-[#252525] p-3 rounded-lg"
            >
              <div className="w-8 h-8 rounded-lg bg-[#333333] flex items-center justify-center">
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
