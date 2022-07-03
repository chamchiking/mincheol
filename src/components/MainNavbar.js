import React from 'react';
import { Container, Navbar, Nav} from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function MainNavbar({user}) {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link as={Link} to="/">home</Nav.Link>
              <Nav.Link as={Link} to="/projects">project</Nav.Link>
              <Nav.Link as={Link} to="/blog">blog</Nav.Link>
              <Nav.Link as={Link} to="/cv">cv</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}