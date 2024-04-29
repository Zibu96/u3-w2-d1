import { Component } from "react";
import SingleComment from "./SingleComment";

class CommentsList extends Component {
  render() {
    return (
      <div>
        {this.props.comments.map((book) => {
          return <SingleComment comment={book.comment} rate={book.rate} />;
        })}
      </div>
    );
  }
}

export default CommentsList;
