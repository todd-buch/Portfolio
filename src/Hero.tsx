import { motion, useScroll, useTransform } from "framer-motion";
import "./Hero.css";
import HeroBack from "/src/assets/HeroBack.png";
import MiddleImg from "/src/assets/Todd-Middle.png";

import { ArrowUpRight, CircleSmall } from "lucide-react";

function Hero() {
  const { scrollY } = useScroll();
  const yLeft = useTransform(scrollY, [0, 600], [0, -200]);
  const yRight = useTransform(scrollY, [0, 600], [0, -60]);
  const yMiddle = useTransform(scrollY, [0, 600], [0, 60]);
  const opacityMiddle = useTransform(scrollY, [0, 600], [1, 0]);

  return (
    <>
      <div
        style={{ backgroundImage: `url(${HeroBack})` }}
        className="hero-container"
      >
        <div className="hero-panel-l">
          <motion.div style={{ y: yLeft }} className="hero-left-text">
            <h1>INNOVATE</h1>
            <h2>
              Through smart software design, powerful media, and strong
              execution.
            </h2>
            <div className="hero-left-button">
              <a>View Projects</a>
              <ArrowUpRight className="btn-icon" size={28} />
            </div>
          </motion.div>
        </div>
        <motion.div style={{ y: yRight }} className="hero-panel-r">
          <div className="hero-right-text">
            <h1>
              <CircleSmall className="hero-right-bullet" />
              Software Engineering
            </h1>
            <h1>
              <CircleSmall className="hero-right-bullet" />
              Visual Media
            </h1>
            <h1>
              <CircleSmall className="hero-right-bullet" />
              Leadership & Strategy
            </h1>
            <h1>
              <CircleSmall className="hero-right-bullet" />
              Design & UX
            </h1>
          </div>
        </motion.div>
      </div>
      <motion.div style={{ y: yMiddle, opacity: opacityMiddle }} className="hero-middle">
        <img src={MiddleImg} className="hero-middle-img" />
      </motion.div>
    </>
  );
}

export default Hero;
