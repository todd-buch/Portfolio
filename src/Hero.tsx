import './Hero.css'
import HeroBack from '/src/assets/HeroBack.png';
import MiddleImg from '/src/assets/Todd-Middle.png';

import { ArrowUpRight, CircleSmall } from 'lucide-react';

function Hero() {
  return (
    <>
      <div style={{ backgroundImage: `url(${HeroBack})` }} className="hero-container">
        <div className="hero-panel-l">
            <div className="hero-left-text">
            <h1>INNOVATE</h1>
            <h2>Through smart software design, powerful media, and strong execution.</h2>
            <div className="hero-left-button">
              <a>View Projects</a>
              <ArrowUpRight className="btn-icon" size={28}/>
            </div>
            </div>
        </div>
        <div className="hero-panel-r">
        <div className="hero-right-text">
            <h1><CircleSmall className="hero-right-bullet"/>Software Engineering</h1>
            <h1><CircleSmall className="hero-right-bullet"/>Visual Media</h1>
            <h1><CircleSmall className="hero-right-bullet"/>Leadership & Strategy</h1>
            <h1><CircleSmall className="hero-right-bullet"/>Design & UX</h1>
            </div>
        </div>
      </div>
      <div className="hero-middle">
        <img src={MiddleImg} className="hero-middle-img" />
      </div>
    </>
  )
}

export default Hero
