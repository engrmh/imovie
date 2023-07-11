import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { AiFillStar } from "react-icons/ai";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import PhotoBox from "../../Components/PhotoLiteBox/PhotoBox";

export default function MoviePage() {
  return (
    <>
      <Container fluid className="text-white position-relative">
        <Row className="justify-content-between mt-4">
          {this.state.currentMovie && (
            <>
              <Col
                xs={12}
                md={4}
                lg={4}
                className="d-flex justify-content-center mb-2 h-75"
              >
                <Image
                  fluid
                  rounded
                  src={this.state.currentMovie.poster}
                  alt={this.state.currentMovie.title}
                  className="w-75"
                />
              </Col>
              <Col xs={12} md={8} lg={8}>
                <div className="d-flex justify-content-between align-items-center mb-5">
                  <div className="">
                    <h1 className="mb-3">{this.state.currentMovie.title}</h1>
                    <div className="d-flex justify-content-between shortTitle">
                      <h5>{this.state.currentMovie.year}</h5>|
                      <h5>{this.state.currentMovie.runtime}</h5>|
                      <h5>{this.state.currentMovie.rated}</h5>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <h2>{this.state.currentMovie.imdb_rating}</h2>
                    <AiFillStar className="text-warning fs-3 ms-1" />
                  </div>
                </div>
                <div className="">
                  <Tabs
                    defaultActiveKey="overview"
                    // defaultActiveKey="pictures"
                    id="justify-tab-example"
                    className="mb-3"
                    justify
                  >
                    <Tab
                      eventKey="overview"
                      title="Overview"
                      className="text-white"
                    >
                      <div className="ps-3">
                        <h5>
                          <span className="text-warning me-2">Country:</span>
                          {this.state.currentMovie.country}
                        </h5>
                        <h5 className="d-flex">
                          <span className="text-warning me-2">Genres:</span>
                          {this.state.currentMovie.genres.map((gen) => (
                            <p className="mb-0">{gen}</p>
                          ))}
                        </h5>
                        <h5>
                          <span className="text-warning me-2">Released:</span>
                          {this.state.currentMovie.released}
                        </h5>
                        <h5>
                          <span className="text-warning me-2">Director:</span>
                          {this.state.currentMovie.director}
                        </h5>
                        <h5>
                          <span className="text-warning me-2">Type:</span>
                          {this.state.currentMovie.type}
                        </h5>
                        <h5>
                          <span className="text-warning me-2">Meta Score:</span>
                          {this.state.currentMovie.metascore}
                        </h5>
                        <h5>
                          <span className="text-warning me-2">IMBD Votes:</span>
                          {this.state.currentMovie.imdb_votes}
                        </h5>
                        <h5>
                          <span className="text-warning me-2">IMBD ID:</span>
                          {this.state.currentMovie.imdb_id}
                        </h5>
                      </div>
                    </Tab>
                    <Tab eventKey="pictures" title="Pictures">
                      <div className="d-flex flex-column justify-content-between align-items-center">
                        <h5 className="mb-4 text-warning">
                          For see gallery click on bottom photo
                        </h5>
                        <PhotoBox image={this.state.currentMovie.images} />
                      </div>
                    </Tab>
                    <Tab eventKey="detailes" title="detailes">
                      <div className="">
                        <h5 className="mb-3">
                          <span className="text-warning me-2">Writer:</span>
                          {this.state.currentMovie.writer}
                        </h5>
                        <h5 className="mb-3">
                          <span className="text-warning me-2">Actors:</span>
                          {this.state.currentMovie.actors}
                        </h5>
                        <h5 className="mb-3">
                          <span className="text-warning me-2">Plot:</span>
                          {this.state.currentMovie.plot}
                        </h5>
                        <h5 className="mb-3">
                          <span className="text-warning me-2">Awards:</span>
                          {this.state.currentMovie.awards}
                        </h5>
                      </div>
                    </Tab>
                  </Tabs>
                </div>
              </Col>
            </>
          )}
          <div className="w-100 d-flex justify-content-center mt-3 p-3">
            <a
              href="/"
              className="text-decoration-none bg-warning py-1 px-5 text-black rounded"
            >
              Back
            </a>
          </div>
        </Row>
      </Container>
    </>
  );
}
