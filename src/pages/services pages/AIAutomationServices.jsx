import React from "react";
import { Link } from "react-router-dom";
import "../../app/App.css";
import pdfFile from "../../assets/Hindalson Technology.pdf";

export default function AIAutomationServices() {
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
          <span className="services-badge">AI-POWERED SOLUTIONS</span>

          <h1>
            AI & Automation <br />
            <span className="gradient-text">Services</span> <br />
            <span className="gradient-text">Intelligent Solutions</span>
          </h1>

          <p>
            Transform your business with AI-driven automation and intelligent chatbots. We help businesses automate workflows, enhance customer engagement, and scale operations using cutting-edge AI technology.
          </p>

          <div className="services-hero-buttons">
            <button onClick={handleDownloadPDF} className="btn services-primary">Get Quote</button>
            <Link to="/contact" className="btn services-secondary">Free Consultation</Link>
          </div>
          <hr />
          <div className="services-stats">
            <div><strong>50+</strong><span>AI Projects</span></div>
            <div><strong>24/7</strong><span>Support</span></div>
            <div><strong>100%</strong><span>Satisfaction</span></div>
          </div>
        </div>

        <div className="services-hero-right">
          <img src="/ai.jpg" alt="AI & Automation Services" />
        </div>
      </section>

      {/* Content Section */}
      <section className="services-content">
        {/* LEFT */}
        <div className="services-main">
          <h5>-OUR SERVICES</h5>
          <h2>Intelligent <em>AI & Automation</em> Solutions</h2>
          <p className="desc">
            Leverage the power of artificial intelligence to automate your business processes, enhance customer interactions, and streamline operations. Our AI solutions are designed to integrate seamlessly with your existing systems and scale with your business.
          </p>

          <div className="icon-row">
            <div className="icon-card">
              <img src="/internet.png" alt="AI Chatbots" />
              <span>AI Chatbots</span>
            </div>

            <div className="icon-card">
              <img src="/cloud.png" alt="Automation" />
              <span>Automation</span>
            </div>

            <div className="icon-card">
              <img src="/micro.png" alt="Data Processing" />
              <span>Data Processing</span>
            </div>

            <div className="icon-card">
              <img src="/sensor.png" alt="Integration" />
              <span>Integration</span>
            </div>
          </div>

          <h3>Our Services</h3>

          <div className="services-grid">
            {/* Service 1: AI Chatbot Development */}
            <div className="service-card featured">
              <div className="service-badge">POPULAR</div>
              <div className="service-icon">
                <div className="service-icon-circle">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              <h4>AI Chatbot Development (Website)</h4>
              <p className="service-description">
                GPT-based chatbot with customization. Intelligent conversational AI that understands context and provides human-like responses for your website visitors.
              </p>
              <div className="service-features">
                <ul>
                  <li>✓ GPT-4 Powered Intelligence</li>
                  <li>✓ Custom Training & Branding</li>
                  <li>✓ Multi-language Support</li>
                  <li>✓ Analytics Dashboard</li>
                  <li>✓ Easy Integration</li>
                </ul>
              </div>
              <div className="service-price">
                <span className="price-range">₹8,000 - ₹10,000</span>
                <span className="price-note">Starting Price</span>
              </div>
              <Link to="/contact" className="service-btn">Get Quote</Link>
            </div>

            {/* Service 2: WhatsApp AI Chatbot */}
            <div className="service-card">
              <div className="service-icon">
                <div className="service-icon-circle">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 21L5.5 18.5C4.57099 17.3062 4.00026 15.9017 4 14.45C4 10.629 7.13 7.5 11 7.5C11.6831 7.5 12.3531 7.58797 13 7.75797M17 7.5C20.31 7.5 23 10.19 23 13.5C23 14.951 22.429 16.3555 21.5 17.5495L24 21H17.5M17 10.5V13.5M17 13.5H20M17 13.5H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              <h4>WhatsApp AI Chatbot</h4>
              <p className="service-description">
                Business chatbot with WhatsApp integration. Automate customer support, order processing, and inquiries directly through WhatsApp.
              </p>
              <div className="service-features">
                <ul>
                  <li>✓ WhatsApp Business API</li>
                  <li>✓ Automated Responses</li>
                  <li>✓ Order Processing</li>
                  <li>✓ Customer Support</li>
                  <li>✓ 24/7 Availability</li>
                </ul>
              </div>
              <div className="service-price">
                <span className="price-range">₹10,000 - ₹15,000</span>
                <span className="price-note">Starting Price</span>
              </div>
              <Link to="/contact" className="service-btn">Get Quote</Link>
            </div>

            {/* Service 3: RAG-based Smart Chatbot */}
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
              <h4>RAG-based Smart Chatbot</h4>
              <p className="service-description">
                Knowledge-based training and system. Advanced chatbot that learns from your documents and knowledge base to provide accurate, context-aware responses.
              </p>
              <div className="service-features">
                <ul>
                  <li>✓ Knowledge Base Training</li>
                  <li>✓ Document Processing</li>
                  <li>✓ Context-Aware Responses</li>
                  <li>✓ Continuous Learning</li>
                  <li>✓ Enterprise-grade Security</li>
                </ul>
              </div>
              <div className="service-price">
                <span className="price-range">₹10,000 - ₹12,000</span>
                <span className="price-note">Starting Price</span>
              </div>
              <Link to="/contact" className="service-btn">Get Quote</Link>
            </div>

            {/* Service 4: Data Scraping */}
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
              <h4>Data Scraping</h4>
              <p className="service-description">
                Website to structured data conversion. Extract and organize data from websites into clean, structured formats for analysis and processing.
              </p>
              <div className="service-features">
                <ul>
                  <li>✓ Automated Web Scraping</li>
                  <li>✓ Structured Data Output</li>
                  <li>✓ Multiple Format Support</li>
                  <li>✓ Scheduled Scraping</li>
                  <li>✓ Data Validation</li>
                </ul>
              </div>
              <div className="service-price">
                <span className="price-range">₹12,000 - ₹15,000</span>
                <span className="price-note">Starting Price</span>
              </div>
              <Link to="/contact" className="service-btn">Get Quote</Link>
            </div>

            {/* Service 5: Viber Message Scheduler */}
            <div className="service-card">
              <div className="service-icon">
                <div className="service-icon-circle">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              <h4>Viber Message Scheduler</h4>
              <p className="service-description">
                FastAPI-based scheduler automation. Automate and schedule Viber messages for marketing campaigns, notifications, and customer communications.
              </p>
              <div className="service-features">
                <ul>
                  <li>✓ FastAPI Backend</li>
                  <li>✓ Scheduled Messaging</li>
                  <li>✓ Bulk Message Support</li>
                  <li>✓ Campaign Management</li>
                  <li>✓ Delivery Tracking</li>
                </ul>
              </div>
              <div className="service-price">
                <span className="price-range">₹10,000 - ₹15,000</span>
                <span className="price-note">Starting Price</span>
              </div>
              <Link to="/contact" className="service-btn">Get Quote</Link>
            </div>

            {/* Service 6: Workflow Automation */}
            <div className="service-card featured">
              <div className="service-badge">PREMIUM</div>
              <div className="service-icon">
                <div className="service-icon-circle">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              <h4>Workflow Automation</h4>
              <p className="service-description">
                GPT + Sheets/Drive/CRM integration. Automate complex business workflows by connecting AI with Google Sheets, Drive, CRM systems, and more.
              </p>
              <div className="service-features">
                <ul>
                  <li>✓ GPT-Powered Automation</li>
                  <li>✓ Google Sheets Integration</li>
                  <li>✓ Drive & CRM Connectivity</li>
                  <li>✓ Custom Workflow Design</li>
                  <li>✓ Real-time Sync</li>
                </ul>
              </div>
              <div className="service-price">
                <span className="price-range">₹15,000 - ₹20,000</span>
                <span className="price-note">Starting Price</span>
              </div>
              <Link to="/contact" className="service-btn">Get Quote</Link>
            </div>

            {/* Service 7: Canva Automation */}
            <div className="service-card">
              <div className="service-icon">
                <div className="service-icon-circle">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 9H15V15H9V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              <h4>Canva Automation</h4>
              <p className="service-description">
                Auto-image generation and posting. Automate your social media content creation with AI-powered image generation and automated posting to Canva.
              </p>
              <div className="service-features">
                <ul>
                  <li>✓ AI Image Generation</li>
                  <li>✓ Auto-posting to Canva</li>
                  <li>✓ Template Customization</li>
                  <li>✓ Batch Processing</li>
                  <li>✓ Social Media Integration</li>
                </ul>
              </div>
              <div className="service-price">
                <span className="price-range">₹5,000 - ₹10,000</span>
                <span className="price-note">Starting Price</span>
              </div>
              <Link to="/contact" className="service-btn">Get Quote</Link>
            </div>

            {/* Service 8: CRM Automation */}
            <div className="service-card featured">
              <div className="service-badge">PREMIUM</div>
              <div className="service-icon">
                <div className="service-icon-circle">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              <h4>CRM Automation</h4>
              <p className="service-description">
                AI-powered automation for HubSpot, Zoho, and Google Sheets. Streamline your customer relationship management with intelligent automation that syncs data, manages leads, and automates workflows.
              </p>
              <div className="service-features">
                <ul>
                  <li>✓ HubSpot Integration</li>
                  <li>✓ Zoho CRM Automation</li>
                  <li>✓ Google Sheets Sync</li>
                  <li>✓ AI-Powered Lead Management</li>
                  <li>✓ Automated Workflows</li>
                </ul>
              </div>
              <div className="service-price">
                <span className="price-range">₹15,000 - ₹25,000</span>
                <span className="price-note">Starting Price</span>
              </div>
              <Link to="/contact" className="service-btn">Get Quote</Link>
            </div>
          </div>

          {/* Additional Information */}
          <div className="service-info-section">
            <h3>Why Choose Our AI & Automation Services?</h3>
            <div className="info-grid">
              <div className="info-card">
                <div className="info-icon">🤖</div>
                <h4>Advanced AI</h4>
                <p>Cutting-edge GPT and machine learning technology</p>
              </div>
              <div className="info-card">
                <div className="info-icon">⚡</div>
                <h4>Fast Integration</h4>
                <p>Seamless integration with your existing systems</p>
              </div>
              <div className="info-card">
                <div className="info-icon">📊</div>
                <h4>Analytics & Insights</h4>
                <p>Comprehensive analytics to track performance</p>
              </div>
              <div className="info-card">
                <div className="info-icon">🔒</div>
                <h4>Secure & Reliable</h4>
                <p>Enterprise-grade security and 99.9% uptime</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDEBAR */}
        <aside className="services-sidebar">
          <div className="services-quote-box">
            <span className="early">GET STARTED</span>
            <h2>Custom Quote</h2>
            <p className="sidebar-desc">Get a personalized quote based on your automation needs</p>

            <ul>
              <li>
                <span>🤖 AI MODEL</span>
                <p>GPT-4 / Custom</p>
              </li>
              <li>
                <span>⏱ SETUP TIME</span>
                <p>1-3 Weeks</p>
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
                <span>📦 INTEGRATION</span>
                <p>Multiple Platforms</p>
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
