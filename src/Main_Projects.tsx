import "./Main_Projects.css";
import { Bot, Camera, ChartColumn, Cpu, Mail, Sparkles } from "lucide-react";
import Info_Button from "./Reuseable-Components/Info_Button";
import Action_Button from "./Reuseable-Components/Action_Button";
import Magnetic_Timeline from "./Reuseable-Components/Magnetic_Timeline";
import Tech_Dropdown from "./Reuseable-Components/Tech_Dropdown";
import Tech_Pill from "./Reuseable-Components/Tech_Pill";
import Small_Card from "./Reuseable-Components/Small_Card";
import Current from "./Reuseable-Components/Current";

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
            As a software development student with a foundation in photography
            and design, I build digital worlds that balance technical logic with
            visual impact. I focus on creating high-quality, user-centric
            solutions through a blend of creative intuition and engineering
            precision.
          </p>
        </div>
        <div id="about" className="main-regular-text-block">
          <h2 className="main-regular-text-block-title">About Me</h2>
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
        <div id="role" className="main-regular-text-block">
          <h2 className="main-regular-text-block-title">Current Role</h2>
          <p className="main-regular-text-block-subtitle">
            Studio Manager, Charleen's Portrait Studio
          </p>
          <p className="main-regular-text-block-body">
            As the Studio Manager, my main roles include directing daily studio
            operations and managing staff scheduling, as well as resource
            allocation to ensure seamless service delivery for our clients. I
            also serve as the main point of contact for key clients, assist with
            customer service when escalation is needed, and manage our project
            and timelines.
          </p>
          <p className="main-regular-text-block-body">
            In addition to managing studio operations and leading the team, I
            developed automated workflows, reducing repetive administrative
            tasks, which significantly increased operational efficiency and
            staff productivity. One major project I completed was automating
            bulk image resizing, adding watermarks, and creating print release
            contracts for clients.
          </p>
          <Tech_Dropdown title="View the stack used in this role">
            <div className="current-role-dropdown">
              <p>
                Used specialized photography & videography software, and used
                Python for automation scripts.
              </p>
              <p>
                For the automated image resizing and watermarking, a simple
                python script was made which is able to process images in batch,
                and change the color of the watermark to ensure it remains
                visible on the image regardless of the background color. This
                saves time when preparing images to be sent to clients.
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
        <div id="projects" className="main-regular-text-block">
          <h2 className="main-regular-text-block-title">Projects</h2>
          <div className="projects-section-block">
            <Small_Card
              title="Quant-Engine"
              date={
                <>
                  July 2026 — <Current />
                </>
              }
            >
              <p>
                Quant Engine is a full-stack stock portfolio analytics and
                backtesting platform — an open-source alternative to premium
                financial tools. It helps investors analyze holdings, run
                historical simulations, and build rule-based trading strategies
                through an intuitive web interface.
              </p>
              <Tech_Dropdown title="View the stack behind it">
                <p>
                  The app covers three core areas: AI-powered portfolio analysis
                  from CSV or manual inputs (with automated summary reports), a
                  high-performance backtesting engine that surfaces risk-return
                  metrics like Sharpe/Sortino and max drawdown, and an
                  interactive strategy builder for testing rules such as
                  momentum or buy-the-dip against past market data. Services are
                  containerized with Docker as a multi-service stack.
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
              title="Fire Prevention at the Edge"
              date="August 2025 — May 2026"
            >
              <p>
                Fire Prevention at the Edge is an edge computing safety
                appliance created by a team of 4 UConn students for their final
                capstone project. I served as project manager while our team
                architected, designed, and developed the full-stack system end
                to end. It is designed to detect potential hazards before they
                ignite. By combining real-time visual feeds with local
                environmental sensors (CO₂, temperature, humidity, and thermal
                mapping), the system uses a deterministic classifier to evaluate
                risk severity. Finally, an entirely local LLM analyzes the data
                to provide actionable, real-time safety recommendations to
                warehouse personnel.
              </p>
              <Tech_Dropdown title="View the stack behind it">
                <p>
                  Cameras run vision models trained to flag fire-related
                  hazards, while environmental sensors surface other risky
                  conditions. Those signals are fused and passed to an on-device
                  text model that turns raw detections into clear, specific
                  alerts for warehouse staff.
                </p>
                <p>
                  <b>What the vision model detects:</b> battery condition (okay,
                  swollen, damaged, bad placement), fire exits (clear vs.
                  blocked), and electrical hazards (normal/damaged wiring,
                  normal/damaged outlets, sparking outlets).
                </p>
                <p>
                  Building it was an end-to-end pipeline: we first generated
                  synthetic images for the dataset (Grok, Gemini, and the OpenAI
                  API), annotated them in CVAT, then trained and fine-tuned a
                  YOLOv8 Nano model and validated its detections. In parallel we
                  built a full web interface with live camera streaming and
                  bounding boxes drawn in real time, then assembled a Raspberry
                  Pi device with the Hailo AI HAT+, cameras, and environmental
                  sensors so the model, backend, and local LLM could run
                  together on the edge appliance.
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
            <Small_Card title="Blackjack Agent" date="March 2026 — April 2026">
              <p>
                Blackjack Agent is an AI-driven simulation and analysis
                framework that models, evaluates, and optimizes player decisions
                in Blackjack. We asked whether a skilled player can gain a
                mathematical advantage over the house (the short answer is,
                sadly, no). It compares three strategies: a random baseline, a
                rule-based reflex agent that follows standard strategy charts,
                and a model-free reinforcement learning agent that optimizes
                both play and bet sizing under casino-like conditions.
              </p>
              <Tech_Dropdown title="View the stack behind it">
                <p>
                  The system is built around a custom terminal Blackjack engine,
                  a training environment, and a comparative evaluation suite.
                  The engine models multi-deck shoes (auto-reshuffling when
                  fewer than 25% of cards remain) and a dealer that hits soft 16
                  and stands on all 17s. A reflex agent hard-codes optimal
                  tables for hard totals, soft totals, and pair splits. The
                  learning agent uses tabular Q-learning with state{" "}
                  <i>
                    (player total, dealer upcard, usable ace, binned true count)
                  </i>
                  , Hi-Lo counting for the true count, separate Q-tables for
                  play actions (hit / stand / double) and bet sizes (1–50
                  units), and ε-greedy exploration.
                </p>
                <p>
                  Training ran for 5,000,000 episodes with Q-tables persisted
                  via pickle. Across a 100,000-hand benchmark, the Q-learning
                  agent reduced average loss to 0.045 units/hand — beating basic
                  strategy (0.055) and random play (2.0), while still showing
                  that card counting can shrink losses without fully overcoming
                  the house edge. A recursive probability module also computes
                  exact win probabilities and expected value for stand vs. hit
                  from the remaining shoe distribution.
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
              title="Portfolio Website"
              date={
                <>
                  July 2026 — <Current />
                </>
              }
            >
              <p>
                This site! A personal portfolio for projects, experience,
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
        <hr className="divider" />
        <div id="contact" className="main-regular-text-block">
          <h2 className="main-regular-text-block-title">
            Got an Idea? Let's Talk.
          </h2>
          <p className="main-regular-text-block-body">
            Have a project in mind, looking to get images of your cool car, or
            just want to chat? Drop me a message!
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
