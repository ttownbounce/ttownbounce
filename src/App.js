import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes} from "react-router-dom";
import navbar from "./components/navbar";


function App() {
  return (
    <div>
      <Router>
        <navbar />
        <Routes>
        </Routes>
      </Router>
    </div>
  );
} //routes are the same as the old way of using switches
export default App;