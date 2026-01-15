import React from "react";
import { Link } from "react-router-dom";
import "../app/App.css";

export default function MoreTechnology() {
  return (
    <div className="mobile-page">
      {/* Hero Section */}
      <section className="mobile-hero">
        <div className="mobile-hero-left">
          <span className="mobile-badge">PRESTIGE TECH TIER</span>

          <h1>
            Cutting-Edge <br />
            <span className="gradient-text">Technology</span> <br />
            <span className="gradient-text">Solutions</span>
          </h1>

          <p>
            Empowering enterprises with next-generation technology infrastructure. We deliver scalable, secure, and innovative solutions that drive digital transformation.
          </p>

          <div className="mobile-hero-buttons">
            <Link to="/registration" className="btn light">Get Started</Link>
          </div>
          <hr />
          <div className="mobile-stats">
            <div><strong>6</strong><span>Months</span></div>
            <div><strong>12+</strong><span>Projects</span></div>
            <div><strong>100%</strong><span>Support</span></div>
          </div>
        </div>

        <div className="mobile-hero-right">
          <img src="/tech.jpg" alt="Technology Solutions" />
        </div>
      </section>

      {/* Content Section */}
      <section className="mobile-content">
        {/* LEFT */}
        <div className="mobile-main">
          <h5>-COURSE OVERVIEW</h5>
          <h2>Master the Art of <em>Advanced Technology</em></h2>
          <p className="desc">
            Our comprehensive suite of technology services is designed to elevate your business operations. From AI-driven insights to cloud infrastructure, we provide end-to-end solutions.
          </p>

          <div className="icon-row">
            <div className="icon-card">
              <img src="/internet.png" alt="AI & ML" />
              <span>AI & ML</span>
            </div>

            <div className="icon-card">
              <img src="/cloud.png" alt="Blockchain" />
              <span>Blockchain</span>
            </div>

            <div className="icon-card">
              <img src="/micro.png" alt="IoT" />
              <span>IoT</span>
            </div>

            <div className="icon-card">
              <img src="/sensor.png" alt="Cloud" />
              <span>Cloud</span>
            </div>
          </div>

          <h3>What You'll Learn</h3>

          <div className="learn-grid">
            <div className="learn-card">
              <div className="learn-card-image">
                <img src="/internet.png" alt="AI & Machine Learning" />
              </div>
              <h4>AI & Machine Learning</h4>
              <ul>
                <li>Neural Network Architecture</li>
                <li>Predictive Analytics</li>
                <li>Deep Learning Models</li>
              </ul>
            </div>

            <div className="learn-card">
              <div className="learn-card-image">
                <img src="/cloud.png" alt="Blockchain Systems" />
              </div>
              <h4>Blockchain Systems</h4>
              <ul>
                <li>Smart Contract Development</li>
                <li>Decentralized Applications</li>
                <li>Cryptocurrency Integration</li>
              </ul>
            </div>

            <div className="learn-card">
              <div className="learn-card-image">
                <img src="/micro.png" alt="IoT Ecosystems" />
              </div>
              <h4>IoT Ecosystems</h4>
              <ul>
                <li>Sensor Integration</li>
                <li>Edge Computing</li>
                <li>Real-time Data Processing</li>
              </ul>
            </div>

            <div className="learn-card highlight">
              <div className="learn-card-image">
                <img src="/sensor.png" alt="Projects" />
              </div>
              <h4>Projects</h4>
              <ul>
                <li>Enterprise Solutions</li>
                <li>Scalable Infrastructure</li>
                <li>Digital Transformation</li>
              </ul>
            </div>

            <div className="learn-card">
              <div className="learn-card-image">
                <img src="/internet.png" alt="Cloud Infrastructure" />
              </div>
              <h4>Cloud Infrastructure</h4>
              <ul>
                <li>Multi-Cloud Deployment</li>
                <li>Serverless Architecture</li>
                <li>Auto-scaling Solutions</li>
              </ul>
            </div>

            <div className="learn-card">
              <div className="learn-card-image">
                <img src="/cloud.png" alt="DevOps & Automation" />
              </div>
              <h4>DevOps & Automation</h4>
              <ul>
                <li>CI/CD Pipelines</li>
                <li>Infrastructure as Code</li>
                <li>Container Orchestration</li>
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
                <p>Intermediate to Advanced</p>
              </li>
              <li>
                <span>🌐 MODE</span>
                <p>Online & Offline</p>
              </li>
              <li>
                <span>🎓 CERTIFICATE</span>
                <p>Industry Recognized</p>
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
