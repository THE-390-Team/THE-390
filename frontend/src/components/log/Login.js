import React from 'react'
import { Container, Form, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <Container className="w-75 p-3 bg-secondary mt-5 text-dark " >
            <Form >
                <Form.Group className="mb-3" controlId="formGridEmailAddress">
                    <Form.Label>Email</Form.Label>
                    <Form.Control placeholder="your-email@email.com" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type='password' placeholder="Enter Your Password" />
                </Form.Group>

                {/* <Form.Group className="mb-3" id="formGridCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group> */}

                <Button variant="primary" type="submit">
                    Submit
                </Button>
                <Form.Text className='py-3'> Don't have an account? <Link to='/signup'>Sign Up</Link></Form.Text>
            </Form>
        </Container>
    )
}

export default Login