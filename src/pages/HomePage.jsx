import { ModernFooter } from "../components/common/footer";
import Header from "../components/common/Header";
import AboutSection from "../components/home/about";
import Hero from "../components/home/hero";
import About from "../components/home/intro";
import AdmissionJourney from "../components/home/step";
import TestimonialCarousel from "../components/home/Testimonials";

function HomePage() {
  return (
    <>
      <div className="container">
        <Hero></Hero>
        <AboutSection></AboutSection>
        <About></About>
        <AdmissionJourney></AdmissionJourney>
        <TestimonialCarousel></TestimonialCarousel>
      </div>
    </>
  );
}

export default HomePage;
