import React from "react";
import "./index.css";
import myImage from "./assets/sean.png";

function App() {
  return (
    <div>
      <header className="header">
        <nav className="navbar">
          <h2 className="logo">SEAN SAMENG</h2>

          <ul className="navLinks">
            <li>
              <a href="#home" style={{ textDecoration: "none", color: "#0f172a" }}>
                Home
              </a>
            </li>

            <li>
              <a href="#about" style={{ textDecoration: "none", color: "#0f172a" }}>
                About
              </a>
            </li>

            <li>
              <a href="#skills" style={{ textDecoration: "none", color: "#0f172a" }}>
                Skills
              </a>
            </li>

            <li>
              <a href="#projects" style={{ textDecoration: "none", color: "#0f172a" }}>
                Projects
              </a>
            </li>

            <li>
              <a href="#contact" style={{ textDecoration: "none", color: "#0f172a" }}>
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <section className="hero" id="home">
        <div className="heroText">
          <p className="smallTitle">Hello, I am</p>

          <h1>SEAN SAMENG</h1>

          <h2>Full-Stack Software Developer</h2>

          <p>
            I build responsive websites, web applications, desktop applications,
            REST APIs, and database systems using React, Java, Spring Boot,
            Laravel, MySQL, SQL Server, HTML, CSS, and JavaScript.
          </p>

          <div className="buttons">
            <a href="#projects" className="btn primaryBtn">
              View Projects
            </a>

            <a href="#contact" className="btn outlineBtn">
              Contact Me
            </a>
          </div>
        </div>

        <div className="heroCard">
          <img src={myImage} alt="Sean Sameng" className="avatar" />

          <h3>Available for Freelance</h3>

          <p>Web Development • Data Entry • Bug Fixing</p>
        </div>
      </section>

      <section className="section aboutSection" id="about">
        <h2>About Me</h2>

        <div className="aboutBox">
          <p>
            I am a Software Development graduate from IT STEP Computer Academy.
            I have experience in frontend development, backend development,
            database design, REST APIs, desktop applications, and responsive
            website development.
          </p>

          <p>
            I studied software development with practical training in C#, Java,
            PHP, Laravel, React, MySQL, SQL Server, JavaScript, HTML, CSS,
            and software engineering concepts.
          </p>

          <div className="educationBox">
            <h3>Education</h3>

            <p>
              <strong>School:</strong> IT STEP Computer Academy Cambodia
            </p>

            <p>
              <strong>Program:</strong> Software Development
            </p>

            <p>
              <strong>Study Duration:</strong> 2.5 Years
            </p>

            <div className="aboutLinks">
              <a
                href="https://your-school-website.com"
                target="_blank"
                rel="noreferrer"
              >
                View School Website
              </a>

              <a
                href="/certificates/step-certificate.pdf"
                target="_blank"
                rel="noreferrer"
              >
                View Certification
              </a>
            </div>
          </div>

          <div className="aboutStats">
            <div>
              <h3>2.5 Years</h3>
              <span>Software Development Study</span>
            </div>

            <div>
              <h3>Full-Stack</h3>
              <span>Frontend + Backend</span>
            </div>

            <div>
              <h3>Freelance</h3>
              <span>Available for Work</span>
            </div>
          </div>
        </div>
      </section>
      <section className="section dark" id="skills">
        <h2>My Skills</h2>

        <div className="skills">
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <span>React</span>
          <span>Next.js</span>
          <span>Java</span>
          <span>Spring Boot</span>
          <span>PHP</span>
          <span>Laravel</span>
          <span>MySQL</span>
          <span>SQLite</span>
          <span>SQL Server</span>
          <span>C#</span>
          <span>WinForms</span>
          <span>GitHub</span>
          <span>Data Entry</span>
        </div>
      </section>

      <section className="section" id="projects">
        <h2>My Projects</h2>

        <div className="projects">
          <div className="projectCard">
            <h3  >E-commerce Graduation Project</h3>

            <p>
              A graduation project for an online store with product management,
              shopping features, responsive design, and database integration.
            </p>

            <strong>React • JAVA  Spring Boot • MySQL </strong>
          </div>

          <div className="projectCard">
            <h3>Student Attendance System</h3>

            <p>
              A student attendance project for managing student records,
              tracking attendance, and viewing attendance information.
            </p>

            <strong>Java • Android • SQLite</strong>
          </div>

          <div className="projectCard">
            <h3>Inventory Management System</h3>

            <p>
              A Windows Forms desktop application for managing products,
              categories, suppliers, customers, stock, purchases, and sales.
            </p>

            <strong>C# • WinForms • SQL Server</strong>
          </div>

          <div className="projectCard">
            <h3>Sound Catalog Website</h3>

            <p>
              A Laravel web application for managing sound categories,
              uploading sound files, searching records, and organizing audio
              content.
            </p>

            <strong>PHP • Laravel • MySQL • Bootstrap</strong>
          </div>
        </div>
      </section>

      <section className="section contactSection" id="contact">
        <h2>Contact Me</h2>
        <p className="sectionIntro">
          I am available for freelance work, web development, bug fixing, and simple
          data entry tasks.
        </p>

        <div className="contactGrid">
          <div className="contactCard">
            <h3>Email</h3>
            <a href="mailto:seansameng@gmail.com">seansameng@gmail.com</a>
          </div>

          <div className="contactCard">
            <h3>Phone</h3>
            <a href="tel:+85560427579">+855 060 427 579</a>
          </div>

          <div className="contactCard">
            <h3>Location</h3>
            <p>Phnom Penh, Cambodia</p>
          </div>

          <div className="contactCard">
            <h3>GitHub</h3>
            <a href="https://github.com/seansameng" target="_blank">
              github.com/seansameng
            </a>
          </div>

          <div className="contactCard">
            <h3>LinkedIn</h3>
            <a href="https://linkedin.com/in/seansameng" target="_blank">
              linkedin.com/in/seansameng
            </a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>© 2026 SEAN SAMENG. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;