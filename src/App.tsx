import { useState, useEffect } from "react";
import "./App.css";
import Sidebar from "./Sidebar";
import Hero from "./Hero";

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Hero />
      <Sidebar isScrolled={isScrolled}/>
      <main className="main-content"></main>
    </>
  );
}

export default App;
