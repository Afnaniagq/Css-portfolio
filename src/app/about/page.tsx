import '../style/about.css'; 
import Link from "next/link";
import Image from "next/image";
import React from "react";


function About() {
  return (
    <section className="about-container">
      <div className="about-header">
        <Link href="/about" className="about-link">About</Link>
        <div className="underline"></div>
      </div>
      <div className="about-content">
        <div className="about-image">
          <Image src="/book.jpg" alt="pic" height={500} width={500} className="about-img" />
        </div>
        <div className="about-info">
          <h2 className="about-title">Frontend Developer & Digital Marketer</h2>
          <p className="about-description">
            I&apos;m Afnan Imran, a Front-End Developer and Digital Marketer passionate about creating engaging web experiences.
          </p>
          <p className="about-description">
            Currently, I&apos;m expanding my expertise by diving into Cloud Computing, Applied Generative AI, Web3, and the Metaverse. I’m excited about the potential of these emerging technologies to revolutionize how we connect and interact online.
          </p>
         <button className="hire-button">Hire Me</button>
        </div>
      </div>
    </section>
  );
}

export default About;