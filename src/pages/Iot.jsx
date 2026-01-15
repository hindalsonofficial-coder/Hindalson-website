import React from "react";
import { Link } from "react-router-dom";
import "../app/App.css";

export default function Iot() {
  return (
    <div className="mobile-page">
      {/* Hero Section */}
      <section className="mobile-hero">
        <div className="mobile-hero-left">
          <span className="mobile-badge">NEW BATCH STARTING SOON</span>

          <h1>
            Build <br />
            <span className="gradient-text">Smart Connected</span> <br />
            <span className="gradient-text">Devices IoT</span>
          </h1>

          <p>
            Learn to design and program embedded systems and IoT devices. Master microcontrollers, sensors, wireless communication, and cloud integration to create smart, connected solutions.
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
          <img src="/aii.jpg" alt="IoT Development" />
        </div>
      </section>

      {/* Content Section */}
      <section className="mobile-content">
        {/* LEFT */}
        <div className="mobile-main">
          <h5>-COURSE OVERVIEW</h5>
          <h2>Master the Art of <em>Embedded IoT Development</em></h2>
          <p className="desc">
            Master the art of building Internet of Things (IoT) devices and embedded systems. From Arduino to ESP32, learn to create smart devices that connect to the cloud and interact with the physical world. This comprehensive curriculum takes you through the full stack of IoT development.
          </p>

          <div className="icon-row">
            <div className="icon-card">
              <img src="/internet.png" alt="Microcontrollers" />
              <span>Microcontrollers</span>
            </div>

            <div className="icon-card">
              <img src="/cloud.png" alt="Sensors" />
              <span>Sensors</span>
            </div>

            <div className="icon-card">
              <img src="/micro.png" alt="Connectivity" />
              <span>Connectivity</span>
            </div>

            <div className="icon-card">
              <img src="/sensor.png" alt="Cloud Integration" />
              <span>Cloud Integration</span>
            </div>
          </div>

          <h3>What You'll Learn</h3>

          <div className="learn-grid">
            <div className="learn-card">
              <div className="learn-card-image">
                <img src="/internet.png" alt="Microcontrollers" />
              </div>
              <h4>Microcontrollers</h4>
              <ul>
                <li>Arduino Programming</li>
                <li>ESP32 Development</li>
                <li>C/C++ for Embedded</li>
              </ul>
            </div>

            <div className="learn-card">
              <div className="learn-card-image">
                <img src="/cloud.png" alt="Sensors & Actuators" />
              </div>
              <h4>Sensors & Actuators</h4>
              <ul>
                <li>Temperature Sensors</li>
                <li>Motion Detectors</li>
                <li>Motor Control</li>
              </ul>
            </div>

            <div className="learn-card">
              <div className="learn-card-image">
                <img src="/micro.png" alt="IoT Connectivity" />
              </div>
              <h4>IoT Connectivity</h4>
              <ul>
                <li>WiFi & Bluetooth</li>
                <li>MQTT Protocol</li>
                <li>Cloud Integration</li>
              </ul>
            </div>

            <div className="learn-card highlight">
              <div className="learn-card-image">
                <img src="/sensor.png" alt="Projects" />
              </div>
              <h4>Projects</h4>
              <ul>
                <li>Smart Home System</li>
                <li>Weather Station</li>
                <li>Automated Garden</li>
              </ul>
            </div>

            <div className="learn-card">
              <div className="learn-card-image">
                <img src="/internet.png" alt="IoT Deployment" />
              </div>
              <h4>IoT Deployment</h4>
              <ul>
                <li>Device Management</li>
                <li>Remote Monitoring</li>
                <li>Security Best Practices</li>
              </ul>
            </div>

            <div className="learn-card">
              <div className="learn-card-image">
                <img src="/cloud.png" alt="Advanced Topics" />
              </div>
              <h4>Advanced Topics</h4>
              <ul>
                <li>AI Integration</li>
                <li>Edge Computing</li>
                <li>Security & Privacy</li>
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
