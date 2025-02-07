import React from "react";
import Link from "next/link";
import "../style/skill.css"; // Import your global CSS

function Skill() {
  return (
    <section className="container">
      <div className="title">
        <Link href="/contact" className="link">
          Skills
        </Link>
        <div className="titleUnderline"></div>
      </div>

      <p className="description">
        I have knowledge in HTML, CSS, and Tailwind CSS to create responsive and visually appealing web designs. Proficient in TypeScript and Next.js, I build scalable, high-performance web applications. I’m passionate about leveraging modern technologies to enhance user experiences.
      </p>

      <div className="grid">
        <div className="skillItem">
          <p className="skillName">HTML</p>
          <div className="progressBar">
            <div className="progressFill" style={{ width: "90%" }}></div>
          </div>
        </div>

        <div className="skillItem">
          <p className="skillName">CSS</p>
          <div className="progressBar">
            <div className="progressFill" style={{ width: "70%" }}></div>
          </div>
        </div>

        <div className="skillItem">
          <p className="skillName">Typescript</p>
          <div className="progressBar">
            <div className="progressFill" style={{ width: "65%" }}></div>
          </div>
        </div>

        <div className="skillItem">
          <p className="skillName">Next.js</p>
          <div className="progressBar">
            <div className="progressFill" style={{ width: "40%" }}></div>
          </div>
        </div>

        <div className="skillItem">
          <p className="skillName">Tailwind CSS</p>
          <div className="progressBar">
            <div className="progressFill" style={{ width: "70%" }}></div>
          </div>
        </div>

        <div className="skillItem">
          <p className="skillName">JavaScript</p>
          <div className="progressBar">
            <div className="progressFill" style={{ width: "50%" }}></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skill;
