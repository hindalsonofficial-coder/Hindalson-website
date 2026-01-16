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
        <svg className="placement-icon" width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M14 2V8H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 13H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 17H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M10 9H9H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      <h3>Resume Building</h3>
      <p>ATS-friendly resumes</p>
    </div>

    {/* Card 2: Mock Interviews */}
    <div className="placement-card">
      <div className="placement-icon-circle">
        <svg className="placement-icon" width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 15V17C21 18.1046 20.1046 19 19 19H5C3.89543 19 3 18.1046 3 17V7C3 5.89543 3.89543 5 5 5H19C20.1046 5 21 5.89543 21 7V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M17.5 15.5C18.3284 15.5 19 14.8284 19 14C19 13.1716 18.3284 12.5 17.5 12.5C16.6716 12.5 16 13.1716 16 14C16 14.8284 16.6716 15.5 17.5 15.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M6.5 15.5C7.32843 15.5 8 14.8284 8 14C8 13.1716 7.32843 12.5 6.5 12.5C5.67157 12.5 5 13.1716 5 14C5 14.8284 5.67157 15.5 6.5 15.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      <h3>Mock Interviews</h3>
      <p>Practice with experts</p>
    </div>

    {/* Card 3: Portfolio Review */}
    <div className="placement-card">
      <div className="placement-icon-circle">
        <svg className="placement-icon" width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22 19C22 19.5304 21.7893 20.0391 21.4142 20.4142C21.0391 20.7893 20.5304 21 20 21H4C3.46957 21 2.96086 20.7893 2.58579 20.4142C2.21071 20.0391 2 19.5304 2 19V5C2 4.46957 2.21071 3.96086 2.58579 3.58579C2.96086 3.21071 3.46957 3 4 3H9L11 6H20C20.5304 6 21.0391 6.21071 21.4142 6.58579C21.7893 6.96086 22 7.46957 22 8V19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M15 13H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M15 17H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M11 9H9H7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      <h3>Portfolio Review</h3>
      <p>Optimize your work</p>
    </div>

    {/* Card 4: Job Referrals */}
    <div className="placement-card">
      <div className="placement-icon-circle">
        <svg className="placement-icon" width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M17 3.13C17.8604 3.35031 18.623 3.85071 19.1676 4.55232C19.7122 5.25392 20.0078 6.11683 20.0078 7.005C20.0078 7.89318 19.7122 8.75608 19.1676 9.45769C18.623 10.1593 17.8604 10.6597 17 10.88" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
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
        <svg className="explore-icon" width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 14C14.2091 14 16 12.2091 16 10C16 7.79086 14.2091 6 12 6C9.79086 6 8 7.79086 8 10C8 12.2091 9.79086 14 12 14Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M20 21V18C20 16.3431 18.6569 15 17 15H7C5.34315 15 4 16.3431 4 18V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 21V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      <h3>Become a Mentor</h3>
      <p>Share your expertise and help shape the next generation.</p>
    </div>

    {/* Card 2: Hire Talent */}
    <div className="explore-card">
      <div className="explore-icon-circle">
        <svg className="explore-icon" width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 7H4C2.89543 7 2 7.89543 2 9V19C2 20.1046 2.89543 21 4 21H20C21.1046 21 22 20.1046 22 19V9C22 7.89543 21.1046 7 20 7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 21V5C16 4.46957 15.7893 3.96086 15.4142 3.58579C15.0391 3.21071 14.5304 3 14 3H10C9.46957 3 8.96086 3.21071 8.58579 3.58579C8.21071 3.96086 8 4.46957 8 5V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      <h3>Hire Talent</h3>
      <p>Connect with skilled, job-ready developers from our programs.</p>
    </div>

    {/* Card 3: Blogs */}
    <div className="explore-card">
      <div className="explore-icon-circle">
        <svg className="explore-icon" width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M14 2V8H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 13H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 17H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M10 9H9H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      <h3>Blogs</h3>
      <p>Read tech insights, tutorials, and industry trends.</p>
    </div>
  </div>
</section>
    </>
  );
}

