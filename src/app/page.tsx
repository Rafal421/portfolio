import Navbar from "@/components/Sections/NavbarSection";
import Footer from "@/components/Sections/FooterSection";
import SideBar from "@/components/Sections/SideBar";
import TechStacks from "@/components/Sections/TechStacks";
import WorkProces from "@/components/Sections/WorkProces";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#121212]">
      {/* Fixed Navbar */}
      <div className="fixed top-0 w-full z-50">
        <Navbar />
      </div>

      {/* Main Content */}
      <div className="flex-grow pt-16 pb-10 px-4 md:px-8 max-w-[1800px] mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Sidebar - Fixed position */}
          <div className="lg:col-span-3 lg:sticky lg:top-16 lg:self-start lg:h-[calc(100vh-8rem)]">
            <SideBar />
          </div>

          {/* Scrollable Content Area */}
          <div className="lg:col-span-9">
            <div className="bg-[#1a1a1a] rounded-xl border border-[#2a2a2a] shadow-xl h-[calc(100vh-8rem)] overflow-y-auto p-5 no-scrollbar">
              {/* Add more content here - this will be scrollable */}

              <div className="h-[2000px]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="md:col-span-1">
                    <TechStacks />
                  </div>

                  <div className="md:col-span-1">
                    <WorkProces />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fixed Footer */}
      <div className="fixed bottom-0 w-full">
        <Footer />
      </div>
    </div>
  );
}
