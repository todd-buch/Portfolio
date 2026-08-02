import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import Sidebar from "./Sidebar";
import Hero from "./Hero";
import Main_Projects from "./Main_Projects";
import Footer from "./Footer";
import Resume from "./pages/Resume/Resume";
import Photography from "./pages/Photography/Photography";

/** React Router preserves scroll position across navigations; reset on route change. */
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Re-sync solid-nav state after a route change (scroll was reset).
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  return (
    <>
      <ScrollToTop />
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
