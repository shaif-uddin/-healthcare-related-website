import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import "./Header.css";
import logo from "./logo.jpg";

const Header = () => {
  // Get Firebase Authentication method
  const { user, logOut } = useAuth();

  return (
    <div className="header">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link className="nav-link" to="/home">
                Home
              </Link>
              <Link className="nav-link" to="/services">
                Services
              </Link>
              <Link className="nav-link" to="/doctors">
                Doctors
              </Link>
              <Link className="nav-link" to="/about">
                About
              </Link>
              <Link className="nav-link" to="/blogs">
                Blog
              </Link>
              {user?.email ? (
                <>
                  <Link className="nav-link" to="/" disabled>
                    {user?.displayName ? user.displayName : "Unknown User"}
                  </Link>
                  <Link className="nav-link" to="/login" onClick={logOut}>
                    Log Out
                  </Link>
                </>
              ) : (
                <Link className="nav-link" to="/login">
                  Sign in
                </Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
