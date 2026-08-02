import "./Main_Projects.css";
import { Dot, Mail } from "lucide-react";
import Info_Button from "./Reuseable-Components/Info_Button";
import Action_Button from "./Reuseable-Components/Action_Button";
import Magnetic_Timeline from "./Reuseable-Components/Magnetic_Timeline";
import Tech_Dropdown from "./Reuseable-Components/Tech_Dropdown";
import Tech_Pill from "./Reuseable-Components/Tech_Pill";
import Small_Card from "./Reuseable-Components/Small_Card";
import Current from "./Reuseable-Components/Current";

import { SiPython, SiDavinciresolve } from "@icons-pack/react-simple-icons";
import { DiPhotoshop } from "react-icons/di";
import { SiGooglegemini } from "react-icons/si";

export default function Main_Projects() {
  return (
    <>
      <div className="projects">
        <Magnetic_Timeline />
        <div id="bio" className="bio">
          <h1>Todd Buch</h1>
          <div className="projects-traits">
            <p>
              Computer Science Student<i></i>
            </p>
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
              <p>Placeholder</p>
              <Tech_Pill name="Python" icon={<SiPython color="default" />} />
            </Small_Card>
            <Small_Card
              title="Fire Prevention at the Edge"
              date="August 2025 — May 2026"
            >
              <p>Placeholder</p>
            </Small_Card>
            <Small_Card
              title="Portfolio Website"
              date={
                <>
                  July 2026 — <Current />
                </>
              }
            >
              <p>This website</p>
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
            link="mailto:todd@example.com"
          />
        </div>
      </div>
    </>
  );
}
