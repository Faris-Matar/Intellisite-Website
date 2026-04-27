import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import Chatbot from "@/components/Chatbot";
import Home from "@/pages/Home";
import Services from "@/pages/Services";
import Portfolio from "@/pages/Portfolio";
import Contact from "@/pages/Contact";
import { useLenis } from "@/hooks/useLenis";

export default function App() {
  useLenis();

  return (
    <BrowserRouter>
      <Navbar />
      <main id="main" className="relative">
        <PageTransition>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </PageTransition>
      </main>
      <Footer />
      <Chatbot />
    </BrowserRouter>
  );
}
