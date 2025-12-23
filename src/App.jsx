import { BrowserRouter, Routes } from "react-router-dom";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Services from "./components/Services";
import Process from "./components/Process";

function App() {
  return (
    <BrowserRouter>
      <Hero />
      <Marquee />
      <Services />
      <Process />
      <Marquee />
    </BrowserRouter>
  );
}

export default App;
