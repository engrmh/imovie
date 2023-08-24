import React, { useContext, useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import PageContext from "../../Context/Context";

export default function Register() {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [isVerify, setIsVerify] = useState(false);
  const navigate = useNavigate();
  const authContext = useContext(PageContext);

  useEffect(() => {
    if (
      userName.length === 0 ||
      userEmail.length === 0 ||
      userPassword.length === 0
    ) {
      setIsVerify(false);
    } else {
      setIsVerify(true);
    }
  }, [userEmail, userName, userPassword]);

  const userRegister = () => {
    let newUser = {
      name: userName,
      emaol: userEmail,
      password: userPassword,
    };

    fetch("https://moviesapi.ir/api/v1/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then((result) => {
        Swal.fire({
          title: "Registered Successfully",
          icon: "success",
          confirmButtonText: "Close",
        });
        authContext.login(result.user, result.accessToken);
        navigate("/");
      })
      .catch((err) => {
        Swal.fire({
          title: "Get Error in Registering",
          icon: "error",
          confirmButtonText: "Try Again",
        });
      });
  };

  return (
    <Container className="addNewMovieContainer mt-4 py-2">
      <Row className="justify-content-center align-items-center">
        <Col xs={12} md={5}>
          <Form>
            <Row className="p-5 text-white flex-column justify-content-center align-items-center glass-container">
              <Col className="mb-2">
                <Form.Group>
                  <Form.Label className="mb-0 ps-1">
                    Name:
                    <span className="text-warning fs-4 py-0">*</span>
                  </Form.Label>
                  <Form.Control
                    value={userName}
                    onChange={(event) => setUserName(event.target.value)}
                    type="text"
                    className="newMovieInput bg-opacity-25 bg-white rounded mb-2 border-0 border-bottom border-warning"
                    required
                  />
                </Form.Group>
              </Col>
              <Col className="mb-2">
                <Form.Group>
                  <Form.Label className="mb-0 ps-1">
                    Email
                    <span className="text-warning fs-4 py-0">*</span>
                  </Form.Label>
                  <Form.Control
                    value={userEmail}
                    onChange={(event) => setUserEmail(event.target.value)}
                    type="text"
                    className="newMovieInput bg-opacity-25 bg-white rounded mb-2 border-0 border-bottom border-warning"
                    required
                  />
                </Form.Group>
              </Col>
              <Col className="mb-2">
                <Form.Group>
                  <Form.Label className="mb-0 ps-1">
                    Password:
                    <span className="text-warning fs-4 py-0">*</span>
                  </Form.Label>
                  <Form.Control
                    value={userPassword}
                    onChange={(event) => setUserPassword(event.target.value)}
                    type="password"
                    min="8"
                    max="12"
                    className="newMovieInput bg-opacity-25 bg-white rounded mb-2 border-0 border-bottom border-warning"
                    required
                  />
                </Form.Group>
              </Col>
              <Col
                xs={12}
                className="mb-2 d-flex flex-column justify-content-center align-items-center mt-3"
              >
                <Button
                  disabled={isVerify ? false : true}
                  className="px-5 bg-warning text-black"
                  onClick={() => userRegister()}
                >
                  Register
                </Button>
                <Link to="/register" className="text-white mt-3">
                  Login to Account
                </Link>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
