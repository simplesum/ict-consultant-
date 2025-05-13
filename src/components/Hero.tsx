
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative bg-ict-darkblue text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=1800&q=80" 
          alt="Technology background" 
          className="w-full h-full object-cover opacity-30"
        />
      </div>
      
      <div className="container mx-auto px-4 py-20 md:py-32 relative z-1">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-3/5 mb-10 md:mb-0 z-10">
            <p className="text-sm uppercase tracking-widest mb-2 opacity-80">EXPERIENCE IS OUR DIFFERENTIATOR</p>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Strategic Technology Advisory</h2>
            <p className="text-lg md:text-xl mb-8">
              We look for what matters most, so you can see further
            </p>
            <Button className="bg-ict-blue hover:bg-blue-600 text-white group">
              <span>SEE HOW THE CUESTA APPROACH LEADS TO LONG-TERM SUCCESS</span>
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          
          <div className="md:w-2/5 md:pl-10">
            <div className="bg-white p-6 rounded-md shadow-md">
              <img 
                src="/lovable-uploads/4a83f542-d7a7-4e3f-8957-77b31c3e1e79.png" 
                alt="Profile" 
                className="w-full h-auto"
              />
              <div className="text-ict-darkblue mt-4">
                <p className="uppercase text-xs font-semibold tracking-wider">VP PEOPLE & ORGANIZATIONAL EFFECTIVENESS</p>
                <h3 className="text-lg font-bold mt-1">Joy Ducey Miller</h3>
                <p className="text-sm text-gray-600 mt-2">
                  25+ years of corporate and startup experience helping organizations build scalable technical teams, 
                  leverage talent and technology while achieving profitable, sustainable growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
