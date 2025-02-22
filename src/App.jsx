import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Login from "./components/pages/Login";
import Registration from "./components/pages/Registration";
import ElectricityEmissions from "./components/pages/ElectricityEmissions";
import Flights from "./components/pages/Flights";
import Vehicles from "./components/pages/Vehicles";
import Shipping from "./components/pages/Shipping";
import Fuels from "./components/pages/Fuels";
import CarbonLedger from "./components/pages/CarbonLedger";
import ElectricityEmissionTutorial from "./components/pages/ElectricityEmissionTutorial";
import ScrollToTop from "./components/ScrollToTOp";



const App = () => {
  return (
    <Router>
      <ScrollToTop/>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration/>}   />
        <Route path="/electricityEmissions"  element={<ElectricityEmissions/>} />
        <Route path="/flights"  element={<Flights/>} />
        <Route path="/vehicles"  element={<Vehicles/>} />
        <Route path="/shipping"  element={<Shipping/>} />
        <Route path="/fuel"  element={<Fuels/>} />
        <Route path="/carbon-ledger"  element={<CarbonLedger/>} />
        <Route path="/electricityEmissionTutorial" element={<ElectricityEmissionTutorial/>} />
        
        
      </Routes>
      
      <Footer />
    </Router>
    
  );
};

export default App;
