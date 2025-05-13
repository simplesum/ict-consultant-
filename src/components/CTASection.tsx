
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="bg-gradient-to-r from-ict-darkblue to-ict-blue py-16 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Technology Strategy?</h2>
        <p className="text-xl max-w-2xl mx-auto mb-10 opacity-90">
          Let our experts help you navigate complex technology decisions and build a roadmap for success.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Button className="bg-white text-ict-darkblue hover:bg-gray-100">
            Schedule a Consultation
          </Button>
          <Button variant="outline" className="border-white text-white hover:bg-white/10">
            View Our Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
