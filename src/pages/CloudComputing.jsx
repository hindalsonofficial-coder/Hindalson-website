import React from "react";
import { Link } from "react-router-dom";
import "../app/App.css";

export default function CloudComputing() {
  return (
    <div className="mobile-page">
      {/* Hero Section */}
      <section className="mobile-hero">
        <div className="mobile-hero-left">
          <span className="mobile-badge">CLOUD COMPUTING CERTIFICATION</span>

          <h1>
            Master Cloud <br />
            <span className="gradient-text">Infrastructure</span> <br />
            <span className="gradient-text">& Services</span>
          </h1>

          <p>
            Learn AWS, Azure, and Google Cloud Platform. Master cloud architecture, deployment, scaling, and management. Build scalable applications and become a certified cloud professional with hands-on projects.
          </p>

          <div className="mobile-hero-buttons">
            <Link to="/registration" className="btn light">Enroll Now</Link>
          </div>
          <hr />
          <div className="mobile-stats">
            <div><strong>5</strong><span>Months</span></div>
            <div><strong>8+</strong><span>Projects</span></div>
            <div><strong>100%</strong><span>Placement</span></div>
          </div>
        </div>

        <div className="mobile-hero-right">
          <img src="/cloud.png" alt="Cloud Infrastructure" />
        </div>
      </section>

      {/* Content Section */}
      <section className="mobile-content">
        {/* LEFT */}
        <div className="mobile-main">
          <h5>-COURSE OVERVIEW</h5>
          <h2>Master the Art of <em>Cloud Computing</em></h2>
          <p className="desc">
            Master cloud computing platforms and services. Learn to design, deploy, and manage scalable cloud infrastructure. Get hands-on experience with the industry leaders: AWS, Azure, and GCP. Our curriculum is designed by industry experts to take you from architectural basics to advanced deployment strategies.
          </p>

          <div className="icon-row">
            <div className="icon-card">
              <img src="/internet.png" alt="AWS" />
              <span>AWS Services</span>
            </div>

            <div className="icon-card">
              <img src="/cloud.png" alt="Azure" />
              <span>Azure Platform</span>
            </div>

            <div className="icon-card">
              <img src="/micro.png" alt="Google Cloud" />
              <span>Google Cloud</span>
            </div>

            <div className="icon-card">
              <img src="/sensor.png" alt="DevOps" />
              <span>DevOps</span>
            </div>
          </div>

          <h3>What You'll Learn</h3>

          <div className="learn-grid">
            <div className="learn-card">
              <div className="learn-card-image">
                <img src="/internet.png" alt="AWS Services" />
              </div>
              <h4>AWS Services</h4>
              <ul>
                <li>EC2 & S3 Masterclass</li>
                <li>Lambda Serverless Functions</li>
                <li>RDS & DynamoDB Database</li>
              </ul>
            </div>

            <div className="learn-card">
              <div className="learn-card-image">
                <img src="/cloud.png" alt="Azure Platform" />
              </div>
              <h4>Azure Platform</h4>
              <ul>
                <li>Azure Virtual Machines</li>
                <li>Azure Functions Development</li>
                <li>Cosmos DB Implementation</li>
              </ul>
            </div>

            <div className="learn-card">
              <div className="learn-card-image">
                <img src="/micro.png" alt="Google Cloud" />
              </div>
              <h4>Google Cloud</h4>
              <ul>
                <li>Google Compute Engine</li>
                <li>Cloud Storage Optimization</li>
                <li>Cloud Functions & Pub/Sub</li>
              </ul>
            </div>

            <div className="learn-card highlight">
              <div className="learn-card-image">
                <img src="/sensor.png" alt="Projects" />
              </div>
              <h4>Projects</h4>
              <ul>
                <li>Cloud Migration Project</li>
                <li>Scalable Web Application</li>
                <li>Serverless Architecture</li>
              </ul>
            </div>

            <div className="learn-card">
              <div className="learn-card-image">
                <img src="/internet.png" alt="DevOps" />
              </div>
              <h4>DevOps & Automation</h4>
              <ul>
                <li>CI/CD Pipeline Automation</li>
                <li>Docker & Kubernetes</li>
                <li>Infrastructure as Code</li>
              </ul>
            </div>

            <div className="learn-card">
              <div className="learn-card-image">
                <img src="/cloud.png" alt="Security" />
              </div>
              <h4>Cloud Security</h4>
              <ul>
                <li>Identity & Access Management</li>
                <li>Network Security</li>
                <li>Compliance & Governance</li>
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
                <p>5 Months</p>
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
                <p>AWS/Azure Prep</p>
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
