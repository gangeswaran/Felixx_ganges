import React from "react";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/styles/About.css"; // Custom styles
import felix3 from "../src/assets/random2.jpg";
import profile from "../src/assets/profile.jpg"; // Import your profile picture
import random1 from "../src/assets/random1.jpg";
import random2 from "../src/assets/random2.jpg";
import random3 from "../src/assets/random3.jpg";
import random4 from "../src/assets/random4.jpg";
import random5 from "../src/assets/random5.jpg";
import random6 from "../src/assets/random6.jpg";
import random from "../src/assets/random.jpg";
import frnd from "../src/assets/friends.jpg";
import friend1 from "../src/assets/frnds1.jpg";
import friend2 from "../src/assets/frnds2.jpg";

function About() {
  const familyImages = [
    random,
    random1,
    random2,
    random3,
    random4,
    random5,
    random6,
  ];
  const friendsImages = [frnd, friend1, friend2];

  const [currentFamilyImage, setCurrentFamilyImage] = useState(0);
  const [currentFriendsImage, setCurrentFriendsImage] = useState(0);

  useEffect(() => {
    const familyInterval = setInterval(() => {
      setCurrentFamilyImage((prev) => (prev + 1) % familyImages.length);
    }, 5000);

    const friendsInterval = setInterval(() => {
      setCurrentFriendsImage((prev) => (prev + 1) % friendsImages.length);
    }, 5000);

    return () => {
      clearInterval(familyInterval);
      clearInterval(friendsInterval);
    };
  }, []);
  return (
    <div>
      {/* Banner Section with Image Background */}
      <div
        className="about-banner"
        style={{ backgroundImage: `url(${felix3})` }}
      >
        <div className="banner-content text-white py-5">
          <h1 className="display-4 fw-bold">About Felix</h1>
        </div>
      </div>

      {/* About Section Content */}
      <div className="container" style={{ marginBottom: 20, marginTop: 150 }}>
        <div className="row align-items-center">
          {/* Left Side - Profile Image */}
          <div className="col-md-4 text-center">
            <img
              src={profile}
              alt="Profile"
              className="img-fluid profile-img"
            />
          </div>

          {/* Right Side - About Text */}
          <div className="col-md-8">
            <h1 className="fw-bold">Proficient. Enthusiastic. Personable.</h1>
            <div className="p-4">
              <p className="about-text">
                With over a decade of experience in commercial, industrial, and
                light industrial construction, I have successfully led
                multidisciplinary teams in multinational projects across the
                USA, Canada, and India. My expertise spans critical
                infrastructure, including fire stations, emergency response
                centers, libraries, logistics hubs, airports, retail, healthcare
                facilities, academic K-12 institutions, and water/wastewater
                treatment plants.
              </p>
              <p className="about-text">
                My strong technical expertise and business acumen are backed by
                world-renowned institutions across the globe, including an MBA
                from Penn State University, specializing in sustainable business
                strategies. I also hold a master’s degree in electrical
                engineering from the University of Calgary, with a focus on
                power system dynamics and a minor in energy and environment, as
                well as a bachelor’s degree in electrical engineering from Anna
                University, India, specializing in power systems.
              </p>
              <p className="about-text">
                In addition to my academic background, I have worked with
                locally renowned and world-renowned multinational companies
                (MNCs), gaining hands-on experience in delivering complex
                projects across diverse industries in the USA, Canada, and
                India. This unique combination of engineering proficiency,
                business leadership, and multinational exposure enables me to
                seamlessly bridge technical execution and strategic
                decision-making. I excel in delivering efficient, sustainable
                projects and building high-performing, multicultural teams.
              </p>
              <p className="about-text">
                I have experience in various project delivery methods, including
                Public-Private Partnerships (P3), design-build, and
                design-bid-build, ensuring adaptability to diverse project
                requirements. My deep understanding of U.S. and Canadian
                markets, coupled with my ability to lead teams across global
                operations, positions me as a strategic leader capable of
                driving project success from inception to completion.
              </p>

              {/* License Table */}
              <h3 className="fw-bold mt-5">Licenses</h3>
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>License</th>
                    <th>State</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Professional Engineer (P.Eng.)</td>
                    <td>APEGA - Alberta, Canada</td>
                  </tr>
                  <tr>
                    <td>Professional Engineer (P.Eng.)</td>
                    <td>PEO - Ontario, Canada</td>
                  </tr>
                  <tr>
                    <td>Professional Engineer (P.E.)</td>
                    <td>Nevada, USA </td>
                  </tr>
                  <tr>
                    <td>Professional Engineer (P.E.)</td>
                    <td>Texas, USA</td>
                  </tr>
                  <tr>
                    <td>International Engineer (Int.PE) Canada</td>
                    <td>Engineers Canada</td>
                  </tr>
                  <tr>
                    <td>
                      Asia-Pacific Economic Cooperation Engineer (APEC Engineer)
                    </td>
                    <td>Engineers Canada</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {/* Family & Friends Section Side by Side */}
<div className="container mt-5">
  <div className="row">
    {/* Family Section (Left Side) */}
    <div className="col-md-6 text-center">
      <h2 className="fw-bold">Family & Random Moments</h2>
      <img
        src={familyImages[currentFamilyImage]}
        alt="Family Slideshow"
        className="slideshow-img fade-in"
      />
    </div>

    {/* Friends Section (Right Side) */}
    <div className="col-md-6 text-center">
      <h2 className="fw-bold">Friends</h2>
      <img
        src={friendsImages[currentFriendsImage]}
        alt="Friends Slideshow"
        className="slideshow-img fade-in"
      />
    </div>
  </div>
</div>

    </div>
  );
}

export default About;
