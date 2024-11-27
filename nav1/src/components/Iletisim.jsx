import React from "react";
import { Container, Row, Col} from 'react-bootstrap';

function Iletisim() {
  return (
    <Container>
      <Row className="mt-5">
        <Col>
          <Heading as="h1" className="text-center mb-4">İletişim</Heading>
          <Paragraph className="text-center">
            Bize ulaşmak için aşağıdaki bilgileri kullanabilirsiniz:
          </Paragraph>
          <ListGroup className="text-center mt-3"> 
            <ListGroup.Item>Telefon: +123 456 78 90</ListGroup.Item>
            <ListGroup.Item>E-posta: info@example.com</ListGroup.Item>
            <ListGroup.Item>Adres: Örnek Mahallesi, Örnek Caddesi, No: 123</ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
      {/* İletişim formu veya başka bir içerik ekleme (alt kısmı) */}
      <Row className="mt-5"> 
        <Col className="text-center">
          {/* İletişim formu örneği: */}
          {/* <Form> 
            <Form.Group controlId="formBasicEmail"> 
              {/* Form alanları ekleyebilirsiniz
              <Form.Control type="email" placeholder="Enter email" /> 
            </Form.Group>
          </Form>  */}
        </Col>
      </Row>
    </Container>
  );
}

export default Iletisim;