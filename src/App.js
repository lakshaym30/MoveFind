import './App.css';
import Search from './Search/Search';
import Gallery from './Gallery/Gallery'
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import DetailCard from './Detail/DetailCard';
function App() {
  return (
    <Router>
    <div className="App">
      <h1>MovieFind</h1>
      <h2>Find the perfect movie for you!</h2>
      <div id="links">
        <Link to="/mp2/search">Search </Link>
        <Link to="/mp2/gallery">Gallery</Link>
      </div>
    </div>
    <div id="content">
      <Routes>
        <Route exact path="/mp2/search" element={<Search/>}/>
        <Route exact path="/mp2/gallery" element={<Gallery/>}/>
        <Route exact path="/mp2/movie/:id" element={<DetailCard/>}/>
      </Routes>
    </div>
  </Router>

  );
  
}

export default App;
