
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const ExpertProfile = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80" 
              alt="Expert profile" 
              className="rounded-md shadow-lg"
            />
          </div>
          
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Meet Our Technology Experts</h2>
            <p className="text-gray-600 mb-6">
              Our team of ICT consultants brings decades of combined experience across various industries.
              From digital transformation to cloud infrastructure and cybersecurity, our experts deliver
              tailored solutions that drive business success.
            </p>
            
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <div className="w-2 h-2 bg-ict-blue rounded-full mr-3"></div>
                <span className="font-medium">Strategic Technology Planning</span>
              </div>
              <div className="flex items-center mb-4">
                <div className="w-2 h-2 bg-ict-blue rounded-full mr-3"></div>
                <span className="font-medium">Digital Transformation</span>
              </div>
              <div className="flex items-center mb-4">
                <div className="w-2 h-2 bg-ict-blue rounded-full mr-3"></div>
                <span className="font-medium">Enterprise Architecture</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-ict-blue rounded-full mr-3"></div>
                <span className="font-medium">Technology Implementation</span>
              </div>
            </div>
            
            <Button className="bg-ict-blue hover:bg-blue-600 text-white group">
              <span>MEET OUR TEAM</span>
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertProfile;
