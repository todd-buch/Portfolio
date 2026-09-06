import "./Main_Projects.css";
import { Bot, Camera, ChartColumn, Cpu, Mail, Sparkles } from "lucide-react";
import Info_Button from "./Reuseable-Components/Info_Button";
import Action_Button from "./Reuseable-Components/Action_Button";
import Magnetic_Timeline from "./Reuseable-Components/Magnetic_Timeline";
import Tech_Dropdown from "./Reuseable-Components/Tech_Dropdown";
import Tech_Pill from "./Reuseable-Components/Tech_Pill";
import Project_Image_Gallery, {
  Gallery_Image,
} from "./Reuseable-Components/Project_Image_Gallery";
import Small_Card from "./Reuseable-Components/Small_Card";
import Home_Highlights from "./Reuseable-Components/Home_Highlights";
import Current from "./Reuseable-Components/Current";

import fireprevention1 from "./assets/projects/fire-prevention/fireprevention1.png"
import fireprevention2 from "./assets/projects/fire-prevention/fireprevention2.png"
import Blackjack1 from "./assets/projects/blackjack/Blackjack1.png";
import Blackjack2 from "./assets/projects/blackjack/Blackjack2.png";

import {
  SiPython,
  SiDavinciresolve,
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiFirebase,
  SiSpringboot,
  SiOpenjdk,
  SiFastapi,
  SiDocker,
  SiApachemaven,
  SiPydantic,
  SiRaspberrypi,
  SiArduino,
  SiFlask,
  SiGunicorn,
  SiYolo,
  SiOllama,
  SiApple,
  SiUltralytics,
  SiLatex,
  SiGit,
  SiGithub,
  SiVite,
  SiReactrouter,
  SiFramer,
  SiCss,
  SiHtml5,
} from "@icons-pack/react-simple-icons";
import { DiPhotoshop } from "react-icons/di";
import { SiGooglegemini } from "react-icons/si";
import { FaGithub } from "react-icons/fa6";

