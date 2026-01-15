import React, { useState } from "react";
import "../app/App.css";
import { saveContactData } from "../utils/googleSheets";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Save to Google Sheets
      await saveContactData(formData);
      console.log("Form submitted:", formData);
      alert("Thank you for your message! We'll get back to you soon.");
      setFormData({ fullName: "", email: "", message: "" });
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error submitting your form. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-page-new">
      {/* Main Content Section */}
      <section className="contact-main-new">
        <div className="contact-container-new">
          {/* Left Column - Contact Form */}
          <div className="contact-form-wrapper">
            <h1 className="contact-heading">Contact</h1>
            <form className="contact-form-new" onSubmit={handleSubmit}>
              <div className="form-field-new">
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full name"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="form-input-new"
                />
              </div>

              <div className="form-field-new">
                <input
                  type="email"
                  name="email"
                  placeholder="Email address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="form-input-new"
                />
              </div>

              <div className="form-field-new">
                <textarea
                  name="message"
                  placeholder="Messages"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  required
                  className="form-textarea-new"
                ></textarea>
              </div>

              <button type="submit" className="submit-btn-new" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </form>
          </div>

          {/* Right Column - Contact Information */}
          <div className="contact-info-wrapper">
            <div className="contact-info-header">
              <h2>Get in touch with us! Let's talk!</h2>
            </div>
            <div className="contact-info-content">
              <div className="contact-item-new">
                <div className="contact-icon-new">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M22 6L12 13L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <a href="mailto:info@hindalson.com">Info@hindalson.com</a>
              </div>
              
              <div className="contact-item-new">
                <div className="contact-icon-new">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 16.92V19.92C22.0011 20.1985 21.9441 20.4742 21.8325 20.7292C21.7209 20.9842 21.5573 21.2131 21.3522 21.4013C21.1472 21.5895 20.9053 21.7331 20.6421 21.8228C20.3789 21.9125 20.1002 21.9463 19.8222 21.9222C16.7428 21.5859 13.787 20.5341 11.19 18.8522C8.77382 17.3047 6.59833 15.1292 5.05 12.7122C3.36422 10.1082 2.31257 7.14405 1.98 4.05222C1.95589 3.77424 1.98972 3.49556 2.07941 3.23233C2.1691 2.96911 2.31271 2.72722 2.50089 2.52219C2.68907 2.31716 2.91802 2.15359 3.173 2.04198C3.42799 1.93037 3.70371 1.87336 3.98222 1.87422H6.98222C7.55778 1.87398 8.11149 2.10259 8.52222 2.51222C9.16374 3.15278 9.61547 3.96714 9.82222 4.86222C9.97901 5.54162 10.2281 6.19377 10.56 6.80222C10.7106 7.06747 10.7984 7.36574 10.8162 7.67222C10.834 7.9787 10.7813 8.28478 10.6622 8.56222L9.29222 11.5522C10.9981 14.4114 13.5886 17.0019 16.4478 18.7078L19.4378 17.3378C19.7152 17.2187 20.0213 17.166 20.3278 17.1838C20.6343 17.2016 20.9325 17.2894 21.1978 17.44C21.8062 17.7719 22.4584 18.021 23.1378 18.1778C24.0329 18.3845 24.8473 18.8363 25.4878 19.4778C25.8974 19.8885 26.126 20.4422 26.1258 21.0178V24.0178H26.1258Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <a href="tel:+917499166215">+91-74991-66215</a>
              </div>
              
              <div className="contact-item-new">
                <div className="contact-icon-new">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <a href="https://www.facebook.com/share/p/1AeNFmp4CY/" target="_blank" rel="noopener noreferrer">@hindalson</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

