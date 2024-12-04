import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/NavBar";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Features from "./Components/Features";
import Enterprise from "./Components/Enterprise";
import Support from "./Components/Support";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/enterprise" element={<Enterprise />} />
        <Route path="/support" element={<Support />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
