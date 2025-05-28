"use client";
import { CheckCircle2, Lightbulb, Wrench, Rocket } from "lucide-react";

export default function WorkProcess() {
  const steps = [
    {
      title: "Project Brief",
      description: "Initial consultation and project requirements",
      icon: <Lightbulb className="w-5.5 h-56 text-yellow-400" />,
      number: "01",
    },
    {
      title: "Design & Develop",
      description: "Transform your concept into a working product",
      icon: <Wrench className="w-5.5 h-5.5 text-blue-400" />,
      number: "02",
    },
    {
      title: "Testing & Review",
      description: "Quality assurance and client review process",
      icon: <CheckCircle2 className="w-5.5 h-5.5 text-green-400" />,
      number: "03",
    },
    {
      title: "Launch",
      description: "The moment when your project goes live to the world",
      icon: <Rocket className="w-5.5 h-5.5 text-purple-400" />,
      number: "04",
    },
  ];

  return (
    <div className="rounded-xl border border-[#2a2a2a] overflow-hidden shadow-xl min-h-[500px] content-center     ">
      <div className="p-7 h-full ">
        <div className="flex items-center mb-6">
          <div className="w-6 h-6 bg-[#252525] rounded-full flex items-center justify-center mr-3">
            <span className="text-purple-400">🚀</span>
          </div>
          <h2 className="text-lg font-semibold text-white">Work Process</h2>
        </div>

        <p className="text-gray-400 text-sm mb-6">
          My systematic approach to project development
        </p>

        <div className="grid grid-cols-1 gap-5">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex items-center space-x-3 rounded-xl border border-[#2a2a2a] p-3 rounded-lg"
            >
              <div className="w-10 h-10 rounded-lg bg-[#333333] flex items-center justify-center">
                {step.icon}
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-center mb-1">
                  <h3 className="text-sm font-medium text-white">
                    {step.title}
                  </h3>
                  <span className="text-xs text-gray-500">{step.number}</span>
                </div>
                <p className="text-xs text-gray-400">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
