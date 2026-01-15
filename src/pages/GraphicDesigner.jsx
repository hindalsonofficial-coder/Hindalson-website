import React from "react";
import { Link } from "react-router-dom";
import "../app/App.css";

export default function GraphicDesigner() {
  return (
    <div className="mobile-page">
      {/* Hero Section */}
      <section className="mobile-hero">
        <div className="mobile-hero-left">
          <span className="mobile-badge">ELITE MASTERCLASS SERIES</span>

          <h1>
            Create Stunning <br />
            <span className="gradient-text">Visual Designs</span>
          </h1>

          <p>
            An immersive journey into the world of luxury aesthetics. Master the art of high-fidelity visual storytelling with industry-leading mentors.
          </p>

          <div className="mobile-hero-buttons">
            <Link to="/registration" className="btn light">Enroll Now</Link>
          </div>
          <hr />
          <div className="mobile-stats">
            <div><strong>4</strong><span>Months</span></div>
            <div><strong>15+</strong><span>Projects</span></div>
            <div><strong>100%</strong><span>Placement</span></div>
          </div>
        </div>

        <div className="mobile-hero-right">
          <img src="/tech.jpg" alt="Graphic Design" />
        </div>
      </section>

      {/* Content Section */}
      <section className="mobile-content">
        {/* LEFT */}
        <div className="mobile-main">
          <h5>-COURSE OVERVIEW</h5>
          <h2>Master the Art of <em>Graphic Design</em></h2>
          <p className="desc">
            We transcend conventional education. This is an immersive ecosystem designed for strategic thinkers who demand excellence. Our curriculum is constantly calibrated with the pulse of global digital trends, ensuring you command the tools that drive tomorrow's economies.
          </p>

          <div className="icon-row">
            <div className="icon-card">
              <img src="/internet.png" alt="UI/UX Design" />
              <span>UI/UX Design</span>
            </div>

            <div className="icon-card">
              <img src="/cloud.png" alt="Branding" />
              <span>Branding</span>
            </div>

            <div className="icon-card">
              <img src="/micro.png" alt="Illustration" />
              <span>Illustration</span>
            </div>

            <div className="icon-card">
              <img src="/sensor.png" alt="Typography" />
              <span>Typography</span>
            </div>
          </div>

          <h3>What You'll Learn</h3>

          <div className="learn-grid">
            <div className="learn-card">
              <div className="learn-card-image">
                <img src="/internet.png" alt="UI/UX Design" />
              </div>
              <h4>UI/UX Design</h4>
              <ul>
                <li>User Interface Design</li>
                <li>User Experience Research</li>
                <li>Prototyping & Wireframing</li>
              </ul>
            </div>

            <div className="learn-card">
              <div className="learn-card-image">
                <img src="/cloud.png" alt="Brand Identity" />
              </div>
              <h4>Brand Identity</h4>
              <ul>
                <li>Logo Design Principles</li>
                <li>Brand Guidelines</li>
                <li>Visual Identity Systems</li>
              </ul>
            </div>

            <div className="learn-card">
              <div className="learn-card-image">
                <img src="/micro.png" alt="Digital Illustration" />
              </div>
              <h4>Digital Illustration</h4>
              <ul>
                <li>Vector Graphics</li>
                <li>Digital Painting</li>
                <li>Character Design</li>
              </ul>
            </div>

            <div className="learn-card highlight">
              <div className="learn-card-image">
                <img src="/sensor.png" alt="Projects" />
              </div>
              <h4>Projects</h4>
              <ul>
                <li>Complete Brand Package</li>
                <li>Website Design</li>
                <li>Marketing Materials</li>
              </ul>
            </div>

            <div className="learn-card">
              <div className="learn-card-image">
                <img src="/internet.png" alt="Typography" />
              </div>
              <h4>Typography</h4>
              <ul>
                <li>Type Selection</li>
                <li>Hierarchy & Layout</li>
                <li>Custom Type Design</li>
              </ul>
            </div>

            <div className="learn-card">
              <div className="learn-card-image">
                <img src="/cloud.png" alt="Print Design" />
              </div>
              <h4>Print Design</h4>
              <ul>
                <li>Brochure Design</li>
                <li>Poster Creation</li>
                <li>Packaging Design</li>
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
