import React from "react";
import { FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import random1 from "../src/assets/random.jpg";
import "../src/styles/Footer.css";

function Footer() {
  return (
    <>
      {/* Banner Section with blurred background */}
      <section
        className="bg-white text-white py-5 mt-5"
        style={{
          backgroundImage: `url(${random1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "50vh", 
          position: "relative",
          border: "5px solid #FFD700",
          borderRadius: "10px",
          marginTop: "60px",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            filter: "blur(8px)",
            zIndex: 0,
          }}
        ></div>

        <div
          className="container text-center text-white"
          style={{ position: "relative", zIndex: 1 }}
        >
          <h2 className="display-4">Get in Touch with Felix</h2>
          <p className="lead">Connect with Felix for collaboration and inquiries.</p>
          <a
            href="https://www.linkedin.com/in/felixdepaul/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-light fs-5 px-4 py-2"
          >
            Connect on LinkedIn
          </a>
        </div>
      </section>

      {/* Footer Section */}
      <footer
        className="footer bg-dark text-white py-5"
        style={{
          borderTop: "5px solid #FFD700",
          borderBottom: "5px solid #FFD700",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-md-start text-center mb-3 mb-md-0 py-5">
              <h5 className="text-warning" style={{ fontSize: "2rem" }}>About Felix</h5>
              <p style={{ fontSize: "1.2rem" }}>
                With extensive experience in engineering, leadership, and global
                project execution, Felix specializes in delivering sustainable
                and efficient solutions across industries.
              </p>
             
            </div>

            <div className="col-md-6 text-center">
              <button className="btn-get-in-touch mb-2">Get in Touch</button>
              <a
                href="https://www.linkedin.com/in/felixdepaul/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white fs-3 d-block mt-2 mx-auto"
              >
                <FaLinkedin />
              </a>
               {/* Contact Details */}
               <div className="mt-3">
                <p><FaEnvelope /> <a href="mailto:felixdepaul@alumni.psu.edu" className="text-white">felixdepaul@alumni.psu.edu</a></p>
                <p><FaEnvelope /> <a href="mailto:felix.vincentdepaul@alumni.ucalgary.ca" className="text-white">felix.vincentdepaul@alumni.ucalgary.ca</a></p>
                <p><FaPhone /> +1 403 813 7502</p>
                <p><FaPhone /> +1 713 307 2241</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-3">
            <p className="mb-0">&copy; {new Date().getFullYear()} Felix. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
