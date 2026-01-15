import React from "react";
import { Link } from "react-router-dom";
import "../app/App.css";

export default function DigitalMarketing() {
  return (
    <div className="mobile-page">
      {/* Hero Section */}
      <section className="mobile-hero">
        <div className="mobile-hero-left">
          <span className="mobile-badge">THE ELITE STANDARD</span>

          <h1>
            Master <br />
            <span className="gradient-text">Digital Marketing</span> <br />
            <span className="gradient-text">& Growth</span>
          </h1>

          <p>
            Forge your path as a market leader with our high-fashion approach to digital dominance. Where data-driven strategy meets creative excellence.
          </p>

          <div className="mobile-hero-buttons">
            <Link to="/registration" className="btn light">Enroll Now</Link>
          </div>
          <hr />
          <div className="mobile-stats">
            <div><strong>4</strong><span>Months</span></div>
            <div><strong>10+</strong><span>Projects</span></div>
            <div><strong>100%</strong><span>Placement</span></div>
          </div>
        </div>

        <div className="mobile-hero-right">
          <img src="/tech.jpg" alt="Digital Marketing" />
        </div>
      </section>

      {/* Content Section */}
      <section className="mobile-content">
        {/* LEFT */}
        <div className="mobile-main">
          <h5>-COURSE OVERVIEW</h5>
          <h2>Master the Art of <em>Digital Marketing</em></h2>
          <p className="desc">
            We transcend conventional education. This is an immersive ecosystem designed for strategic thinkers who demand excellence. Our curriculum is constantly calibrated with the pulse of global digital trends, ensuring you command the tools that drive tomorrow's economies.
          </p>

          <div className="icon-row">
            <div className="icon-card">
              <img src="/internet.png" alt="SEO" />
              <span>SEO & Content</span>
            </div>

            <div className="icon-card">
              <img src="/cloud.png" alt="Social Media" />
              <span>Social Media</span>
            </div>

            <div className="icon-card">
              <img src="/micro.png" alt="PPC Advertising" />
              <span>PPC Advertising</span>
            </div>

            <div className="icon-card">
              <img src="/sensor.png" alt="Analytics" />
              <span>Analytics</span>
            </div>
          </div>

          <h3>What You'll Learn</h3>

          <div className="learn-grid">
            <div className="learn-card">
              <div className="learn-card-image">
                <img src="/internet.png" alt="SEO & Content" />
              </div>
              <h4>SEO & Content Architecture</h4>
              <ul>
                <li>Semantic Optimization</li>
                <li>Technical Architecture</li>
                <li>Narrative Strategy</li>
              </ul>
            </div>

            <div className="learn-card">
              <div className="learn-card-image">
                <img src="/cloud.png" alt="Social Ecosystems" />
              </div>
              <h4>Social Ecosystems</h4>
              <ul>
                <li>Algorithm Influence</li>
                <li>Community Governance</li>
                <li>Viral Mechanics</li>
              </ul>
            </div>

            <div className="learn-card">
              <div className="learn-card-image">
                <img src="/micro.png" alt="Precision Advertising" />
              </div>
              <h4>Precision Advertising</h4>
              <ul>
                <li>Performance PPC</li>
                <li>Retargeting Layers</li>
                <li>Media Buying</li>
              </ul>
            </div>

            <div className="learn-card highlight">
              <div className="learn-card-image">
                <img src="/sensor.png" alt="Projects" />
              </div>
              <h4>Projects</h4>
              <ul>
                <li>Complete Campaign Strategy</li>
                <li>Brand Growth Plan</li>
                <li>ROI Optimization</li>
              </ul>
            </div>

            <div className="learn-card">
              <div className="learn-card-image">
                <img src="/internet.png" alt="Analytics Intelligence" />
              </div>
              <h4>Analytics Intelligence</h4>
              <ul>
                <li>GA4 Mastery</li>
                <li>Tag Management</li>
                <li>CRM Synergy</li>
              </ul>
            </div>

            <div className="learn-card">
              <div className="learn-card-image">
                <img src="/cloud.png" alt="Email Marketing" />
              </div>
              <h4>Email Marketing</h4>
              <ul>
                <li>Automation Workflows</li>
                <li>Segmentation Strategies</li>
                <li>Conversion Optimization</li>
              </ul>
            </div>
          </div>
        </div>

        {/* RIGHT SIDEBAR */}
        <aside className="mobile-sidebar">
          <div className="price-box">
            <span className="early">EARLY BIRD</span>
            <h2>₹10,000</h2>
            <p className="strike">₹15,000</p>

            <ul>
              <li>
                <span>⏱ DURATION</span>
                <p>4 Months</p>
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
