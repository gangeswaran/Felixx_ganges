import React, { useState } from "react";
import { Card, Container, Row, Col, Modal, Button } from "react-bootstrap";
import water from "../src/assets/water.png";
import green from "../src/assets/green.png";
import EV from "../src/assets/ev.png";
import health from "../src/assets/health.png";
import retail from "../src/assets/retail.png";
import critical from "../src/assets/critical.png";
import ontario from "../src/assets/ontario.png";
import air from "../src/assets/air.png";
import airport from "../src/assets/airport.png";
import Shane from "../src/assets/Shane.png";
import Shane1 from "../src/assets/Shane1.png";
import Library from "../src/assets/Library.png";
import emergency from "../src/assets/Emergency.png";
import academy from "../src/assets/academy.png";
import academy1 from "../src/assets/academy1.png";

function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const projects = [
    {
      id: 1,
      title: "TWAS – Ashbridge’s Bay, Toronto",
      shortDescription: "Wastewater treatment facility in Toronto.",
      image: water,
      projectDetails: {
        description:
          "The ABTP serves approximately 1.6 million residents with nutrient removal and effluent disinfection before discharging into Lake Ontario.",
        cost: "$150 Million USD",
        additionalImages: [water],
      },
    },
    {
      id: 2,
      title: "Green Hydrogen",
      shortDescription: "Client: Ever Wind Fuels in Nova Scotia",
      image: green,
      projectDetails: {
        description: "Green Hydrogen project for sustainable energy.",
        cost: "$200 Million USD",
        additionalImages: [green],
      },
    },
    {
      id: 3,
      title: "EV Charging Fleet across Canada/USA",
      shortDescription: "Client: Pride Group",
      image: EV,
      projectDetails: {
        description:
          "Extensive EV charging infrastructure across North America.",
        cost: "$50 Million USD",
        additionalImages: [EV],
      },
    },
    {
      id: 4,
      title: "Health Care Facilities  ",
      shortDescription:
        "Client:Glenrose Hospital- Edmonton & South Health Campus at Calgary ",
      image: health,
      projectDetails: {
        description: "Various Power Systems Upgrades ",
        cost: "",
        additionalImages: [health],
      },
    },
    {
      id: 5,
      title: " Retail  ",
      shortDescription:
        "Lush cosmetics energy management & Net- Zero Commitments across Canada/USA  ",
      image: retail,
      projectDetails: {
        description:
          "Lush Cosmetics achieved a 23% reduction in energy consumption across its 195 locations in the US and Canada, leading to a $215,000 annual cost savings. The strategic implementation of energy-efficient solutions not only delivered significant sustainability gains but also ensured a return on investment (ROI) within the first year of deployment. This initiative aligns with Lush’s commitment to environmental responsibility while enhancing operational efficiency and financial performance.",
        cost: "$ 215,000 ",
        additionalImages: [retail],
      },
    },
    {
      id: 6,
      title: "Critical Infrastructure  ",
      shortDescription:
        "Black Rock Data Center Facility (Now with Rogers)  - Edmonton  (Arc Flash Study)",
      image: critical,
      projectDetails: {
        description:
          "1) Black Rock Data Center Facility (Now with Rogers)  - Edmonton  (Arc Flash Study) 2) Ontario Power Generation – Bowmanville and Pickering – Various electrical upgrades for their critical facilities & infrastructure",
        cost: "$ 1 Million CAD and $ 1 to # 30  Million CAD",
        additionalImages: [critical, ontario],
      },
    },
    {
      id: 7,
      title: "Airports",
      shortDescription:
        "Calgary /Edmonton International Airports - completed an Arc Flash Study ",
      image: air,
      projectDetails: {
        description:
          "Calgary /Edmonton International Airports - completed an Arc Flash Study ",
        cost: ": $ 300K CAD",
        additionalImages: [air, airport],
      },
    },
    {
      id: 8,
      title: "Recreation: Shane Homes YMCA ",
      shortDescription:
        "📍 Calgary, AB, Canada | 🏗 Completed: 2018 | 🌱 LEED® Gold Certified",
      image: Shane1,
      projectDetails: {
        description:
          "The Shane Homes YMCA at Rocky Ridge was designed with sustainability in mind and targeted LEED® Gold certification. The facility incorporates several eco-friendly features, including the use of approximately 2,750 cubic meters of glulam timber for its roof structure, which significantly reduces its carbon footprint. Additionally, the building employs a combined heat and power co-generation system to minimize waste energy and greenhouse gas emissions by recapturing waste heat for use in pools and domestic hot water.  ",
        cost: "",
        additionalImages: [Shane, Shane1],
      },
    },
    {
      id: 9,
      title: "Library New Central Library",
      shortDescription:
        "📍 Calgary, AB, Canada | 🏗 Completed: 2016 | 🌱 LEED® Gold Certified",
      image: Library,
      projectDetails: {
        description:
          "Designed in collaboration with Snøhetta, the Calgary Central Library stands as a transformative cultural landmark, reflecting the city's commitment to knowledge, innovation, and community engagement. As Calgary’s largest public investment since the 1988 Winter Olympics, the library marks a shift toward the creation and exchange of ideas rather than mere consumption. The thoughtfully designed space accommodates diverse needs—offering areas for social interaction, study, quiet reflection, and civic engagement—cementing its role as a modern knowledge hub. ",
        cost: "$ 245 million CAD",
        additionalImages: [Library],
      },
    },
    {
      id: 10,
      title:
        "Emergency Response Centers, Calgary, Alberta Royal Vista Multi-Facility Fire Station",
      shortDescription:
        "📍 Calgary, AB, Canada | 🏗 Completed: 2016 | 🌱 LEED® Gold Certified  ",
      image: emergency,
      projectDetails: {
        description:
          "Serving as a vital multi-agency hub, the Royal Vista Multi-Facility Fire Station integrates the Calgary Fire Department, Calgary Police Services, Animal & Bylaw Services, and Alberta Health Services under one roof while also offering a community boardroom for public engagement. A key challenge of this project was designing a facility that met the distinct operational requirements of each agency without interference, ensuring seamless functionality. As the electrical engineering consultant, our role was pivotal in delivering a power and systems design that supported the unique needs of each service while aligning with sustainability goals, helping the station achieve LEED Gold certification—making it Calgary’s second fire station to earn this distinction. ",
        cost: "$ 17 million CAD",
        additionalImages: [emergency],
      },
    },
    {
      id: 11,
      title: "Academics  ",
      shortDescription:
        "  Bowness High School, Calgary, Alberta  ",
      image: academy,
      projectDetails: {
        description: "Project Description: In 2016, the Calgary Board of Education (CBE) completed a 42,000 ft² modernization of a school originally built in 1955, adding a Career Technology Studies (CTS) Centre. This project involved installing a new electrical sub-distribution system at 277/480V and 120/208V, integrating with existing systems for data, public address, telephone, security, CCTV, and fire alarms. A cohesive lighting design unified the new and existing structures, utilizing low-voltage relays, switches, occupancy and daylight sensors for control; fluorescent luminaires for general lighting; LED lighting for special applications, high ceilings, and exterior areas; and battery packs with remote heads for emergency lighting. The modernization ensured the school's electrical and lighting systems met contemporary standards for efficiency, safety, and functionality.",
        cost: "$ 15 million CAD",
        additionalImages: [academy, academy1],
      },
    },
  ];

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  return (
    <>
    <h1 className="text-center mt-5 mb-4">List of Projects</h1>
    <Container className="mt-5 mb-5" fluid>
      <Row className="justify-content-center">
        {projects.map((project) => (
          <Col key={project.id} md={4} className="mb-4">
            <Card
              className="shadow-sm h-100 border-0 rounded"
              onClick={() => handleProjectClick(project)}
              style={{ cursor: "pointer", transition: "0.3s" }}
            >
              <Card.Img
                variant="top"
                src={project.image}
                className="img-fluid rounded-top"
                style={{ height: "220px", objectFit: "cover" }}
              />
              <Card.Body className="text-center">
                <Card.Title className="fw-bold">{project.title}</Card.Title>
                <Card.Text>{project.shortDescription}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Modal for Project Details */}
      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        size="lg"
        centered
      >
        {selectedProject && (
          <>
            <Modal.Header closeButton>
              <Modal.Title>{selectedProject.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>{selectedProject.projectDetails.description}</p>
              <p>
                <strong>Project Cost:</strong>{" "}
                {selectedProject.projectDetails.cost}
              </p>
              <div className="d-flex flex-wrap">
                {selectedProject.projectDetails.additionalImages.map(
                  (img, index) => (
                    <img
                      key={index}
                      src={img}
                      alt={`Project ${selectedProject.id} - Image ${index}`}
                      className="rounded shadow-sm me-2 mb-2"
                      style={{ width: "48%", height: "auto" }}
                    />
                  )
                )}
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => setShowModal(false)}>
                Close
              </Button>
            </Modal.Footer>
          </>
        )}
      </Modal>
    </Container>
    <h3 className="text-center mt-5 mb-4">Note: The photos are sourced from the respective project developers, with some being personally owned</h3>

    </>
  );
}

export default Portfolio;
