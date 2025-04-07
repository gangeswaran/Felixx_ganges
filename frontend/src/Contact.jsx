import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/styles/Contact.css"; // Custom CSS
import random2 from "../src/assets/random2.jpg";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    email: "",
    phone: "",
  });

  const [loading, setLoading] = useState(false); // Loading state

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Show loading animation

    try {
      const response = await fetch("https://felix-de.onrender.com/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        alert("Email sent successfully!");
        setFormData({ name: "", organization: "", email: "", phone: "" });
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Failed to send email");
    } finally {
      setLoading(false); // Hide loading animation
    }
  };

  return (
    <div>
      {/* Loading Overlay */}
      {loading && (
        <div className="loading-overlay">
          <div className="spinner-border text-light" role="status">
            <span className="visually-hidden">Sending...</span>
          </div>
        </div>
      )}

      <div
        className="about-banner"
        style={{ backgroundImage: `url(${random2})` }}
      >
        <div className="banner-content text-white py-5">
          <h1 className="display-4 fw-bold">Contact Felix</h1>
        </div>
      </div>

      <section className={`contact-section py-5 ${loading ? "blurred" : ""}`}>
        <div className="container text-left">
          <h2 className="display-4 mb-4">Contact</h2>
          <p className="lead mb-5">
            To inquire about working with Corey, please complete the form below.
          </p>
          <form onSubmit={handleSubmit}>
            <div className="form-group mb-4">
              <label htmlFor="name" className="fs-5">
                Your Name*
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-control"
                placeholder="Enter your name"
                required
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group mb-4">
              <label htmlFor="organization" className="fs-5">
                Organization Name*
              </label>
              <input
                type="text"
                id="organization"
                name="organization"
                className="form-control"
                placeholder="Enter your organization"
                required
                value={formData.organization}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group mb-4">
              <label htmlFor="email" className="fs-5">
                Your Email*
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-control"
                placeholder="Enter your email"
                required
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group mb-4">
              <label htmlFor="phone" className="fs-5">
                Phone*
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="form-control"
                placeholder="Enter your phone number"
                required
                value={formData.phone}
                onChange={handleInputChange}
              />
            </div>

            <button
              type="submit"
              className="btn btn-dark btn-lg mt-4"
              disabled={loading}
            >
              {loading ? "Sending..." : "Submit"}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Contact;
