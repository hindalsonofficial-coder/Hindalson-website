import React from "react";
import { Link } from "react-router-dom";
import "../../app/App.css";
import pdfFile from "../../assets/Hindalson Technology.pdf";

export default function SocialMediaManagementServices() {
  const handleDownloadPDF = () => {
    const link = document.createElement("a");
    link.href = pdfFile;
    link.download = "Hindalson Technology.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="services-hero">
        <div className="services-hero-left">
          <span className="services-badge">MARKETING SERVICES</span>

          <h1>
            Social Media <br />
            <span className="gradient-text">Management</span> <br />
            <span className="gradient-text">Services</span>
          </h1>

          <p>
            Grow your online presence with professional social media management. We create engaging content, develop strategies, and manage your social media accounts to help you connect with your audience and grow your brand.
          </p>

          <div className="services-hero-buttons">
            <button onClick={handleDownloadPDF} className="btn services-primary">Get Quote</button>
            <Link to="/contact" className="btn services-secondary">Free Consultation</Link>
          </div>
          <hr />
          <div className="services-stats">
            <div><strong>100+</strong><span>Accounts Managed</span></div>
            <div><strong>24/7</strong><span>Support</span></div>
            <div><strong>100%</strong><span>Satisfaction</span></div>
          </div>
        </div>

        <div className="services-hero-right">
          <img src="/full-stack-development.png" alt="Social Media Management Services" />
        </div>
      </section>

      {/* Content Section */}
      <section className="services-content">
        {/* LEFT */}
        <div className="services-main">
          <h5>-OUR SERVICES</h5>
          <h2>Professional <em>Social Media Management</em> Solutions</h2>
          <p className="desc">
            We offer comprehensive social media management packages to help your business maintain a consistent online presence. From content creation to strategy development and automated posting, we handle all aspects of your social media management.
          </p>

          <div className="icon-row">
            <div className="icon-card">
              <img src="/internet.png" alt="Content Creation" />
              <span>Content Creation</span>
            </div>

            <div className="icon-card">
              <img src="/cloud.png" alt="Strategy" />
              <span>Strategy</span>
            </div>

            <div className="icon-card">
              <img src="/micro.png" alt="Automation" />
              <span>Automation</span>
            </div>

            <div className="icon-card">
              <img src="/sensor.png" alt="Analytics" />
              <span>Analytics</span>
            </div>
          </div>

          <h3>Our Packages</h3>

          <div className="services-grid">
            {/* Package 1: Basic Package */}
            <div className="service-card">
              <div className="service-icon">
                <div className="service-icon-circle">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 9H15V15H9V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              <h4>Basic Package</h4>
              <p className="service-description">
                Perfect for small businesses starting their social media journey. Get consistent content that engages your audience and builds your online presence.
              </p>
              <div className="service-features">
                <ul>
                  <li>✓ 8 Posts Per Month</li>
                  <li>✓ Custom Captions</li>
                  <li>✓ Hashtag Research</li>
                  <li>✓ Content Scheduling</li>
                  <li>✓ Basic Analytics</li>
                </ul>
              </div>
              <div className="service-price">
                <span className="price-range">₹4,000</span>
                <span className="price-note">Per Month</span>
              </div>
              <button onClick={handleDownloadPDF} className="service-btn">Get Started</button>
            </div>

            {/* Package 2: Standard Package */}
            <div className="service-card featured">
              <div className="service-badge">POPULAR</div>
              <div className="service-icon">
                <div className="service-icon-circle">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              <h4>Standard Package</h4>
              <p className="service-description">
                Ideal for growing businesses. Includes strategic content planning and professional captions to maximize engagement and reach.
              </p>
              <div className="service-features">
                <ul>
                  <li>✓ 12 Posts Per Month</li>
                  <li>✓ Custom Captions</li>
                  <li>✓ Content Strategy</li>
                  <li>✓ Hashtag Research</li>
                  <li>✓ Engagement Management</li>
                </ul>
              </div>
              <div className="service-price">
                <span className="price-range">₹6,000</span>
                <span className="price-note">Per Month</span>
              </div>
              <button onClick={handleDownloadPDF} className="service-btn">Get Started</button>
            </div>

            {/* Package 3: Premium Package */}
            <div className="service-card featured">
              <div className="service-badge">PREMIUM</div>
              <div className="service-icon">
                <div className="service-icon-circle">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              <h4>Premium Package</h4>
              <p className="service-description">
                Complete social media solution for established businesses. Includes video content, advanced strategy, and comprehensive management.
              </p>
              <div className="service-features">
                <ul>
                  <li>✓ 20 Posts Per Month</li>
                  <li>✓ Content Strategy</li>
                  <li>✓ Reels Creation</li>
                  <li>✓ Advanced Analytics</li>
                  <li>✓ Community Management</li>
                </ul>
              </div>
              <div className="service-price">
                <span className="price-range">₹8,000</span>
                <span className="price-note">Per Month</span>
              </div>
              <button onClick={handleDownloadPDF} className="service-btn">Get Started</button>
            </div>

            {/* Package 4: Custom Package */}
            <div className="service-card">
              <div className="service-icon">
                <div className="service-icon-circle">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              <h4>Custom Package</h4>
              <p className="service-description">
                Tailored solution for enterprise clients. AI-powered posting, advanced automation, and custom features designed for your specific needs.
              </p>
              <div className="service-features">
                <ul>
                  <li>✓ AI-Powered Posting</li>
                  <li>✓ Advanced Automation</li>
                  <li>✓ Custom Content Strategy</li>
                  <li>✓ Multi-Platform Management</li>
                  <li>✓ Dedicated Account Manager</li>
                </ul>
              </div>
              <div className="service-price">
                <span className="price-range">On Request</span>
                <span className="price-note">Custom Pricing</span>
              </div>
              <button onClick={handleDownloadPDF} className="service-btn">Get Quote</button>
            </div>
          </div>

          {/* Additional Information */}
          <div className="service-info-section">
            <h3>Why Choose Our Social Media Management Services?</h3>
            <div className="info-grid">
              <div className="info-card">
                <div className="info-icon">📈</div>
                <h4>Growth Focused</h4>
                <p>Strategies designed to grow your followers and engagement</p>
              </div>
              <div className="info-card">
                <div className="info-icon">🎯</div>
                <h4>Targeted Content</h4>
                <p>Content tailored to your audience and business goals</p>
              </div>
              <div className="info-card">
                <div className="info-icon">🤖</div>
                <h4>AI Automation</h4>
                <p>Advanced automation for efficient content management</p>
              </div>
              <div className="info-card">
                <div className="info-icon">📊</div>
                <h4>Performance Tracking</h4>
                <p>Detailed analytics to measure and improve results</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDEBAR */}
        <aside className="services-sidebar">
          <div className="services-quote-box">
            <span className="early">GET STARTED</span>
            <h2>Choose Package</h2>
            <p className="sidebar-desc">Select the perfect package for your social media needs</p>

            <ul>
              <li>
                <span>📱 PLATFORMS</span>
                <p>Instagram / Facebook / LinkedIn</p>
              </li>
              <li>
                <span>📅 POSTING</span>
                <p>Daily / Weekly Schedule</p>
              </li>
              <li>
                <span>🔄 UPDATES</span>
                <p>Monthly Strategy Review</p>
              </li>
              <li>
                <span>💬 SUPPORT</span>
                <p>24/7 Available</p>
              </li>
              <li>
                <span>📊 ANALYTICS</span>
                <p>Monthly Reports Included</p>
              </li>
            </ul>

            <button onClick={handleDownloadPDF} className="btn full dark">Request Quote</button>
            <ul className="sidebar-note">
              <li>Free Consultation Available</li>
            </ul>
          </div>
        </aside>
      </section>
    </div>
  );
}
