import Navbar from "@/components/Navbar";
import Hero from "@/components/hero/Hero";
import Trusted from "@/components/Trusted";
import Practice from "@/components/practice/Practice";
import WhyChoose from "@/components/whychoose/WhyChoose";
import CTA from "@/components/cta/CTA";
import Testimonials from "@/components/testimonials/Testimonials";
import Footer from "@/components/footer/Footer";
import Reveal from "@/components/ui/Reveal";

export default function Home() {
  return (
    <>
      <Navbar />

      <div className="pt-24">
        <Hero />
      </div>

      <Reveal>
        <Trusted />
      </Reveal>

      <Reveal delay={0.1}>
        <Practice />
      </Reveal>

      <Reveal delay={0.2}>
        <WhyChoose />
      </Reveal>

      <Reveal delay={0.3}>
        <CTA />
      </Reveal>

      <Reveal delay={0.4}>
        <Testimonials />
      </Reveal>

      <Reveal delay={0.5}>
        <Footer />
      </Reveal>
    </>
  );
}