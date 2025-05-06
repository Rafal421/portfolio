"use client";

import { BookOpen, Briefcase } from "lucide-react";

export default function Career() {
  const timelineItems = [
    {
      title: "Full Stack Developer",
      date: "2021 - Present",
      description:
        "Working on professional projects, continuously learning new technologies and improving skills.",
      type: "career",
      company: "Freelance",
    },
    {
      title: "Computer Science",
      date: "2018 - 2022",
      description:
        "Studied computer science with a focus on web development and software engineering principles.",
      type: "education",
      institution: "University of Technology",
    },
    {
      title: "Computer Science",
      date: "2018 - 2022",
      description:
        "Studied computer science with a focus on web development and software engineering principles.",
      type: "education",
      institution: "University of Technology",
    },
  ];

  return (
    <div className="bg-[] rounded-xl border border-[#2a2a2a] overflow-hidden shadow-xl">
      <div className="px-7 py-10    ">
        <div className="flex items-center mb-6">
          <div className="w-6 h-6 bg-[#252525] rounded-full flex items-center justify-center mr-3">
            <span className="text-green-400">📈</span>
          </div>
          <h2 className="text-lg font-semibold text-white">
            Career & Education
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {timelineItems.map((item, index) => (
            <div
              key={index}
              className="rounded-xl border border-[#2a2a2a] p-4 rounded-lg"
            >
              <div className="flex items-center mb-2 gap-2">
                {item.type === "education" ? (
                  <BookOpen className="w-4 h-4 text-blue-400" />
                ) : (
                  <Briefcase className="w-4 h-4 text-purple-400" />
                )}
                <span
                  className={`text-xs px-2 py-0.5 rounded-full ${
                    item.type === "education"
                      ? "bg-blue-900/30 text-blue-300 border border-blue-800/50"
                      : "bg-purple-900/30 text-purple-300 border border-purple-800/50"
                  }`}
                >
                  {item.type === "education" ? "Education" : "Career"}
                </span>
              </div>

              <h3 className="text-sm font-semibold text-white mb-1">
                {item.title}
              </h3>
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs text-gray-400">
                  {item.type === "education" ? item.institution : item.company}
                </span>
                <span className="text-xs text-gray-500">{item.date}</span>
              </div>
              <p className="text-xs text-gray-400">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
