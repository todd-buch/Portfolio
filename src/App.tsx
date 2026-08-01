import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Sidebar from "./Sidebar";
import Hero from "./Hero";
import Main_Projects from "./Main_Projects";
import Footer from "./Footer";
import Resume from "./pages/Resume/Resume";
import Photography from "./pages/Photography/Photography";

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
      <Sidebar isScrolled={isScrolled} />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Main_Projects />
            </>
          }
        />
        <Route path="/resume" element={<Resume />} />
        <Route path="/photography" element={<Photography />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
