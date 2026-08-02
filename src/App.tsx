import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import Sidebar from "./Sidebar";
import Hero from "./Hero";
import Main_Projects from "./Main_Projects";
import Footer from "./Footer";
import Resume from "./pages/Resume/Resume";
import Photography from "./pages/Photography/Photography";
import PhotoGallery from "./pages/Photography/PhotoGallery";
import { clearFeaturedReturnId } from "./pages/Photography/photoNav";

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
  const isPhotographyRoute = location.pathname.startsWith("/photography");

  // Drop restore markers when leaving photography entirely (e.g. Home / Resume)
  useEffect(() => {
    if (!isPhotographyRoute) clearFeaturedReturnId();
  }, [isPhotographyRoute]);

  useEffect(() => {
    // Photography uses an internal snap scroller — window scroll never moves.
    // Keep the nav solid so it stays readable over images, and lock body scroll
    // so the browser chrome doesn't show a second scrollbar.
    if (isPhotographyRoute) {
      setIsScrolled(true);
      const previousOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = previousOverflow;
      };
    }

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
  }, [location.pathname, isPhotographyRoute]);

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
        <Route path="/photography/:gallerySlug" element={<PhotoGallery />} />
      </Routes>
      {/* Photography embeds Footer after the last snap slide */}
      {!isPhotographyRoute && <Footer />}
    </>
  );
}

export default App;
