import React from "react";
import { Card, Container, Row, Col, Carousel } from "react-bootstrap";
import felix3 from "../src/assets/random2.jpg";

// Sample images for the slider
import img1 from "../src/assets/felix.jpg";
import img2 from "../src/assets/random7.jpg";
import img3 from "../src/assets/felix3.jpg";

function Book() {
  return (
    <>
      <div
        className="about-banner"
        style={{ backgroundImage: `url(${felix3})`, backgroundSize: "cover", backgroundPosition: "center", height: "300px" }}
      >
        <div className="banner-content text-white py-5 text-center" style={{ backgroundColor: "rgba(0, 0, 0, 0.13)" }}>
          <h1 className="display-4 fw-bold">Pole Shift Control Based Adaptive Power System Stabilizer</h1>
          <h4>By Vincent De Paul, Felix</h4>
        </div>
      </div>
      <Container className="mt-5 mb-5">
        <Row>
          <Col md={4} className="d-flex justify-content-start">
            <div style={{ perspective: "1000px", display: "flex", justifyContent: "left" }}>
              <Card style={{
                width: "350px",
                boxShadow: "5px 5px 15px rgba(0,0,0,0.3)",
                borderRadius: "10px",
                padding: "20px",
                backgroundColor: "#f5f5dc",
                transform: "rotateY(-10deg)",
                borderLeft: "15px solid #8B4513",
                position: "relative"
              }}>
                <div style={{
                  position: "absolute",
                  top: "50%",
                  left: "-140px",
                  transform: "translateY(-50%) rotate(90deg)",
                  fontSize: "1rem",
                  fontWeight: "bold",
                  color: "#fff",
                  background: "#8B4513",
                  padding: "5px 10px",
                  borderRadius: "5px"
                }}>
                  Adaptive Power System Stabilizer
                </div>
                <Card.Body>
                  <Card.Title className="text-center" style={{ fontFamily: "serif", fontSize: "1.5rem", fontWeight: "bold" }}>
                    Pole Shift Control Based Adaptive Power System Stabilizer for a Superconducting Generator
                  </Card.Title>
                  <Card.Subtitle className="mb-3 text-muted text-center" style={{ fontFamily: "cursive" }}>
                    By Vincent De Paul, Felix
                  </Card.Subtitle>
                  <Card.Text style={{ textAlign: "justify", fontSize: "1rem" }}>
                    This Master's thesis, published in 2013 at the University of Calgary, explores the design and
                    implementation of a pole shift control-based adaptive power system stabilizer for superconducting
                    generators. The research contributes significantly to advancements in power system stability and
                    control methodologies.
                  </Card.Text>
                  <Card.Link href="https://prism.ucalgary.ca/server/api/core/bitstreams/074ed2ba-384d-48f4-a0be-3f58f77c72fa/content" target="_blank" style={{ display: "block", textAlign: "center", fontWeight: "bold", textDecoration: "underline" }}>
                    Read Full Thesis
                  </Card.Link>
                  <Card.Text className="mt-3 text-center">
                    <strong>DOI:</strong> <a href="https://doi.org/10.11575/PRISM/27378" target="_blank">10.11575/PRISM/27378</a>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </Col>
          <Col md={8}>
            <div>
              <h2>Abstract</h2>
              <p>
                Over the past few decades, an international effort has been undertaken to develop electric generators using rotors with superconducting windings.
                The main differences between superconducting generators (SCGs) and conventional generators are that (i) the SCG has a double rotor screen and (ii) the
                SCG’s field windings on the rotor are made up of superconductors that have zero resistance at cryogenic temperature, eliminating resistive losses.
              </p>
              <p>
                To enhance power system stability, a conventional power system stabilizer (CPSS) is applied to conventional generator excitation systems. However, due to
                the long field time-constant and shielding effect of the double rotor screen, controlling an SCG through its excitation system is ineffective. Instead,
                this research explores controlling the SCG through an electro-hydraulic governor, which has a much smaller time-constant. The study tests an adaptive
                power system stabilizer based on the pole-shift linear feedback control algorithm through the SCG’s electro-hydraulic governor.
              </p>
              <h2>Acknowledgements</h2>
              <p>
                I would like to express my sincere gratitude to my supervisor Dr. O.P. Malik for his invaluable guidance and support throughout my master’s studies. His
                contributions to adaptive control in power systems remain a source of inspiration. My thanks also go to my examination committee members Dr. Chris
                Macnab, Dr. Brent Maundy, and Dr. Anil Mehrotra.
              </p>
              <p>
                Special thanks to Dr. Swarn Kalsi (Ex. Director, American Superconductors) and Rebecca Nold (GE Energy, USA) for their technical inputs. I also deeply
                appreciate the support of my colleague Anas Albakkar. My heartfelt thanks to my family and friends for their unconditional support throughout this journey.
              </p>
            </div>
          </Col>
        </Row>

        {/* Image Slider Section */}
        <Row className="mt-5">
          <Col>
            <h2 className="text-center mb-4">Random Images</h2>
            <Carousel interval={2000}>
              <Carousel.Item>
                <img className="d-block w-100" src={img1} alt="First slide" style={{ borderRadius: "10px", maxHeight: "600px", objectFit: "cover" }} />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={img2} alt="Second slide" style={{ borderRadius: "10px", maxHeight: "600px", objectFit: "cover" }} />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={img3} alt="Third slide" style={{ borderRadius: "10px", maxHeight: "600px", objectFit: "cover" }} />
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Book;
