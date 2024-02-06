import React from 'react'
import { Container, Form, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../api/axios.js';

const SignUp = () => {

    const history = useNavigate();
    //this should in extended to match all info we have
    const [formData, updateFormData] = useState({
        email: '',
        username: '',
        password: '',
    })

    const handleChange = (e) => {
        updateFormData({
            ...formData,
            // Trimming any whitespace
            [e.target.name]: e.target.value.trim(),
        });
        console.log(`${formData.email} and ${formData.username} and ${formData.password}`)
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);

        axiosInstance
            .post(`user/create/`, {
                email: formData.email,
                user_name: formData.username,
                password: formData.password,
            })
            .then((res) => {
                history.push('/login');
                console.log(res);
                console.log(res.data);
            });
    };

    //match the input with the backend parameters (ex: first last and all the other fields)
    return (
        <Container className="w-75 p-3 bg-secondary mt-5 text-dark">
            <Form className='py-5 text-dark' onSubmit={handleSubmit}>
                <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridFirstName" >
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" name="username" placeholder="Enter Your First Name" value={formData.username} onChange={handleChange} data-testid="first-name-input" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridLastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Your Last Name" data-testid="last-name-input" />
                </Form.Group>
                </Row>

                <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridPhoneNumber">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="text" placeholder="Enter Your Phone Number" onChange={handleChange} data-testid="phone-number-input" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridRegistrationKey">
                    <Form.Label>Registration Key</Form.Label>
                    <Form.Control type="password" placeholder="Enter Your Registration Key" onChange={handleChange} data-testid="registration-key-input" />
                </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="formGridEmailAddress">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" name='email' placeholder="your-email@email.com" value={formData.email} onChange={handleChange} data-testid="email-input" />
                </Form.Group>

                <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridPhoneNumber">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Enter Your Password" value={formData.password} onChange={handleChange} data-testid="password-input" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridRegistrationKey">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" placeholder="Confirm Your Password" data-testid="confirm-password-input" />
                </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="formGridAddress">
                <Form.Label>Address</Form.Label>
                <Form.Control placeholder="Apartment, studio, or floor" data-testid="address-input" />
                </Form.Group>

                <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>City</Form.Label>
                    <Form.Control data-testid="city-input" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>Province</Form.Label>
                    <Form.Select defaultValue="Choose..." data-testid="province-select">
                    <option>Choose...</option>
                    {/* Add your province options here */}
                    </Form.Select>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label>Postal Code</Form.Label>
                    <Form.Control data-testid="postal-code-input" />
                </Form.Group>
                </Row>

                <Button variant="primary" type="submit" data-testid="submit-button">
                Submit
                </Button>
                <Form.Text> Already have an account? <Link to='/login'>Sign In</Link></Form.Text>
            </Form>
            </Container >



    )
}

export default SignUp