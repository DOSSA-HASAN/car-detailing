import { BrowserRouter, Routes } from "react-router-dom";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Services from "./components/Services";
import Process from "./components/Process";
import WhyUs from "./components/WhyUs";
import ContactForm from "./components/ContactForm";
import FAQs from "./components/FAQs";

function App() {
  return (
    <BrowserRouter>
      <Hero />
      <Marquee />
      <Services />
      <Process />
      <Marquee />
      <WhyUs />
      <Marquee />
      <ContactForm />
      <Marquee />
      <FAQs />
    </BrowserRouter>
  );
}

export default App;
