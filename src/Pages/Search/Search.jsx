import React, { useEffect, useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import MovieBox from "../../Components/MovieBox/MovieBox";
export default function Search() {
  const [searchField, setSearchField] = useState("");
  const [pageCount, setPageCount] = useState([]);
  const [searchedMovie, setSearchedMovie] = useState([]);
  useEffect(() => {
    if (searchField.length >= 1) {
      fetchData();
      console.log(searchField);
    }
  }, [searchField]);

  const fetchData = () => {
    fetch(`https://moviesapi.ir/api/v1/movies?q=${searchField}`)
      .then((res) => res.json())
      // .then((data) => console.log(data));
      .then((json) => {
        setSearchedMovie(json.data);
        console.log(json);
      });
  };

  return (
    <Container className="">
      <Row>
        <Col xs={12} className="">
          <h3 className="allMoviesTitle text-white text-center mt-2 border-white border-bottom py-3">
            Search In Movies
          </h3>
        </Col>
        <Col xs={12}>
          <Form.Group>
            <Form.Label className="mb-0 ps-1 text-white my-3 mb-3">
              Enter Your Text For Search:
              <span className="text-warning fs-4 py-0">*</span>
            </Form.Label>
            <Form.Control
              value={searchField}
              autoComplete="on"
              onChange={(event) => setSearchField(event.target.value)}
              type="text"
              className="newMovieInput bg-opacity-25 bg-white rounded mb-2 border-0 border-bottom border-warning"
              required
            />
          </Form.Group>
        </Col>
        <Col xs={12}>
          <Row className="justify-content-center py-2">
            {searchField.length &&
              searchedMovie.map((movie) => <MovieBox {...movie} />)}
          </Row>
        </Col>
        {/*<Col xs={12} className="d-flex justify-content-center my-3">*/}
        {/*  <div className="bg-light bg-opacity-75 rounded p-2">*/}
        {/*    <Pagination*/}
        {/*      count={searchedMovie.length}*/}
        {/*      variant="outlined"*/}
        {/*      shape="rounded"*/}
        {/*      color="warning"*/}
        {/*      onChange={(event, page) => {*/}
        {/*        updatePage(page);*/}
        {/*      }}*/}
        {/*    />*/}
        {/*  </div>*/}
        {/*</Col>*/}
      </Row>
    </Container>
  );
}
