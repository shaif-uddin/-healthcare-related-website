import React from "react";
import { Container } from "react-bootstrap";
import Banner from "../Banner/Banner";
import DoctorHome from "../DoctorHome/DoctorHome";
import HomeAbout from "../HomeAbout/HomeAbout";
import Services from "../Services/Services";
const Home = () => {
  return (
    <Container>
      <Banner></Banner>
      <Services></Services>
      <DoctorHome></DoctorHome>
      <HomeAbout></HomeAbout>
    </Container>
  );
};

export default Home;
