import React from "react";
import {Container, Image, Nav, Navbar} from "react-bootstrap";
import { Link } from 'react-router-dom';

export default function Header (){
    return(
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">
                    <Image
                        alt=""
                        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.OfuqHdnpwhpbQrudoZ3hRQHaHa%26pid%3DApi&f=1&ipt=12d0416b5e26c62e2708c6c74a6b3d3c0225ba3f543a784773bf462c30b79c0b&ipo=images"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    iMovie
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto">
                        <Nav.Link>New</Nav.Link>
                        <Nav.Link className='text-transparent text-decoration-none'><Link className='text-transparent text-decoration-none' to='/'>Movies</Link></Nav.Link>
                        <Nav.Link>TV Shows</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets" className='text-warning'>Account</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}