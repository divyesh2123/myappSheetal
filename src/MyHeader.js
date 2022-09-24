import React from 'react'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/esm/Button';
import './test.css';

export default function MyHeader() {
  return (
    <Navbar  expand="lg"  style={{"background-color": "red"}}>
    <Container fluid>
      <Navbar.Brand href="#">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll"  />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Nav.Link href="#action1">Home</Nav.Link>
          <Nav.Link href="#action2">About</Nav.Link>
          <NavDropdown title="WebDevelopment" id="navbarScrollingDropdown">
            <NavDropdown.Item href="#action3">Javascript</NavDropdown.Item>
            <NavDropdown.Item href="#action4">
              CSS
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action5">
             React
            </NavDropdown.Item>
            <NavDropdown.Item href="#action5">
            Html
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#" disabled>
            Data Sci
          </Nav.Link>
        </Nav>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}
