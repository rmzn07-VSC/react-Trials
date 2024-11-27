import React from "react";
import { Container, Row, Col, Heading, Paragraph, ListGroup } from 'react-bootstrap';

function Hizmetler() {
  return (
    <Container>
      <Row className="mt-5">
        <Col>
          <Heading as="h1" className="text-center mb-4">
            Hizmetlerimiz
          </Heading>
          <Paragraph className="text-center">
            Geniş bir yelpazede hizmetler sunuyoruz. Aşağıdaki kategorilerden
            birini seçerek daha fazla bilgi edinebilirsiniz:
          </Paragraph>
          {/* ListGroup kullanarak hizmetleri listeleme */}
          <ListGroup className="text-center mt-3">
            <ListGroup.Item as="a" href="/hizmetler/yazilim">Yazılım Geliştirme</ListGroup.Item>
            <ListGroup.Item as="a" href="/hizmetler/danismanlik">Danışmanlık</ListGroup.Item>
            <ListGroup.Item as="a" href="/hizmetler/egitim">Eğitim</ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
      {/* Diğer bilgiler veya içerikler */}
      <Row className="mt-5">
        <Col className="text-center">
          {/* Örneğin, hizmetleriniz hakkında ek açıklamalar ekleyebilirsiniz. */}
        </Col>
      </Row>
    </Container>
  );
}

export default Hizmetler;