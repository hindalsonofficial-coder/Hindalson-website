import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../app/App.css";

export default function Placement() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.05,
      rootMargin: '0px 0px -80px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('scroll-visible');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Wait for DOM to be ready, then observe elements
    const timeoutId = setTimeout(() => {
      const animateElements = document.querySelectorAll('.scroll-animate');
      animateElements.forEach(el => {
        // Check if element is already in viewport
        const rect = el.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        
        if (isVisible) {
          el.classList.add('scroll-visible');
        } else {
          observer.observe(el);
        }
      });
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      const animateElements = document.querySelectorAll('.scroll-animate');
      animateElements.forEach(el => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div className="placement-page">
      {/* Hero Section */}
      <section className="placement-hero">
        <div className="placement-hero-content">
          <span className="placement-badge scroll-animate">PLACEMENT ASSISTANCE</span>
          <h1 className="scroll-animate">
            100% Placement <span className="placement-hero-highlight">Support</span>
          </h1>
          <p className="scroll-animate">
            We don't just teach you skills - we help you land your dream job. Our comprehensive 
            placement assistance program ensures you're job-ready and connected with top-tier 
            global companies.
          </p>
        </div>
      </section>

      {/* Placement Process Section */}
      <section className="placement-process-section">
        <div className="placement-process-container">
          <h2 className="scroll-animate">
            Our <span className="placement-highlight">Placement Process</span>
          </h2>
          <div className="placement-underline"></div>
          
          <div className="process-steps-grid">
            <div className="process-step scroll-animate">
              <div className="step-number">STEP 01</div>
              <div className="step-icon">📄</div>
              <h3>Resume Building</h3>
              <p>Create an ATS-friendly resume that stands out to recruiters globally.</p>
            </div>

            <div className="process-step scroll-animate">
              <div className="step-number">STEP 02</div>
              <div className="step-icon">👥</div>
              <h3>Mock Interviews</h3>
              <p>Practice with industry experts and get personalized, actionable feedback.</p>
            </div>

            <div className="process-step scroll-animate">
              <div className="step-number">STEP 03</div>
              <div className="step-icon">⭐</div>
              <h3>Portfolio Review</h3>
              <p>Get your projects reviewed and optimized for high-end job applications.</p>
            </div>

            <div className="process-step scroll-animate">
              <div className="step-number">STEP 04</div>
              <div className="step-icon">📤</div>
              <h3>Job Referrals</h3>
              <p>Access our exclusive network of partner companies and internal referrals.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Placement Services Section */}
      <section className="placement-services-section">
        <div className="placement-services-container">
          <div className="services-content">
            <h2 className="scroll-animate">
              Placement <span className="placement-highlight">Services</span>
            </h2>
            
            <div className="services-grid">
              <div className="service-card scroll-animate">
                <div className="service-border gold"></div>
                <h3>Career Guidance</h3>
                <ul>
                  <li>✓ Career counseling sessions</li>
                  <li>✓ Industry insights & trends</li>
                  <li>✓ Salary negotiation tips</li>
                  <li>✓ Career path planning</li>
                </ul>
              </div>

              <div className="service-card scroll-animate">
                <div className="service-border blue"></div>
                <h3>Skill Enhancement</h3>
                <ul>
                  <li>✓ Soft skills training</li>
                  <li>✓ Communication skills</li>
                  <li>✓ Problem-solving workshops</li>
                  <li>✓ Leadership development</li>
                </ul>
              </div>

              <div className="service-card scroll-animate">
                <div className="service-border blue"></div>
                <h3>Interview Preparation</h3>
                <ul>
                  <li>✓ Technical interview prep</li>
                  <li>✓ HR interview guidance</li>
                  <li>✓ Behavioral questions practice</li>
                  <li>✓ Company-specific prep</li>
                </ul>
              </div>

              <div className="service-card scroll-animate">
                <div className="service-border gold"></div>
                <h3>Job Opportunities</h3>
                <ul>
                  <li>✓ Exclusive job postings</li>
                  <li>✓ Campus recruitment drives</li>
                  <li>✓ Startup opportunities</li>
                  <li>✓ Freelance projects</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="placement-stats-card scroll-animate">
            <h3>Placement Stats</h3>
            <div className="stats-list">
              <div className="stat-item">
                <span className="stat-label">Placement Rate:</span>
                <span className="stat-value">95%+</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">Average Salary:</span>
                <span className="stat-value">₹6-12 LPA</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">Partner Companies:</span>
                <span className="stat-value">200+</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">Students Placed:</span>
                <span className="stat-value">1000+</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">Support Duration:</span>
                <span className="stat-value">1 Year</span>
              </div>
            </div>
            <Link to="/registration" className="register-placement-btn">Register For Placement</Link>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="placement-success-stories">
        <div className="placement-success-container">
          <h2 className="scroll-animate">
            Success <span className="placement-highlight">Stories</span>
          </h2>
          <div className="placement-underline"></div>
          <p className="scroll-animate">
            Hear from our students who are now working at world-class organizations.
          </p>

          <div className="testimonials-grid">
            <div className="testimonial-card scroll-animate">
              <div className="testimonial-avatar blue">RK</div>
              <h3>Rahul Kumar</h3>
              <p className="testimonial-title">Full Stack Developer</p>
              <p className="testimonial-quote">
                "The technical training was top-notch, but the placement support was the game changer. 
                Got placed at a top MNC with a package I only dreamed of!"
              </p>
              <div className="placed-at">
                <span>PLACED AT</span>
                <span className="company-name">Tech Corp</span>
              </div>
            </div>

            <div className="testimonial-card scroll-animate">
              <div className="testimonial-avatar gold">PS</div>
              <h3>Priya Sharma</h3>
              <p className="testimonial-title">Mobile App Developer</p>
              <p className="testimonial-quote">
                "The mock interview sessions prepared me for everything. By the time the actual interview 
                came, I felt confident and ready. Truly amazing support!"
              </p>
              <div className="placed-at">
                <span>PLACED AT</span>
                <span className="company-name">App Solutions</span>
              </div>
            </div>

            <div className="testimonial-card scroll-animate">
              <div className="testimonial-avatar dark-blue">AS</div>
              <h3>Amit Singh</h3>
              <p className="testimonial-title">AI Engineer</p>
              <p className="testimonial-quote">
                "From zero coding knowledge to landing a job at an AI startup. The support team's 
                dedication to each student is what makes this place special."
              </p>
              <div className="placed-at">
                <span>PLACED AT</span>
                <span className="company-name">AI Innovations</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

