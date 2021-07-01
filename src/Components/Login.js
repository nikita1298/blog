import React, { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const Login = () => {
  const [form, setForm] = useState({
    name: "",
    password: "",
  });
  const history = useHistory();
  const onLogin = () => {
    if (form.name == "BlogApp" && form.password == "123456") {
      history.push(`/blog/${form.name}`);
      localStorage.setItem("isAuthenticated", true);
    } else {
      alert("Invalid credentials");
    }
  };
  const handleChange = (e) =>
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  return (
    <Card className="w-50 mt-4 mx-auto">
      <Form className="p-4">
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Username</Form.Label>
          <Form.Control
            onChange={handleChange}
            name="name"
            type="text"
            placeholder="Enter username"
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onChange={handleChange}
            name="password"
            type="password"
            placeholder="Password"
          />
        </Form.Group>

        <Button variant="primary" type="button" onClick={onLogin}>
          Submit
        </Button>
      </Form>
    </Card>
  );
};

export default Login;
