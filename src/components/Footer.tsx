
import { Link } from "react-router-dom";
import { Mail, Phone, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-ict-darkblue text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-xl font-bold border border-white p-2 inline-block tracking-widest mb-6">
              CUESTA PARTNERS
            </h2>
            <p className="text-gray-300 mb-6 max-w-md">
              Strategic technology advisory helping businesses transform and optimize their IT infrastructure for sustainable growth.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-ict-blue transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="hover:text-ict-blue transition-colors">
                <Mail size={20} />
              </a>
              <a href="#" className="hover:text-ict-blue transition-colors">
                <Phone size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Strategic Advisory</Link></li>
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Digital Transformation</Link></li>
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Technology Assessment</Link></li>
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Implementation</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">About</Link></li>
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Team</Link></li>
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Careers</Link></li>
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">© 2025 Cuesta Partners. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/" className="text-sm text-gray-400 hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/" className="text-sm text-gray-400 hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
