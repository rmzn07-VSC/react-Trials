import React from "react";
import { Container, Row, Col} from 'react-bootstrap';
function Egitim() {
  return (
    <Container>
      <Row className="mt-5">
        <Col>
          <Heading as="h1" className="text-center mb-4">Eğitim</Heading>
          <Paragraph className="text-center">
            Yazılım geliştirme, web tasarımı ve dijital pazarlama gibi
            konularda eğitim programları düzenliyoruz. Eğitimlerimiz, sektördeki
            en son teknolojileri ve trendleri kapsamaktadır.
          </Paragraph>
        </Col>
      </Row>
      {/* Eğitim programı ile ilgili bilgiler (alt kısmı) */}
      <Row className="mt-5"> 
        <Col className="text-center">
          <ListGroup>
            {/* <ListGroup.Item as="a" href="#">Proje Yönetimi Eğitimi</ListGroup.Item>
            <ListGroup.Item as="a" href="#">Yazılım Geliştirme Eğitimi</ListGroup.Item> */}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}

export default Egitim;