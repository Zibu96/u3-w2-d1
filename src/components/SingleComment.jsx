import { ListGroup, ListGroupItem } from "react-bootstrap";

const SingleComment = function (props) {
  return (
    <ListGroup>
      <ListGroupItem>
        {props.comment} <span>{props.rate}</span>
      </ListGroupItem>
    </ListGroup>
  );
};
export default SingleComment;
