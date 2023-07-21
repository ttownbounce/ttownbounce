import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Navbar from "./components/Navbar"
import Footer from "./components/Footer";

import HomePage from "./components/pages/HomePage";
import ContactUs from "./components/pages/ContactUs"


function App() {
  return (
    <div>
      <Router>
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