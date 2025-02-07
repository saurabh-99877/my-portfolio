import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
// import { newResume } from ".../public/newResume.pdf"

const About = () => {
  return (
    <div className="w-[90%] sm:max-w-3xl mx-auto mt-20 leading-7 text-justify pb-10 sm:mx-[150px] sm:pr-10"
    id="about">
      <p className="text-[#8f8f8f]">
        {" "}
        👋 Hi, I'm Saurabh! I'm a frontend developer passionate about building
        clean, responsive, and user-friendly web applications. My expertise lies
        in JavaScript, React, and Tailwind CSS, and I love crafting sleek UIs
        with seamless interactivity. I enjoy solving complex problems,
        optimizing performance, and staying up-to-date with the latest trends in
        web development. Whether it's designing pixel-perfect components or
        improving UX, I'm always eager to learn and push boundaries. Let's build
        something amazing! 🚀
      </p>
      <h2 className="mt-10 mb-4 text-xl">🚀 My Skills</h2>

      <ul className="leading-10">
        <li className="">
          <strong>Frontend Development</strong>
          <hr className="w-[250px] " />
          <ul className="text-[#999]">
            <li>
              <strong className="text-[]">JavaScript (ES6+)</strong> – Writing
              clean, efficient, and scalable code
            </li>
            <li>
              <strong>React.js</strong> – Building dynamic, high-performance web
              applications
            </li>w
            <li>
              <strong>Tailwind CSS</strong> - Crafting beautiful, responsive,
              and modern UIs
            </li>
            <li>
              <strong>HTML5 & CSS3</strong> – Semantic markup and modern styling
              techniques
            </li>
          </ul>
        </li>

        <li>
          <strong>Backend & Database</strong>
          <hr className="w-[250px] " />
          <ul className="text-[#999]">
            <li>
              <strong>Firebase</strong> – Authentication, Firestore, and
              real-time database
            </li>
          </ul>
        </li>

        <li>
          <strong>Tools & Technologies</strong>
          <hr className="w-[250px]" />
          <ul className="text-[#999]">
            <li>
              <strong>Parcel & Vite</strong> – Fast and efficient frontend
              bundling
            </li>
            <li>
              <strong>Git & GitHub</strong> – Version control and collaboration
            </li>
            <li>
              <strong>Redux</strong> – State management for scalable
              applications
            </li>
          </ul>
        </li>

        <li>
          <strong>Other Skills</strong>
          <hr className="w-[250px]" />
          <ul className="text-[#999]">
            <li>
              <strong>Performance Optimization</strong> – Enhancing speed and
              efficiency
            </li>
            <li>
              <strong>Component-Based Architecture</strong> – Modular and
              reusable UI development
            </li>
            <li>
              <strong>Responsive & Mobile-First Design</strong> – Ensuring a
              great user experience across devices
            </li>
            <li>
              <strong>Code Review & Best Practices</strong> – Writing
              maintainable and scalable code
            </li>
          </ul>
        </li>
      </ul>
      <a href="newResume.pdf" download="newResume.pdf">
        <button className="bg-[whitesmoke] text-black px-4 py-1 my-5">
          <span className="px-2">
            <FontAwesomeIcon icon={faDownload} />
          </span>
          Download Resume
        </button>
      </a>
    </div>
  );
};

export default About;
