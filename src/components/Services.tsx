
import { Server, Target, Users } from "lucide-react";

const ServiceCard = ({ 
  icon: Icon,
  title, 
  description 
}: { 
  icon: React.ElementType;
  title: string;
  description: string;
}) => {
  return (
    <div className="bg-white p-8 rounded-md shadow-md hover:shadow-lg transition-shadow">
      <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
        <Icon className="h-8 w-8 text-ict-blue" />
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-4">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Services = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ServiceCard
            icon={Server}
            title="True Technology Strategy"
            description="We look at technology through the eyes of expert engineers and take that to the next level – how new acquisitions work from an executive strategy perspective."
          />
          
          <ServiceCard
            icon={Target}
            title="Your Business Goals"
            description="Technology is only a differentiator if it helps you achieve your goals – is sensitive to both tech and operators, we're focused on how tech can actually support you."
          />
          
          <ServiceCard
            icon={Users}
            title="Operators, Not Consultants"
            description="There are no checklists. There are no simple answers. You get unbiased analysis from people who have been in your shoes and know how to make businesses work."
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
