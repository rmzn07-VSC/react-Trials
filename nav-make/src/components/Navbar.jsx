import React from "react";
import { Navbar, Nav, Container, NavDropdown, Form, FormControl, Button } from "react-bootstrap";
import "/Navbar.css"; // CSS stilleri için import

function NavbarComponent() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#">Your Brand</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Anasayfa</Nav.Link>
            <Nav.Link href="#link">Hakkımızda</Nav.Link>
            <NavDropdown title="Hizmetler" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Yazılım Geliştirme</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Danışmanlık</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Eğitim</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Arama..."
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Ara</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;