export default function Main_Projects() {
  return (
    <>
      <div className="projects">
        <Magnetic_Timeline />
        <div id="bio" className="bio">
          <h1>Todd Buch</h1>
          <p className="projects-traits">
            <span>
              Computer Science Student
              <span className="projects-traits-sep" aria-hidden="true">
                {" "}
                ·
              </span>
            </span>
            <span>
              Software Development & Design
              <span className="projects-traits-sep" aria-hidden="true">
                {" "}
                ·
              </span>
            </span>
            <span>Studio Manager</span>
          </p>
          <p>
            I'm a software development student (senior @ UConn) with experience in photography and design. I build software and enjoy photography & videography as well.
          </p>
        </div>
        <Home_Highlights />
        <div id="projects" className="main-regular-text-block">
          <h2 className="main-regular-text-block-title">Projects</h2>
          <div className="projects-section-block">
            <Small_Card
              id="project-quant-engine"
              title="Quant-Engine"
              date={
                <>
                  July 2026 — <Current />
                </>
              }
              summary="Full-stack portfolio analytics and backtesting; an open-source alternative to premium finance tools. Work in progress."
              preview={
                <div className="tech-pill-group">
                  <Tech_Pill
                    name="Next.js"
                    icon={<SiNextdotjs color="default" />}
                  />
                  <Tech_Pill
                    name="Spring Boot"
                    icon={<SiSpringboot color="default" />}
                  />
                  <Tech_Pill
                    name="FastAPI"
                    icon={<SiFastapi color="default" />}
                  />
                  <Tech_Pill
                    name="Docker"
                    icon={<SiDocker color="default" />}
                  />
                </div>
              }
            >
              <p>
                Quant Engine is a full-stack stock portfolio analytics and backtesting platform, being built by a team of 5. It is an open-source alternative to premium financial tools. It helps investors analyze holdings, run historical simulations, and build rule-based trading strategies through a web interface.
              </p>
              <Tech_Dropdown title="View the stack behind it">
                <p>
                  The app covers three core areas: AI-powered portfolio analysis from CSV or manual inputs (with automated summary reports), a backtesting engine that shows risk/return metrics like Sharpe/Sortino and max drawdown, and an interactive strategy builder for testing rules such as momentum or buy-the-dip against past market data.
                </p>
                <p>
                  <b>Frontend:</b>
                </p>
                <div className="tech-pill-group">
                  <Tech_Pill
                    name="Next.js"
                    icon={<SiNextdotjs color="default" />}
                  />
                  <Tech_Pill name="React" icon={<SiReact color="default" />} />
                  <Tech_Pill
                    name="TypeScript"
                    icon={<SiTypescript color="default" />}
                  />
                  <Tech_Pill
                    name="Tailwind CSS"
                    icon={<SiTailwindcss color="default" />}
                  />
                  <Tech_Pill
                    name="Firebase Auth"
                    icon={<SiFirebase color="default" />}
                  />
                </div>
                <p>
                  <b>Application Backend:</b>
                </p>
                <div className="tech-pill-group">
                  <Tech_Pill
                    name="Spring Boot"
                    icon={<SiSpringboot color="default" />}
                  />
                  <Tech_Pill
                    name="Java 21"
                    icon={<SiOpenjdk color="default" />}
                  />
                  <Tech_Pill
                    name="Maven"
                    icon={<SiApachemaven color="default" />}
                  />
                </div>
                <p>
                  <b>Backtesting & Analytics:</b>
                </p>
                <div className="tech-pill-group">
                  <Tech_Pill
                    name="FastAPI"
                    icon={<SiFastapi color="default" />}
                  />
                  <Tech_Pill
                    name="Python"
                    icon={<SiPython color="default" />}
                  />
                  <Tech_Pill
                    name="Pydantic"
                    icon={<SiPydantic color="default" />}
                  />
                </div>
                <p>
                  <b>Database:</b>
                </p>
                <div className="tech-pill-group">
                  <Tech_Pill
                    name="Firebase"
                    icon={<SiFirebase color="default" />}
                  />
                </div>
                <p>
                  <b>Infrastructure:</b>
                </p>
                <div className="tech-pill-group">
                  <Tech_Pill
                    name="Docker"
                    icon={<SiDocker color="default" />}
                  />
                  <Tech_Pill name="Docker Compose" />
                </div>
              </Tech_Dropdown>
              {/* Ready for launch — uncomment when public (re-import ChartCandlestick from lucide-react + FaGithub from react-icons/fa6)
              <div className="small-card-actions">
                <Action_Button
                  text="View app"
                  icon={<ChartCandlestick />}
                />
                <Action_Button
                  text="View source code"
                  icon={<FaGithub />}
                  link="https://github.com/Jawnpog/QuantEngine"
                  target="_blank"
                  rel="noreferrer"
                  variant="outline"
                />
              </div>
              */}
              <p>Work in progress</p>
            </Small_Card>
            <Small_Card
              id="project-fire-prevention"
              title="Fire Prevention at the Edge"
              date="August 2025 — May 2026"
              summary="Edge fire hazard detection device that combines vision AI, environmental sensors, and a local LLM for live warehouse hazard recommendations/visualizations."
              preview={
                <div className="tech-pill-group">
                  <Tech_Pill
                    name="YOLOv8 Nano"
                    icon={<SiYolo color="default" />}
                  />
                  <Tech_Pill
                    name="Raspberry Pi 5"
                    icon={<SiRaspberrypi color="default" />}
                  />
                  <Tech_Pill name="Flask" icon={<SiFlask color="default" />} />
                  <Tech_Pill
                    name="Llama 3.2:1B"
                    icon={<SiOllama color="default" />}
                  />
                </div>
              }
            >
              <p>
                Fire Prevention at the Edge is an 'at the edge' computing safety appliance created by a team of 4 UConn students for their final capstone project. I served as project manager while our team architected, designed, and developed the full-stack system end to end. It is designed to detect potential hazards before they ignite. We combined real-time visual feeds with local environmental sensors (CO₂, temperature, humidity, and thermal mapping), and the system uses a deterministic classifier to evaluate risk severity. Finally, an entirely local LLM analyzes the data to provide safety recommendations to warehouse personnel as events occur.
              </p>
              <Tech_Dropdown title="View images">
                <Project_Image_Gallery>
                <Gallery_Image
                    src={fireprevention1}
                    alt="Fire Prevention at the Edge hazard detection"
                    caption="Our vision AI model successfully detecting a sparking outlet."
                  />
                  <Gallery_Image
                    src={fireprevention2}
                    alt="Fire Prevention at the Edge UI"
                    caption="The UI running on the Raspberry Pi, showing the detected hazards and a recommendation."
                  />
                </Project_Image_Gallery>
              </Tech_Dropdown>
              <Tech_Dropdown title="View the stack behind it">
                <p>
                  Cameras run vision models trained to flag fire hazards, while environmental sensors display other risky conditions. Those signals are combined and passed to an on-device text model that turns raw detections into clear, specific alerts for warehouse staff. It all runs 'at the edge' (on-device).
                </p>
                <p>
                  <b>What the vision model detects:</b> battery condition (okay,
                  swollen, damaged, bad placement), fire exits (clear vs.
                  blocked), and electrical hazards (normal/damaged wiring,
                  normal/damaged outlets, sparking outlets).
                </p>
                <p>
                  Building it was an end-to-end pipeline: we first generated synthetic images for the dataset (Grok, Gemini, and the OpenAI API), annotated them in CVAT, then trained and fine-tuned a YOLOv8 Nano model and validated its detections. In parallel we built a full web interface with live camera streaming and bounding boxes drawn in real time, then assembled a Raspberry Pi 5 with the Hailo AI HAT+, cameras, and environmental sensors so the model, backend, and local LLM could run together on the edge appliance.
                </p>
                <p>
                  <b>Hardware — Compute:</b>
                </p>
                <div className="tech-pill-group">
                  <Tech_Pill
                    name="Raspberry Pi 5"
                    icon={<SiRaspberrypi color="default" />}
                  />
                  <Tech_Pill name="Hailo AI HAT+" icon={<Cpu />} />
                </div>
                <p>
                  <b>Hardware — Microcontroller:</b>
                </p>
                <div className="tech-pill-group">
                  <Tech_Pill
                    name="Arduino Portenta H7"
                    icon={<SiArduino color="default" />}
                  />
                  <Tech_Pill name="USB Serial" />
                </div>
                <p>
                  <b>Hardware — Sensors:</b>
                </p>
                <div className="tech-pill-group">
                  <Tech_Pill name="Pi Camera" icon={<Camera />} />
                  <Tech_Pill name="IR Thermal Camera" />
                  <Tech_Pill name="CO₂ Sensor" />
                  <Tech_Pill name="Temp / Humidity Sensor" />
                </div>
                <p>
                  <b>Vision & Generative AI:</b>
                </p>
                <div className="tech-pill-group">
                  <Tech_Pill
                    name="YOLOv8 Nano"
                    icon={<SiYolo color="default" />}
                  />
                  <Tech_Pill
                    name="Ultralytics"
                    icon={<SiUltralytics color="default" />}
                  />
                  <Tech_Pill
                    name="Llama 3.2:1B"
                    icon={<SiOllama color="default" />}
                  />
                </div>
                <p>
                  <b>Backend:</b>
                </p>
                <div className="tech-pill-group">
                  <Tech_Pill name="Flask" icon={<SiFlask color="default" />} />
                  <Tech_Pill
                    name="Gunicorn"
                    icon={<SiGunicorn color="default" />}
                  />
                  <Tech_Pill
                    name="Python"
                    icon={<SiPython color="default" />}
                  />
                </div>
                <p>
                  <b>Annotation, Synthetic Data, & Training:</b>
                </p>
                <div className="tech-pill-group">
                  <Tech_Pill name="CVAT.ai" />
                  <Tech_Pill name="Grok" icon={<Sparkles />} />
                  <Tech_Pill
                    name="Google Gemini"
                    icon={<SiGooglegemini color="default" />}
                  />
                  <Tech_Pill name="OpenAI API" icon={<Bot />} />
                  <Tech_Pill
                    name="Apple M4 Pro Chip"
                    icon={<SiApple color="default" />}
                  />
                </div>
              </Tech_Dropdown>
            </Small_Card>
            <Small_Card
              id="project-blackjack"
              title="Blackjack Agent"
              date="March 2026 — April 2026"
              summary="Learning agent for Blackjack, and an analysis of idea game-play over many games."
              preview={
                <div className="tech-pill-group">
                  <Tech_Pill
                    name="Python"
                    icon={<SiPython color="default" />}
                  />
                  <Tech_Pill name="Tabular Q-Learning" />
                  <Tech_Pill name="Hi-Lo Card Counting" />
                  <Tech_Pill name="Matplotlib" icon={<ChartColumn />} />
                </div>
              }
            >
              <p>
                Blackjack Agent is a simulation and analysis command line app that models, evaluates, and optimizes player decisions in Blackjack. We simulated whether a skilled player can gain a mathematical advantage over the house (the short answer is, sadly, no). It compares three strategies: a random baseline, a rule-based reflex agent that follows standard strategy charts, and a model-free reinforcement learning agent that optimizes both play and bet sizing under similar conditions to a casino.
              </p>
              <Tech_Dropdown title="View images">
                <Project_Image_Gallery>
                  <Gallery_Image
                    src={Blackjack1}
                    alt="Blackjack agent chart"
                    caption="Agent performance with Random Agent – The graph shows the total unit return of each agent over hands played. In this graph, we can see both the lookup agent and the learning agent we trained far outperform the random agent. We can also see that even with an ideal strategy, over many games, the house always wins."
                  />
                  <Gallery_Image
                    src={Blackjack2}
                    alt="Blackjack agent chart"
                    caption="Agent performance without Random Agent - The graph shows the total unit return of each agent over hands played. In this graph, we can see that over time, the learning agent outperforms the lookup agent."
                  />
                </Project_Image_Gallery>
              </Tech_Dropdown>
              <Tech_Dropdown title="View the stack behind it">
                <p>
                  The system is built around a custom terminal Blackjack engine, a training environment, and a comparative evaluation suite. The engine models multi-deck shoes (auto-reshuffling when fewer than 25% of cards remain) and a dealer that hits soft 16 and stands on all 17s. A reflex agent hard-codes the 'optimal' tables for hard totals, soft totals, and pair splits. The learning agent uses tabular Q-learning with state{" "}
                  <i>
                    (player total, dealer upcard, usable ace, binned true count)
                  </i>
                  , Hi-Lo counting for the true count, separate Q-tables for
                  play actions (hit / stand / double) and bet sizes (1–50
                  units), and ε-greedy exploration.
                </p>
                <p>
                  Training ran for 5,000,000 episodes with Q-tables persisted via pickle. Across a 100,000-hand benchmark, the Q-learning agent reduced average loss to 0.045 units/hand. It beat basic strategy (0.055) and random play (2.0), while still showing that card counting can shrink losses without fully overcoming the house edge. A recursive probability module also computes exact win probabilities and expected value for stand vs. hit from the remaining shoe distribution.
                </p>
                <p>
                  <b>Language:</b>
                </p>
                <div className="tech-pill-group">
                  <Tech_Pill
                    name="Python"
                    icon={<SiPython color="default" />}
                  />
                </div>
                <p>
                  <b>Agents & Methods:</b>
                </p>
                <div className="tech-pill-group">
                  <Tech_Pill name="Tabular Q-Learning" />
                  <Tech_Pill name="ε-Greedy Exploration" />
                  <Tech_Pill name="Hi-Lo Card Counting" />
                  <Tech_Pill name="Basic Strategy Charts" />
                  <Tech_Pill name="Expected Value (EV)" />
                </div>
                <p>
                  <b>Visualization & Benchmarking:</b>
                </p>
                <div className="tech-pill-group">
                  <Tech_Pill name="Matplotlib" icon={<ChartColumn />} />
                  <Tech_Pill name="5M Training Episodes" />
                  <Tech_Pill name="100k Hand Benchmark" />
                </div>
                <p>
                  <b>Writing & Version Control:</b>
                </p>
                <div className="tech-pill-group">
                  <Tech_Pill name="LaTeX" icon={<SiLatex color="default" />} />
                  <Tech_Pill name="Git" icon={<SiGit color="default" />} />
                  <Tech_Pill
                    name="GitHub"
                    icon={<SiGithub color="default" />}
                  />
                </div>
              </Tech_Dropdown>
            </Small_Card>
            <Small_Card
              id="project-portfolio"
              title="Portfolio Website"
              date={
                <>
                  July 2026 — <Current />
                </>
              }
              summary="This site!"
              preview={
                <div className="tech-pill-group">
                  <Tech_Pill name="React" icon={<SiReact color="default" />} />
                  <Tech_Pill
                    name="TypeScript"
                    icon={<SiTypescript color="default" />}
                  />
                  <Tech_Pill name="Vite" icon={<SiVite color="default" />} />
                  <Tech_Pill
                    name="Framer Motion"
                    icon={<SiFramer color="default" />}
                  />
                </div>
              }
            >
              <p>
                A personal portfolio for projects, experience,
                photography, and an expanded version of my resume with all the
                stuff that couldn't fit on my actual resume.
              </p>
              <Tech_Dropdown title="View the stack behind it">
                <div className="tech-pill-group">
                  <Tech_Pill name="React" icon={<SiReact color="default" />} />
                  <Tech_Pill
                    name="TypeScript"
                    icon={<SiTypescript color="default" />}
                  />
                  <Tech_Pill name="Vite" icon={<SiVite color="default" />} />
                  <Tech_Pill
                    name="React Router"
                    icon={<SiReactrouter color="default" />}
                  />
                  <Tech_Pill
                    name="Framer Motion"
                    icon={<SiFramer color="default" />}
                  />
                  <Tech_Pill name="HTML" icon={<SiHtml5 color="default" />} />
                  <Tech_Pill name="CSS" icon={<SiCss color="default" />} />
                  <Tech_Pill name="Git" icon={<SiGit color="default" />} />
                  <Tech_Pill
                    name="GitHub"
                    icon={<SiGithub color="default" />}
                  />
                  <Tech_Pill
                    name="GitHub Pages"
                    icon={<SiGithub color="default" />}
                  />
                </div>
              </Tech_Dropdown>
              <Action_Button
                text="View source code"
                icon={<FaGithub />}
                link="https://github.com/todd-buch/Portfolio"
                target="_blank"
                rel="noreferrer"
                variant="outline"
              />
            </Small_Card>
          </div>
        </div>
        <div id="role" className="main-regular-text-block">
          <h2 className="main-regular-text-block-title">Current Role</h2>
          <p className="main-regular-text-block-subtitle">
            Studio Manager, Charleen&apos;s Portrait Studio
          </p>
          <p className="main-regular-text-block-body">
            As the Studio Manager, my main roles include managing daily studio operations and staff scheduling, as well as planning & allocations to ensure smooth service delivery for our clients. I also serve as the main point of contact for some key clients, assist with customer service when needed, and manage our projects and timelines.
          </p>
          <p className="main-regular-text-block-body">
            In addition to managing studio operations and leading the team, I developed automated workflows, reducing repetitive administrative tasks, which significantly increased efficiency and productivity. One major project I completed was automating bulk image resizing, adding watermarks, and creating print release contracts for clients. This is now used daily by the team for delivering digital media for clients.
          </p>
          <Tech_Dropdown title="View the stack used in this role">
            <div className="current-role-dropdown">
              <p>
                Used specialized photography & videography software, and used Python for automation scripts.
              </p>
              <p>
                For the automated image resizing and watermarking, a simple Python script was made which is able to process images in batch, and change the color of the watermark to ensure it remains visible on the image regardless of the background color. This saves time when preparing images to be sent to clients.
              </p>
              <div className="current-role-dropdown-stack">
                <Tech_Pill name="Python" icon={<SiPython color="default" />} />
                <Tech_Pill
                  name="Photoshop"
                  icon={<DiPhotoshop color="default" />}
                />
                <Tech_Pill
                  name="DaVinci Resolve"
                  icon={<SiDavinciresolve color="default" />}
                />
                <Tech_Pill
                  name="Google Gemini"
                  icon={<SiGooglegemini color="default" />}
                />
              </div>
            </div>
          </Tech_Dropdown>
          <Info_Button text="View more info" link="/resume" />
        </div>
        <div id="about" className="main-regular-text-block">
          <h2 className="main-regular-text-block-title">About Me</h2>
          <p className="main-regular-text-block-body">
            I've pretty much always had an interest in photography. I would practice on whatever there was to practice on - nature, animals, people, really anything. I also knew I enjoyed coding pretty early on, starting with making watch faces on the Samsung app store.
          </p>
          <p className="main-regular-text-block-body">
            I enjoy working with both UI/UX and full-stack development. I'm learning more about cloud computing and working to gain more leadership skills & experience.
          </p>
          <p className="main-regular-text-block-body">
            When I&apos;m not coding, I am usually capturing the world through
            car photography or videography. I also enjoy exploring finance and
            markets, hiking, and am currently working on improving my golf game.
          </p>
        </div>
        <hr className="divider" />
        <div id="contact" className="main-regular-text-block">
          <h2 className="main-regular-text-block-title">
            Got an Idea? Let's Talk.
          </h2>
          <p className="main-regular-text-block-body">
            Have a project in mind, looking to get images of your cool car, or just want to chat? Let's Talk.
          </p>
          <Action_Button
            text="Get in touch"
            icon={<Mail />}
            link="mailto:hello@toddbuch.com"
          />
        </div>
      </div>
    </>
  );
}
