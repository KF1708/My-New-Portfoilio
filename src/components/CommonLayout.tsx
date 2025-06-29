import { ReactNode } from "react";
import { ArrowBigUpDash } from "lucide-react";
import Navbar from "./Navbar";

interface CommonLayoutProps {
  children: ReactNode;
}

const CommonLayout = ({ children }: CommonLayoutProps) => {
  return (
    <div id="top" className="relative">
      <Navbar />

      <main>{children}</main>

      {/* Scroll to top button */}
      <div className="fixed bottom-5 right-5 z-50">
        <a href="#top" aria-label="Scroll to top">
          <button
            className="bg-blue-500 animate-bounce p-2 rounded-md text-white hover:bg-blue-600 transition-all"
            title="Back to top"
          >
            <ArrowBigUpDash className="w-6 h-6" />
          </button>
        </a>
      </div>
    </div>
  );
};

export default CommonLayout;
