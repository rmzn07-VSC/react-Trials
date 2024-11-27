import React from "react";
import { Container, Row, Col} from 'react-bootstrap';

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
      {/* Ek bilgiler veya içerikler (alt kısmı) */}
      <Row className="mt-5"> 
        <Col className="text-center">
          {/* Örneğin, ekip üyelerini gösterebilir */}
        </Col>
      </Row>
    </Container>
  );
}

export default Hakkimizda;