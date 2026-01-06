import "./HowIWork.css";

function HowIWork() {
  return (
    <section className="how-i-work" id="how-i-work">
      <div className="container">
        <h2>How I Work</h2>

        <div className="workflow">
          <div className="workflow-step" style={{ animationDelay: '0.1s' }}>
            <span className="step-number">01</span>
            <h3>Understand the Problem</h3>
            <p>
              I start by breaking down requirements, identifying edge cases, and
              clarifying what success looks like before writing any code.
            </p>
          </div>

          <div className="workflow-step" style={{ animationDelay: '0.2s' }}>
            <span className="step-number">02</span>
            <h3>Design Before Building</h3>
            <p>
              I sketch data models, API routes, and system flow to ensure the
              solution is scalable, readable, and maintainable.
            </p>
          </div>

          <div className="workflow-step" style={{ animationDelay: '0.3s' }}>
            <span className="step-number">03</span>
            <h3>Build Incrementally</h3>
            <p>
              I implement features in small, testable pieces, verifying each part
              works before moving on to reduce bugs and rework.
            </p>
          </div>

          <div className="workflow-step" style={{ animationDelay: '0.4s' }}>
            <span className="step-number">04</span>
            <h3>Test & Debug</h3>
            <p>
              I actively test endpoints, handle errors explicitly, and debug using
              logs, Postman, and the terminal.
            </p>
          </div>

          <div className="workflow-step" style={{ animationDelay: '0.5s' }}>
            <span className="step-number">05</span>
            <h3>Refine & Document</h3>
            <p>
              I refactor for clarity and performance, then document the solution
              so others can easily understand and build on it.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowIWork;

