import React from "react";
import { Container, Image, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="header-container bg-opacity-75 bg-dark"
    >
      <Container>
        <Navbar.Brand href="/" className="text-light">
          <Image
            alt=""
            src="https://help.apple.com/assets/62670B89278E1910A67765B9/62670B8B278E1910A67765C7/en_US/7ed8a31ab3b640ddcc899151ffc16c9f.png"
            width="30"
            height="30"
            className="d-inline-block align-top me-2"
          />
          iMovie
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav text-white border-0" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto text-center">
            <Nav.Link>
              <Link className="text-light text-decoration-none" to="/">
                Home
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="text-light text-decoration-none" to="/allMovies">
                All Movies
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="text-light text-decoration-none" to="/search">
                Search
              </Link>
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link className="bg-warning rounded">
              <div className="d-flex justify-content-center align-items-center">
                <Link className="text-dark text-decoration-none" to="/login">
                  Login
                </Link>
                <span className="text-dark mx-1">/</span>
                <Link className="text-dark text-decoration-none" to="/register">
                  Register
                </Link>
              </div>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
