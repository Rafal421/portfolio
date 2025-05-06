"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description:
        "A modern portfolio website built with Next.js and Tailwind CSS",
      tags: ["Next.js", "React", "Tailwind"],
      status: "Completed",
    },
    {
      title: "E-commerce Platform",
      description:
        "Full-featured online store with payment processing and inventory management",
      tags: ["React", "Node.js", "MongoDB"],
      status: "In Progress",
    },
    {
      title: "Task Management App",
      description:
        "A productivity app for managing tasks and projects with team collaboration features",
      tags: ["TypeScript", "React", "Firebase"],
      status: "Planning",
    },
  ];

  return (
    <div className=" rounded-xl border border-[#2a2a2a] overflow-hidden shadow-xl">
      <div className="p-7">
        <div className="flex items-center mb-6">
          <div className="w-6 h-6 bg-[#252525] rounded-full flex items-center justify-center mr-3">
            <span className="text-blue-400">💼</span>
          </div>
          <h2 className="text-lg font-semibold text-white">Projects</h2>
        </div>

        <p className="text-gray-400 text-sm mb-6">
          Some of my recent work and ongoing projects
        </p>

        <div className="space-y-4">
          {projects.map((project, index) => (
            <div
              key={index}
              className="rounded-xl border border-[#2a2a2a] p-4 rounded-lg"
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-md font-semibold text-white">
                  {project.title}
                </h3>
                <span
                  className={`text-xs px-2 py-0.5 rounded-full ${
                    project.status === "Completed"
                      ? "bg-green-900/30 text-green-300 border border-green-800/50"
                      : project.status === "In Progress"
                      ? "bg-blue-900/30 text-blue-300 border border-blue-800/50"
                      : "bg-purple-900/30 text-purple-300 border border-purple-800/50"
                  }`}
                >
                  {project.status}
                </span>
              </div>

              <p className="text-sm text-gray-400 mb-3">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-3">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="text-xs px-2 py-0.5 bg-[#333333] text-gray-300 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex space-x-2">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-xs text-gray-400 hover:text-white"
                >
                  <Github className="w-3 h-3 mr-1" /> Code
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-xs text-gray-400 hover:text-white"
                >
                  <ExternalLink className="w-3 h-3 mr-1" /> Demo
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
