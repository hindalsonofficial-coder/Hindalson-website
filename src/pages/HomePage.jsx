// HomePage.jsx
import React from "react";
import { Link } from "react-router-dom";
import "../app/App.css";

export default function HomePage() {
  // Stats state - Fixed values (no random changes)
  const stats = {
    placement: 97,
    programs: 55,
    students: 24832,
    innovation: 4,
  };

  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="overlay">
          <p className="tag">Future-Ready Education</p>
          <h1>
            Welcome to <em>Hindalson</em>Technology
          </h1>
          <p className="hero-text">
            Hindalson Technologies creates pathways for academic rigor and
            innovation, preparing visionary leaders.
          </p>
          <div className="hero-btns">
            <a href="#services" className="btn">Our Services</a>
            <a href="#explore-courses" className="btn outline">Explore Courses</a>
            <Link to="/contact" className="btn outline">Talk to us</Link>
          </div>
        </div>
      </section>

      {/* Stats - Floating Section */}
      <section className="stats-wrapper">
        <div className="stats">
          <div><img src="https://img.icons8.com/?size=100&id=12197&format=png&color=808080" alt="" />
            <h2>{stats.placement}%</h2>
            <p>SUCCESS RATE</p>
          </div>
          <div>
            <img src="https://img.icons8.com/?size=100&id=38390&format=png&color=808080" alt="" />
            <h2>{stats.programs}+</h2>
            <p>ELITE PROGRAMS</p>
          </div>
          <div>
            <img src="https://img.icons8.com/?size=100&id=11168&format=png&color=808080" alt="" />
            <h2>{stats.students.toLocaleString()}</h2>
            <p>ALUMNI NETWORK</p>
          </div>
          <div>
            <img src="https://img.icons8.com/?size=100&id=120636&format=png&color=808080" alt=""/>
            <h2>#{stats.innovation}</h2>
            <p>RESEARCH HUB</p>
          </div>
        </div>
      </section>

{/* Why Choose Section */}
<section className="why-choose">
  <div className="why-choose-header">
    <h2>Why choose Hindalson Technology</h2>
    <p>Career-focused programs, industry mentors, and practical projects that get you job-ready.</p>
  </div>

  <div className="program-cards">
    {/* Launchpad Program */}
    <div className="program-card">
      <span className="program-type">LAUNCHPAD PROGRAM</span>
      <h3>Summer Training</h3>
      <div className="program-icon">
        <div className="icon-circle icon-gray">
          <span className="icon-rocket">🚀</span>
        </div>
      </div>
      <div className="program-price">₹7,000</div>
      <div className="program-duration">2 MONTHS COURSE</div>
      <div className="program-tags">
        <span className="tag-badge">EARLY LEARNERS</span>
        <span className="tag-badge">FOUNDATION</span>
      </div>
    </div>

    {/* Skill Builder Program */}
    <div className="program-card featured">
      <span className="program-type">SKILL BUILDER PROGRAM</span>
      <h3>Core Programs</h3>
      <div className="program-icon">
        <div className="icon-circle icon-brown">
          <span className="icon-code">{'<>'}</span>
        </div>
      </div>
      <div className="program-price">₹20,000</div>
      <div className="program-duration">3-6 MONTHS COURSE</div>
      <div className="program-tags">
        <span className="tag-badge">CORE LOGIC</span>
        <span className="tag-badge">PROJECT PRACTICE</span>
      </div>
    </div>

    {/* Career-Ready Program */}
    <div className="program-card">
      <span className="program-type">CAREER-READY PROGRAM</span>
      <h3>Job Oriented</h3>
      <div className="program-icon">
        <div className="icon-circle icon-gray">
          <span className="icon-briefcase">💼</span>
        </div>
      </div>
      <div className="program-price">₹20,000</div>
      <div className="program-duration">3-6 MONTHS COURSE</div>
      <div className="program-tags">
        <span className="tag-badge">EXPERTISE</span>
        <span className="tag-badge">JOB-READY</span>
      </div>
    </div>
  </div>
</section>

{/* Tradition */}
<section className="tradition">

  {/* LEFT CONTENT */}
  <div className="tradition-text">
    <small className="section-tag">-THE HINDALS DIFFERENCE</small>

    <h2>
      Where Tradition <br />
      Meets <em>Innovation</em>
    </h2>

    <p className="intro">
      We don't just teach, we transform. Our holistic approach to education
      ensures that you graduate not just with a degree, but with a purpose.
    </p>

    <div className="features">

      <div className="feature">
        <span className="icon">🌍</span>
        <div>
          <h4>Global Alumni Network</h4>
          <p>
            Connect with over 20,000 graduates holding top
            organizations worldwide.
          </p>
        </div>
      </div>

      <div className="feature">
        <span className="icon">🔬</span>
        <div>
          <h4>Elite Research Facilities</h4>
          <p>
            Access to 50+ specialized labs funded by industry leaders
            and government grants.
          </p>
        </div>
      </div>

      <div className="feature">
        <span className="icon">🎓</span>
        <div>
          <h4>Scholarship Programs</h4>
          <p>
            Over $10M in annual financial aid to support deserving
            talent from all backgrounds.
          </p>
        </div>
      </div>

    </div>
  </div>

  {/* RIGHT IMAGES */}
  <div className="tradition-images">

    <div className="img img1">
      <img src="/st2.jpg" alt="" />
    </div>

    <div className="img img2">
      <img src="/ct1.jpg" alt="" />
    </div>

    <div className="img img3">
      <img src="/w1.jpg" alt="" />
    </div>

    <div className="img img4">
      <img src="/ct2.avif" alt="" />
    </div>

    <div className="experience">
      <h3>35+</h3>
      <p>YEARS OF<br />EXCELLENCE</p>
    </div>

  </div>
</section>

{/* Real-World Learning Section */}
<section className="real-world-section">
  <div className="real-world-container">
    {/* Left Column */}
    <div className="real-world-left">
      <h2>
        Hindalson Technology:
        <br />
        Where Future Tech
        <br />
        Leaders Begin Their
        <br />
        <span className="highlight">Real-World</span> Learning
        <br />
        Journey
      </h2>
      <div className="accent-line"></div>
    </div>

    {/* Right Column */}
    <div className="real-world-right">
      <p className="main-text">
        Tired of boring theory? At Hindalson Technology, you'll actually
        build stuff, not just learn it. Real projects, real mentors, and real
        career moves. Whether you're into code, design, apps or SEO —
        we've got the tools and vibe to level you up for the tech world.
      </p>
      
      <div className="quote-block">
        <div className="quote-line"></div>
        <p className="quote-text">
          "Because tech education should be exciting, hands-on, and
          future-ready."
        </p>
      </div>

      <Link to="/about" className="company-overview-btn">COMPANY OVERVIEW</Link>
    </div>
  </div>
</section>

{/* Services We Provide Section */}
<section id="services" className="explore-courses">
  <div className="courses-header">
    <small className="courses-tag">OUR SERVICES</small>
    <h2>Services We Provide</h2>
    <p>Professional solutions tailored to your business needs. From web development to AI automation, we deliver excellence.</p>
  </div>

  <div className="courses-grid">
    {/* Service 1: Web Development */}
    <Link to="/services/web-development" className="course-card">
      <div className="course-image">
        <img src="/full-stack-development.png" alt="Web Development" />
        <div className="course-overlay"></div>
      </div>
      <div className="course-content">
        <h3>Web Development</h3>
        <p className="course-topics">BUSINESS WEBSITES, E-COMMERCE, APIS</p>
        <div className="course-footer">
          <span className="course-badge">POPULAR</span>
          <span className="course-arrow">→</span>
        </div>
      </div>
    </Link>

    {/* Service 2: AI & Automation */}
    <Link to="/services/ai-automation" className="course-card">
      <div className="course-image">
        <img src="/ai.jpg" alt="AI & Automation" />
        <div className="course-overlay"></div>
      </div>
      <div className="course-content">
        <h3>AI & Automation</h3>
        <p className="course-topics">CHATBOTS, WORKFLOWS, INTEGRATION</p>
        <div className="course-footer">
          <span className="course-badge">PREMIUM</span>
          <span className="course-arrow">→</span>
        </div>
      </div>
    </Link>

    {/* Service 3: Mobile Development */}
    <Link to="/services/mobile-development" className="course-card">
      <div className="course-image">
        <img src="/mob.jpg" alt="Mobile Development" />
        <div className="course-overlay"></div>
      </div>
      <div className="course-content">
        <h3>Mobile Development</h3>
        <p className="course-topics">ANDROID, IOS, CROSS-PLATFORM</p>
        <div className="course-footer">
          <span className="course-badge">ADVANCED</span>
          <span className="course-arrow">→</span>
        </div>
      </div>
    </Link>

    {/* Service 4: UI/UX Design */}
    <Link to="/services/ui-ux" className="course-card">
      <div className="course-image">
        <img src="/1.jpg" alt="UI/UX Design" />
        <div className="course-overlay"></div>
      </div>
      <div className="course-content">
        <h3>UI/UX Design</h3>
        <p className="course-topics">WEBSITE, MOBILE, DASHBOARD</p>
        <div className="course-footer">
          <span className="course-badge">CREATIVE</span>
          <span className="course-arrow">→</span>
        </div>
      </div>
    </Link>

    {/* Service 5: Video Editing */}
    <Link to="/services/video-editing" className="course-card">
      <div className="course-image">
        <img src="/full-stack-development.png" alt="Video Editing" />
        <div className="course-overlay"></div>
      </div>
      <div className="course-content">
        <h3>Video Editing</h3>
        <p className="course-topics">REELS, PROMOS, SOCIAL MEDIA</p>
        <div className="course-footer">
          <span className="course-badge">TRENDING</span>
          <span className="course-arrow">→</span>
        </div>
      </div>
    </Link>

    {/* Service 6: Social Media Management */}
    <Link to="/services/social-media-management" className="course-card">
      <div className="course-image">
        <img src="/4.jpg" alt="Social Media Management" />
        <div className="course-overlay"></div>
      </div>
      <div className="course-content">
        <h3>Social Media Management</h3>
        <p className="course-topics">CONTENT, STRATEGY, ANALYTICS</p>
        <div className="course-footer">
          <span className="course-badge">VIEW ALL</span>
          <span className="course-arrow">→</span>
        </div>
      </div>
    </Link>
  </div>
</section>

{/* Explore Top Courses Section */}
<section id="explore-courses" className="explore-courses">
  <div className="courses-header">
    <small className="courses-tag">OUR CURRICULUM</small>
    <h2>Explore Top Courses</h2>
    <p>Snapshots from our programs, projects, and community events.</p>
  </div>

  <div className="courses-grid">
    {/* Card 1 */}
    <Link to="/course/graphic-designer" className="course-card">
      <div className="course-image">
        <img src="/1.jpg" alt="Web Designing" />
        <div className="course-overlay"></div>
      </div>
      <div className="course-content">
        <h3>Web Designing</h3>
        <p className="course-topics">UI/UX, HTML, CSS, BOOTSTRAP</p>
        <div className="course-footer">
          <span className="course-badge">BEGINNER FRIENDLY</span>
          <span className="course-arrow">→</span>
        </div>
      </div>
    </Link>

    {/* Card 2 */}
    <Link to="/course/full-stack-development" className="course-card">
      <div className="course-image">
        <img src="/2.png" alt="Full Stack Dev" />
        <div className="course-overlay"></div>
      </div>
      <div className="course-content">
        <h3>Full Stack Dev</h3>
        <p className="course-topics">FRONTEND, BACKEND, APIS</p>
        <div className="course-footer">
          <span className="course-badge">JOB GUARANTEE</span>
          <span className="course-arrow">→</span>
        </div>
      </div>
    </Link>

    {/* Card 3 */}
    <Link to="/course/mobile-app-development" className="course-card">
      <div className="course-image">
        <img src="/3.jpg" alt="App Development" />
        <div className="course-overlay"></div>
      </div>
      <div className="course-content">
        <h3>App Development</h3>
        <p className="course-topics">ANDROID, IOS, REACT NATIVE</p>
        <div className="course-footer">
          <span className="course-badge">ADVANCED</span>
          <span className="course-arrow">→</span>
        </div>
      </div>
    </Link>

    {/* Card 4 */}
    <Link to="/course/digital-marketing" className="course-card">
      <div className="course-image">
        <img src="/4.jpg" alt="Digital Marketing" />
        <div className="course-overlay"></div>
      </div>
      <div className="course-content">
        <h3>Digital Marketing</h3>
        <p className="course-topics">SEO, SEM, ANALYTICS</p>
        <div className="course-footer">
          <span className="course-badge">TRENDING</span>
          <span className="course-arrow">→</span>
        </div>
      </div>
    </Link>

    {/* Card 5 */}
    <Link to="/course/graphic-designer" className="course-card">
      <div className="course-image">
        <img src="/5.jpg" alt="Graphic Design" />
        <div className="course-overlay"></div>
      </div>
      <div className="course-content">
        <h3>Graphic Design</h3>
        <p className="course-topics">ILLUSTRATION, BRANDING</p>
        <div className="course-footer">
          <span className="course-badge">CREATIVE</span>
          <span className="course-arrow">→</span>
        </div>
      </div>
    </Link>

    {/* Card 6 */}
    <Link to="/course/more-technologies" className="course-card">
      <div className="course-image">
        <img src="/w1.jpg" alt="More Technologies" />
        <div className="course-overlay"></div>
      </div>
      <div className="course-content">
        <h3>More Technologies</h3>
        <p className="course-topics">EXPLORE ADDITIONAL TRACKS</p>
        <div className="course-footer">
          <span className="course-badge">VIEW ALL</span>
          <span className="course-arrow">→</span>
        </div>
      </div>
    </Link>
  </div>
</section>

{/* Build Job-Ready Skills Section */}
<section className="job-ready-skills">
  <div className="skills-header">
    <h2>Build job-ready skills</h2>
    <p>Modular lessons, hands-on labs, and mentor feedback so you can learn by doing.</p>
  </div>

  <div className="skills-cards">
    {/* Card 1: Full Stack Essentials */}
    <div className="skill-card">
      <div className="skill-icon">
        <div className="icon-box icon-gray">
          <span className="icon-stack">▦</span>
        </div>
      </div>
      <h3>Full Stack Essentials</h3>
      <div className="skill-price">₹20,000</div>
      <div className="skill-duration">6 Months Course</div>
      <ul className="skill-topics">
        <li>HTML, CSS, Bootstrap, JS</li>
        <li>APIs, JSON, CRUD practice</li>
        <li>Mini projects to publish</li>
      </ul>
      <Link to="/course/full-stack-development" className="skill-btn outline">VIEW CURRICULUM</Link>
    </div>

    {/* Card 2: App & Cloud Track (Popular) */}
    <div className="skill-card popular">
      <div className="popular-badge">POPULAR</div>
      <div className="skill-icon">
        <div className="icon-box icon-gray">
          <span className="icon-cloud">✓</span>
        </div>
      </div>
      <h3>App & Cloud Track</h3>
      <div className="skill-price">₹25,000</div>
      <div className="skill-duration">5 Months Course</div>
      <ul className="skill-topics">
        <li>Android/IOS fundamentals</li>
        <li>APIs, auth, and storage</li>
        <li>Deploy to cloud sandboxes</li>
      </ul>
      <Link to="/course/mobile-app-development" className="skill-btn primary">VIEW CURRICULUM</Link>
    </div>

    {/* Card 3: Data & AI Starter */}
    <div className="skill-card">
      <div className="skill-icon">
        <div className="icon-box icon-gray">
          <span className="icon-gear">⚙</span>
        </div>
      </div>
      <h3>Data & AI Starter</h3>
      <div className="skill-price">₹25,000</div>
      <div className="skill-duration">7 Months Course</div>
      <ul className="skill-topics">
        <li>Python, data wrangling basics</li>
        <li>Intro ML concepts & models</li>
        <li>Dashboards to showcase insights</li>
      </ul>
      <Link to="/course/ai-robotics" className="skill-btn outline">VIEW CURRICULUM</Link>
    </div>
  </div>
</section>

{/* 100% Placement Support Section */}
<section className="placement-support">
  <div className="placement-header">
    <span className="placement-tag">CAREERS</span>
    <h2>100% Placement Support</h2>
    <p>We don't just teach you skills - we help you land your dream job.</p>
  </div>

  <div className="placement-cards">
    {/* Card 1: Resume Building */}
    <div className="placement-card">
      <div className="placement-icon-circle">
        <span className="placement-icon">📄</span>
      </div>
      <h3>Resume Building</h3>
      <p>ATS-friendly resumes</p>
    </div>

    {/* Card 2: Mock Interviews */}
    <div className="placement-card">
      <div className="placement-icon-circle">
        <span className="placement-icon">🎤</span>
      </div>
      <h3>Mock Interviews</h3>
      <p>Practice with experts</p>
    </div>

    {/* Card 3: Portfolio Review */}
    <div className="placement-card">
      <div className="placement-icon-circle">
        <span className="placement-icon">📁</span>
      </div>
      <h3>Portfolio Review</h3>
      <p>Optimize your work</p>
    </div>

    {/* Card 4: Job Referrals */}
    <div className="placement-card">
      <div className="placement-icon-circle">
        <span className="placement-icon">🤝</span>
      </div>
      <h3>Job Referrals</h3>
      <p>Partner companies</p>
    </div>
  </div>
</section>

{/* Explore More Section */}
<section className="explore-more">
  <div className="explore-header">
    <h2>Explore More</h2>
    <div className="explore-underline"></div>
  </div>

  <div className="explore-cards">
    {/* Card 1: Become a Mentor */}
    <div className="explore-card">
      <div className="explore-icon-circle">
        <span className="explore-icon">🎓</span>
      </div>
      <h3>Become a Mentor</h3>
      <p>Share your expertise and help shape the next generation.</p>
    </div>

    {/* Card 2: Hire Talent */}
    <div className="explore-card">
      <div className="explore-icon-circle">
        <span className="explore-icon">💼</span>
      </div>
      <h3>Hire Talent</h3>
      <p>Connect with skilled, job-ready developers from our programs.</p>
    </div>

    {/* Card 3: Blogs */}
    <div className="explore-card">
      <div className="explore-icon-circle">
        <span className="explore-icon">📝</span>
      </div>
      <h3>Blogs</h3>
      <p>Read tech insights, tutorials, and industry trends.</p>
    </div>
  </div>
</section>
    </>
  );
}

