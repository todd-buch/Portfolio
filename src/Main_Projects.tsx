import "./Main_Projects.css";
import { Dot } from "lucide-react";

export default function Main_Projects() {
  return (
    <>
      <div className="projects">
        <div className="bio">
          <h1>Todd Buch</h1>
          <div className="projects-traits">
            <p>Computer Science Student</p>
            <Dot className="projects-traits-dot" />
            <p>Software Development & Design</p>
            <Dot className="projects-traits-dot" />
            <p>Studio Manager</p>
          </div>
          <p>
            As a software development student with a foundation in photography
            and design, I build digital worlds that balance technical logic with
            visual impact. I focus on creating high-quality, user-centric
            solutions through a blend of creative intuition and engineering
            precision.
          </p>
        </div>
        <div className="main-regular-text-block">
          <h2 className="main-regular-text-block-title">About Me</h2>
          <p className="main-regular-text-block-subtitle"></p>
          <p className="main-regular-text-block-body">
            My interest in how we experience the visual world started through
            photography and design. Moving into Computer Science allowed me to
            take that fascination a step further: instead of just capturing
            digital environments, I can now build them from the ground up.
          </p>
          <p className="main-regular-text-block-body">
            I enjoy working at the intersection of UI/UX and full-stack
            development. I aim to combine intuitive design with robust
            engineering, exploring how AI and cloud technologies can create more
            intelligent, seamless digital solutions.
          </p>
          <p className="main-regular-text-block-body">
            When I’m not coding, I am usually capturing the world through car
            photography or videography. I also enjoy exploring finance and
            markets, hiking, and am currently working on improving my golf game.
          </p>
        </div>
        
      </div>
    </>
  );
}
