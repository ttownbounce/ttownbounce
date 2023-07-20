import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes} from "react-router-dom";
import Navbar from "./components/navbar";


function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
        </Routes>
      </Router>
    </div>
  );
} //routes are the same as the old way of using switches
export default App;