import "./Resume.css";
import Resume_Card_Template from "./Reuseable-Components/Resume_Card_Template";
import Current from "../../Reuseable-Components/Current";
import Tech_Dropdown from "../../Reuseable-Components/Tech_Dropdown";
import Tech_Pill from "../../Reuseable-Components/Tech_Pill";

import {
  SiPython,
  SiDropbox,
  SiDavinciresolve,
  SiWordpress,
  SiHtml5,
  SiYaml,
  SiGooglecloud,
  SiGithub,
  SiGit,
} from "@icons-pack/react-simple-icons";
import { DiPhotoshop } from "react-icons/di";
import { SiGooglegemini } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { FileText, Bot } from "lucide-react";

export default function Resume() {
  return (
    <>
      <div className="resume-container">
        <div className="resume-section-text">
          <h1>Resume — Todd Buch</h1>
          <p className="resume-subtitle">
            Hey there 👋 I'm Todd Buch, a student studying Computer Science,
            with an interest in software development, graphic design,
            photography, and many other things.
          </p>
        </div>
        <div className="resume-section-text">
          <h2>Education</h2>
          <Resume_Card_Template
            date={
              <>
                August 2023 — <Current />
              </>
            }
            title="University of Connecticut"
            subtitle="Bachelor of Science — Computer Science"
            location="Storrs, Connecticut"
            num_details={5}
          >
            <p>
              <b>Dean's List Student</b>
              <br />
              <i>Concentration: Software Development & Design</i>
              <br />
              Graduation: December 2026
            </p>
            <p>Relevant Courses:</p>

            <p>
              <b>Data Structures and Object-Oriented Design:</b> Introduction to
              fundamental data structures and algorithms.
            </p>

            <p>
              <b>Introduction to Discrete Systems:</b> Introduction to formal
              mathematical thinking including discrete systems and proofs.
            </p>

            <p>
              <b>Business Software Development:</b> Development of computer
              software for business information processing, using the C#
              language.
            </p>

            <p>
              <b>Intro to Software Engineering:</b> Software engineering
              concepts including the software life cycle and other
              software-development process models.
            </p>

            <p>
              <b>Programming Languages:</b> The study of programming language
              features and programming paradigms. Simply Typed Lambda Calculus,
              OCaml, Prolog, & Smalltalk.
            </p>
          </Resume_Card_Template>
          <hr className="resume-divider" />
          <h2>Work Experience</h2>
          <Resume_Card_Template
            date={
              <>
                June 2025 — <Current />
              </>
            }
            title="Studio Manager"
            subtitle="Charleen's Portrait Studio"
            location="Dayville, Connecticut"
            num_details={6}
          >
            <p>
              As the Studio Manager, I oversee the daily operations of the
              studio, managing a small team to ensure seamless service delivery
              across all client needs. My role balances operational strategy,
              such as resource allocation and project management, with client
              relations and sales. I develop automated tools for the team to
              use, to make sure that the studio can scale to meet high-volume
              seasonal demands without sacrificing quality or attention to
              detail.
            </p>
            <ul>
              <li>
                <strong>Operational Leadership:</strong> Directed daily studio
                workflows and staff scheduling to manage high volume periods,
                including school portrait seasons involving hundreds of students
                and various levels of education.
              </li>
              <li>
                <strong>Sales & Business Development:</strong> Managed the full
                sales lifecycle, including in-person and remote consultations
                for high school seniors and executive clients. Analyzed costs,
                calculated and set product pricing, and created new product
                lines.
              </li>
              <li>
                <strong>Client Relationship Management:</strong> Served as the
                primary point of contact for key clients, including schools and
                corporate partners.
              </li>
              <li>
                <p>
                  <strong>Technical Workflow Automation:</strong> Developed
                  custom scripts to automate repetitive post-production and
                  administrative tasks, such as bulk image resizing,
                  watermarking, and the generation of print release contracts.
                </p>

                <ul>
                  <li>
                    <p>
                      <strong>Impact:</strong> Reduced manual processing time
                      from ~20 minutes to ~2 minutes per task, allowing the team
                      to focus on creative output rather than administrative
                      overhead.
                    </p>
                  </li>
                </ul>
                <Tech_Dropdown title="View the stack behind it">
                  <p>
                    First, I developed the business contracts for digital image
                    delivery. Most contracts allowed for personal use only, but
                    some clients required commercial use rights as well.
                  </p>
                  <p>
                    Once the contracts were made, I created a script to fill out
                    the details (date, client name, image numbers, etc.) and
                    then export the contract. Finally, I added the ability to
                    resize images automatically based on the package purchased
                    by the client, and I added the ability to add our studio
                    watermark, which changed colors based on the background of
                    the image.
                  </p>
                  <div className="tech-pill-group">
                    <Tech_Pill
                      name="Python"
                      icon={<SiPython color="default" />}
                    />
                    <Tech_Pill name="Microsoft Word" icon={<FileText />} />
                    <Tech_Pill
                      name="Dropbox"
                      icon={<SiDropbox color="default" />}
                    />
                  </div>
                </Tech_Dropdown>
              </li>
              <li>
                <p>
                  <strong>Creative Production:</strong> Used the Adobe Creative
                  Cloud suite to for graphic design, designing albums, and
                  visual branding.
                </p>
              </li>
            </ul>
            <div className="tech-pill-group">
              <Tech_Pill
                name="Photoshop"
                icon={<DiPhotoshop color="default" />}
              />
              <Tech_Pill name="Lightroom Classic" />
              <Tech_Pill
                name="DaVinci Resolve"
                icon={<SiDavinciresolve color="default" />}
              />
              <Tech_Pill name="HTML" icon={<SiHtml5 color="default" />} />
              <Tech_Pill
                name="Wordpress"
                icon={<SiWordpress color="default" />}
              />
              <Tech_Pill
                name="Google Gemini"
                icon={<SiGooglegemini color="default" />}
              />
            </div>
          </Resume_Card_Template>
          <Resume_Card_Template
            date={<>May 2026 — July 2026</>}
            title="Tech & Ops Software Development Intern"
            subtitle="The Hartford Insurance Group"
            location="Hartford, Connecticut"
            num_details={8}
          >
            <p>
              Worked in the Claims & Operations IT department on the AI
              Accelerators team, a team focused on exploring emerging tech & AI
              platforms. During the internship, I developed an end-to-end
              proof-of-concept (POC) conversational AI solution.
            </p>
            <p>
              Technical Project: Hybrid-Cloud Conversational Agentic AI Solution
            </p>
            <ul>
              <li>
                <strong>Architectural Design:</strong> Engineered an end-to-end,
                hybrid-cloud conversational AI solution to automate complex
                business workflows. Managed the full lifecycle from initial
                design to deployment within a 10-week timeframe.
              </li>
              <li>
                <strong>Full-Stack Engineering:</strong>
                <ul>
                  <li>
                    <p>
                      Integrated Amazon Connect for telephony orchestration and
                      call flow management. Set up an Amazon Connect phone
                      number, and creating the incoming call flow.
                    </p>
                  </li>
                  <li>
                    <p>
                      Developed backend logic and data storage solutions using
                      AWS Lambda and S3.
                    </p>
                  </li>
                  <li>
                    <p>
                      Deployed an agentic AI engine on GCP Cloud Run using the
                      Google Agent Developer Kit (ADK).
                    </p>
                  </li>
                  <Tech_Dropdown title="View the stack behind it">
                    <p>
                      The project used a hybrid-cloud architecture to leverage
                      the unique strengths of both AWS and GCP. Amazon Connect
                      handled the telephony ingress and call flow management,
                      while the core intelligence was hosted on GCP Cloud Run.
                      By developing an agent with the Google Agent Developer Kit
                      (ADK), I was able to implement an agentic AI workflow that
                      could process natural language and execute backend tasks
                      via AWS Lambda, creating a seamless, automated end-to-end
                      voice experience.
                    </p>
                    <p>
                      <b>Languages:</b>
                    </p>
                    <div className="tech-pill-group">
                      <Tech_Pill
                        name="Python"
                        icon={<SiPython color="default" />}
                      />{" "}
                      <Tech_Pill
                        name="YAML"
                        icon={<SiYaml color="default" />}
                      />
                    </div>
                    <p>
                      <b>Cloud Infrastructure:</b>
                    </p>
                    <div className="tech-pill-group">
                      <Tech_Pill
                        name="GCP (Cloud Run)"
                        icon={<SiGooglecloud color="default" />}
                      />{" "}
                      <Tech_Pill name="AWS Lambda" />
                      <Tech_Pill name="AWS S3 Bucket" />
                    </div>
                    <p>
                      <b>Voice & AI:</b>
                    </p>
                    <div className="tech-pill-group">
                      <Tech_Pill
                        name="Google Agent Developer Kit"
                        icon={<Bot />}
                      />
                      <Tech_Pill name="Amazon Connect" />
                      <Tech_Pill name="Amazon Lex" />
                    </div>
                    <p>
                      <b>Development Workflow:</b>
                    </p>
                    <div className="tech-pill-group">
                      <Tech_Pill
                        name="VS Code"
                        icon={<VscVscode color="default" />}
                      />
                      <Tech_Pill name="Git" icon={<SiGit color="default" />} />
                      <Tech_Pill
                        name="GitHub"
                        icon={<SiGithub color="default" />}
                      />
                      <Tech_Pill name="Cloudformation" />
                    </div>
                  </Tech_Dropdown>
                </ul>
              </li>
              <li>
                <strong>Operational Impact:</strong> Designed the system to
                replace manual processes with an automated workflow, optimizing
                both operational cost-efficiency and the customer experience.
              </li>
              <li>
                <strong>Strategic Leadership Development:</strong> Actively
                pursued cross-functional engagement through networking to gain a
                holistic understanding of business operations.
              </li>
              <li>
                <strong>Communication Skills:</strong> In addition to actively
                participating in daily team standups, I researched and presented
                to the team on a newer technology that would be worth exploring,
                the Gemini Live API. This system would allow the team to develop
                conversational agentic AI solutions with lower latency and
                better accuracy. I also prepared a presentation & live demo to
                show off my work over the summer.
              </li>
            </ul>
          </Resume_Card_Template>
        </div>
      </div>
    </>
  );
}
