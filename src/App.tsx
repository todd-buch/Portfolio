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
import NotFound from "./pages/NotFound";
import { clearFeaturedReturnId } from "./pages/Photography/photoNav";
import { getGallery } from "./pages/Photography/photographyData";

/** React Router preserves scroll position across navigations; reset on route change. */
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}

/** Keep the browser tab title in sync with the active route. */
function RouteDocumentTitle() {
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === "/" || pathname === "") {
      document.title = "Todd Buch";
      return;
    }
    if (pathname.startsWith("/resume")) {
      document.title = "Resume — Todd Buch";
      return;
    }
    if (pathname.startsWith("/photography/")) {
      const slug = pathname.split("/")[2];
      const gallery = getGallery(slug);
      document.title = gallery
        ? `${gallery.title} — Photography | Todd Buch`
        : "Gallery not found — Todd Buch";
      return;
    }
    if (pathname.startsWith("/photography")) {
      document.title = "Photography — Todd Buch";
      return;
    }
    document.title = "Page not found — Todd Buch";
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
    // Lock body scroll so the browser chrome doesn't show a second scrollbar.
    if (isPhotographyRoute) {
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

  const showSolidNav = isScrolled || isPhotographyRoute;

  return (
    <>
      <ScrollToTop />
      <RouteDocumentTitle />
      <Sidebar isScrolled={showSolidNav} />
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
        <Route path="*" element={<NotFound />} />
      </Routes>
      {/* Photography embeds Footer after the last snap slide */}
      {!isPhotographyRoute && <Footer />}
    </>
  );
}

export default App;
