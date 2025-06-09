"use client";

import { Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FaClock, FaTools } from "react-icons/fa";
import { DiAptana } from "react-icons/di";

export default function Projects() {
  const projects = [
    {
      title: "Dj-Klaser Site",
      description:
        "Modern website for a DJ, showcasing events, music, and contact information. Built with Next.js and Tailwind CSS for a responsive design.",
      tags: ["Next.js", "React", "Tailwind"],
      status: "In Progress",
      link: "https://github.com/Rafal421/DJ-KLASER",
    },
  ];

  return (
    <div className=" rounded-xl border border-[#2a2a2a] overflow-hidden shadow-xl">
      <div className="p-7">
        <div className="flex items-center mb-6">
          <div className="w-8 h-8 bg-[#252525] rounded-full flex items-center justify-center mr-3">
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
              className="rounded-xl border border-[#2a2a2a] p-4 "
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
              </div>{" "}
              <div className="flex space-x-2">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-xs text-gray-400 hover:text-white"
                  onClick={() => window.open(project.link, "_blank")}
                  disabled={!project.link}
                >
                  <Github className="w-3 h-3 mr-1" /> Code
                </Button>
              </div>
            </div>
          ))}

          <div className="flex items-center rounded-xl border border-[#2a2a2a] p-4 min-h-[500px]">
            <div className="items-center text-center mb-2 w-96 mx-auto">
              <div className="flex items-center justify-center mb-4">
                <div className="w-20 h-20 rounded-full bg-[#333333] flex items-center justify-center">
                  <DiAptana className="w-15 h-15 text-purple-300 " />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-white">
                More Projects Coming Soon
              </h3>
              <p className="text-sm text-gray-400 mb-3">
                I&apos;m currently working on some exciting projects that will
                be showcased here soon. Check back later or contact me to learn
                more about what I&apos;m building.
              </p>
              <div className="flex justify-center">
                <div className="flex gap-2 flex-wrap">
                  <div className="flex items-center text-xs px-2 py-0.5 rounded-full border bg-yellow-900/30 text-yellow-300 border-yellow-800/50">
                    <FaTools className="mr-1" />
                    <p>In development</p>
                  </div>
                  <div className="flex items-center text-xs px-2 py-0.5 rounded-full border bg-purple-900/30 text-purple-300 border-purple-800/50">
                    <FaClock className="mr-1" />
                    <p>In development</p>
                  </div>
                </div>
              </div>
              <div className="pt-4">
                <Button className="w-full bg-gradient-to-r from-[#333333] to-[#444444] hover:from-[#444444] hover:to-[#555555] border border-[#2a2a2a]">
                  Contact Me for Details
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
