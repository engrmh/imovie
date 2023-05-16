import React, { Component } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default class MovieBucket extends Component {
    constructor(props) {
        super(props);
        this.state = {
            moviesData: null,
            pageInfo: null,
            pageCount: 1,
            currentPage: 1
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

    sendMovieID(id){
        window.location = 'showMovieDetails.html?id='+ id
    }

    render() {
        return (
            <Container fluid className='px-5'>
                <h2 className='mx-auto mb-3 pt-3 ps-2'>Movie</h2>
                <hr className='text-white' />
                <div className="">
                    <Row className='my-4 justify-content-between'>
                        {this.state.moviesData ? (
                            this.state.moviesData.map(movie => (
                                <Col key={movie.id} xs={6} md={4} lg={2} className='bg-warning m-3 rounded px-0 h-auto' onClick={this.sendMovieID.bind(this,movie.id)}>
                                    <Image src={movie.poster} fluid className='w-100 mb-2 rounded-top h-75' />
                                    <div className='d-flex flex-column justify-content-between align-items-start text-black px-3'>
                                        <h5 className=''>{movie.title}</h5>
                                        <h6>IMBD: {movie.imdb_rating}</h6>
                                        <h6>{movie.year}</h6>
                                    </div>
                                </Col>
                            ))
                        ) : (
                            <p>Loading data...</p>
                        )}
                        <Stack spacing={2}>
                            <Pagination
                                count={this.state.pageCount} // Total number of pages
                                page={this.state.currentPage} // Current active page
                                onChange={this.handlePageChange} // Callback function for page change
                                variant="outlined"
                                shape="rounded"

                            />
                        </Stack>
                    </Row>
                </div>
            </Container>
        );
    }
}
