// FullStackCourse.jsx - Full Stack Development Course Page
import React from "react";
import { Link } from "react-router-dom";
import "../app/App.css";

export default function FullStackCourse() {
  return (
    <div className="mobile-page">
      {/* Hero Section */}
      <section className="mobile-hero">
        <div className="mobile-hero-left">
          <span className="mobile-badge">PREMIUM COURSE</span>

          <h1>
            Master <br />
            <span className="gradient-text">Full Stack</span> <br />
            <span className="gradient-text">Development</span>
          </h1>

          <p>
            Transform your career with our flagship program. Build sophisticated web applications from scratch using modern industry-standard technologies.
          </p>

          <div className="mobile-hero-buttons">
            <Link to="/registration" className="btn light">Enroll Now</Link>
          </div>
          <hr />
          <div className="mobile-stats">
            <div><strong>6</strong><span>Months</span></div>
            <div><strong>10+</strong><span>Projects</span></div>
            <div><strong>100%</strong><span>Placement</span></div>
          </div>
        </div>

        <div className="mobile-hero-right">
          <img src="/full-stack-development.png" alt="Full Stack Development" />
        </div>
      </section>

      {/* Content Section */}
      <section className="mobile-content">
        {/* LEFT */}
        <div className="mobile-main">
          <h5>-COURSE OVERVIEW</h5>
          <h2>Master the Art of <em>Full Stack Development</em></h2>
          <p className="desc">
            Our Full Stack Development course is meticulously designed to take you from a beginner to a job-ready developer. You'll master both frontend and backend technologies, construct robust real-world projects, and receive mentorship from seasoned industry experts.
          </p>

          <div className="icon-row">
            <div className="icon-card">
              <img src="/internet.png" alt="Frontend" />
              <span>Frontend</span>
            </div>

            <div className="icon-card">
              <img src="/cloud.png" alt="Backend" />
              <span>Backend</span>
            </div>

            <div className="icon-card">
              <img src="/micro.png" alt="Database" />
              <span>Database</span>
            </div>

            <div className="icon-card">
              <img src="/sensor.png" alt="Deployment" />
              <span>Deployment</span>
            </div>
          </div>

          <h3>What You'll Learn</h3>

          <div className="learn-grid">
            <div className="learn-card">
              <div className="learn-card-image">
                <img src="/internet.png" alt="Frontend Development" />
              </div>
              <h4>Frontend Development</h4>
              <ul>
                <li>HTML5, CSS3 & Modern JavaScript</li>
                <li>React.js / Vue.js Frameworks</li>
                <li>Tailwind CSS & Responsive Design</li>
              </ul>
            </div>

            <div className="learn-card">
              <div className="learn-card-image">
                <img src="/cloud.png" alt="Backend Development" />
              </div>
              <h4>Backend Development</h4>
              <ul>
                <li>Node.js & Express Environment</li>
                <li>RESTful APIs & GraphQL</li>
                <li>MongoDB & SQL Databases</li>
              </ul>
            </div>

            <div className="learn-card">
              <div className="learn-card-image">
                <img src="/micro.png" alt="Tools & Deployment" />
              </div>
              <h4>Tools & Deployment</h4>
              <ul>
                <li>Git, GitHub & Version Control</li>
                <li>Docker Containerization</li>
                <li>AWS / Vercel Cloud Deployment</li>
              </ul>
            </div>

            <div className="learn-card highlight">
              <div className="learn-card-image">
                <img src="/sensor.png" alt="Projects" />
              </div>
              <h4>Projects</h4>
              <ul>
                <li>E-commerce Platform</li>
                <li>Social Media App</li>
                <li>Portfolio Website</li>
              </ul>
            </div>

            <div className="learn-card">
              <div className="learn-card-image">
                <img src="/internet.png" alt="APIs" />
              </div>
              <h4>APIs & Integration</h4>
              <ul>
                <li>RESTful API Design</li>
                <li>Third-party Integrations</li>
                <li>Authentication & Security</li>
              </ul>
            </div>

            <div className="learn-card">
              <div className="learn-card-image">
                <img src="/cloud.png" alt="DevOps" />
              </div>
              <h4>DevOps & CI/CD</h4>
              <ul>
                <li>Continuous Integration</li>
                <li>Automated Testing</li>
                <li>Production Deployment</li>
              </ul>
            </div>
          </div>
        </div>

        {/* RIGHT SIDEBAR */}
        <aside className="mobile-sidebar">
          <div className="price-box">
            <span className="early">EARLY BIRD</span>
            <h2>₹20,000</h2>
            <p className="strike">₹25,000</p>

            <ul>
              <li>
                <span>⏱ DURATION</span>
                <p>6 Months</p>
              </li>
              <li>
                <span>📘 LEVEL</span>
                <p>Beginner to Advanced</p>
              </li>
              <li>
                <span>🌐 MODE</span>
                <p>Online & Offline</p>
              </li>
              <li>
                <span>🎓 CERTIFICATE</span>
                <p>Industry Certificate</p>
              </li>
              <li>
                <span>💼 PLACEMENT</span>
                <p>100% Assistance</p>
              </li>
            </ul>

            <Link to="/registration" className="btn full dark">Enroll Now</Link>
            <ul>
              <li>Limited Seats Available</li>
            </ul>
          </div>
        </aside>
      </section>
    </div>
  );
}
