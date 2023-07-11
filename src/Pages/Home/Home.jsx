import React, { useEffect } from "react";
import AOS from "aos";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./Home.css";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { EffectCoverflow, Autoplay } from "swiper";
import { HiOutlineChevronDoubleDown } from "react-icons/hi";
import { Link } from "react-router-dom";

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Container className="mt-4 py-2">
        <Row>
          <Col
            xs={12}
            md={12}
            lg={12}
            className="vh-100 d-flex justify-content-center align-items-center position-relative"
          >
            <div className="d-flex justify-content-center align-items-center flex-column text-white">
              <h1 className="homeTitle">iMovie</h1>
              <h3 className="homeTitleDescription bg-dark bg-opacity-50 p-2 rounded">
                Movies and Series Official Page
              </h3>
            </div>
            <div className="position-absolute bottom-0 downingArrow pb-3">
              <HiOutlineChevronDoubleDown className="fs-3 text-white" />
            </div>
          </Col>
          <Col xs={12} md={12} lg={12}>
            <div className="homeSwiper my-4" data-aos="fade-down">
              <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                loop={true}
                coverflowEffect={{
                  rotate: 50,
                  stretch: 0,
                  depth: 100,
                  modifier: 1,
                  slideShadows: true,
                }}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                modules={[EffectCoverflow, Autoplay]}
                className="homeSwiper-slide w-100 h-50 py-2"
              >
                <SwiperSlide className="w-25 h-50">
                  <Image
                    className="homeSwiper-slide-Image rounded"
                    src="https://moviesapi.ir/images/tt3322420_poster.jpg"
                  />
                </SwiperSlide>
                <SwiperSlide className="w-25 h-50">
                  <Image
                    className="homeSwiper-slide-Image rounded"
                    src="https://moviesapi.ir/images/tt1220719_poster.jpg "
                  />
                </SwiperSlide>
                <SwiperSlide className="w-25 h-50">
                  <Image
                    className="homeSwiper-slide-Image rounded"
                    src="https://moviesapi.ir/images/tt0133093_poster.jpg"
                  />
                </SwiperSlide>
                <SwiperSlide className="w-25 h-50">
                  <Image
                    className="homeSwiper-slide-Image rounded"
                    src="https://moviesapi.ir/images/tt0110413_poster.jpg"
                  />
                </SwiperSlide>
                <SwiperSlide className="w-25 h-50">
                  <Image
                    className="homeSwiper-slide-Image rounded"
                    src="https://moviesapi.ir/images/tt0816692_poster.jpg"
                  />
                </SwiperSlide>
                <SwiperSlide className="w-25 h-50">
                  <Image
                    className="homeSwiper-slide-Image rounded"
                    src="https://moviesapi.ir/images/tt0027977_poster.jpg"
                  />
                </SwiperSlide>
                <SwiperSlide className="w-25 h-50">
                  <Image
                    className="homeSwiper-slide-Image rounded"
                    src="https://moviesapi.ir/images/tt0110357_poster.jpg"
                  />
                </SwiperSlide>
                <SwiperSlide className="w-25 h-50">
                  <Image
                    className="homeSwiper-slide-Image rounded"
                    src="https://moviesapi.ir/images/tt0111161_poster.jpg"
                  />
                </SwiperSlide>
                <SwiperSlide className="w-25 h-50">
                  <Image
                    className="homeSwiper-slide-Image rounded"
                    src="https://moviesapi.ir/images/tt0081505_poster.jpg"
                  />
                </SwiperSlide>
                <SwiperSlide className="w-25 h-50">
                  <Image
                    className="homeSwiper-slide-Image rounded"
                    src="https://moviesapi.ir/images/tt0910970_poster.jpg"
                  />
                </SwiperSlide>
                <SwiperSlide className="w-25 h-50">
                  <Image
                    className="homeSwiper-slide-Image rounded"
                    src="https://moviesapi.ir/images/tt2543164_poster.jpg"
                  />
                </SwiperSlide>
              </Swiper>
            </div>
          </Col>
          <Col xs={12} md={12} lg={12}>
            <div className="w-100">
              <h3 className="text-center border-white border-bottom text-white">
                Your Access
              </h3>
              <div className="d-flex justify-content-between align-items-center my-3 gap-4">
                <Button className="w-100 border-white bg-transparent allMovieBtn">
                  <Link
                    to=""
                    className="text-decoration-none bg-transparent border-white text-white allMovieBtnLink"
                  >
                    All Movies
                  </Link>
                </Button>
                <Button className="w-100 border-white bg-transparent searchMovieBtn">
                  <Link
                    to=""
                    className="text-decoration-none bg-transparent border-white text-white searchMovieBtnLink"
                  >
                    Search in Movies
                  </Link>
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
