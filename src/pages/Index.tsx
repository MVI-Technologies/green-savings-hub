import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Advantages from "@/components/Advantages";
import AppSection from "@/components/AppSection";
import SocialProof from "@/components/SocialProof";
import FAQ from "@/components/FAQ";
import LeadForm from "@/components/LeadForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <Advantages />
        <AppSection />
        <SocialProof />
        <FAQ />
        <LeadForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
