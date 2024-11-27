import React from "react";
import { Container, Row, Col, Heading, Paragraph } from 'react-bootstrap'; 

function Hakkimizda() {
  return (
    <Container>
      <Row className="mt-5">
        <Col>
          <Heading as="h1" className="text-center mb-4">Hakkımızda</Heading>
          <Paragraph className="text-center">
            2023 yılında kurulan şirketimiz, sektörde lider konumda olmayı
            hedeflemektedir. Misyonumuz, müşterilerimize en kaliteli hizmeti
            sunmaktır.
          </Paragraph>
        </Col>
      </Row>
      {/* Ek bilgiler veya içerikler */}
      <Row className="mt-5">
        <Col className="text-center">
          {/* Örneğin, ekip üyelerini gösterebilirsiniz:
          <img src="/assets/team-member-1.jpg" alt="Ekip Üyesi 1" />
          <img src="/assets/team-member-2.jpg" alt="Ekip Üyesi 2" />
          */}
        </Col>
      </Row>
    </Container>
  );
}

export default Hakkimizda;