import React, { useContext, useEffect, useState } from "react";
import { Button, Col, Container, Image, Row, Spinner } from "react-bootstrap";
import PageContext from "../../Context/Context";
import { Pagination } from "@mui/material";
import { Link } from "react-router-dom";
import "./MovieBucket.css";
export default function MovieBucket() {
  const contextData = useContext(PageContext);
  const [pageCount, setPageCount] = useState([]);
  const [showMovies, setShowMovies] = useState(false);
  useEffect(() => {
    fetchData();
  }, [contextData.moviePage]);

  const fetchData = () => {
    fetch(`https://moviesapi.ir/api/v1/movies?page=${contextData.moviePage}`)
      .then((res) => res.json())
      .then((json) => {
        contextData.setAllMovies(json.data);
        setPageCount(json.metadata);
      });
  };

  const updatePage = (event, page) => {
    contextData.setMoviePage(event);
    setShowMovies(false);
  };

  setTimeout(() => {
    setShowMovies(true);
  }, 3000);

  return (
    <Container className="">
      <Row>
        <Col xs={12} className="">
          <h3 className="allMoviesTitle text-white text-center mt-2 border-white border-bottom py-3">
            All Movies
          </h3>
        </Col>
        <Col xs={12}>
          <Row className="justify-content-center py-2">
            {contextData.allMovies.length ? (
              <>
                {showMovies ? (
                  contextData.allMovies.map((movie) => (
                    <Col xs={12} md={3} lg={2} key={movie.id} className="">
                      <div className="text-decoration-none text-light m-2 movie-box shadow-lg">
                        <div className="d-none d-md-flex flex-md-column bg-dark bg-opacity-75 rounded position-relative">
                          <div className="">
                            <Image
                              src={movie.poster}
                              alt={movie.title}
                              className="w-100 h-100 img-fluid rounded"
                            />
                          </div>
                          <div className="p-2 rounded bg-dark bg-opacity-75 h-100 w-100 position-absolute movieInfos flex-column justify-content-between">
                            <div className="">
                              <h4 className="mb-3">{movie.title}</h4>
                              <p className="">{movie.year}</p>
                              <p className="">{movie.country}</p>
                            </div>
                            <Button className="bg-transparent border-white">
                              <Link
                                to={`/currentMovie/${movie.id}`}
                                className="text-decoration-none text-light"
                                target="_blank"
                              >
                                Learn More
                              </Link>
                            </Button>
                          </div>
                        </div>

                        {/*Mobile*/}
                        <div className="d-flex d-md-none flex-md-column bg-dark bg-opacity-75 rounded">
                          <div className="w-50">
                            <Image
                              src={movie.poster}
                              alt={movie.title}
                              className="h-100 img-fluid rounded"
                            />
                          </div>
                          <div className="ms-3 p-1 rounded w-100">
                            <div className="">
                              <h5 className="">{movie.title}</h5>
                              <p className="">{movie.year}</p>
                              <p className="">{movie.country}</p>
                            </div>
                            <div className="d-flex justify-content-end pb-2 pe-2">
                              <Button className="bg-transparent border-white">
                                <Link
                                  to={`/currentMovie/${movie.id}`}
                                  className="text-decoration-none text-light"
                                  target="_blank"
                                >
                                  See More
                                </Link>
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Col>
                  ))
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
              </>
            ) : (
              <h4 className="text-light">Loading...</h4>
            )}
          </Row>
        </Col>
        <Col xs={12} className="d-flex justify-content-center my-3">
          <div className="bg-light bg-opacity-75 rounded p-2">
            <Pagination
              count={pageCount.page_count}
              variant="outlined"
              shape="rounded"
              color="warning"
              onChange={(event, page) => {
                updatePage(page);
              }}
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
}
