import "./Resume.css";
import Resume_Card_Template from "./Reuseable-Components/Resume_Card_Template";
import Current from "../../Reuseable-Components/Current";
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
              <b>Dean's List Student</b><br/><i>Concentration: Software Development & Design</i><br/>Graduation:
              December 2026
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
        </div>
      </div>
    </>
  );
}
