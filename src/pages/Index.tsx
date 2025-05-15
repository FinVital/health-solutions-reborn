
import Hero from "@/components/home/Hero";
import Programs from "@/components/home/Programs";
import Mission from "@/components/home/Mission";
import Impact from "@/components/home/Impact";
import ServiceFinder from "@/components/home/ServiceFinder";
import NewsSection from "@/components/home/NewsSection";
import CTA from "@/components/home/CTA";
import { useEffect } from "react";

const Index = () => {
  // Scroll to top when the page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Hero />
      <Programs />
      <Mission />
      <Impact />
      <ServiceFinder />
      <NewsSection />
      <CTA />
    </>
  );
};

export default Index;
