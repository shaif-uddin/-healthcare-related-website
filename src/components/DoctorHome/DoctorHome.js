import React from "react";
import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDoctors } from "../../Hooks/useDoctors";
import Doctor from "../Doctor/Doctor";
const Doctors = () => {
  // Get Doctors information from custom hook
  const [getDoctors] = useDoctors();

  return (
    <section id="doctors">
      <Container>
        <div className="">
          <div className="m-5">
            <h2>Our Doctros</h2>
          </div>
          <Row xs={1} md={3} className="g-4 container p-5">
            {getDoctors.slice(0, 3).map((doctor) => (
              <Doctor key={doctor.key} doctor={doctor}></Doctor>
            ))}
          </Row>
          <Link className="btn btn-lg btn-info" to="/doctors" role="button">
            Read More »
          </Link>
        </div>
      </Container>
    </section>
  );
};
export default Doctors;
