import React, { Component } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import Pagination from '@mui/material/Pagination';
import './MovieBucket.css'

export default class MovieBucket extends Component {
    constructor(props) {
        super(props);
        this.state = {
            moviesData: null,
            pageInfo: null,
            pageCount: null,
            currentPage: null
        };
    }


    componentDidMount() {
        this.fetchData();
    }

    fetchData = () => {
        fetch('https://moviesapi.ir/api/v1/movies?page=' + this.state.currentPage)
            .then(response => response.json())
            .then(res => {
                this.setState({
                    moviesData: res.data,
                    pageInfo: res.metadata,
                    pageCount: res.metadata.page_count,
                    currentPage: res.metadata.current_page
                });
            })
            .catch(error => console.error(error));
    };

    handlePageChange = (event, page) => {
        this.setState({ currentPage: page }, () => {
            this.fetchData();
        });
    };

    sendMovieID(id , page){
        window.location = '/MoviePage?id='+ id
    }

    render() {
        return (
            <Container fluid className='px-5'>
                <div className="">
                    <Row className='my-4 justify-content-between mx-3 mx-lg-0'>
                        {this.state.moviesData ? (
                            this.state.moviesData.map(movie => (
                                <Col key={movie.id} xs={6} md={4} lg={2} className='bg-warning m-3 rounded px-0 pb-2 movieContainer' onClick={this.sendMovieID.bind(this , movie.id)}>
                                    <Image src={movie.poster} fluid className='w-100 mb-1 rounded-top h-75' />
                                    <div className='d-flex flex-column justify-content-between align-items-start text-black px-3'>
                                        <h6 className=''>{movie.title}</h6>
                                        <h6 className='movieInfo'>IMBD: {movie.imdb_rating}</h6>
                                        <h6 className='movieInfo'>{movie.year}</h6>
                                    </div>
                                </Col>
                            ))
                        ) : (
                            <p className='text-light'>Loading data...</p>
                        )}
                        <div className="mt-3 mx-auto paginationContainer">
                            <Pagination
                                count={this.state.pageCount} // Total number of pages
                                page={this.state.currentPage} // Current active page
                                onChange={this.handlePageChange} // Callback function for page change
                                shape="rounded"
                                color="secondary"
                            />
                        </div>
                    </Row>
                </div>
            </Container>
        );
    }
}
