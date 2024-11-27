import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
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
          {/* Hizmetlerin listesini oluşturmak için ListGroup'ı kullanın */}
          <ListGroup className="text-center mt-3"> 
            <ListGroup.Item as="a" href="/hizmetler/yazilim">Yazılım Geliştirme</ListGroup.Item>
            <ListGroup.Item as="a" href="/hizmetler/danismanlik">Danışmanlık</ListGroup.Item>
            <ListGroup.Item as="a" href="/hizmetler/egitim">Eğitim</ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
      {/* Ek hizmetler veya bilgiler ekleme (alt kısmı) */}
      <Row className="mt-5"> 
        <Col className="text-center">
          {/* Örneğin, avantajlarınız, deneyimleriniz */}
        </Col>
      </Row>
    </Container>
  );
}

export default Hizmetler;