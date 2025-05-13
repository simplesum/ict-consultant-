
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="border-b border-gray-200 bg-white fixed w-full z-10">
      <div className="container mx-auto flex items-center justify-between py-4 px-4 md:px-6">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <h1 className="text-xl font-bold text-ict-darkblue tracking-widest border border-ict-darkblue p-2">
              CUESTA PARTNERS
            </h1>
          </Link>
        </div>
        
        <nav className="hidden md:flex space-x-6 text-sm font-medium">
          <Link to="/" className="text-gray-700 hover:text-ict-blue transition-colors">
            ABOUT
          </Link>
          <Link to="/" className="text-gray-700 hover:text-ict-blue transition-colors">
            CAREERS
          </Link>
          <Link to="/" className="text-gray-700 hover:text-ict-blue transition-colors">
            SUCCESS STORIES
          </Link>
          <Link to="/" className="text-gray-700 hover:text-ict-blue transition-colors">
            INSIGHTS
          </Link>
        </nav>
        
        <div className="flex md:hidden">
          <Button variant="ghost" size="icon">
            <span className="sr-only">Open menu</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
