import React from "react";
import { Link } from "react-router-dom";
import "../../app/App.css";
import pdfFile from "../../assets/Hindalson Technology.pdf";

export default function MobileDevelopmentServices() {
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
          <span className="services-badge">PROFESSIONAL SERVICES</span>

          <h1>
            Mobile App <br />
            <span className="gradient-text">Development</span> <br />
            <span className="gradient-text">Services</span>
          </h1>

          <p>
            Transform your business ideas into powerful mobile applications. We build custom Android and iOS apps tailored to your business requirements with modern technologies and best practices.
          </p>

          <div className="services-hero-buttons">
            <Link to="/contact" className="btn services-primary">Get Quote</Link>
            <Link to="/contact" className="btn services-secondary">Free Consultation</Link>
          </div>
          <hr />
          <div className="services-stats">
            <div><strong>100+</strong><span>Apps Built</span></div>
            <div><strong>24/7</strong><span>Support</span></div>
            <div><strong>100%</strong><span>Satisfaction</span></div>
          </div>
        </div>

        <div className="services-hero-right">
          <img src="/mob.jpg" alt="Mobile App Development Services" />
        </div>
      </section>

      {/* Content Section */}
      <section className="services-content">
        {/* LEFT */}
        <div className="services-main">
          <h5>-OUR SERVICES</h5>
          <h2>Professional <em>Mobile Development</em> Solutions</h2>
          <p className="desc">
            We offer comprehensive mobile app development services for businesses of all sizes. From custom native apps to cross-platform solutions, we deliver high-quality mobile applications that drive business growth and enhance user engagement.
          </p>

          <div className="icon-row">
            <div className="icon-card">
              <img src="/internet.png" alt="Android" />
              <span>Android</span>
            </div>

            <div className="icon-card">
              <img src="/cloud.png" alt="iOS" />
              <span>iOS</span>
            </div>

            <div className="icon-card">
              <img src="/micro.png" alt="Cross-Platform" />
              <span>Cross-Platform</span>
            </div>

            <div className="icon-card">
              <img src="/sensor.png" alt="UI/UX Design" />
              <span>UI/UX Design</span>
            </div>
          </div>

          <h3>Our Services</h3>

          <div className="services-grid">
            {/* Service 1: Custom Mobile App Development */}
            <div className="service-card featured">
              <div className="service-badge">POPULAR</div>
              <div className="service-icon">
                <div className="service-icon-circle">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="5" y="2" width="14" height="20" rx="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 18H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              <h4>Custom Mobile App Development</h4>
              <p className="service-description">
                Any type of Android / iOS app as per business requirement. Fully customized solutions built from scratch to meet your specific needs.
              </p>
              <div className="service-features">
                <ul>
                  <li>✓ Native Android & iOS Development</li>
                  <li>✓ Custom UI/UX Design</li>
                  <li>✓ API Integration</li>
                  <li>✓ App Store Deployment</li>
                  <li>✓ Post-launch Support</li>
                </ul>
              </div>
              <div className="service-price">
                <span className="price-range">₹10,000 - ₹15,000</span>
                <span className="price-note">Starting Price</span>
              </div>
              <button onClick={handleDownloadPDF} className="service-btn">Get Quote</button>
            </div>

            {/* Service 2: Business Utility App */}
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
              <h4>Business Utility App</h4>
              <p className="service-description">
                Apps for services, booking, management, CRM, and more. Streamline your business operations with custom utility applications.
              </p>
              <div className="service-features">
                <ul>
                  <li>✓ Booking & Reservation Systems</li>
                  <li>✓ CRM & Management Tools</li>
                  <li>✓ Service Management Apps</li>
                  <li>✓ Inventory Tracking</li>
                  <li>✓ Analytics Dashboard</li>
                </ul>
              </div>
              <div className="service-price">
                <span className="price-range">₹15,000 - ₹20,000</span>
                <span className="price-note">Starting Price</span>
              </div>
              <button onClick={handleDownloadPDF} className="service-btn">Get Quote</button>
            </div>

            {/* Service 3: E-commerce Mobile App */}
            <div className="service-card featured">
              <div className="service-badge">PREMIUM</div>
              <div className="service-icon">
                <div className="service-icon-circle">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 2L3 6V20C3 20.5304 3.21071 21.0391 3.58579 21.4142C3.96086 21.7893 4.46957 22 5 22H19C19.5304 22 20.0391 21.7893 20.4142 21.4142C20.7893 21.0391 21 20.5304 21 20V6L18 2H6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M3 6H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 10C16 11.0609 15.5786 12.0783 14.8284 12.8284C14.0783 13.5786 13.0609 14 12 14C10.9391 14 9.92172 13.5786 9.17157 12.8284C8.42143 12.0783 8 11.0609 8 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              <h4>E-commerce Mobile App</h4>
              <p className="service-description">
                Product catalog, cart & payments. Complete mobile shopping experience with product listings, shopping cart, secure payment integration, and order management.
              </p>
              <div className="service-features">
                <ul>
                  <li>✓ Product Catalog & Search</li>
                  <li>✓ Shopping Cart System</li>
                  <li>✓ Payment Gateway Integration</li>
                  <li>✓ Order Tracking</li>
                  <li>✓ User Account Management</li>
                </ul>
              </div>
              <div className="service-price">
                <span className="price-range">₹25,000 - ₹30,000</span>
                <span className="price-note">Starting Price</span>
              </div>
              <button onClick={handleDownloadPDF} className="service-btn">Get Quote</button>
            </div>

            {/* Service 4: Admin Panel + App */}
            <div className="service-card">
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
              <h4>Admin Panel + App</h4>
              <p className="service-description">
                Backend dashboard with mobile app. Complete solution including a powerful admin panel for managing content, users, and data, along with the mobile application.
              </p>
              <div className="service-features">
                <ul>
                  <li>✓ Admin Dashboard Development</li>
                  <li>✓ Mobile App (Android/iOS)</li>
                  <li>✓ Content Management System</li>
                  <li>✓ User Management</li>
                  <li>✓ Real-time Data Sync</li>
                </ul>
              </div>
              <div className="service-price">
                <span className="price-range">₹10,000 - ₹15,000</span>
                <span className="price-note">Starting Price</span>
              </div>
              <button onClick={handleDownloadPDF} className="service-btn">Get Quote</button>
            </div>

            {/* Service 5: App Maintenance & Support */}
            <div className="service-card">
              <div className="service-icon">
                <div className="service-icon-circle">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.7 6.3C14.5168 6.11624 14.3042 5.96186 14.0711 5.84343C13.838 5.725 13.5874 5.64419 13.3291 5.60457C13.0708 5.56495 12.8081 5.56706 12.5508 5.61081C12.2935 5.65456 12.0451 5.7394 11.8156 5.8619C11.5861 5.9844 11.3786 6.14286 11.2016 6.3303C11.0246 6.51774 10.8806 6.73119 10.7758 6.96219C10.671 7.19319 10.6071 7.43836 10.5871 7.68819C10.5671 7.93802 10.5913 8.18908 10.6583 8.4303L12.5083 15.4303C12.5753 15.6715 12.6838 15.8989 12.8284 16.1016C12.973 16.3043 13.1513 16.4791 13.3556 16.6178C13.5599 16.7565 13.7869 16.8568 14.0256 16.9139C14.2643 16.971 14.5109 16.9839 14.7541 16.9519C14.9973 16.9199 15.2333 16.8436 15.4503 16.7266C15.6673 16.6096 15.8616 16.4541 16.0243 16.2673L18.0243 14.2673C18.3043 13.9873 18.4941 13.6299 18.5686 13.2399C18.6431 12.8499 18.5991 12.4451 18.4423 12.0803L16.5923 5.0803C16.5253 4.83908 16.4178 4.61168 16.2732 4.40898C16.1286 4.20628 15.9503 4.03148 15.746 3.89278C15.5417 3.75408 15.3147 3.65378 15.076 3.59668C14.8373 3.53958 14.5907 3.52668 14.3475 3.55868C14.1043 3.59068 13.8683 3.66698 13.6513 3.78398C13.4343 3.90098 13.24 4.05648 13.0773 4.24328L11.0773 6.24328" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M21 21L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              <h4>App Maintenance & Support</h4>
              <p className="service-description">
                Bug fixes, updates (monthly). Keep your mobile app running smoothly with regular maintenance, bug fixes, updates, and technical support on a monthly basis.
              </p>
              <div className="service-features">
                <ul>
                  <li>✓ Bug Fixes & Troubleshooting</li>
                  <li>✓ Regular App Updates</li>
                  <li>✓ Performance Optimization</li>
                  <li>✓ Security Patches</li>
                  <li>✓ Technical Support</li>
                </ul>
              </div>
              <div className="service-price">
                <span className="price-range">₹3,000 - ₹7,000</span>
                <span className="price-note">Per Month</span>
              </div>
              <button onClick={handleDownloadPDF} className="service-btn">Get Quote</button>
            </div>
          </div>

          {/* Additional Information */}
          <div className="service-info-section">
            <h3>Why Choose Our Mobile Development Services?</h3>
            <div className="info-grid">
              <div className="info-card">
                <div className="info-icon">🚀</div>
                <h4>Fast Delivery</h4>
                <p>Quick turnaround times without compromising on quality</p>
              </div>
              <div className="info-card">
                <div className="info-icon">💼</div>
                <h4>Expert Team</h4>
                <p>Experienced developers with proven track record</p>
              </div>
              <div className="info-card">
                <div className="info-icon">🔒</div>
                <h4>Secure & Scalable</h4>
                <p>Built with security and scalability in mind</p>
              </div>
              <div className="info-card">
                <div className="info-icon">📱</div>
                <h4>Cross-Platform</h4>
                <p>Support for both Android and iOS platforms</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDEBAR */}
        <aside className="services-sidebar">
          <div className="services-quote-box">
            <span className="early">GET STARTED</span>
            <h2>Custom Quote</h2>
            <p className="sidebar-desc">Get a personalized quote based on your requirements</p>

            <ul>
              <li>
                <span>📱 PLATFORM</span>
                <p>Android / iOS / Both</p>
              </li>
              <li>
                <span>⏱ DELIVERY</span>
                <p>4-8 Weeks</p>
              </li>
              <li>
                <span>🔄 UPDATES</span>
                <p>Free for 3 Months</p>
              </li>
              <li>
                <span>💬 SUPPORT</span>
                <p>24/7 Available</p>
              </li>
              <li>
                <span>📦 DEPLOYMENT</span>
                <p>App Store Included</p>
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
