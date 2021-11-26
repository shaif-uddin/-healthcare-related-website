import React from "react";
import { Col, Container, Nav, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Footer.css";
const Footer = () => {
  return (
    <Container>
      <Row>
        <div className="bg-dark text-white p-5">
          <footer className="footer d-flex flex-row">
            <Col sm={12} md={6}>
              <div>&copy; 2021 Dental Bright</div>
            </Col>
            <Col sm={12} md={6}>
              <Nav className="me-auto flex-fix">
                <Link to="/" className="nav-link">
                  Home
                </Link>
                <Link to="/about" className="nav-link">
                  About
                </Link>
                <Link to="/services" className="nav-link">
                  Services
                </Link>
                <Link to="/blogs" className="nav-link">
                  Blogs
                </Link>
              </Nav>
            </Col>
          </footer>
        </div>
      </Row>
    </Container>
  );
};

export default Footer;
