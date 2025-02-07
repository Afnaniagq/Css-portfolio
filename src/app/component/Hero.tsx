import React from "react";
import "../style/Hero.css";


function Hero() {
  return (
    <div className="hero">
      <div className="container">
        <div className="content">
          <div className="intro">
            <h2 className="greeting">Hello I `&apos;`m</h2>
            <h2 className="name">Afnan Imran</h2>
           
          </div>
          <div className="separator"></div>
          <div className="description">
            <p>
              I have developed a strong foundation in HTML `&apos;`CSS `&apos;`and JavaScript `&apos;`
              along with experience in using Tailwind CSS and Next.js to create
              responsive and engaging web applications.
            </p>
            <button className="learn-more">Learn More</button>
          </div>
       
        </div>
      </div>
    </div>
  );
}

export default Hero;
