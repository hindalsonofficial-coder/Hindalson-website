import React from "react";
import { Link } from "react-router-dom";
import "../../app/App.css";
import pdfFile from "../../assets/Hindalson Technology.pdf";

export default function UIUXServices() {
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
            UI/UX <br />
            <span className="gradient-text">Design</span> <br />
            <span className="gradient-text">Services</span>
          </h1>

          <p>
            Transform your digital presence with professional UI/UX design services. From website interfaces to mobile apps, dashboards, and landing pages, we create user-centered designs that drive conversions and enhance user experience.
          </p>

          <div className="services-hero-buttons">
            <button onClick={handleDownloadPDF} className="btn services-primary">Get Quote</button>
            <Link to="/contact" className="btn services-secondary">Free Consultation</Link>
          </div>
          <hr />
          <div className="services-stats">
            <div><strong>200+</strong><span>Designs Created</span></div>
            <div><strong>24/7</strong><span>Support</span></div>
            <div><strong>100%</strong><span>Satisfaction</span></div>
          </div>
        </div>

        <div className="services-hero-right">
          <img src="/full-stack-development.png" alt="UI/UX & Branding Services" />
        </div>
      </section>

      {/* Content Section */}
      <section className="services-content">
        {/* LEFT */}
        <div className="services-main">
          <h5>-OUR SERVICES</h5>
          <h2>Professional <em>UI/UX Design</em> Solutions</h2>
          <p className="desc">
            We offer comprehensive UI/UX design services to create intuitive, beautiful, and conversion-focused digital experiences. From website interfaces to mobile apps, dashboards, and landing pages, we design with users in mind to drive engagement and business growth.
          </p>

          <div className="icon-row">
            <div className="icon-card">
              <img src="/internet.png" alt="Website UI" />
              <span>Website UI</span>
            </div>

            <div className="icon-card">
              <img src="/cloud.png" alt="Mobile App UI" />
              <span>Mobile App UI</span>
            </div>

            <div className="icon-card">
              <img src="/micro.png" alt="UX Wireframing" />
              <span>UX Wireframing</span>
            </div>

            <div className="icon-card">
              <img src="/sensor.png" alt="Dashboard Design" />
              <span>Dashboard Design</span>
            </div>
          </div>

          <h3>Our Services</h3>

          <div className="services-grid">
            {/* Service 1: Website UI Design */}
            <div className="service-card featured">
              <div className="service-badge">POPULAR</div>
              <div className="service-icon">
                <div className="service-icon-circle">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M3 9H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 21V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              <h4>Website UI Design</h4>
              <p className="service-description">
                Modern, clean & conversion-focused layouts that engage visitors and drive action. We design beautiful website interfaces that combine aesthetics with functionality.
              </p>
              <div className="service-features">
                <ul>
                  <li>✓ Modern & Clean Layouts</li>
                  <li>✓ Conversion-Focused Design</li>
                  <li>✓ Responsive Design</li>
                  <li>✓ Multiple Page Designs</li>
                  <li>✓ Design System Included</li>
                </ul>
              </div>
              <div className="service-price">
                <span className="price-range">₹3,000 - ₹8,000</span>
                <span className="price-note">Starting Price</span>
              </div>
              <button onClick={handleDownloadPDF} className="service-btn">Get Quote</button>
            </div>

            {/* Service 2: Mobile App UI Design */}
            <div className="service-card featured">
              <div className="service-badge">BESTSELLER</div>
              <div className="service-icon">
                <div className="service-icon-circle">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="5" y="2" width="14" height="20" rx="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 18H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              <h4>Mobile App UI Design</h4>
              <p className="service-description">
                User-friendly Android & iOS app interfaces designed for seamless user experience. We create intuitive mobile app designs that users love to interact with.
              </p>
              <div className="service-features">
                <ul>
                  <li>✓ Android & iOS Design</li>
                  <li>✓ User-Friendly Interfaces</li>
                  <li>✓ App Icon Design</li>
                  <li>✓ Screen Flow Design</li>
                  <li>✓ Design Guidelines</li>
                </ul>
              </div>
              <div className="service-price">
                <span className="price-range">₹4,000 - ₹10,000</span>
                <span className="price-note">Starting Price</span>
              </div>
              <button onClick={handleDownloadPDF} className="service-btn">Get Quote</button>
            </div>

            {/* Service 3: UX Flow & Wireframing */}
            <div className="service-card">
              <div className="service-icon">
                <div className="service-icon-circle">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 11L12 14L22 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M21 12V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              <h4>UX Flow & Wireframing</h4>
              <p className="service-description">
                User journeys, flows & interaction planning to ensure your product is intuitive and user-centered. We map out the complete user experience before design.
              </p>
              <div className="service-features">
                <ul>
                  <li>✓ User Journey Mapping</li>
                  <li>✓ Flow Diagrams</li>
                  <li>✓ Interaction Planning</li>
                  <li>✓ Wireframe Designs</li>
                  <li>✓ UX Documentation</li>
                </ul>
              </div>
              <div className="service-price">
                <span className="price-range">₹2,500 - ₹6,000</span>
                <span className="price-note">Starting Price</span>
              </div>
              <button onClick={handleDownloadPDF} className="service-btn">Get Quote</button>
            </div>

            {/* Service 4: Landing Page UI/UX */}
            <div className="service-card">
              <div className="service-icon">
                <div className="service-icon-circle">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 22V12H15V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              <h4>Landing Page UI/UX</h4>
              <p className="service-description">
                High-converting landing pages for ads & funnels. We design landing pages that maximize conversions and turn visitors into customers.
              </p>
              <div className="service-features">
                <ul>
                  <li>✓ High-Converting Designs</li>
                  <li>✓ Ad Campaign Optimized</li>
                  <li>✓ Funnel Integration</li>
                  <li>✓ A/B Testing Ready</li>
                  <li>✓ Mobile Responsive</li>
                </ul>
              </div>
              <div className="service-price">
                <span className="price-range">₹2,000 - ₹5,000</span>
                <span className="price-note">Starting Price</span>
              </div>
              <button onClick={handleDownloadPDF} className="service-btn">Get Quote</button>
            </div>

            {/* Service 5: Dashboard & SaaS UI Design */}
            <div className="service-card featured">
              <div className="service-badge">PREMIUM</div>
              <div className="service-icon">
                <div className="service-icon-circle">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="3" y="3" width="7" height="7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <rect x="14" y="3" width="7" height="7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <rect x="3" y="14" width="7" height="7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <rect x="14" y="14" width="7" height="7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              <h4>Dashboard & SaaS UI Design</h4>
              <p className="service-description">
                Admin panels, analytics dashboards & SaaS products designed for clarity and efficiency. We create powerful dashboard interfaces that make complex data easy to understand.
              </p>
              <div className="service-features">
                <ul>
                  <li>✓ Admin Panel Design</li>
                  <li>✓ Analytics Dashboards</li>
                  <li>✓ SaaS Product UI</li>
                  <li>✓ Data Visualization</li>
                  <li>✓ Component Library</li>
                </ul>
              </div>
              <div className="service-price">
                <span className="price-range">₹5,000 - ₹12,000</span>
                <span className="price-note">Starting Price</span>
              </div>
              <button onClick={handleDownloadPDF} className="service-btn">Get Quote</button>
            </div>

            {/* Service 6: UI Redesign / Revamp */}
            <div className="service-card">
              <div className="service-icon">
                <div className="service-icon-circle">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11 4H4C3.46957 4 2.96086 4.21071 2.58579 4.58579C2.21071 4.96086 2 5.46957 2 6V20C2 20.5304 2.21071 21.0391 2.58579 21.4142C2.96086 21.7893 3.46957 22 4 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M18.5 2.5C18.8978 2.10218 19.4374 1.87868 20 1.87868C20.5626 1.87868 21.1022 2.10218 21.5 2.5C21.8978 2.89782 22.1213 3.43739 22.1213 4C22.1213 4.56261 21.8978 5.10218 21.5 5.5L12 15L8 16L9 12L18.5 2.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              <h4>UI Redesign / Revamp</h4>
              <p className="service-description">
                Improving existing designs for better usability & visuals. We analyze your current design and enhance it with modern UI/UX principles.
              </p>
              <div className="service-features">
                <ul>
                  <li>✓ Design Analysis</li>
                  <li>✓ Usability Improvements</li>
                  <li>✓ Visual Enhancement</li>
                  <li>✓ Modern UI Updates</li>
                  <li>✓ Performance Optimization</li>
                </ul>
              </div>
              <div className="service-price">
                <span className="price-range">₹3,000 - ₹8,000</span>
                <span className="price-note">Starting Price</span>
              </div>
              <button onClick={handleDownloadPDF} className="service-btn">Get Quote</button>
            </div>
          </div>

          {/* Additional Information */}
          <div className="service-info-section">
            <h3>Why Choose Our UI/UX Design Services?</h3>
            <div className="info-grid">
              <div className="info-card">
                <div className="info-icon">🎨</div>
                <h4>User-Centered Design</h4>
                <p>Designs focused on user needs and seamless experiences</p>
              </div>
              <div className="info-card">
                <div className="info-icon">📱</div>
                <h4>Responsive & Modern</h4>
                <p>Beautiful designs that work perfectly on all devices</p>
              </div>
              <div className="info-card">
                <div className="info-icon">🚀</div>
                <h4>Conversion Focused</h4>
                <p>Designs optimized to drive conversions and engagement</p>
              </div>
              <div className="info-card">
                <div className="info-icon">📦</div>
                <h4>Complete Deliverables</h4>
                <p>All design files, guidelines, and assets included</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDEBAR */}
        <aside className="services-sidebar">
          <div className="services-quote-box">
            <span className="early">GET STARTED</span>
            <h2>Custom Quote</h2>
            <p className="sidebar-desc">Get a personalized quote based on your branding needs</p>

            <ul>
              <li>
                <span>🎨 DESIGN TYPE</span>
                <p>Website / Mobile / Dashboard</p>
              </li>
              <li>
                <span>⏱ DELIVERY</span>
                <p>1-3 Weeks</p>
              </li>
              <li>
                <span>🔄 REVISIONS</span>
                <p>3-5 Rounds Included</p>
              </li>
              <li>
                <span>💬 SUPPORT</span>
                <p>24/7 Available</p>
              </li>
              <li>
                <span>📦 FILES</span>
                <p>Figma / Adobe XD / PSD</p>
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
