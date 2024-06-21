import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, useLocation } from 'react-router-dom';

const Topbar = () => {
    let { pathname } = useLocation()
    return <>
        <Navbar expand="lg" className="bg-body-tertiary navbar navbar-dark bg-dark" id='navbar' >
            <Container fluid >
                <Navbar.Brand href="#">Admin Page</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Link className={`text-decoration-none ${pathname === '/' ? "Active" : ""}`} to='/'> <Nav.Item>Home</Nav.Item></Link>
                        <Link className={`text-decoration-none ${pathname === '/dashboard' ? "Active" : ""}`} to='/dashboard'><Nav.Item>Dashboard</Nav.Item></Link>
                        <Link className={`text-decoration-none ${pathname === '/create' ? "Active" : ""}`} to='/create'><Nav.Item >Create</Nav.Item></Link>
                    </Nav>
                    <Form className="d-flex">
                        <Button variant="success">Log In</Button>

                        <Button variant="outline-success">Sign In</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    </>
}

export default Topbar
