import { TopBar } from "@/components/TopBar";
import { Hero } from "@/components/Hero";
import { Benefits } from "@/components/Benefits";
import { PrivateEquity } from "@/components/PrivateEquity";
import { Process } from "@/components/Process";
import { Pricing } from "@/components/Pricing";
import { ApplicationForm } from "@/components/ApplicationForm";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <>
      <TopBar />
      <main className="min-h-screen bg-background pt-16">
        <Hero />
        <div id="benefits">
          <Benefits />
          <PrivateEquity />
        </div>
        <Process />
        <Pricing />
        <div id="apply">
          <ApplicationForm />
        </div>
        <FAQ />
      </main>
      <Footer />
    </>
  );
};

export default Index;