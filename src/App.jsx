import { BrowserRouter, Routes } from "react-router-dom";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Services from "./components/Services";

function App() {
  return (
    <BrowserRouter>
      <Hero />
      <Marquee />
      <Services />
    </BrowserRouter>
  );
}

export default App;
