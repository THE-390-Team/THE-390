import React from 'react'
import { useState } from "react"
import PropertyContainer from '../property/PropertyContainer.js'
import UserInfo from './UserInfo.js';
import { Container, Col, Row, Button } from "react-bootstrap";
import Financial from './Financial.js';
import SubmittedRequests from './SubmittedRequests.js';
import { useNavigate } from 'react-router-dom';


const DashBoard = () => {
    let navigate = useNavigate();

    function handleGoToProperty() {
        navigate('/create-property');
    }
    return (
        <Container>
            {/* <UserInfo /> */}
            <div className="d-flex justify-content-center">
                <h1 style = {{ fontSize: "40px", marginBottom: "30px", fontWeight: "bold"}}>Properties</h1>
            </div>
            <PropertyContainer />
            <Button variant="primary" style={{ width: "150px", marginLeft: "20px", marginTop: "10px" }} onClick={handleGoToProperty}>Add Property</Button>
            <Row className="mt-5">
                <Col>
                    <Financial />
                </Col>
                <Col>
                    <SubmittedRequests />
                </Col>
            </Row>
        </Container>
    );
}

export default DashBoard