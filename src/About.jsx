import './About.css';

function About() {
  return (
    <section id="about" className="about">
      <h1>Full Stack Web Developer</h1>
      <div className="about-content">
        <img src="./prof1.jpeg" alt="Festus Kisoi" className="about-img" />
        <div>
          <h2>Welcome to my portfolio</h2>
          <p>
            I’m <strong>Festus Ndeto Kisoi</strong>, a dedicated software developer with a passion for designing and building digital products that make a real impact.
Currently pursuing a<strong> Bachelor’s</strong> in Industrial Chemistry at <strong>JKUAT </strong>and a<b> Full Stack Web Development program</b> at <strong>Moringa School</strong>, I thrive at the intersection of analytical problem-solving and modern software innovation.

My technical expertise spans<b> React, Node.js, JavaScript, HTML</b>, and<b> CSS</b>, and I’ve applied these skills in projects like <strong>ChamaLink</strong>,<b> a digital platform that promotes accountability and efficiency in community-based financial groups</b>.

I’m passionate about technology that empowers people — and I’m always seeking opportunities to collaborate on meaningful projects that challenge me to grow while delivering value to users and organizations alike.
          </p>
          <p className="about-quote">"I’m the guy you buzz when you got bugs."</p>
        </div>
      </div>
    </section>
  );
}

export default About;
