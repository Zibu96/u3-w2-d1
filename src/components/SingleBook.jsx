import { Component } from "react";
import Card from "react-bootstrap/Card";
import CommentArea from "./CommentArea";

class SingleBook extends Component {
  state = {
    selected: false,
  };
  render() {
    return (
      <Card
        className="h-100"
        onClick={() => this.setState({ selected: !this.state.selected })}
        style={{ border: this.state.selected ? "3px solid red" : "none" }}
      >
        <Card.Img variant="top" src={this.props.img} />
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
        </Card.Body>
        <Card.Body>
          {this.state.selected && this.state.selected ? (
            <CommentArea asin={this.props.asin} />
          ) : (
            ""
          )}
        </Card.Body>
      </Card>
    );
  }
}
export default SingleBook;
