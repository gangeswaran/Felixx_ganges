import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Header";
import About from "./About";
import Footer from "./Footer";
import Contact from "./Contact";
import "bootstrap/dist/css/bootstrap.min.css";
import Portfolio from "./PortFolio";
import Meet from "./Meet";
import Book from "./Book";

function App() {
  return (
    <Router>
      <Header />
      <div className="pt-5" style={{marginTop:"50px"}}>
        {/* Define the routes for the About and Contact pages */}
        <Routes>
          <Route path="/" element={<About />} /> {/* Home route displays the About page */}
          <Route path="/contact" element={<Contact />} /> {/* Contact page route */}
          <Route path="/portfolio" element={<Portfolio />} /> {/* Portfolio page route */}
          <Route path="/meet" element={<Meet />} /> {/* Meet page route */}
          <Route path="books" element= { <Book />} /> {/* Book page route */}
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
