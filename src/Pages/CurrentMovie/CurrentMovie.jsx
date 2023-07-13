import React, { useContext, useEffect, useState } from "react";
import { Col, Container, Image, Row, Spinner } from "react-bootstrap";
import { AiFillStar } from "react-icons/ai";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import "./CurrentMovie.css";
import { Tooltip } from "react-tippy";
import Lightbox from "yet-another-react-lightbox";
import {
  Counter,
  Fullscreen,
  Share,
  Slideshow,
  Thumbnails,
  Zoom,
} from "yet-another-react-lightbox/plugins";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/counter.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import { useParams } from "react-router-dom";

const CurrentMovie = () => {
  const id = useParams();
  const [currentMovie, setCurrentMovie] = useState([]);
  const [genres, setGenres] = useState([]);
  const [movieImages, setMovieImages] = useState([]);
  const [open, setOpen] = useState(false);
  const [imagesForSliders, setImagesForSliders] = useState([]);

  useEffect(() => {
    fetchDataHandler();
  }, []);

  const fetchDataHandler = () => {
    fetch(`https://moviesapi.ir/api/v1/movies/${id.movieID}`)
      .then((res) => res.json())
      .then(async (res) => {
        await setCurrentMovie(res);
        await setGenres(res.genres);
        setMovieImages(res.images);
      });
  };

  return (
    <div className="currentMovieContainer bg-black bg-opacity-50 py-4">
      <Container fluid className="text-white position-relative">
        <Row className="justify-content-between">
          {currentMovie ? (
            <>
              <Col
                xs={12}
                md={4}
                lg={4}
                className="d-flex justify-content-center mb-3 h-75"
              >
                <Image
                  fluid
                  rounded
                  src={currentMovie.poster}
                  alt={currentMovie.title}
                  className="w-75 border"
                />
              </Col>
              <Col xs={12} md={8} lg={8}>
                <div className="d-flex justify-content-between align-items-center mb-5">
                  <div className="">
                    <h1 className="mb-3">{currentMovie.title}</h1>
                    <div className="d-flex justify-content-between shortTitle">
                      <h5>{currentMovie.year}</h5>
                      <span className="mx-2">|</span>
                      <h5>{currentMovie.runtime}</h5>
                      <span className="mx-2">|</span>
                      <h5>{currentMovie.rated}</h5>
                    </div>
                  </div>
                  <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
                    <div className="d-flex justify-content-between align-items-center">
                      <h2>{currentMovie.imdb_rating}</h2>
                      <AiFillStar className="text-warning fs-3 ms-1" />
                    </div>
                    <div className="ms-3">
                      <Tooltip
                        // options
                        title="Add To Wish List"
                        position="bottom"
                        trigger="mouseenter"
                      >
                        <BsHeart className="fs-4" />
                      </Tooltip>
                    </div>
                  </div>
                </div>
                <div className="">
                  <Tabs
                    defaultActiveKey="overview"
                    // defaultActiveKey="pictures"
                    id="justify-tab-example"
                    justify
                  >
                    <Tab eventKey="overview" title="Overview">
                      <div className="p-3 w-100">
                        <h5>
                          <span className="text-warning me-2">Country:</span>
                          {currentMovie.country}
                        </h5>
                        <h5 className="d-flex mb-0 pb-0 flex-wrap">
                          <span className="text-warning me-2 py-0 my-0">
                            Genres:
                          </span>
                          {genres.map((gen, index) => (
                            <p className="me-1" key={index}>
                              {gen},
                            </p>
                          ))}
                        </h5>
                        <h5>
                          <span className="text-warning me-2">Released:</span>
                          {currentMovie.released}
                        </h5>
                        <h5>
                          <span className="text-warning me-2">Director:</span>
                          {currentMovie.director}
                        </h5>
                        <h5>
                          <span className="text-warning me-2">Type:</span>
                          {currentMovie.type}
                        </h5>
                        <h5>
                          <span className="text-warning me-2">Meta Score:</span>
                          {currentMovie.metascore}
                        </h5>
                        <h5>
                          <span className="text-warning me-2">IMBD Votes:</span>
                          {currentMovie.imdb_votes}
                        </h5>
                        <h5>
                          <span className="text-warning me-2">IMBD ID:</span>
                          {currentMovie.imdb_id}
                        </h5>
                      </div>
                    </Tab>
                    <Tab eventKey="pictures" title="Pictures">
                      <div className="d-flex flex-column justify-content-between align-items-center p-3 pb-4">
                        <h5 className="mb-4 text-warning">
                          For see gallery click on bottom photo
                        </h5>
                        <Row>
                          {movieImages.map((img, index) => (
                            <Col xs={4} key={index} className="text-center">
                              <Image
                                src={img}
                                className="w-100 rounded"
                                style={{ cursor: "pointer" }}
                                onClick={() => setOpen(true)}
                              />
                              <p className="mt-2">Photo: {index + 1}</p>
                            </Col>
                          ))}
                        </Row>
                        <Lightbox
                          open={open}
                          plugins={[
                            Counter,
                            Fullscreen,
                            Slideshow,
                            Zoom,
                            Share,
                            Thumbnails,
                          ]}
                          counter={{
                            container: { style: { top: "unset", bottom: 0 } },
                          }}
                          close={() => setOpen(false)}
                          slides={movieImages.map((img) => ({ src: img }))}
                        />
                      </div>
                    </Tab>
                    <Tab eventKey="detailes" title="detailes">
                      <div className="p-3">
                        <h5 className="mb-3">
                          <span className="text-warning me-2">Writer:</span>
                          {currentMovie.writer}
                        </h5>
                        <h5 className="mb-3">
                          <span className="text-warning me-2">Actors:</span>
                          {currentMovie.actors}
                        </h5>
                        <h5 className="mb-3">
                          <span className="text-warning me-2">Plot:</span>
                          {currentMovie.plot}
                        </h5>
                        <h5 className="mb-3">
                          <span className="text-warning me-2">Awards:</span>
                          {currentMovie.awards}
                        </h5>
                      </div>
                    </Tab>
                  </Tabs>
                </div>
              </Col>
            </>
          ) : (
            <Col
              xs={12}
              md={4}
              lg={2}
              className="vh-100 d-flex flex-column justify-content-center align-items-center"
            >
              <Spinner animation="border" variant="white" />
              <span className="text-light mt-2">Loading...</span>
            </Col>
          )}
        </Row>
      </Container>
    </div>
  );
};

export default CurrentMovie;
