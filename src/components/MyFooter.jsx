import { Container, Row, Col } from "react-bootstrap";

const MyFooter = function () {
  return (
    <footer className="bg-info">
      <Container>
        <Row>
          <Col className="d-flex gap-3">
            <div className="d-flex flex-column">
              <a href="#">Informazioni Utili</a>
              <a href="#">Privacy</a>
              <a href="#">Copyright</a>
            </div>
            <div className="d-flex flex-column">
              <a href="#">Chi Siamo</a>
              <a href="#">Cookie</a>
              <a href="#">Preferenze</a>
            </div>
          </Col>
          <Col className="d-flex align-items-center">
            <h4>A cura di...</h4>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default MyFooter;
