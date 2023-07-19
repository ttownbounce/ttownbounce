import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/Home'

function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        <Routes> 
            <Route path='/Home' element={<Home/>}/>
        </Routes>
      </Router>
    </div>
  );
}//routes are the same as the old way of using switches

export default App;