import React from "react";
import { Link } from "react-router-dom";
import "../app/App.css";

export default function Mobileapp() {
  return (
    <div className="mobile-page">

      {/* ================= HERO ================= */}
      <section className="mobile-hero">
        <div className="mobile-hero-left">
          <span className="mobile-badge">NEW BATCH STARTING SOON</span>

          <h1>
            Build <br />
            <span className="gradient-text">Powerful Mobile</span> <br />
            <span className="gradient-text">Applications iOS & Android</span>
          </h1>

          <p>
            Master mobile app development from scratch. Learn React Native, Flutter, 
            native iOS and Android development. Build real-world apps and deploy them 
            to app stores.
          </p>

          <div className="mobile-hero-buttons">
            <Link to="/registration" className="btn light">Enroll Now</Link>
          </div>
          <hr />
          <div className="mobile-stats">
            <div><strong>6</strong><span>Months</span></div>
            <div><strong>15+</strong><span>Projects</span></div>
            <div><strong>100%</strong><span>Placement</span></div>
          </div>
        </div>

        <div className="mobile-hero-right">
          <img src="/mob.jpg" alt="Mobile App Development" />
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="mobile-content">

        {/* LEFT */}
        <div className="mobile-main">
          <h5>-COURSE OVERVIEW</h5>
          <h2>Master the Art of <em>Mobile Development</em></h2>
          <p className="desc">
            From React Native to Flutter, build cross-platform and native mobile 
            applications. Learn app design, state management, APIs integration, 
            and app store deployment.
          </p>

          <div className="icon-row">
            <div className="icon-card">
              <img src="/internet.png" alt="React Native" />
              <span>React Native</span>
            </div>

            <div className="icon-card">
              <img src="/cloud.png" alt="Flutter" />
              <span>Flutter</span>
            </div>

            <div className="icon-card">
              <img src="/micro.png" alt="iOS Development" />
              <span>iOS Development</span>
            </div>

            <div className="icon-card">
              <img src="/sensor.png" alt="Android Development" />
              <span>Android Development</span>
            </div>
          </div>

          <h3>What You'll Learn</h3>

          <div className="learn-grid">
            <div className="learn-card">
              <div className="learn-card-image">
                <img src="/internet.png" alt="React Native" />
              </div>
              <h4>React Native</h4>
              <ul>
                <li>Component Architecture</li>
                <li>State Management (Redux)</li>
                <li>Navigation & Routing</li>
              </ul>
            </div>

            <div className="learn-card">
              <div className="learn-card-image">
                <img src="/cloud.png" alt="Flutter" />
              </div>
              <h4>Flutter Development</h4>
              <ul>
                <li>Dart Programming</li>
                <li>Widget Architecture</li>
                <li>Material Design</li>
              </ul>
            </div>

            <div className="learn-card">
              <div className="learn-card-image">
                <img src="/micro.png" alt="iOS" />
              </div>
              <h4>iOS Development</h4>
              <ul>
                <li>Swift Programming</li>
                <li>UIKit & SwiftUI</li>
                <li>App Store Deployment</li>
              </ul>
            </div>

            <div className="learn-card highlight">
              <div className="learn-card-image">
                <img src="/sensor.png" alt="Projects" />
              </div>
              <h4>Projects</h4>
              <ul>
                <li>E-commerce App</li>
                <li>Social Media App</li>
                <li>Fitness Tracker</li>
              </ul>
            </div>

            <div className="learn-card">
              <div className="learn-card-image">
                <img src="/internet.png" alt="APIs" />
              </div>
              <h4>APIs & Backend</h4>
              <ul>
                <li>RESTful APIs</li>
                <li>Firebase Integration</li>
                <li>Authentication</li>
              </ul>
            </div>

            <div className="learn-card">
              <div className="learn-card-image">
                <img src="/cloud.png" alt="Deployment" />
              </div>
              <h4>App Deployment</h4>
              <ul>
                <li>App Store Submission</li>
                <li>Play Store Publishing</li>
                <li>CI/CD Pipeline</li>
              </ul>
            </div>
          </div>

        </div>

        {/* RIGHT SIDEBAR */}
        <aside className="mobile-sidebar">
          <div className="price-box">
            <span className="early">EARLY BIRD</span>
            <h2>₹25,000</h2>
            <p className="strike">₹30,000</p>

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
