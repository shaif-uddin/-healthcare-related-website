import React from "react";
import { Card, Col } from "react-bootstrap";

const PostItem = (props) => {
  const { title, body } = props.postItem;
  return (
    <Col sm={4}>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{body}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default PostItem;
