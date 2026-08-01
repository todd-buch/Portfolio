import { type MouseEvent, useEffect, useRef, useState } from "react";
import {
  animate,
  motion,
  useScroll,
  useTransform,
  type AnimationPlaybackControls,
} from "framer-motion";
import "./Hero.css";
import HeroBack from "/src/assets/HeroBack.png";
import MiddleImg from "/src/assets/Todd-Middle.png";

import { ArrowDown, CircleSmall } from "lucide-react";

function Hero() {
  const [isMobile, setIsMobile] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const scrollAnim = useRef<AnimationPlaybackControls | null>(null);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 900px)");
    const update = () => setIsMobile(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  // Progress 0 → 1 as the hero scrolls from filling the viewport to fully off-screen
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const yLeft = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const yRight = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const yMiddle = useTransform(scrollYProgress, [0, 1], [0, 120]);

  // Hard-zero past the fade range (function form avoids near-zero interpolation leftovers)
  const opacityMiddle = useTransform(scrollYProgress, (progress) => {
    const fadeEnd = 0.55;
    if (progress >= fadeEnd) return 0;
    return 1 - progress / fadeEnd;
  });
  const visibilityMiddle = useTransform(opacityMiddle, (opacity) =>
    opacity === 0 ? "hidden" : "visible",
  );

  const scrollToBio = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const bio = document.getElementById("bio");
    if (!bio) return;

    const rect = bio.getBoundingClientRect();
    const targetY =
      window.scrollY + rect.top - (window.innerHeight - rect.height) / 2;

    scrollAnim.current?.stop();
    scrollAnim.current = animate(window.scrollY, Math.max(0, targetY), {
      duration: 1.35,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (value) => {
        window.scrollTo({ top: value, left: 0, behavior: "instant" });
      },
      onComplete: () => {
        window.scrollTo({
          top: Math.max(0, targetY),
          left: 0,
          behavior: "instant",
        });
      },
    });
  };

  return (
    <div
      ref={heroRef}
      style={{ backgroundImage: `url(${HeroBack})` }}
      className="hero-container"
    >
      <div className="hero-panel-l">
        <motion.div
          style={isMobile ? undefined : { y: yLeft }}
          className="hero-left-text"
        >
          <h1>INNOVATE</h1>
          <h2>
            Through smart software design, powerful media, and strong
            execution.
          </h2>
          <a href="#bio" className="hero-left-button" onClick={scrollToBio}>
            About Me
            <ArrowDown className="btn-icon" size={28} />
          </a>
        </motion.div>
      </div>

      <motion.div
        style={
          isMobile
            ? undefined
            : {
                y: yMiddle,
                opacity: opacityMiddle,
                visibility: visibilityMiddle,
              }
        }
        className="hero-middle"
      >
        <img src={MiddleImg} className="hero-middle-img" alt="Todd Buch" />
      </motion.div>

      <motion.div
        style={isMobile ? undefined : { y: yRight }}
        className="hero-panel-r"
      >
        <div className="hero-right-text">
          <h3>
            <CircleSmall className="hero-right-bullet" />
            Software Engineering
          </h3>
          <h3>
            <CircleSmall className="hero-right-bullet" />
            Visual Media
          </h3>
          <h3>
            <CircleSmall className="hero-right-bullet" />
            Leadership & Strategy
          </h3>
          <h3>
            <CircleSmall className="hero-right-bullet" />
            Design & UX
          </h3>
        </div>
      </motion.div>
    </div>
  );
}

export default Hero;
