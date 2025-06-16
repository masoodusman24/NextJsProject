import CallToAction from "@/Sections/CallToAction";
import Faqs from "@/Sections/Faqs";
import Features from "@/Sections/Features";
import Footer from "@/Sections/Footer";
import Hero from "@/Sections/Hero";
import Integrations from "@/Sections/Integrations";
import Introduction from "@/Sections/Introduction";
import LogoTicker from "@/Sections/LogoTicker";
import Navbar from "@/Sections/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <LogoTicker />
      <Introduction />
      <Features />
      <Integrations />
      <Faqs />
      <CallToAction />
      <Footer />
    </>
  );
}
