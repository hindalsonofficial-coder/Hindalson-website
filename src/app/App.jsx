// App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../components/Layout";
import ScrollToTop from "../components/ScrollToTop";
import HomePage from "../pages/HomePage";
import FullStackCourse from "../pages/FullStackCourse";
import Mobileapp from "../pages/Mobileapp";
import AiRobotics from "../pages/AiRobotics";
import Iot from "../pages/Iot";
import CloudComputing from "../pages/CloudComputing";
import DigitalMarketing from "../pages/DigitalMarketing";
import GraphicDesigner from "../pages/GraphicDesigner";
import MoreTechnology from "../pages/MoreTechnology";
import AboutUs from "../pages/AboutUs";
import Portfolio from "../pages/Portfolio";
import Placement from "../pages/Placement";
import ContactUs from "../pages/ContactUs";
import Registration from "../pages/Registration";
import MobileDevelopmentServices from "../pages/services pages/MobileDevelopmentServices";
import AIAutomationServices from "../pages/services pages/AIAutomationServices";
import WebDevelopmentServices from "../pages/services pages/WebDevelopmentServices";
import UIUXServices from "../pages/services pages/UIUXServices";
import VideoEditingServices from "../pages/services pages/VideoEditingServices";
import SocialMediaManagementServices from "../pages/services pages/SocialMediaManagementServices";
import "./App.css";

export default function App() {
  return (
    <>
      <ScrollToTop />
    <Routes>
      <Route path="/" element={<Layout><HomePage /></Layout>} />
      <Route path="/course/full-stack-development" element={<Layout><FullStackCourse /></Layout>} />
      <Route path="/course/mobile-app-development" element={<Layout><Mobileapp /></Layout>} />
      <Route path="/course/ai-robotics" element={<Layout><AiRobotics /></Layout>} />
      <Route path="/course/iot" element={<Layout><Iot /></Layout>} />
      <Route path="/course/cloud-computing" element={<Layout><CloudComputing /></Layout>} />
      <Route path="/course/digital-marketing" element={<Layout><DigitalMarketing /></Layout>} />
      <Route path="/course/graphic-designer" element={<Layout><GraphicDesigner /></Layout>} />
      <Route path="/course/more-technologies" element={<Layout><MoreTechnology /></Layout>} />
      <Route path="/about" element={<Layout><AboutUs /></Layout>} />
      <Route path="/portfolio" element={<Layout><Portfolio /></Layout>} />
      <Route path="/placement" element={<Layout><Placement /></Layout>} />
      <Route path="/contact" element={<Layout><ContactUs /></Layout>} />
      <Route path="/registration" element={<Layout><Registration /></Layout>} />
      <Route path="/services/mobile-development" element={<Layout><MobileDevelopmentServices /></Layout>} />
      <Route path="/services/ai-automation" element={<Layout><AIAutomationServices /></Layout>} />
      <Route path="/services/web-development" element={<Layout><WebDevelopmentServices /></Layout>} />
      <Route path="/services/ui-ux" element={<Layout><UIUXServices /></Layout>} />
      <Route path="/services/video-editing" element={<Layout><VideoEditingServices /></Layout>} />
      <Route path="/services/social-media-management" element={<Layout><SocialMediaManagementServices /></Layout>} />
      <Route path="*" element={<Layout><div style={{padding: '50px', textAlign: 'center'}}><h1>404 - Page Not Found</h1><p><a href="/">Go to Home</a></p></div></Layout>} />
    </Routes>
    </>
  );
}
