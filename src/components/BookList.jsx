import { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import SingleBook from "./SingleBook";

class BookList extends Component {
  render() {
    const books = this.props.books;
    console.log(books);
    return (
      <Container>
        <Row>
          {books.map((obj) => {
            return (
              <Col lg={3} className="gy-2">
                <SingleBook img={obj.img} title={obj.title} asin={obj.asin} />
              </Col>
            );
          })}
        </Row>
      </Container>
    );
  }
}
export default BookList;
