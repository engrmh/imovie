import React, { useContext, useEffect, useState } from "react";
import { Col, Container, Image, Row, Spinner } from "react-bootstrap";
import PageContext from "../../Context/Context";
import { Pagination } from "@mui/material";
import { Link } from "react-router-dom";
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
    <Container className="mt-5">
      <Row>
        <Col xs={12}>
          <Row className="justify-content-center">
            {contextData.allMovies.length ? (
              <>
                {showMovies ? (
                  contextData.allMovies.map((movie) => (
                    <Col xs={12} md={3} lg={2} key={movie.id}>
                      <Link
                        to={`/currentMovie/${movie.id}`}
                        className="text-decoration-none text-light m-1"
                        target="_blank"
                      >
                        <div className="d-none d-md-flex flex-md-column bg-dark bg-opacity-75">
                          <div className="">
                            <Image
                              src={movie.poster}
                              alt={movie.title}
                              className="w-100 img-fluid rounded"
                            />
                          </div>
                          <div className="mt-2 p-1 rounded">
                            <h5 className="">{movie.title}</h5>
                            <p className="">{movie.year}</p>
                            <p className="">{movie.country}</p>
                          </div>
                        </div>

                        {/*Mobile*/}
                        <div className="d-flex d-md-none flex-md-column bg-dark bg-opacity-75">
                          <div className="w-25">
                            <Image
                              src={movie.poster}
                              alt={movie.title}
                              className="h-100 img-fluid rounded"
                            />
                          </div>
                          <div className="ms-3 p-1 rounded">
                            <h5 className="">{movie.title}</h5>
                            <p className="">{movie.year}</p>
                            <p className="">{movie.country}</p>
                          </div>
                        </div>
                      </Link>
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
