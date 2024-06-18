import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Banner from "./components/Banner";


export default function App() {
    return (
        <Router>
            <div>
                <Header />
                <Routes>
                    <Route index path="/" element={<Home />}/>
                    <Route path="/Banner" element={<Banner />}/>
                    <Route path="/About" element={<About />}/>
                </Routes>
                <Footer />
            </div>
        </Router>
        
    );
}