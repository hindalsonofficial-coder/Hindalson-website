import React, { useEffect } from "react";
import "../app/App.css";

export default function Portfolio() {
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
    <div className="portfolio-page">
      {/* Hero Section */}
      <section className="portfolio-hero">
        <div className="portfolio-hero-content">
          <div className="portfolio-collection-label scroll-animate">
            <span className="portfolio-line"></span>
            <span className="portfolio-label-text">THE COLLECTION</span>
          </div>
          <h1 className="scroll-animate">
            Showcasing Our <span className="portfolio-italic">Digital</span> Masterpieces
          </h1>
          <p className="scroll-animate">
            A curated selection of technological innovations where architecture meets art. 
            We transform complex challenges into seamless, prestigious digital experiences.
          </p>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="featured-projects-section">
        <div className="featured-projects-container">
          <h2 className="scroll-animate">
            Featured <span className="portfolio-highlight">Projects</span>
          </h2>
          <p className="scroll-animate">
            Explore outstanding projects created by our students across various technologies 
            and domains. Each project represents real-world problem-solving and industry-grade solutions.
          </p>

          <div className="projects-grid">
            <a href="https://leira.in/" target="_blank" rel="noopener noreferrer" className="project-card-link">
              <div className="project-card scroll-animate">
                <div className="project-image has-image">
                  <img src="/Leira.png" alt="Leira Perfume Website" />
                </div>
                <div className="project-content">
                  <h3>Leira Perfume Website</h3>
                  <p className="project-tech">WooCommerce • PHP</p>
                  <p className="project-description">
                    An elegant e-commerce platform for Leira, a premium intimate perfume brand. 
                    Built with WooCommerce and PHP, featuring seamless product management, secure payment 
                    integration, and a beautiful user experience that reflects the brand's natural and 
                    luxurious identity.
                  </p>
                  <div className="project-tags">
                    <span>E-Commerce</span>
                    <span>WooCommerce</span>
                  </div>
                </div>
              </div>
            </a>

            <a href="https://play.google.com/store/apps/details?id=com.leira_app" target="_blank" rel="noopener noreferrer" className="project-card-link">
              <div className="project-card scroll-animate">
                <div className="project-image has-image">
                  <img src="/Leira Mobile.jpg" alt="Leira Mobile App" />
                </div>
                <div className="project-content">
                  <h3>Leira Mobile App</h3>
                  <p className="project-tech">Flutter • Dart</p>
                  <p className="project-description">
                    A premium mobile application for Leira perfume brand, built with Flutter and Dart. 
                    Features seamless shopping experience, secure payment integration, order tracking, 
                    wishlist management, and personalized account features. Available on Google Play Store 
                    with a beautiful, responsive design that reflects the brand's luxury identity.
                  </p>
                  <div className="project-tags">
                    <span>Mobile</span>
                    <span>Flutter</span>
                  </div>
                </div>
              </div>
            </a>

            <a href="https://oneaichat.com/" target="_blank" rel="noopener noreferrer" className="project-card-link">
              <div className="project-card scroll-animate">
                <div className="project-image has-image">
                  <img src="/OneAI.png" alt="oneAichatbot" />
                </div>
                <div className="project-content">
                  <h3>OneAIChat</h3>
                  <p className="project-tech">Node.js • React • Python • ML Models</p>
                  <p className="project-description">
                    An advanced AI chatbot platform built with Node.js and React for the frontend, 
                    and Python with ML models for the backend. Features intelligent natural language 
                    processing, compounding intelligence, and a seamless user experience for 
                    interactive AI conversations.
                  </p>
                  <div className="project-tags">
                    <span>AI/ML</span>
                    <span>Full Stack</span>
                  </div>
                </div>
              </div>
            </a>

            <a href="https://technosense.in/" target="_blank" rel="noopener noreferrer" className="project-card-link">
              <div className="project-card scroll-animate">
                <div className="project-image has-image">
                  <img src="/Technosense.png" alt="TechnoSense" />
                </div>
                <div className="project-content">
                  <h3>TechnoSense</h3>
                  <p className="project-tech">HTML • CSS • JS • PHP</p>
                  <p className="project-description">
                    A comprehensive IT solutions website for TechnoSense NextGen Solutions, 
                    built with HTML, CSS, JavaScript, and PHP. Features IT infrastructure 
                    management services, cloud consulting, development services, and digital 
                    transformation solutions with a modern, professional design.
                  </p>
                  <div className="project-tags">
                    <span>Web Development</span>
                    <span>IT Solutions</span>
                  </div>
                </div>
              </div>
            </a>

            <a href="https://codenovaai.vercel.app/" target="_blank" rel="noopener noreferrer" className="project-card-link">
              <div className="project-card scroll-animate">
                <div className="project-image has-image">
                  <img src="/Codenovaai.png" alt="CodeNovaAI portfolio" />
                </div>
                <div className="project-content">
                  <h3>CodeNovaAI portfolio</h3>
                  <p className="project-tech">React • Node.js</p>
                  <p className="project-description">
                    A modern portfolio website for CodeNova AI, built with React and Node.js. 
                    Features AI-powered solutions showcase, custom AI agents, digital automation 
                    services, and a sleek dark theme design with gradient accents. Empowering 
                    smart businesses with AI and web excellence.
                  </p>
                  <div className="project-tags">
                    <span>Full Stack</span>
                    <span>AI Solutions</span>
                  </div>
                </div>
              </div>
            </a>

          </div>
        </div>
      </section>

      {/* Skills Showcase Section */}
      <section className="skills-showcase-section">
        <div className="skills-showcase-container">
          <h2 className="scroll-animate">
            Technologies <span className="portfolio-highlight">Mastered</span>
          </h2>
          <p className="scroll-animate">
            Our students work with the latest technologies and tools used in 
            the industry, ensuring they're always ahead of the curve.
          </p>

          <div className="skills-grid">
            <div className="skill-item scroll-animate">
              <div className="skill-icon">⚛️</div>
              <h4>React & Next.js</h4>
            </div>
            <div className="skill-item scroll-animate">
              <div className="skill-icon">📱</div>
              <h4>React Native</h4>
            </div>
            <div className="skill-item scroll-animate">
              <div className="skill-icon">🐍</div>
              <h4>Python & Django</h4>
            </div>
            <div className="skill-item scroll-animate">
              <div className="skill-icon">☕</div>
              <h4>Java & Spring</h4>
            </div>
            <div className="skill-item scroll-animate">
              <div className="skill-icon">☁️</div>
              <h4>AWS & Cloud</h4>
            </div>
            <div className="skill-item scroll-animate">
              <div className="skill-icon">🤖</div>
              <h4>AI & ML</h4>
            </div>
            <div className="skill-item scroll-animate">
              <div className="skill-icon">🔗</div>
              <h4>Blockchain</h4>
            </div>
            <div className="skill-item scroll-animate">
              <div className="skill-icon">🎨</div>
              <h4>UI/UX Design</h4>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="portfolio-cta-section">
        <div className="portfolio-cta-container">
          <h2 className="scroll-animate">
            Ready to Build Your <span className="portfolio-highlight">Portfolio?</span>
          </h2>
          <p className="scroll-animate">
            Join Hindalson Technology and start building projects that showcase your skills. 
            Get expert guidance and industry insights to create a portfolio that stands out.
          </p>
        </div>
      </section>
    </div>
  );
}

