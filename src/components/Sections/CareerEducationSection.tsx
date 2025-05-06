"use client";

import { BookOpen, Briefcase } from "lucide-react";

export default function Career() {
  const timelineItems = [
    {
      title: "Frontend Intern",
      date: "2024.05 - 2024.09",
      description:
        "Contributing to real-world projects using React and TailwindCSS, building reusable UI components, integrating APIs, and collaborating in Agile teams. Gaining hands-on experience with cloud environments and continuously expanding technical skills.",
      type: ["Career"],
      company: "NeuroN Foundation",
    },
    {
      title: "Specialization: Engineering",
      date: "2022 - 202?",
      description:
        "IT student at WIT Academy in Warsaw, working towards an engineering degree while developing skills in programming, problem-solving, and teamwork through practical projects and modern technologies.",
      type: ["Education"],
      institution: "WIT Academy in Warsaw",
    },
    {
      title: "Specialization: IT Technician",
      date: "2018 - 2022",
      description:
        "Graduated from IT technical school as an IT technician, certified in EE.09 (programming and OS) and EE.08 (hardware assembly and maintenance).",
      type: ["Education", "Certification"],
      institution: "Technical High School - PCKTiB",
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
            <div key={index} className="rounded-xl border border-[#2a2a2a] p-4">
              <div className="flex items-center mb-2 gap-2">
                {item.type.includes("Education") ? (
                  <BookOpen className="w-4 h-4 text-blue-400" />
                ) : (
                  <Briefcase className="w-4 h-4 text-purple-400" />
                )}

                <div className="flex gap-2 flex-wrap">
                  {Array.isArray(item.type) ? (
                    item.type.map((type, i) => (
                      <span
                        key={i}
                        className={`text-xs px-2 py-0.5 rounded-full border ${
                          type === "Education"
                            ? "bg-blue-900/30 text-blue-300 border-blue-800/50"
                            : type === "Certification"
                            ? "bg-yellow-900/30 text-yellow-300 border-yellow-800/50"
                            : "bg-purple-900/30 text-purple-300 border-purple-800/50"
                        }`}
                      >
                        {type}
                      </span>
                    ))
                  ) : (
                    <span
                      className={`text-xs px-2 py-0.5 rounded-full border ${
                        item.type === "Education"
                          ? "bg-blue-900/30 text-blue-300 border-blue-800/50"
                          : "bg-purple-900/30 text-purple-300 border-purple-800/50"
                      }`}
                    >
                      {item.type}
                    </span>
                  )}
                </div>
              </div>

              <h3 className="text-sm font-semibold text-white mb-1">
                {item.title}
              </h3>
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs text-gray-400">
                  {item.type.includes("Education")
                    ? item.institution
                    : item.company}
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
