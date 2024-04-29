import { ListGroupItem } from "react-bootstrap";

const SingleComment = function (props) {
  return (
    <ListGroupItem>
      {props.comment} <span>{props.rate}</span>
    </ListGroupItem>
  );
};
export default SingleComment;
