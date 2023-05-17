    import React, {Component} from 'react';
    import { AiFillStar } from 'react-icons/ai';
    import Tab from 'react-bootstrap/Tab';
    import Tabs from 'react-bootstrap/Tabs';

    import {Button, Col, Container, Image, Row} from "react-bootstrap";
    import "./style.css";
    import { Swiper, SwiperSlide } from "swiper/react";

    // Import Swiper styles
    import "swiper/css";
    import "swiper/css/effect-creative";


    // import required modules
    import { Autoplay , EffectCreative } from "swiper";

    export default class MoviePage extends Component{
        constructor(props) {
            super(props);
            this.state = {
                currentMovie: null,
                getMovieID:null,
                findedPage:null,
            }
        }
        componentDidMount() {
            const location = window.location;
            const queryParams = new URLSearchParams(location.search);
            const movieID = queryParams.get('id');
            this.setState(
                {
                    getMovieID: movieID,
                },
                () => {
                    this.fetchData();
                }
            );
        }
         fetchData = () => {
            fetch('https://moviesapi.ir/api/v1/movies/' + this.state.getMovieID)
                .then(response => response.json())
                .then(res => {
                    console.log(res)
                    this.setState({
                        currentMovie : res
                    })

                })
                .catch(error => console.error(error));
        };

        render() {
            return(
                <>
                    <Container fluid className='text-white'>
                        <Row className='justify-content-between mt-4'>
                            {
                                this.state.currentMovie && (
                                    <>
                                        <Col xs={12} md={4} lg={4} className='d-flex justify-content-center mb-2 h-75'>
                                            <Image fluid rounded src={this.state.currentMovie.poster} alt={this.state.currentMovie.title} className='w-75'/>
                                        </Col>
                                        <Col xs={12} md={8} lg={8}>
                                            <div className="d-flex justify-content-between align-items-center mb-5">
                                                <div className="">
                                                    <h1 className='mb-3'>{this.state.currentMovie.title}</h1>
                                                    <div className="d-flex justify-content-between shortTitle">
                                                        <h5>{this.state.currentMovie.year}</h5>|
                                                        <h5>{this.state.currentMovie.runtime}</h5>|
                                                        <h5>{this.state.currentMovie.rated}</h5>
                                                    </div>
                                                </div>
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <h2>{this.state.currentMovie.imdb_rating}</h2>
                                                    <AiFillStar className='text-warning fs-3 ms-1'/>
                                                </div>
                                            </div>
                                            <div className="">
                                                <Tabs
                                                    // defaultActiveKey="overview"
                                                    defaultActiveKey="pictures"
                                                    id="justify-tab-example"
                                                    className="mb-3"
                                                    justify
                                                >
                                                    <Tab eventKey="overview" title="Overview" className='text-white'>
                                                        <div className="ps-3">
                                                            <h5><span className='text-warning me-2'>Country:</span>{this.state.currentMovie.country}</h5>
                                                            <h5 className='d-flex'><span className='text-warning me-2'>Genres:</span>
                                                                {
                                                                    this.state.currentMovie.genres.map(gen => (
                                                                        <p className='mb-0'>{gen}</p>
                                                                    ))
                                                                }
                                                            </h5>
                                                            <h5><span className='text-warning me-2'>Released:</span>{this.state.currentMovie.released}</h5>
                                                            <h5><span className='text-warning me-2'>Director:</span>{this.state.currentMovie.director}</h5>
                                                            <h5><span className='text-warning me-2'>Type:</span>{this.state.currentMovie.type}</h5>
                                                            <h5><span className='text-warning me-2'>Meta Score:</span>{this.state.currentMovie.metascore}</h5>
                                                            <h5><span className='text-warning me-2'>IMBD Votes:</span>{this.state.currentMovie.imdb_votes}</h5>
                                                            <h5><span className='text-warning me-2'>IMBD ID:</span>{this.state.currentMovie.imdb_id}</h5>
                                                        </div>

                                                    </Tab>
                                                    <Tab eventKey="pictures" title="Pictures">
                                                        <div className="d-flex justify-content-between align-items-center">
                                                            <Swiper
                                                                grabCursor={true}
                                                                effect={"creative"}
                                                                loop={true}
                                                                autoplay={{
                                                                    delay: 2500,
                                                                    disableOnInteraction: false,
                                                                }}
                                                                creativeEffect={{
                                                                    prev: {
                                                                        shadow: true,
                                                                        translate: ["-120%", 0, -500],
                                                                    },
                                                                    next: {
                                                                        shadow: true,
                                                                        translate: ["120%", 0, -500],
                                                                    },
                                                                }}
                                                                modules={[Autoplay ,EffectCreative]}
                                                                className="mySwiper2 w-75 rounded"
                                                            >
                                                                {
                                                                    this.state.currentMovie.images.map(image => (
                                                                        <SwiperSlide >
                                                                            <Image src={image} fluid className=''/>
                                                                        </SwiperSlide>
                                                                    ))
                                                                }
                                                            </Swiper>

                                                        </div>

                                                    </Tab>
                                                    <Tab eventKey="detailes" title="detailes">
                                                        <div className="">
                                                            <h5 className='mb-3'><span className='text-warning me-2'>Writer:</span>{this.state.currentMovie.writer}</h5>
                                                            <h5 className='mb-3'><span className='text-warning me-2'>Actors:</span>{this.state.currentMovie.actors}</h5>
                                                            <h5 className='mb-3'><span className='text-warning me-2'>Plot:</span>{this.state.currentMovie.plot}</h5>
                                                            <h5 className='mb-3'><span className='text-warning me-2'>Awards:</span>{this.state.currentMovie.awards}</h5>
                                                        </div>

                                                    </Tab>
                                                </Tabs>
                                            </div>
                                        </Col>
                                    </>
                                )
                            }
                            <div className="w-100 d-flex justify-content-center mt-3 p-3">
                                <Button className='bg-warning text-black px-5'>Back</Button>
                            </div>
                        </Row>
                    </Container>
                </>
            )
        }
    }