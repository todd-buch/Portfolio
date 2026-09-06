import "./Hero.css";
import HeroBack from "/src/assets/HeroBackBlue.webp";

function Hero() {
  return (
    <div className="hero-container">
      <div
        className="hero-bg"
        style={{ backgroundImage: `url(${HeroBack})` }}
        aria-hidden="true"
      />
      <div className="hero-center">
        <h1 className="hero-title">Todd Buch</h1>
        <p className="hero-caption">
          I write software, and I take pictures of cars.
        </p>
      </div>
    </div>
  );
}

export default Hero;
