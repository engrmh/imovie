import React, {useState} from 'react'
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import './AddNewFilm.css'

export default function AddNewFilm () {
    const [filmName, setFilmName] = useState('');
    const [imbdID, setImbdID] = useState('');
    const [filmCountry, setFilmCountry] = useState('');
    const [filmYear, setFilmYear] = useState('');

    const newFilmGen = () => {
        let mainFilm = {
            title: filmName,
            imbd_id: imbdID,
            country: filmCountry,
            year: filmYear
        };

        fetch('https://moviesapi.ir/api/v1/movies', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(mainFilm) // Convert the mainFilm object to a JSON string
        })
            .then(res => res.json())
            .then(json => console.log(json))
            .catch(error => console.error('Error:', error)); // Add error handling for the fetch request
    }


    return (
    <Container className='addNewMovieContainer mb-2 py-2'>
        <Form>
            <Row className='p-5 text-white'>
                <Col xs={12} md={6} className='mb-2'>
                    <Form.Group>
                        <Form.Label className='mb-0 ps-1'>Film Name:
                            <span className='text-warning fs-4 py-0'>*</span>
                        </Form.Label>
                        <Form.Control value={filmName} onChange={event => setFilmName(event.target.value)} type='text' className='newMovieInput bg-opacity-25 bg-white rounded mb-2 border-0 border-bottom border-warning' required/>
                    </Form.Group>
                </Col>
                <Col xs={12} md={6} className='mb-2'>
                    <Form.Group>
                        <Form.Label className='mb-0 ps-1' >Film ID In IMBD:
                            <span className='text-warning fs-4 py-0'>*</span>
                        </Form.Label>
                        <Form.Control value={imbdID} onChange={event => setImbdID(event.target.value)} type='text' className='newMovieInput bg-opacity-25 bg-white rounded mb-2 border-0 border-bottom border-warning' required/>
                    </Form.Group>
                </Col>
                <Col xs={12} md={6} className='mb-2'>
                    <Form.Group>
                        <Form.Label className='mb-0 ps-1'>Creator Country:
                            <span className='text-warning fs-4 py-0'>*</span>
                        </Form.Label>
                        <Form.Control value={filmCountry} onChange={event => setFilmCountry(event.target.value)} type='text' className='newMovieInput bg-opacity-25 bg-white rounded mb-2 border-0 border-bottom border-warning' required/>
                    </Form.Group>
                </Col>
                <Col xs={12} md={6} className='mb-2'>
                    <Form.Group>
                        <Form.Label className='mb-0 ps-1'>Build Year:
                            <span className='text-warning fs-4 py-0'>*</span>
                        </Form.Label>
                        <Form.Control value={filmYear} onChange={event => setFilmYear(event.target.value)} type='text' className='newMovieInput bg-opacity-25 bg-white rounded mb-2 border-0 border-bottom border-warning' required/>
                    </Form.Group>
                </Col>
                <Col xs={12} className='mb-2 d-flex justify-content-center align-items-center mt-3'>
                    <Button className='px-5 bg-warning text-black' onClick={()=>newFilmGen}>ADD</Button>
                </Col>
            </Row>
        </Form>
    </Container>
  )
}