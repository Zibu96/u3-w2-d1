import { Col, Row } from "react-bootstrap";
import books from "../../src/assets/fantasy.json";
import Card from "react-bootstrap/Card";

const AllTheBooks = function () {
  return (
    <div>
      <Row>
        {books.map((book) => {
          return (
            <Col s={6} md={3} lg={2} key={book.asin} className="py-2">
              <Card>
                <Card.Img variant="top" src={book.img} />
                <Card.Body>
                  <Card.Title>{book.title}</Card.Title>
                  <Card.Text>{book.category}</Card.Text>
                  <h5>{book.price}</h5>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default AllTheBooks;
