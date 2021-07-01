import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Form, Button, Card } from "react-bootstrap";
import ListItem from "./ListItem";
import { connect } from "react-redux";
import * as reducerFunc from "../store/actions/actions";

function UserDashBoard(props) {
  const params = useParams();

  const [form, setForm] = useState({
    id: 0,
    title: "",
    blog: "",
    edit: false,
  });

  const handleChange = (e) =>
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

  const handleSubmit = () => {
    console.log("BB", props.blogs);
    if (form.edit) {
      props.onEditBlog(form.index, {
        id: form.id,
        title: form.title,
        blog: form.blog,
      });
    } else {
      props.onAddBlog({
        id: props.blogs.length + 1,
        title: form.title,
        blog: form.blog,
      });
    }
    setForm({ title: "", blog: "" });
  };

  const onEditClick = (blog, index) => {
    // console.log("id", blog.id);
    setForm({
      ...blog,
      edit: true,
      index,
    });
  };

  const onDeleteClick = (id) => {
    props.onDeleteBlog(id);
  };

  const onCancleEdit = () => {
    setForm({ id: 0, title: "", blog: "", edit: false });
  };
  var history = useHistory();
  const viewAll = () => {
    history.push(`/list/${params.name}`, { blogs: form.blogs });
  };

  return (
    <div className="w-50 mx-auto">
      <h3>Hello, {params.name}</h3>
      <Card className="mt-4 mx-auto">
        <Form className="p-4">
          <Form.Group controlId="formBasicEmail">
            <Form.Control
              onChange={handleChange}
              name="title"
              type="text"
              rows={3}
              value={form.title}
              placeholder="Enter title"
            />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Control
              onChange={handleChange}
              name="blog"
              as="textarea"
              rows={3}
              value={form.blog}
              placeholder="Enter blog"
            />
          </Form.Group>

          <div className="d-flex justify-content-end">
            {form.edit ? (
              <div>
                <Button
                  variant="primary"
                  className="mr-2"
                  type="button"
                  onClick={handleSubmit}
                >
                  Edit
                </Button>
                <Button variant="primary" type="button" onClick={onCancleEdit}>
                  Cancle
                </Button>
              </div>
            ) : (
              <Button variant="primary" type="button" onClick={handleSubmit}>
                Add
              </Button>
            )}
          </div>
        </Form>
      </Card>
      <ListItem
        name={params.name}
        blogs={props.blogs}
        onEditClick={onEditClick}
        onDeleteClick={onDeleteClick}
      />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    blogs: state.blogs,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddBlog: (blog) => dispatch(reducerFunc.addBlogs(blog)),
    onEditBlog: (id, blog) => dispatch(reducerFunc.editBlogs(id, blog)),
    onDeleteBlog: (id) => dispatch(reducerFunc.deleteBlogs(id)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(UserDashBoard);
