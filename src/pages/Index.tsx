
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import ClientsSection from "@/components/ClientsSection";
import ExpertProfile from "@/components/ExpertProfiles";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-16">
        <Hero />
        <Services />
        <ExpertProfile />
        <ClientsSection />
        <CTASection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
