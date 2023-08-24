import React, { useContext, useEffect, useState } from "react";
import { Button, Col, Container, Image, Row, Spinner } from "react-bootstrap";
import PageContext from "../../Context/Context";
import { Pagination } from "@mui/material";
import { Link } from "react-router-dom";
import "./MovieBucket.css";
import MovieBox from "../../Components/MovieBox/MovieBox";
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
                  contextData.allMovies.map((movie) => <MovieBox {...movie} />)
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
