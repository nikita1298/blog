import React from "react";
import { Card, Button } from "react-bootstrap";

function ListItem(props) {
  const blogs = props.blogs;
  console.log(blogs);

  const strSlice = (string) => {
    return string.slice(0, 150);
  };

  var all = blogs.map((blog, index) => {
    return (
      <Card key={blog.id} className="mb-3" style={{ width: "42rem" }}>
        <Card.Body>
          <Card.Title>
            <div className="row">
              <div className="col-md-9">{blog.title}</div>
              <Button
                variant="dark"
                className="mr-2"
                onClick={() => {
                  props.onEditClick(blog, index);
                }}
              >
                Edit
              </Button>
              <Button
                variant="danger"
                onClick={() => props.onDeleteClick(blog.id)}
              >
                DELETE
              </Button>
            </div>
          </Card.Title>
          <hr />
          <Card.Text>{blog.blog}</Card.Text>
        </Card.Body>
      </Card>
    );
  });

  return (
    <div>
      <br />
      {all}
    </div>
  );
}
export default ListItem;
