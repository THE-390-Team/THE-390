import React from 'react'
import { Container, Form, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../api/axios.js';

const Login = () => {

  const history = useNavigate();

  const [formData, updateFormData] = useState({
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    });
    console.log(formData)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    axiosInstance
      .post(`token/`, {
        email: formData.email,
        password: formData.password,
      })
      .then((res) => {
        localStorage.setItem('access_token', res.data.access);
        localStorage.setItem('refresh_token', res.data.refresh);
        axiosInstance.defaults.headers['Authorization'] =
          'JWT ' + localStorage.getItem('access_token');
        history.push('/');
        //console.log(res);
        //console.log(res.data);
      });
  };

  return (
    <Container className="w-75 p-3 bg-secondary mt-5 text-dark" >
      <Form className='py-5 text-dark' onSubmit={(handleSubmit)}>
        <Form.Group className="mb-3" controlId="formGridEmailAddress">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" name="email" placeholder="your-email@email.com" value={formData.email} onChange={handleChange} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type='password' name="password" placeholder="Enter Your Password" value={formData.password} onChange={handleChange} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
        <Form.Text className='py-3'> Don't have an account? <Link to='/signup'>Sign Up</Link></Form.Text>
      </Form>
    </Container>
  )
}

export default Login