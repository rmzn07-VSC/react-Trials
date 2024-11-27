import React, { useState } from 'react';
import { Navbar, Nav, Container, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import '../Navbar.css'; //  Ek CSS stilleri için

function NavbarComponent() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="fixed-top"> {/* Navbar stilleri (karanlık) */}
      <Container>
        <Navbar.Brand href="/">Your Brand</Navbar.Brand> {/* Marka logosu */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" /> {/* Toggle button */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto"> {/* Linkler */}
            <Nav.Link href="/" onClick={closeMenu}>Anasayfa</Nav.Link>
            <Nav.Link href="/Hakkimizda" onClick={closeMenu}>Hakkımızda</Nav.Link>
            <Nav.Link href="/Iletisim" onClick={closeMenu}>İletişim</Nav.Link>
            <NavDropdown title="Hizmetler" id="basic-nav-dropdown" onClick={toggleMenu}> {/* Dropdown */}
              <NavDropdown.Item href="/hizmetler/yazilim" onClick={closeMenu}>Yazılım Geliştirme</NavDropdown.Item>
              <NavDropdown.Item href="/hizmetler/danismanlik" onClick={closeMenu}>Danışmanlık</NavDropdown.Item>
              <NavDropdown.Item href="/hizmetler/egitim" onClick={closeMenu}>Eğitim</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex"> {/* Arama çubuğu */}
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