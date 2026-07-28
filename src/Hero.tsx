import './Hero.css'
import HeroBack from '/src/assets/HeroBack.png';
import MiddleImg from '/src/assets/Todd-Middle.png';

function Hero() {
  return (
    <>
      <div style={{ backgroundImage: `url(${HeroBack})` }} className="hero-container">
        <div className="hero-panel-l">
            
        </div>
        <div className="hero-panel-r">
            
        </div>
      </div>
      <div className="hero-middle">
        <img src={MiddleImg} className="hero-middle-img" />
      </div>
    </>
  )
}

export default Hero
