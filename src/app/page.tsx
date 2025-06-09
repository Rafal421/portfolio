import Navbar from "@/components/Sections/NavbarSection";
import Footer from "@/components/Sections/FooterSection";
import SideBar from "@/components/Sections/SideBar";
import TechStacks from "@/components/Sections/TechStacks";
import WorkProces from "@/components/Sections/WorkProces";
import Career from "@/components/Sections/CareerEducationSection";
import Projects from "@/components/Sections/ProjectSection";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#121212]">
      {/* Fixed Navbar */}
      <div className="fixed top-0 w-full z-50">
        <Navbar />
      </div>

      {/* Main Content */}
      <div className="flex-grow pt-16 pb-10 px-4 md:px-8 max-w-[1600px] mx-auto w-full">
        {/* Changed to 14-column grid */}
        <div className="grid grid-cols-1 lg:grid-cols-14 gap-6">
          {/* Sidebar - Now spans 4 columns */}
          <div className="lg:col-span-4 lg:sticky lg:top-16 lg:self-start lg:h-[calc(100vh-8rem)]">
            <SideBar />
          </div>

          {/* Content Area - Now spans 10 columns */}
          <div className="lg:col-span-10">
            <div className="rounded-xl">
              <div className="grid grid-cols-1 [@media(min-width:1400px)]:grid-cols-2 gap-6">
                <div className="[@media(min-width:1400px)]:order-1">
                  <TechStacks />
                </div>
                <div className="[@media(min-width:1400px)]:order-2">
                  <WorkProces />
                </div>
                <div className="order-3 [@media(min-width:1400px)]:col-span-2">
                  <Career />
                </div>
                <div className="order-4 [@media(min-width:1400px)]:col-span-2 ">
                  <Projects />
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
