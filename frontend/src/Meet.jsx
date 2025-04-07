import React, { useState, useEffect } from "react";
import { InlineWidget } from "react-calendly";
import random1 from "../src/assets/random1.jpg";
import random2 from "../src/assets/random2.jpg";
import random3 from "../src/assets/random3.jpg"; // Add more images if needed

const images = [random1, random2, random3]; // List of images

const Meet = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup function
  }, []);

  return (
    <div>
       <div
              className="about-banner"
              style={{ backgroundImage: `url(${random2})` }}
            >
              <div className="banner-content text-white py-5">
                <h1 className="display-4 fw-bold">Schedule a Meet with Felix</h1>
              </div>
            </div>
      

      {/* Calendly Scheduling Section */}
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-3xl">
          <h2 className="text-2xl font-semibold text-center mb-4">
            Meet Mr. Felix
          </h2>
          <p className="text-gray-600 text-center mb-4">
            Schedule a 30-minute meeting at your convenience.
          </p>
          <div className="border p-4 rounded-lg shadow-md">
            <InlineWidget url="https://calendly.com/felixdepaul/30min?month=2025-02" />
          </div>
        </div>
      </div>
      <div
        className="about-banner"
        style={{
          backgroundImage: `url(${images[currentImage]})`,
          transition: "background-image 2s ease-in-out", // Smooth transition effect
        }}
      >
      </div>
    </div>
  );
};

export default Meet;
