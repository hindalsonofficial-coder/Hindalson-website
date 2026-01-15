import React, { useEffect, useRef } from "react";
import "../app/App.css";

export default function AboutUs() {
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
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-content">
          <span className="about-badge">PRESTIGE TIER EDUCATION</span>
          <h1>
            Empowering Future<br />
            <span className="about-hero-highlight">Tech Leaders</span>
          </h1>
          <p>
            Hindalson Technology is a premier institute dedicated to bridging the gap between 
            theoretical excellence and industry-defining application.
          </p>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="mission-vision-section">
        <div className="mission-vision-container">
          <div className="mission-card scroll-animate">
            <div className="mission-icon">
              <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                <circle cx="30" cy="30" r="24" fill="#3B82F6" opacity="0.1"/>
                <circle cx="30" cy="30" r="20" stroke="#3B82F6" strokeWidth="2.5"/>
                <circle cx="30" cy="30" r="12" fill="#ffffff"/>
                <circle cx="30" cy="18" r="3" fill="#3B82F6"/>
                <circle cx="30" cy="42" r="3" fill="#3B82F6"/>
                <circle cx="18" cy="30" r="3" fill="#3B82F6"/>
                <circle cx="42" cy="30" r="3" fill="#3B82F6"/>
              </svg>
            </div>
            <h2>Our Mission</h2>
            <p>
              To provide high-quality, hands-on technology education that empowers students to excel 
              in their careers. We focus on practical skills, industry partnerships, and real-world 
              project experience to ensure our graduates are job-ready from day one.
            </p>
          </div>

          <div className="vision-card scroll-animate">
            <div className="vision-icon">
              <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                <circle cx="30" cy="30" r="24" fill="#3B82F6" opacity="0.1"/>
                <circle cx="30" cy="30" r="20" stroke="#3B82F6" strokeWidth="2.5"/>
                <circle cx="30" cy="30" r="12" fill="#ffffff"/>
                <circle cx="30" cy="30" r="5" fill="#3B82F6"/>
              </svg>
            </div>
            <h2>Our Vision</h2>
            <p>
              To become the most trusted technology education platform, recognized globally for 
              producing industry-ready professionals. We envision a future where every student 
              has access to world-class tech education and career opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Partnerships Section */}
      <section className="partnerships-section">
        <div className="partnerships-container">
          <h2 className="scroll-animate">
            Our <span className="partnerships-highlight">Partnerships</span>
          </h2>
          <p className="scroll-animate">
            Hindalson Technology has established strategic partnerships with leading educational 
            institutions and industry leaders to provide comprehensive learning experiences and 
            career opportunities for our students.
          </p>

          <div className="partnerships-cards">
            <div className="partnership-card scroll-animate">
              <h3>Educational Institutions</h3>
              <ul>
                <li>Curricular Development</li>
                <li>Faculty Training Programs</li>
                <li>Student Internship Programs</li>
                <li>Joint Certification Programs</li>
              </ul>
            </div>

            <div className="partnership-card scroll-animate">
              <h3>Industry Partners</h3>
              <ul>
                <li>Industry Expert Sessions</li>
                <li>Live Project Opportunities</li>
                <li>Placement Partnerships</li>
                <li>Technology Partnerships</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* MOU Benefits Section */}
      <section className="mou-section">
        <div className="mou-container">
          <h2 className="scroll-animate">
            Benefits of Our <span className="mou-highlight">MOU Program</span>
          </h2>
          <div className="mou-cards">
            <div className="mou-card scroll-animate">
              <div className="mou-icon">🎓</div>
              <h3>Enhanced Learning</h3>
              <p>
                Access to industry-standard tools, resources, and curriculum designed by 
                experts to ensure you stay ahead of the curve.
              </p>
            </div>

            <div className="mou-card scroll-animate">
              <div className="mou-icon">🤝</div>
              <h3>Networking Opportunities</h3>
              <p>
                Connect with industry professionals, alumni, and peers through exclusive 
                events, workshops, and mentorship programs.
              </p>
            </div>

            <div className="mou-card scroll-animate">
              <div className="mou-icon">💼</div>
              <h3>Career Opportunities</h3>
              <p>
                Exclusive access to job opportunities, internships, and placement support 
                from our partner companies and institutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="why-choose-about-section">
        <div className="why-choose-about-container">
          <h2 className="scroll-animate">
            Why Choose <span className="why-choose-highlight">Hindalson?</span>
          </h2>
          <div className="why-choose-grid">
            <div className="why-choose-card scroll-animate">
              <div className="why-choose-icon">📚</div>
              <h3>Industry Curriculum</h3>
              <p>Curriculum designed by industry experts, updated regularly to match current market demands.</p>
            </div>

            <div className="why-choose-card scroll-animate">
              <div className="why-choose-icon">👨‍🏫</div>
              <h3>Expert Mentors</h3>
              <p>Learn from experienced professionals who bring real-world insights to the classroom.</p>
            </div>

            <div className="why-choose-card scroll-animate">
              <div className="why-choose-icon">💼</div>
              <h3>Placement Support</h3>
              <p>100% placement assistance with resume building, mock interviews, and job referrals.</p>
            </div>

            <div className="why-choose-card scroll-animate">
              <div className="why-choose-icon">💻</div>
              <h3>Real-World Projects</h3>
              <p>Work on live projects that add value to your portfolio and demonstrate your skills.</p>
            </div>

            <div className="why-choose-card scroll-animate">
              <div className="why-choose-icon">📅</div>
              <h3>Flexible Learning</h3>
              <p>Online and offline modes with flexible schedules to fit your lifestyle.</p>
            </div>

            <div className="why-choose-card scroll-animate">
              <div className="why-choose-icon">🏆</div>
              <h3>Global Certification</h3>
              <p>Industry-recognized certificates that enhance your career prospects globally.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Heritage & Story Section */}
      <section className="heritage-section">
        <div className="heritage-container">
          <h2 className="scroll-animate">
            Our <span className="heritage-highlight">Heritage &</span> Story
          </h2>
          <div className="heritage-content">
            <div className="heritage-text scroll-animate">
              <p>
                Founded with a vision to revolutionize technology education, Hindalson Technology 
                has been at the forefront of bridging the gap between academic learning and 
                industry requirements. Our journey began with a simple yet powerful belief: 
                education should be practical, accessible, and transformative.
              </p>
              <p>
                Over the years, we have built a reputation for excellence, producing thousands 
                of successful professionals who are now leading teams at top tech companies 
                worldwide. Our commitment to quality education and student success remains 
                unwavering.
              </p>
              <div className="heritage-quote scroll-animate">
                <p>
                  "Our philosophy is simple: we don't just teach code; we craft architects 
                  of the future digital world."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get In Touch & Community Section */}
      <section className="contact-community-section">
        <div className="contact-community-container">
          <div className="contact-card scroll-animate">
            <div className="contact-icon">✉️</div>
            <h3>Get In Touch</h3>
            <div className="contact-details">
              <p><strong>Email:</strong> info@hindalson.com</p>
              <p><strong>Phone:</strong> +91-74991-66215</p>
              <p><strong>Address:</strong> Burlington Arcade, Level 4, Drishti IAS Building, Lucknow Uttar Pradesh, 226001</p>
            </div>
            <button className="contact-btn">INITIATE CONTACT</button>
          </div>

          <div className="community-card scroll-animate">
            <div className="community-icon">⭐</div>
            <h3>The Community</h3>
            <p>
              Join a global network of learners, mentors, and industry professionals. 
              Connect, collaborate, and grow together in our vibrant community.
            </p>
            <div className="community-buttons">
              <a href="https://www.instagram.com/hindalson_tech?igsh=MW1ndTNvdGppaGs1bg==" target="_blank" rel="noopener noreferrer" className="community-btn">FOLLOW INSTAGRAM</a>
              <button className="community-btn">LINKEDIN NETWORK</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

