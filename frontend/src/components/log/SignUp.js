import React from 'react'
import { Container, Form, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const SignUp = () => {
    return (
        <Container className="w-75 p-3 bg-secondary mt-5 text-dark">
            <Form className='py-5 text-dark'>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridFirstName">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="email" placeholder="Enter Your First Name" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridLastName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="password" placeholder="Enter Your Last Name" />
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridPhoneNumber">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control type="email" placeholder="Enter Your Phone Number" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridRegistrationKey">
                        <Form.Label>Registration Key</Form.Label>
                        <Form.Control type="password" placeholder="Enter Your Registration Key" />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridPhoneNumber">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control type="email" placeholder="Enter Your Phone Number" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridRegistrationKey">
                        <Form.Label>Registration Key</Form.Label>
                        <Form.Control type="password" placeholder="Enter Your Registration Key" />
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="formGridEmailAddress">
                    <Form.Label>Email</Form.Label>
                    <Form.Control placeholder="your-email@email.com" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridAddress">
                    <Form.Label>Address</Form.Label>
                    <Form.Control placeholder="Apartment, studio, or floor" />
                </Form.Group>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>City</Form.Label>
                        <Form.Control />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>Province</Form.Label>
                        <Form.Select defaultValue="Choose...">
                            <option>Choose...</option>
                            <option>Choose...</option>
                            <option>Choose...</option>
                            <option>Choose...</option>
                            <option>Choose...</option>
                            <option>Choose...</option>
                            <option>Choose...</option>
                            <option>Choose...</option>
                            <option>Choose...</option>
                            <option>Choose...</option>
                            <option>Choose...</option>
                            <option>...</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>Postal Code</Form.Label>
                        <Form.Control />
                    </Form.Group>
                </Row>

                {/* <Form.Group className="mb-3" id="formGridCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group> */}

                <Button variant="primary" type="submit">
                    Submit
                </Button>
                <Form.Text> Already have an account? <Link to='/signin'>Sign In</Link></Form.Text>
            </Form>
        </Container>



    )
}

export default SignUp