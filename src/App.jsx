import React from "react";
import "./index.css";
import myImage from "./assets/sean.png";

function App() {
  return (
    <div>
      <header className="header">
        <nav className="navbar">
          <h2 className="logo">SEAN SAMENG</h2>

          <ul className="navLinks ">
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

      <section className="hero">
        <div className="heroText">
          <p className="smallTitle">Hello, I am</p>
          <h1>SEAN SAMENG</h1>
          <h2>Full-Stack Software Developer</h2>

          <p>
            I build responsive websites, web applications, REST APIs, and
            database systems using React, Java Spring Boot, Laravel, MySQL,
            HTML, CSS, and JavaScript.
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
          {/* <div className="avatar">SS</div> */}
          <img src={myImage} alt="Sean Sameng" className="avatar" />
          <h3>Available for Freelance</h3>
          <p>Web Development • Data Entry • Bug Fixing</p>
        </div>
      </section>

      <section className="section" id="about">
        <h2>About Me</h2>
        <p>
          I am a Software Development graduate from IT STEP Computer Academy.
          I have experience in frontend, backend, database design, REST APIs,
          and responsive website development.
        </p>
      </section>

      <section className="section dark">
        <h2>My Skills</h2>

        <div className="skills" id="skills">
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <span>React</span>
          <span>Java</span>
          <span>Spring Boot</span>
          <span>PHP</span>
          <span>Laravel</span>
          <span>MySQL</span>
          <span>C#</span>
          <span>GitHub</span>
          <span>Data Entry</span>
        </div>
      </section>

      <section className="section" id="projects">
        <h2>My Projects</h2>

        <div className="projects">
          <div className="projectCard">
            <h3>Homestay Booking Management System</h3>
            <p>
              Full-stack booking system with authentication, booking management,
              payment tracking, and admin dashboard.
            </p>
            <strong>Java • Spring Boot • React • MySQL</strong>
          </div>

          <div className="projectCard">
            <h3>Book Store Website</h3>
            <p>
              Online bookstore project with book listing, search, category
              management, and responsive design.
            </p>
            <strong>Laravel • React • MySQL</strong>
          </div>

          <div className="projectCard">
            <h3>Inventory Management System</h3>
            <p>
              Desktop application for managing products, suppliers, customers,
              stock, purchases, and sales.
            </p>
            <strong>C# • WinForms • SQL Server</strong>
          </div>
        </div>
      </section>

      <section className="section dark" id="contact">
        <h2>Contact Me</h2>

        <div className="contactBox">
          <p>Email: seansameng@gmail.com</p>
          <p>Phone: +855 060 427 579</p>
          <p>Location: Phnom Penh, Cambodia</p>
          <p>GitHub: github.com/seansameng</p>
          <p>LinkedIn: linkedin.com/in/seansameng</p>
        </div>
      </section>

      <footer className="footer">
        <p>© 2026 SEAN SAMENG. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;