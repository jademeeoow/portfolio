import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Header from "./components/header";

import Hero from "./components/hero";
import About from "./components/about_me";


function App() {
  return (
    <Router>
      
      <Header/>
      <Routes>
        <Route path="/" element={<Hero/>} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
