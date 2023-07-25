import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Navbar from "./components/Navbar"
import Footer from "./components/Footer";

import HomePage from "./pages/HomePage";
import ContactUs from "./pages/ContactUs"

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; // This component doesn't render anything; it's just for behavior.
}

function App() {
  return (
    <div>
      <Router>
      <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Contact" element={<ContactUs />} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
} //routes are the same as the old way of using switches
export default App;