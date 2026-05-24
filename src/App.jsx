import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import Chatbot from "@/components/Chatbot";
import CookieBanner from "@/components/CookieBanner";
import Home from "@/pages/Home";
import Services from "@/pages/Services";
import Portfolio from "@/pages/Portfolio";
import Contact from "@/pages/Contact";
import Pricing from "@/pages/Pricing";
import Privacy from "@/pages/Privacy";
import Cookies from "@/pages/Cookies";
import Terms from "@/pages/Terms";
import { useLenis } from "@/hooks/useLenis";

export default function App() {
  useLenis();

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <main id="main" className="relative">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
      <Chatbot />
      <CookieBanner />
    </BrowserRouter>
  );
}
