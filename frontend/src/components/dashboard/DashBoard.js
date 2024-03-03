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
        <Container className="mt-5">
            <Row>
                <Col style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                    <UserInfo />
                    <Financial />
                    <SubmittedRequests />
                    <Button variant="primary" style={{width: "150px", marginLeft: "120px"}} onClick={handleGoToProperty}>Add Property</Button>
                </Col>
                <Col>
                    <PropertyContainer />
                </Col>
            </Row>
        </Container>

    );
}

export default DashBoard