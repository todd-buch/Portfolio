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
            num_details={1}
          >
            <p><i>Concentration: Software Development & Design</i></p>
            <p>Graduation: December 2026</p>
          </Resume_Card_Template>
        </div>
      </div>
    </>
  );
}
