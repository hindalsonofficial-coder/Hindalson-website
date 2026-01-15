// Layout.jsx - Shared Navbar and Footer
import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "../app/App.css";

export default function Layout({ children }) {
  // Nav dropdown: single open id and outside-click/escape handling
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    function handleDocClick(e) {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpenDropdown(null);
      }
    }
    function onKey(e) {
      if (e.key === "Escape") {
        setOpenDropdown(null);
        setIsMobileMenuOpen(false);
      }
    }
    document.addEventListener("click", handleDocClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("click", handleDocClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
  };

  // Close mobile menu when clicking on dropdown links
  const handleDropdownLinkClick = () => {
    closeMobileMenu();
  };

  return (
    <div className="page">
      {/* Header */}
      <header className="header">
        <Link to="/" className="logo" aria-label="Hindalson home" onClick={closeMobileMenu}>
          <img src="/logo.png" alt="Hindalson logo" />
        </Link>
        <button 
          className="mobile-menu-toggle" 
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
          onClick={toggleMobileMenu}
        >
          <span className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>
        {isMobileMenuOpen && (
          <div className="mobile-menu-overlay" onClick={closeMobileMenu}></div>
        )}
        <nav className={`nav ${isMobileMenuOpen ? 'mobile-open' : ''}`} ref={navRef}>
          <div className={`dropdown ${openDropdown === "all" ? "show" : ""}`}>
            <button
              className="dropdown-toggle"
              aria-haspopup="true"
              aria-expanded={openDropdown === "all"}
              onClick={() => setOpenDropdown((s) => (s === "all" ? null : "all"))}
            >
              All Courses ▾
            </button>
            <ul className="dropdown-menu" role="menu" aria-label="All Courses">
              <li><Link to="/course/full-stack-development" onClick={handleDropdownLinkClick}>Full Stack Development</Link></li>
              <li><Link to="/course/mobile-app-development" onClick={handleDropdownLinkClick}>Mobile App Development</Link></li>
              <li><Link to="/course/ai-robotics" onClick={handleDropdownLinkClick}>AI Robotics</Link></li>
              <li><Link to="/course/iot" onClick={handleDropdownLinkClick}>Embedded IoT</Link></li>
              <li><Link to="/course/cloud-computing" onClick={handleDropdownLinkClick}>Cloud Computing</Link></li>
              <li><Link to="/course/digital-marketing" onClick={handleDropdownLinkClick}>Digital Marketing</Link></li>
              <li><Link to="/course/graphic-designer" onClick={handleDropdownLinkClick}>Graphics Designer</Link></li>
              <li><Link to="/course/more-technologies" onClick={handleDropdownLinkClick}>More Technologies</Link></li>
            </ul>
          </div>

          <div className={`dropdown ${openDropdown === "services" ? "show" : ""}`}>
            <button
              className="dropdown-toggle"
              aria-haspopup="true"
              aria-expanded={openDropdown === "services"}
              onClick={() => setOpenDropdown((s) => (s === "services" ? null : "services"))}
            >
              Services ▾
            </button>
            <ul className="dropdown-menu" role="menu" aria-label="Services">
              <li><Link to="/services/mobile-development" onClick={handleDropdownLinkClick}>Mobile App Development</Link></li>
              <li><Link to="/services/web-development" onClick={handleDropdownLinkClick}>Website Development</Link></li>
              <li><Link to="/services/ai-automation" onClick={handleDropdownLinkClick}>AI & Automation</Link></li>
              <li><Link to="/services/ui-ux" onClick={handleDropdownLinkClick}>UI/UX & Branding</Link></li>
              <li><Link to="/services/video-editing" onClick={handleDropdownLinkClick}>Video Editing</Link></li>
              <li><Link to="/services/social-media-management" onClick={handleDropdownLinkClick}>Social Media Management</Link></li>
            </ul>
          </div>

          <Link to="/" onClick={closeMobileMenu}>Home</Link>

          <Link to="/about" onClick={closeMobileMenu}>About</Link>

          <Link to="/portfolio" onClick={closeMobileMenu}>Portfolio</Link>
          <Link to="/placement" onClick={closeMobileMenu}>Placement</Link>
          <Link to="/contact" onClick={closeMobileMenu}>Contact Us</Link>
          
          <Link to="/registration" className="apply-link" onClick={closeMobileMenu}>
            <button className="apply">Apply Now</button>
          </Link>
        </nav>
      </header>

      {/* Main Content */}
      <main>
        {children}
      </main>

      {/* Footer */}
      <footer className="site-footer">
        <div className="footer-top">
          {/* BRAND */}
          <div className="footer-col brand">
            <div className="footer-logo">
              <img src="/logo.png" alt="Hindalson" />
            </div>
            <p>
              Future-ready learning and industry-grade services for your growth. 
              Empowering students to achieve excellence through innovation and practical mastery.
            </p>
            <div className="footer-copyright">
              © 2026 Hindalson Technology. All rights reserved.
            </div>
          </div>

          {/* QUICK LINKS */}
          <div className="footer-col">
            <h4>QUICK LINKS</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Institute</Link></li>
              <li><Link to="/portfolio">Student Portfolio</Link></li>
              <li><Link to="/contact">Contact Support</Link></li>
            </ul>
          </div>

          {/* TOP COURSES */}
          <div className="footer-col">
            <h4>TOP COURSES</h4>
            <ul>
              <li><Link to="/course/full-stack-development">Full Stack Development</Link></li>
              <li><Link to="/course/mobile-app-development">Mobile App Development</Link></li>
              <li><Link to="/course/ai-robotics">AI & Robotics</Link></li>
              <li><Link to="/course/iot">Embedded IoT</Link></li>
              <li><Link to="/course/cloud-computing">Cloud Computing</Link></li>
              <li><Link to="/course/digital-marketing">Digital Marketing</Link></li>
              <li><Link to="/course/graphic-designer">Graphics Designer</Link></li>
            </ul>
          </div>

          {/* GET IN TOUCH */}
          <div className="footer-col get-in-touch">
            <h4>GET IN TOUCH</h4>
            <div className="contact-info">
              <div className="contact-item">
                <div className="contact-icon-wrapper">
                  <svg className="contact-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="2"/>
                    <path d="M3 7L12 13L21 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <a href="mailto:info@hindalson.com">info@hindalson.com</a>
              </div>
              <div className="contact-item">
                <div className="contact-icon-wrapper phone-icon">
                  <svg className="contact-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 5C3 3.89543 3.89543 3 5 3H8.27924C8.70967 3 9.09181 3.27543 9.22792 3.68377L10.7257 8.17721C10.8831 8.64932 10.6694 9.16531 10.2243 9.38787L7.96701 10.5165C9.06925 12.9612 11.0388 14.9308 13.4835 16.033L14.6121 13.7757C14.8347 13.3306 15.3507 13.1169 15.8228 13.2743L20.3162 14.7721C20.7246 14.9082 21 15.2903 21 15.7208V19C21 20.1046 20.1046 21 19 21H18C9.71573 21 3 14.2843 3 6V5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <a href="tel:+917499166215">+91-74991-66215</a>
              </div>
            </div>
            <div className="footer-social">
              <a href="#" className="social-btn">in</a>
              <a href="#" className="social-btn">x</a>
              <a href="https://www.facebook.com/share/p/1AeNFmp4CY/" target="_blank" rel="noopener noreferrer" className="social-btn">f</a>
            </div>
          </div>
        </div>

        {/* FOOTER BOTTOM */}
        <div className="footer-bottom">
          <div className="footer-bottom-links">
            <a href="#">PRIVACY POLICY</a>
            <a href="#">TERMS OF SERVICE</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

