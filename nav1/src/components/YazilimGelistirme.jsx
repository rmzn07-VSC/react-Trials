import React from "react";
import { Container, Row, Col } from 'react-bootstrap';

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
      {/* Yazılım geliştirme ile ilgili ek içerik (alt kısmı) */}
      <Row className="mt-5"> 
        <Col className="text-center">
          {/* Proje örnekleri, teknolojiler vb. ekleyebilirsiniz. */}
        </Col>
      </Row>
    </Container>
  );
}

export default YazilimGelistirme;