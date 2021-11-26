import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./About.css";
const About = () => {
  return (
    <section id="aboutus">
      <Container>
        <Row>
          <Col md={12}>
            <h2>A Few Words About Our Clinic</h2>
            <h3 className="text-primary p-5">Who We Are</h3>
            <p>
              Who We Are "We make your smile more perfect, brighter and broader
              to the world" We are a competent team of dentists who completely
              understand the importance of quality dental in a busy life. Our
              practice is based on high standards and new technologies which
              reflect on beautiful and healthy smiles of our clients.
            </p>

            <h2>Our Mission</h2>
            <p>
              Our mission is to provide all our clients with various types of
              dental services, qualified assistance and effective treatment. We
              work for your oral health, beautiful smiles and well-being.
            </p>
            <ul className="about-list mb-5">
              <li>Improve the oral and teeth health</li>
              <li>Ensure a happy smile of clients</li>
              <li>Provide quality services to every client</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
