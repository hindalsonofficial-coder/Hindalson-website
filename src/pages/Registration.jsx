import React, { useEffect, useState } from "react";
import "../app/App.css";
import { saveRegistrationData } from "../utils/googleSheets";

export default function Registration() {
  const [courseDuration, setCourseDuration] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    course: "",
    courseFee: "",
    preferredMode: "Campus",
    preferredBatch: "",
    backendTechnology: "",
    highestQualification: "",
    permanentAddress: "",
    questions: "",
    agreeTerms: false,
    subscribeNewsletter: false
  });

  const [shortFormData, setShortFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    course: "",
    courseFee: "",
    preferredBatch: "",
    highestQualification: "",
    permanentAddress: "",
    questions: "",
    agreeTerms: false,
    subscribeNewsletter: false
  });

  const coursePrices = {
    "full-stack": "₹20,000",
    "mobile-app": "₹25,000",
    "ai-robotics": "₹25,000",
    "iot": "₹28,000",
    "cloud": "₹22,000",
    "digital-marketing": "₹10,000",
    "graphic-design": "₹10,000"
  };

  const shortCoursePrices = {
    "full-stack": "₹8,000",
    "mobile-app": "₹10,000",
    "ai-robotics": "₹10,000",
    "iot": "₹12,000",
    "cloud": "₹9,000",
    "digital-marketing": "₹5,000",
    "graphic-design": "₹5,000"
  };

  useEffect(() => {
    if (courseDuration === "6-months") {
      if (formData.course && coursePrices[formData.course]) {
        setFormData(prev => ({
          ...prev,
          courseFee: `${coursePrices[formData.course]} (6 months) (Estimated)`
        }));
      } else {
        setFormData(prev => ({
          ...prev,
          courseFee: ""
        }));
      }
    } else if (courseDuration === "45-days") {
      if (shortFormData.course && shortCoursePrices[shortFormData.course]) {
        setShortFormData(prev => ({
          ...prev,
          courseFee: `${shortCoursePrices[shortFormData.course]} (45 days) (Estimated)`
        }));
      } else {
        setShortFormData(prev => ({
          ...prev,
          courseFee: ""
        }));
      }
    }
  }, [formData.course, shortFormData.course, courseDuration]);

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

    const timeoutId = setTimeout(() => {
      const animateElements = document.querySelectorAll('.scroll-animate');
      animateElements.forEach(el => {
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

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (courseDuration === "6-months") {
      setFormData({
        ...formData,
        [name]: type === 'checkbox' ? checked : value
      });
    } else if (courseDuration === "45-days") {
      setShortFormData({
        ...shortFormData,
        [name]: type === 'checkbox' ? checked : value
      });
    }
  };

  const handleShortFormChange = (e) => {
    const { name, value, type, checked } = e.target;
    setShortFormData({
      ...shortFormData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      if (courseDuration === "6-months") {
        await saveRegistrationData(formData, "6-months");
        console.log("6 Months Form submitted:", formData);
        alert("Registration successful! We'll contact you soon.");
        // Reset form
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          course: "",
          courseFee: "",
          preferredMode: "Campus",
          preferredBatch: "",
          backendTechnology: "",
          highestQualification: "",
          permanentAddress: "",
          questions: "",
          agreeTerms: false,
          subscribeNewsletter: false
        });
      } else if (courseDuration === "45-days") {
        await saveRegistrationData(shortFormData, "45-days");
        console.log("45 Days Form submitted:", shortFormData);
        alert("Registration successful! We'll contact you soon.");
        // Reset form
        setShortFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          course: "",
          courseFee: "",
          preferredBatch: "",
          highestQualification: "",
          permanentAddress: "",
          questions: "",
          agreeTerms: false,
          subscribeNewsletter: false
        });
      }
    } catch (error) {
      console.error("Error submitting registration:", error);
      alert("There was an error submitting your registration. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="registration-page">
      {/* Hero Section */}
      <section className="registration-hero">
        <div className="registration-hero-content">
          <span className="registration-badge scroll-animate">ENROLLMENT OPEN 2024</span>
          <h1 className="scroll-animate">
            Start Your Tech <span className="registration-gradient">Journey Today</span>
          </h1>
          <p className="scroll-animate">
            Join thousands of students who are building successful careers in technology. 
            Fill out the form below to begin your transformation with Hindalson's prestige tier programs.
          </p>
        </div>
      </section>

      {/* Registration Form Section */}
      <section className="registration-form-section">
        <div className="registration-form-container">
          <div className="registration-form-card scroll-animate">
            <div className="form-header">
              <div className="form-title-section">
                <h2>Registration Profile</h2>
                <p>Please provide your academic and professional details</p>
              </div>
              <div className="form-progress">
                <span className="progress-text">STEP 01/01</span>
                <div className="progress-bar">
                  <div className="progress-fill"></div>
                </div>
              </div>
            </div>

            {/* Course Duration Selection */}
            <div className="duration-selector">
              <label>SELECT COURSE DURATION *</label>
              <select
                value={courseDuration}
                onChange={(e) => setCourseDuration(e.target.value)}
                required
                className="duration-dropdown"
              >
                <option value="">Select Course Duration</option>
                <option value="6-months">6 Months Course</option>
                <option value="45-days">45 Days Training</option>
              </select>
            </div>

            {courseDuration === "6-months" && (
            <form onSubmit={handleSubmit} className="registration-form">
              <div className="form-row">
                <div className="form-group">
                  <label>FIRST NAME *</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>LAST NAME *</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>EMAIL ADDRESS *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>PHONE NUMBER *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>SELECT COURSE *</label>
                  <select
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select your specialization</option>
                    <option value="full-stack">Full Stack Development</option>
                    <option value="mobile-app">Mobile App Development</option>
                    <option value="ai-robotics">AI & Robotics</option>
                    <option value="iot">Embedded IoT</option>
                    <option value="cloud">Cloud Computing</option>
                    <option value="digital-marketing">Digital Marketing</option>
                    <option value="graphic-design">Graphics Designer</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>COURSE FEE</label>
                  <input
                    type="text"
                    name="courseFee"
                    value={formData.courseFee}
                    readOnly
                    className="readonly-input"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>PREFERRED BATCH *</label>
                  <select
                    name="preferredBatch"
                    value={formData.preferredBatch}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Batch</option>
                    <option value="morning">Morning Batch (9 AM - 12 PM)</option>
                    <option value="afternoon">Afternoon Batch (2 PM - 5 PM)</option>
                    <option value="evening">Evening Batch (6 PM - 9 PM)</option>
                    <option value="weekend">Weekend Batch (Sat-Sun)</option>
                  </select>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>BACKEND TECHNOLOGY (OPTIONAL)</label>
                  <select
                    name="backendTechnology"
                    value={formData.backendTechnology}
                    onChange={handleChange}
                  >
                    <option value="">Choose tech stack</option>
                    <option value="nodejs">Node.js</option>
                    <option value="python">Python</option>
                    <option value="java">Java</option>
                    <option value="php">PHP</option>
                    <option value="ruby">Ruby</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>HIGHEST QUALIFICATION *</label>
                  <select
                    name="highestQualification"
                    value={formData.highestQualification}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select qualification</option>
                    <option value="high-school">High School</option>
                    <option value="diploma">Diploma</option>
                    <option value="bachelor">Bachelor's Degree</option>
                    <option value="master">Master's Degree</option>
                    <option value="phd">PhD</option>
                  </select>
                </div>
              </div>

              <div className="form-group full-width">
                <label>PERMANENT ADDRESS</label>
                <textarea
                  name="permanentAddress"
                  value={formData.permanentAddress}
                  onChange={handleChange}
                  placeholder="Enter your full street address, city, and zip code"
                  rows="3"
                ></textarea>
              </div>

              <div className="form-group full-width">
                <label>ANY QUESTIONS OR COMMENTS?</label>
                <textarea
                  name="questions"
                  value={formData.questions}
                  onChange={handleChange}
                  placeholder="Tell us anything else you'd like us to know about your background or goals"
                  rows="4"
                ></textarea>
              </div>

              <div className="form-checkboxes">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    name="agreeTerms"
                    checked={formData.agreeTerms}
                    onChange={handleChange}
                    required
                  />
                  <span>
                    I agree to the <a href="#">Terms & Conditions</a> and <a href="#">Privacy Policy</a> *
                  </span>
                </label>

                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    name="subscribeNewsletter"
                    checked={formData.subscribeNewsletter}
                    onChange={handleChange}
                  />
                  <span>Subscribe to our newsletter for premium updates and scholarship offers</span>
                </label>
              </div>

              <button type="submit" className="submit-registration-btn" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Complete Registration"}
                {!isSubmitting && <span className="arrow-icon">→</span>}
              </button>

              <p className="security-message">SECURE 256-BIT ENCRYPTED ENROLLMENT</p>
            </form>
            )}

            {courseDuration === "45-days" && (
            <form onSubmit={handleSubmit} className="registration-form">
              <div className="form-row">
                <div className="form-group">
                  <label>FIRST NAME *</label>
                  <input
                    type="text"
                    name="firstName"
                    value={shortFormData.firstName}
                    onChange={handleShortFormChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>LAST NAME *</label>
                  <input
                    type="text"
                    name="lastName"
                    value={shortFormData.lastName}
                    onChange={handleShortFormChange}
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>EMAIL ADDRESS *</label>
                  <input
                    type="email"
                    name="email"
                    value={shortFormData.email}
                    onChange={handleShortFormChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>PHONE NUMBER *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={shortFormData.phone}
                    onChange={handleShortFormChange}
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>SELECT COURSE *</label>
                  <select
                    name="course"
                    value={shortFormData.course}
                    onChange={handleShortFormChange}
                    required
                  >
                    <option value="">Select your specialization</option>
                    <option value="full-stack">Full Stack Development</option>
                    <option value="mobile-app">Mobile App Development</option>
                    <option value="ai-robotics">AI & Robotics</option>
                    <option value="iot">Embedded IoT</option>
                    <option value="cloud">Cloud Computing</option>
                    <option value="digital-marketing">Digital Marketing</option>
                    <option value="graphic-design">Graphics Designer</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>COURSE FEE</label>
                  <input
                    type="text"
                    name="courseFee"
                    value={shortFormData.courseFee}
                    readOnly
                    className="readonly-input"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>PREFERRED BATCH *</label>
                  <select
                    name="preferredBatch"
                    value={shortFormData.preferredBatch}
                    onChange={handleShortFormChange}
                    required
                  >
                    <option value="">Select Batch</option>
                    <option value="morning">Morning Batch (9 AM - 12 PM)</option>
                    <option value="afternoon">Afternoon Batch (2 PM - 5 PM)</option>
                    <option value="evening">Evening Batch (6 PM - 9 PM)</option>
                    <option value="weekend">Weekend Batch (Sat-Sun)</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>HIGHEST QUALIFICATION *</label>
                  <select
                    name="highestQualification"
                    value={shortFormData.highestQualification}
                    onChange={handleShortFormChange}
                    required
                  >
                    <option value="">Select qualification</option>
                    <option value="high-school">High School</option>
                    <option value="diploma">Diploma</option>
                    <option value="bachelor">Bachelor's Degree</option>
                    <option value="master">Master's Degree</option>
                    <option value="phd">PhD</option>
                  </select>
                </div>
              </div>

              <div className="form-group full-width">
                <label>PERMANENT ADDRESS</label>
                <textarea
                  name="permanentAddress"
                  value={shortFormData.permanentAddress}
                  onChange={handleShortFormChange}
                  placeholder="Enter your full street address, city, and zip code"
                  rows="3"
                ></textarea>
              </div>

              <div className="form-group full-width">
                <label>ANY QUESTIONS OR COMMENTS?</label>
                <textarea
                  name="questions"
                  value={shortFormData.questions}
                  onChange={handleShortFormChange}
                  placeholder="Tell us anything else you'd like us to know about your background or goals"
                  rows="4"
                ></textarea>
              </div>

              <div className="form-checkboxes">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    name="agreeTerms"
                    checked={shortFormData.agreeTerms}
                    onChange={handleShortFormChange}
                    required
                  />
                  <span>
                    I agree to the <a href="#">Terms & Conditions</a> and <a href="#">Privacy Policy</a> *
                  </span>
                </label>

                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    name="subscribeNewsletter"
                    checked={shortFormData.subscribeNewsletter}
                    onChange={handleShortFormChange}
                  />
                  <span>Subscribe to our newsletter for premium updates and scholarship offers</span>
                </label>
              </div>

              <button type="submit" className="submit-registration-btn" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Complete Registration"}
                {!isSubmitting && <span className="arrow-icon">→</span>}
              </button>

              <p className="security-message">SECURE 256-BIT ENCRYPTED ENROLLMENT</p>
            </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

