"use client";

export default function Navbar() {
  return (
    <nav className=" bg-[#121212] fixed top-0 right-0 left-0 py-3 border-b border-[#2a2a2a] shadow-md">
      <div className="max-w-[1600px] mx-auto px-4 md:px-8">
        <div className="flex items-center">
          <a href="#" className="text-lg font-bold flex items-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              PORTFOLIO
            </span>
            <span className="text-gray-400 ml-2">IS INSANE</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
