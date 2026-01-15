import React from "react";
import { Link } from "react-router-dom";
import "../app/App.css";

export default function AiRobotics() {
  return (
    <div className="mobile-page">
      {/* Hero Section */}
      <section className="mobile-hero">
        <div className="mobile-hero-left">
          <span className="mobile-badge" style={{background: '#10b981'}}>NEW COHORT ENROLLING</span>
            
          <h1>
            Master <br />
            <span className="gradient-text">Artificial Intelligence</span> <br />
            <span className="gradient-text">& Robotics</span>
            </h1>
            
          <p>
              An elite masterclass in building intelligent systems. Dive into machine learning, computer vision, and robotics programming. Create autonomous agents that interact with the physical world from scratch.
            </p>
            
          <div className="mobile-hero-buttons">
            <Link to="/registration" className="btn light">Enroll Now</Link>
          </div>
          <hr />
          <div className="mobile-stats">
            <div><strong>7</strong><span>Months</span></div>
            <div><strong>12+</strong><span>Projects</span></div>
            <div><strong>100%</strong><span>Placement</span></div>
          </div>
        </div>

        <div className="mobile-hero-right">
          <img src="/ai.jpg" alt="AI & Robotics" />
        </div>
      </section>

      {/* Content Section */}
      <section className="mobile-content">
        {/* LEFT */}
        <div className="mobile-main">
          <h5>-COURSE OVERVIEW</h5>
          <h2>Master the Art of <em>Intelligent Systems</em></h2>
          <p className="desc">
                Embark on a transformative journey into Artificial Intelligence and Robotics. This curriculum is meticulously crafted to bridge the gap between theoretical algorithms and physical world application. You will not just learn to code; you will learn to architect intelligent, autonomous systems that can see, learn, and act.
              </p>

          <div className="icon-row">
                <div className="icon-card">
              <img src="/internet.png" alt="Machine Learning" />
                  <span>Machine Learning</span>
                </div>

                <div className="icon-card">
              <img src="/cloud.png" alt="Computer Vision" />
                  <span>Computer Vision</span>
                </div>

                <div className="icon-card">
              <img src="/micro.png" alt="Robotics" />
                  <span>Robotics (ROS)</span>
                </div>

                <div className="icon-card">
              <img src="/sensor.png" alt="Deep Learning" />
                  <span>Deep Learning</span>
                </div>
              </div>

          <h3>What You'll Learn</h3>

          <div className="learn-grid">
            <div className="learn-card">
              <div className="learn-card-image">
                <img src="/internet.png" alt="Foundation of AI" />
              </div>
              <h4>Foundation of AI</h4>
              <ul>
                    <li>Python for AI Mastery</li>
                    <li>Neural Networks Basics</li>
                    <li>Data Structures & Algo</li>
                  </ul>
                </div>

                <div className="learn-card">
              <div className="learn-card-image">
                <img src="/cloud.png" alt="Robotics Core" />
              </div>
              <h4>Robotics Core</h4>
              <ul>
                    <li>Robot Operating System (ROS)</li>
                    <li>Arduino & Raspberry Pi</li>
                    <li>Sensor Integration</li>
                  </ul>
                </div>

                <div className="learn-card">
              <div className="learn-card-image">
                <img src="/micro.png" alt="Computer Vision" />
              </div>
              <h4>Computer Vision</h4>
              <ul>
                    <li>Image Processing & OpenCV</li>
                    <li>Object Detection (YOLO)</li>
                    <li>Face Recognition</li>
                  </ul>
                </div>

            <div className="learn-card highlight">
              <div className="learn-card-image">
                <img src="/sensor.png" alt="Projects" />
              </div>
              <h4>Projects</h4>
              <ul>
                    <li>Autonomous Delivery Robot</li>
                    <li>Custom Image Classifier</li>
                    <li>Intelligent Chatbot</li>
                  </ul>
                </div>

            <div className="learn-card">
              <div className="learn-card-image">
                <img src="/internet.png" alt="Deep Learning" />
              </div>
              <h4>Deep Learning</h4>
              <ul>
                <li>TensorFlow & PyTorch</li>
                <li>CNN & RNN Architectures</li>
                <li>Transfer Learning</li>
              </ul>
            </div>

            <div className="learn-card">
              <div className="learn-card-image">
                <img src="/cloud.png" alt="Advanced Topics" />
              </div>
              <h4>Advanced Topics</h4>
              <ul>
                <li>Reinforcement Learning</li>
                <li>Natural Language Processing</li>
                <li>AI Ethics & Safety</li>
              </ul>
            </div>
                </div>
              </div>
              
        {/* RIGHT SIDEBAR */}
        <aside className="mobile-sidebar">
          <div className="price-box">
            <span className="early">EARLY BIRD</span>
            <h2>₹20,000</h2>
            <p className="strike">₹26,000</p>

            <ul>
              <li>
                <span>⏱ DURATION</span>
                <p>7 Months</p>
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
