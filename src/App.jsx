import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import AOS from "aos";
import "aos/dist/aos.css";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";

function App() {
  const [count, setCount] = useState(0);
  AOS.init();

  return (
    <div className="">
      <Header />
      <Hero />
      <AboutUs />
    </div>
  );
}

export default App;
