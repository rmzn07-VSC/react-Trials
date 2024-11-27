import React from "react";
import { Container, Row, Col} from 'react-bootstrap';

function Danismanlik() {
  return (
    <Container>
      <Row className="mt-5">
        <Col>
          <Heading as="h1" className="text-center mb-4">Danışmanlık</Heading>
          <Paragraph className="text-center">
            İşletmenizin dijital dönüşümüne yardımcı olmak için uzman
            danışmanlık hizmetleri sunuyoruz. Strateji geliştirme, teknoloji
            seçimi ve uygulama konularında destek sağlıyoruz.
          </Paragraph>
        </Col>
      </Row>
      {/* Danışmanlık ile ilgili ek bilgiler veya başarı hikayeleri (alt kısmı) */}
      <Row className="mt-5"> 
        <Col className="text-center">
          {/*  ... */}
        </Col>
      </Row>
    </Container>
  );
}

export default Danismanlik;