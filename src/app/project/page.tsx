import React from "react";
import Link from "next/link";
import Image from "next/image";
import "../style/project.css"; // Import custom CSS
import { FaLinkedin } from "react-icons/fa";
import { SiGithub } from "react-icons/si";

function Project() {
  return (
    <section className="container mx-auto px-4 h-auto mb-36 md:mb-16 relative">
      {/* Title Section */}
      <div className="text-title">
        <Link href="/projects" className="pagen">
          Projects
        </Link>
        <div className="title-underline"></div>
      </div>

      {/* First Project */}
      {/* <div className="project-divider-md"></div> */}
    <div className="project-container md:project-container-md">
        <a
          href="https://figma-website-olm2.vercel.app/"
          target="_blank"
          className="project-link relative"
        >
          <Image
            src="/lapmob.png"
            alt="Electronics website preview"
            height={630}
            width={630}
            className="project-image"
          />
        </a>
        <div className="total w-full">
          <h3 className="project-title text-2xl md:text-4xl">Electronics website</h3>
          <div className="link">
          <a
            href="https://github.com/Afnaniagq?tab=repositories"
            target="_blank"
            className="project-follow flex gap-2"
          >Follow</a>
          <a href="https://github.com/Afnaniagq" target="_blank" rel="noopener noreferrer" className="icon github">
                  <SiGithub  />
                </a>
                </div> 
          <p className="project-description sm:text-[13px] md:text-[17px] mt-2">
            Leveraging the power of Next.js, the site features fast load times,
            server-side rendering, and optimized performance for both desktop and
            mobile users. Tailwind CSS ensures a modern, clean, and customizable
            design-first styling that adapts perfectly to any screen size. With a
            focus on performance, usability, and scalability, this eCommerce platform
            delivers an engaging and smooth browsing experience while providing
            powerful features for both customers and administrators.
          </p>
        </div>
      </div>

      {/* Second Project */}
      <div className="project-container md:project-container-md">
     
          <a
            href="https://hijab-website-nine.vercel.app/"
            target="_blank"
            className="project-link relative"
          >
            <Image
              src="/scrol.png"
              alt="Hijab website preview"
              height={630}
              width={630}
              className="project-image"
            />
          </a>
          <div className="total w-full">
          <h3 className="project-title text-2xl md:text-4xl">Hijab website</h3>
         <div className="link">
          <a
            href="https://www.linkedin.com/in/afnan-imran-6619a0267?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            className="project-follow flex gap-2"
          >Follow  </a>
          <a
                           href="https://www.linkedin.com/in/afnan-imran-6619a0267?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                           target="_blank"
                           rel="noopener noreferrer"
                           className="icon linkedin"
                         >
                           <FaLinkedin  />
                         </a>
        </div>
          <p className="project-description sm:text-[13px] md:text-[17px] mr-3 mt-2">
            This ECommerce website for hijabs is built with Next.js and styled using
            Tailwind CSS, providing a sleek, modern, and responsive shopping
            experience. The site leverages the performance optimizations of Next.js,
            ensuring fast load times and seamless navigation across devices. Tailwind
            CSS enables a highly customizable, visually appealing design, with a focus
            on simplicity and accessibility.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Project;
