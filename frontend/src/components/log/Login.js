import { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from "../../api/axios.js";

// Login Page

const Login = () => {
  const history = useNavigate();

  // Login information
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // updating formData
  const handleChange = (e) => {
    setFormData({
      ...formData,

      [e.target.name]: e.target.value, // .trim(),
    });
  };

  // Handle form when submitted
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    axiosInstance
      .post(`api/token/`, {
        email: formData.email,
        password: formData.password,
      })
      .then((res) => {
        // store JWT tokens in localStorage
        localStorage.setItem("access_token", res.data.access);
        localStorage.setItem("refresh_token", res.data.refresh);
        axiosInstance.defaults.headers["Authorization"] =
          "JWT " + localStorage.getItem("access_token");
        history("/profile");
        console.log(res);
        console.log(res.data);
        // confirm to user that they have been successfully logged in
        if (res.status == 200)
          window.alert(`you have been logged in as ${formData.email}`);
      });
  };

  return (
    <Container className="w-75 p-3 bg-secondary mt-5">
      <Form className="py-5 text-dark" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formGridEmailAddress">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="your-email@email.com"
            value={formData.email}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Enter Your Password"
            value={formData.password}
            onChange={handleChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
        <Form.Text className="py-3">
          {" "}
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </Form.Text>
      </Form>
    </Container>
  );
};

export default Login;
