import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Navbar from "./components/navbar/Navbar"
import Footer from "./components/footer/Footer";

import HomePage from "./pages/home/Home";
import Bouncers from "./pages/bouncers/Bouncers";
import CO from "./pages/co/CO";
import IS from "./pages/is/IS";
import DrySlides from "./pages/dryslides/DrySlides";
import WaterInflatables from "./pages/waterinflatables/WaterInflatables";
import ContactUs from "./pages/contactus/ContactUs";

import ItemDetail from "./components/itemdetail/ItemDetail"


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
        <ScrollToTop/>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Bouncers" element={<Bouncers />} />
          <Route path="/CO" element={<CO />} />
          <Route path="/IS" element={<IS />} />
          <Route path="/DrySlides" element={<DrySlides />} />
          <Route path="/WaterInflatables" element={<WaterInflatables />} />
          <Route path="/Contact" element={<ContactUs />} />

          <Route path="/Item/:id" element={<ItemDetail />} />
          
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;