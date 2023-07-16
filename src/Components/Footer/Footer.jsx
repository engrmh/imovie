import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <Container fluid className="">
      <Row className="bg-dark bg-opacity-75 justify-content-center">
        <Col
          xs={12}
          className="py-5 d-flex flex-column justify-content-center align-items-center"
        >
          <div className="d-flex justify-content-start align-items-center">
            <Image
              height="40"
              src="https://help.apple.com/assets/62670B89278E1910A67765B9/62670B8B278E1910A67765C7/en_US/7ed8a31ab3b640ddcc899151ffc16c9f.png"
            />
            <h1 className="footerTitle text-white align-items-center p-0 m-0 ms-2">
              iMovie
            </h1>
          </div>
          <h4 className="m-0 text-white mt-3">Movies & Series WebPage</h4>
        </Col>
        <Col
          xs={12}
          className="bg-black py-3 d-flex justify-content-center align-items-center"
        >
          <h5 className="text-white me-3 m-0 p-0">Copyright © 2023 iMovie</h5>
          <h5 className="text-white m-0 p-0">
            Build By
            <Link
              to="https://skylax.ir"
              className="text-white text-decoration-none ms-2 creator m-0 p-0"
            >
              SKYLAX
            </Link>
          </h5>
        </Col>
      </Row>
    </Container>
  );
}
