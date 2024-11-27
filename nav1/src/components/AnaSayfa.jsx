import React from "react";
import { Container, Row, Col } from 'react-bootstrap';

function AnaSayfa() {
  return (
    <Container>
      <Row className="mt-5"> 
        <Col>
          <Heading as="h1" className="text-center mb-4">
            Anasayfa
          </Heading>
          <Paragraph className="text-center">
            Sitemize hoş geldiniz! Burada şirketimiz ve hizmetlerimiz hakkında
            bilgi bulabilirsiniz.
          </Paragraph>
        </Col>
      </Row>
      {/* Resim ekleme (alt kısmı) */}
      <Row className="mt-5"> 
        <Col className="text-center">
          <img src="/assets/logo.jpg" alt="Logo" className="img-fluid" /> 
        </Col>
      </Row>
    </Container>
  );
}

export default AnaSayfa;