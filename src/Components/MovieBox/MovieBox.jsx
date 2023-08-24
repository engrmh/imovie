import React from "react";
import { Button, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function MovieBox({ id, poster, title, year, country }) {
  return (
    <Col xs={12} md={3} lg={2} key={id} className="">
      <div className="text-decoration-none text-light m-2 movie-box shadow-lg">
        <div className="d-none d-md-flex flex-md-column bg-dark bg-opacity-75 rounded position-relative">
          <div className="">
            <Image
              src={poster}
              alt={title}
              className="w-100 h-100 img-fluid rounded"
            />
          </div>
          <div className="p-2 rounded bg-dark bg-opacity-75 h-100 w-100 position-absolute movieInfos flex-column justify-content-between">
            <div className="">
              <h4 className="mb-3">{title}</h4>
              <p className="">{year}</p>
              <p className="">{country}</p>
            </div>
            <Button className="bg-transparent border-white">
              <Link
                to={`/currentMovie/${id}`}
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
              src={poster}
              alt={title}
              className="h-100 img-fluid rounded"
            />
          </div>
          <div className="ms-3 p-1 rounded w-100">
            <div className="">
              <h5 className="">{title}</h5>
              <p className="">{year}</p>
              <p className="">{country}</p>
            </div>
            <div className="d-flex justify-content-end pb-2 pe-2">
              <Button className="bg-transparent border-white">
                <Link
                  to={`/currentMovie/${id}`}
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
  );
}
