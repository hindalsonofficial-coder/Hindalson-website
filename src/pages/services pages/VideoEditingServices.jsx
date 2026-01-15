import React from "react";
import { Link } from "react-router-dom";
import "../../app/App.css";
import pdfFile from "../../assets/Hindalson Technology.pdf";

export default function VideoEditingServices() {
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
          <span className="services-badge">CREATIVE SERVICES</span>

          <h1>
            Video Editing <br />
            <span className="gradient-text">Services</span> <br />
            <span className="gradient-text">Professional Quality</span>
          </h1>

          <p>
            Transform your raw footage into engaging, professional videos that captivate your audience. From social media reels to promotional videos, we deliver high-quality video content that drives engagement and conversions.
          </p>

          <div className="services-hero-buttons">
            <button onClick={handleDownloadPDF} className="btn services-primary">Get Quote</button>
            <Link to="/contact" className="btn services-secondary">Free Consultation</Link>
          </div>
          <hr />
          <div className="services-stats">
            <div><strong>500+</strong><span>Videos Edited</span></div>
            <div><strong>24/7</strong><span>Support</span></div>
            <div><strong>100%</strong><span>Satisfaction</span></div>
          </div>
        </div>

        <div className="services-hero-right">
          <img src="/full-stack-development.png" alt="Video Editing Services" />
        </div>
      </section>

      {/* Content Section */}
      <section className="services-content">
        {/* LEFT */}
        <div className="services-main">
          <h5>-OUR SERVICES</h5>
          <h2>Professional <em>Video Editing</em> Solutions</h2>
          <p className="desc">
            We offer comprehensive video editing services for all your content needs. From quick social media reels to professional promotional videos, our expert editors create engaging content that tells your story and connects with your audience.
          </p>

          <div className="icon-row">
            <div className="icon-card">
              <img src="/internet.png" alt="Reels & Shorts" />
              <span>Reels & Shorts</span>
            </div>

            <div className="icon-card">
              <img src="/cloud.png" alt="Promotional" />
              <span>Promotional</span>
            </div>

            <div className="icon-card">
              <img src="/micro.png" alt="Social Media" />
              <span>Social Media</span>
            </div>

            <div className="icon-card">
              <img src="/sensor.png" alt="AI Editing" />
              <span>AI Editing</span>
            </div>
          </div>

          <h3>Our Services</h3>

          <div className="services-grid">
            {/* Service 1: Reels / Shorts Editing */}
            <div className="service-card featured">
              <div className="service-badge">POPULAR</div>
              <div className="service-icon">
                <div className="service-icon-circle">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 2V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 2V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 10H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="12" cy="15" r="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              <h4>Reels / Shorts Editing</h4>
              <p className="service-description">
                Instagram, YouTube Shorts, Facebook Reels. Quick, engaging video content optimized for social media platforms to maximize reach and engagement.
              </p>
              <div className="service-features">
                <ul>
                  <li>✓ Instagram Reels</li>
                  <li>✓ YouTube Shorts</li>
                  <li>✓ Facebook Reels</li>
                  <li>✓ Trendy Effects & Transitions</li>
                  <li>✓ Fast Turnaround</li>
                </ul>
              </div>
              <div className="service-price">
                <span className="price-range">₹500 - ₹1,000</span>
                <span className="price-note">Per Video</span>
              </div>
              <button onClick={handleDownloadPDF} className="service-btn">Get Quote</button>
            </div>

            {/* Service 2: Promotional Video Editing */}
            <div className="service-card">
              <div className="service-icon">
                <div className="service-icon-circle">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.752 11.168L11.554 9.036C11.247 8.861 10.887 8.75 10.5 8.75H5.5C4.257 8.75 3.25 9.757 3.25 11V13C3.25 14.243 4.257 15.25 5.5 15.25H10.5C10.887 15.25 11.247 15.139 11.554 14.964L14.752 12.832C15.345 12.478 15.75 11.773 15.75 11C15.75 10.227 15.345 9.522 14.752 9.168Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              <h4>Promotional Video Editing</h4>
              <p className="service-description">
                Business promos, ads & brand videos. Professional video editing for marketing campaigns, product launches, and brand storytelling that drives results.
              </p>
              <div className="service-features">
                <ul>
                  <li>✓ Business Promotional Videos</li>
                  <li>✓ Advertisement Editing</li>
                  <li>✓ Brand Video Production</li>
                  <li>✓ Professional Color Grading</li>
                  <li>✓ Motion Graphics</li>
                </ul>
              </div>
              <div className="service-price">
                <span className="price-range">₹2,000 - ₹5,000</span>
                <span className="price-note">Per Video</span>
              </div>
              <button onClick={handleDownloadPDF} className="service-btn">Get Quote</button>
            </div>

            {/* Service 3: Social Media Video Package */}
            <div className="service-card featured">
              <div className="service-badge">BEST VALUE</div>
              <div className="service-icon">
                <div className="service-icon-circle">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 9H15V15H9V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M3 9H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 3V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              <h4>Social Media Video Package</h4>
              <p className="service-description">
                8-12 edited videos per month. Monthly subscription package for consistent social media content creation to keep your audience engaged.
              </p>
              <div className="service-features">
                <ul>
                  <li>✓ 8-12 Videos Monthly</li>
                  <li>✓ Multiple Platform Formats</li>
                  <li>✓ Consistent Branding</li>
                  <li>✓ Priority Support</li>
                  <li>✓ Content Strategy Included</li>
                </ul>
              </div>
              <div className="service-price">
                <span className="price-range">₹6,000 - ₹10,000</span>
                <span className="price-note">Per Month</span>
              </div>
              <button onClick={handleDownloadPDF} className="service-btn">Get Quote</button>
            </div>

            {/* Service 4: AI Video Editing */}
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
              <h4>AI Video Editing</h4>
              <p className="service-description">
                AI captions, transitions & effects. Cutting-edge AI-powered video editing with automated captions, smart transitions, and intelligent effects for modern content.
              </p>
              <div className="service-features">
                <ul>
                  <li>✓ AI-Generated Captions</li>
                  <li>✓ Smart Transitions</li>
                  <li>✓ AI Effects & Filters</li>
                  <li>✓ Auto Color Correction</li>
                  <li>✓ Voice Enhancement</li>
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
            <h3>Why Choose Our Video Editing Services?</h3>
            <div className="info-grid">
              <div className="info-card">
                <div className="info-icon">🎬</div>
                <h4>Professional Quality</h4>
                <p>Cinema-grade editing with attention to detail</p>
              </div>
              <div className="info-card">
                <div className="info-icon">⚡</div>
                <h4>Fast Turnaround</h4>
                <p>Quick delivery without compromising quality</p>
              </div>
              <div className="info-card">
                <div className="info-icon">🎨</div>
                <h4>Creative Excellence</h4>
                <p>Unique styles that make your content stand out</p>
              </div>
              <div className="info-card">
                <div className="info-icon">📱</div>
                <h4>Multi-Platform</h4>
                <p>Optimized for all social media platforms</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDEBAR */}
        <aside className="services-sidebar">
          <div className="services-quote-box">
            <span className="early">GET STARTED</span>
            <h2>Custom Quote</h2>
            <p className="sidebar-desc">Get a personalized quote based on your video editing needs</p>

            <ul>
              <li>
                <span>🎬 VIDEO TYPE</span>
                <p>Reels / Promo / Package</p>
              </li>
              <li>
                <span>⏱ DELIVERY</span>
                <p>24-48 Hours</p>
              </li>
              <li>
                <span>🔄 REVISIONS</span>
                <p>2-3 Included</p>
              </li>
              <li>
                <span>💬 SUPPORT</span>
                <p>24/7 Available</p>
              </li>
              <li>
                <span>📦 FORMATS</span>
                <p>All Formats Included</p>
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
