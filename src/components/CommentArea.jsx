import { Component } from "react";
import CommentsList from "./CommentsList";
import AddComment from "./AddComment";

class CommentArea extends Component {
  state = {
    comments: [],
  };
  fetchOfBooks = function () {
    fetch(
      "https://striveschool-api.herokuapp.com/api/comments/" + this.props.asin,
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjE4ZWNmNTdmMzA0NjAwMWFlNTlmNmYiLCJpYXQiOjE3MTQzOTUyMjgsImV4cCI6MTcxNTYwNDgyOH0.1rt6R-Dd1KgRS2MfszIvjSL3fZj2zqKl5zBz2LAt57Y",
        },
      }
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Errore nella fetch");
        }
      })
      .then((books) => {
        console.log(books);
        this.setState({ comments: books });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  componentDidMount() {
    this.fetchOfBooks();
  }

  render() {
    return (
      <div>
        <p>Comments</p>
        <CommentsList comments={this.state.comments} />
        <AddComment asin={this.props.asin} />
      </div>
    );
  }
}

export default CommentArea;
