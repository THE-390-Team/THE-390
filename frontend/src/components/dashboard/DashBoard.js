import React from 'react'
import { useState } from "react"
import PropertyContainer from '../property/PropertyContainer.js'
import UserInfo from './UserInfo.js';
import { Container, Col, Row } from "react-bootstrap";
import Financial from './Financial.js';
import SubmittedRequests from './SubmittedRequests.js';

const DashBoard = () => {
    return (
        <Container className="mt-5">
            <Row>
                <Col style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                    <UserInfo />
                    <Financial />
                    <SubmittedRequests />
                </Col>
                <Col>
                    <PropertyContainer />
                </Col>
            </Row>
        </Container>

    );
}

export default DashBoard