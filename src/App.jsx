import Hero from "./components/home/hero";
import Header from "./components/common/Header";
import About from "./components/home/intro";
import { ModernFooter } from "./components/common/footer";
import AdmissionJourney from "./components/home/step";
import TestimonialCarousel from "./components/home/Testimonials";
import AboutSection from "./components/home/about";
import HomePage from "./pages/HomePage";
import { Routes, Route } from "react-router-dom";
import AgriCounsellingPackages from "./pages/Plans";

import CallbackForm from "./pages/Callback";
import EnrollNowForm from "./pages/enroll";

function AppContent() {
  return (
    <div className="min-h-screen bg-background relative">
      {/* <ParticlesBackground /> */}
      <Header />
      <main className="relative z-10">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/plans" element={<AgriCounsellingPackages />} />
          <Route path="/callback" element={<CallbackForm />} />
          <Route path="/enroll" element={<EnrollNowForm />} />
        </Routes>
        <ModernFooter />
      </main>
    </div>
  );
}

function App() {
  return <AppContent />;
}

export default App;
