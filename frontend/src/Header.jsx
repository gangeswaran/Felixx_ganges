import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-black fixed-top shadow-sm">
      <nav className="navbar navbar-expand-md navbar-dark container py-4">
        {/* Logo / Branding */}
        <a className="navbar-brand fw-bold fs-4 text-white" href="#">
          Felix
        </a>

        {/* Mobile Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link text-white" to="/">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/books">
                Books
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/portfolio">
                Portfolio
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/meet">
                Meet
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
