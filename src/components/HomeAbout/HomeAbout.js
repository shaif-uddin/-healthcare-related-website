import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./HomeAbout.css";

const HomeAbout = () => {
  return (
    <section>
      <Row>
        <Col md={12} className="mb-5">
          <h2 className="heading p-5">Call Now and Get a Free Consultation</h2>
          <p>Let our team handle all your dental healthcare issues.</p>
          <p className="blur-text p-3">
            Free Consultation from Our Expert Advisors
          </p>
          <a class="tel" href="tel:#">
            +800 4759 1232
          </a>
          <br />
          <Link className="btn btn-lg btn-info" to="/services" role="button">
            Read More »
          </Link>
        </Col>
      </Row>
    </section>
  );
};

export default HomeAbout;
