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
} from "@icons-pack/react-simple-icons";
import { DiPhotoshop } from "react-icons/di";
import { SiGooglegemini } from "react-icons/si";
import { FileText } from "lucide-react";

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
                    some clients required commercial use rights as well.{" "}
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
                  <Tech_Pill
                    name="Python"
                    icon={<SiPython color="default" />}
                  />
                  <Tech_Pill name="Microsoft Word" icon={<FileText />} />
                  <Tech_Pill
                    name="Dropbox"
                    icon={<SiDropbox color="default" />}
                  />
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
          </Resume_Card_Template>
        </div>
      </div>
    </>
  );
}
