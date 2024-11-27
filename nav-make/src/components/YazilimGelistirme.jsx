import React from "react";
import { Container, Row, Col, Heading, Paragraph } from 'react-bootstrap';

function YazilimGelistirme() {
  return (
    <Container>
      <Row className="mt-5">
        <Col>
          <Heading as="h1" className="text-center mb-4">
            Yazılım Geliştirme
          </Heading>
          <Paragraph className="text-center">
            Özelleştirilmiş yazılım çözümleri sunuyoruz. İhtiyaçlarınıza
            uygun web uygulamaları, mobil uygulamalar ve masaüstü uygulamaları
            geliştiriyoruz.
          </Paragraph>
        </Col>
      </Row>
      {/* Ek bilgiler veya proje örnekleri  */}
      <Row className="mt-5">
        <Col className="text-center">
          {/* Proje örnekleri veya teknolojiler  */}
        </Col>
      </Row>
    </Container>
  );
}

export default YazilimGelistirme;