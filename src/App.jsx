import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import AOS from "aos";
import "aos/dist/aos.css";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Copyright from "./components/Copyright";

function App() {
  const [count, setCount] = useState(0);
  AOS.init();

  return (
    <div className="text-2xl hover:scroll-auto">
      <Header />
      <Hero />
      <AboutUs />
      <Services />
      <div className="flex justify-center">
        <Testimonials />
      </div>
      <Contact />
      <Footer />
      <Copyright />
    </div>
  );
}

export default App;
