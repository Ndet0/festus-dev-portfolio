import { useEffect, useState } from "react";
import "./About.css";

function About() {
  const [overlayClass, setOverlayClass] = useState("light-overlay");
  const [isVisible, setIsVisible] = useState(false);

  // 🔍 Detect image brightness and apply light/dark overlay
  useEffect(() => {
    const img = new Image();
    img.src = "/about.jpeg";

    img.onload = function () {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0, img.width, img.height);
      const data = ctx.getImageData(0, 0, canvas.width, canvas.height).data;

      let brightness = 0;
      for (let i = 0; i < data.length; i += 4) {
        brightness += (data[i] + data[i + 1] + data[i + 2]) / 3;
      }
      const avg = brightness / (data.length / 4);
      setOverlayClass(avg > 130 ? "dark-overlay" : "light-overlay");
    };
  }, []);

  // 👀 Detect when About section enters viewport
  useEffect(() => {
    const section = document.getElementById("about");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => setIsVisible(entry.isIntersecting));
      },
      { threshold: 0.2 }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      className={`about ${overlayClass} ${isVisible ? "fade-in" : ""}`}
    >
      <h1>Full Stack Web Developer</h1>
      <div className="about-content">
        <img src="./prof1.jpeg" alt="Festus Kisoi" className="about-img" loading="lazy" />
        <div>
          <h2>Welcome to my portfolio</h2>
          <p>
            I’m <strong>Festus Ndeto Kisoi</strong>, a dedicated software
            developer with a passion for designing and building digital
            products that make a real impact. Currently pursuing a{" "}
            <strong>Bachelor’s</strong> in Industrial Chemistry at{" "}
            <strong>JKUAT</strong> and a <b>Full Stack Web Development</b>{" "}
            program at <strong>Moringa School</strong>, I thrive at the
            intersection of analytical problem-solving and modern software
            innovation.
          </p>
          <p>
            My technical expertise spans <b>React, Node.js, JavaScript, HTML</b>,
            and <b>CSS</b>, and I’ve applied these skills in projects like{" "}
            <strong>ChamaLink</strong>, <b>a digital platform that promotes
            accountability and efficiency in community-based financial
            groups</b>.
          </p>
          <p className="about-quote">
            "I’m the guy you buzz when you got bugs."
          </p>
        </div>
      </div>

      {/* 🔘 Buttons that open in new tabs */}
      <div className="about-buttons">
        <button
          onClick={() => window.open("/education.html", "_blank")}
        >
          Education
        </button>
        <button
          onClick={() => window.open("/skills.html", "_blank")}
        >
          Skills
        </button>
        <button
          onClick={() => window.open("/hobbies.html", "_blank")}
        >
          Hobbies
        </button>
      </div>
    </section>
  );
}

export default About;
