import { Component } from "react";
import { Form, Button } from "react-bootstrap";

class AddComment extends Component {
  state = {
    commentUser: {
      comment: "",
      rate: "",
      elementId: this.props.asin,
    },
  };
  fetchAddComment = () => {
    fetch("https://striveschool-api.herokuapp.com/api/comments/", {
      method: "POST",
      body: JSON.stringify(this.state.commentUser),
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjE4ZWNmNTdmMzA0NjAwMWFlNTlmNmYiLCJpYXQiOjE3MTQzOTUyMjgsImV4cCI6MTcxNTYwNDgyOH0.1rt6R-Dd1KgRS2MfszIvjSL3fZj2zqKl5zBz2LAt57Y",
      },
    })
      .then((response) => {
        if (response.ok) {
          this.setState({
            commentUser: {
              comment: "",
              rate: "",
              elementId: this.props.asin,
            },
          });
        } else {
          throw new Error("Errore nella fetch");
        }
      })
      .catch((err) => console.log(err));
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.fetchAddComment();
  };
  handleFieldChange = (propName, propValue) => {
    this.setState({
      commentUser: { ...this.state.commentUser, [propName]: propValue },
    });
  };

  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Lascia un commento</Form.Label>
            <Form.Select
              aria-label="Default select example"
              value={this.state.commentUser.rate}
              onChange={(e) => this.handleFieldChange("rate", e.target.value)}
            >
              <option>Open this select menu</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Scrivi il tuo commento</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={this.state.commentUser.comment}
              onChange={(e) =>
                this.handleFieldChange("comment", e.target.value)
              }
            />
          </Form.Group>
          <Button type="submit">Invia Commento</Button>
        </Form>
      </div>
    );
  }
}

export default AddComment;
