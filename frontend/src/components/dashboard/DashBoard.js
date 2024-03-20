import React from 'react'
import { useState, useEffect } from "react"
import PropertyContainer from '../property/PropertyContainer.js'
import UserInfo from './UserInfo.js';
import { Container, Col, Row, Button } from "react-bootstrap";
import Financial from './Financial.js';
import SubmittedRequests from './SubmittedRequests.js';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../api/axios.js';
import { useProfile } from '../../utils/hooks/ProfileContext.js';


const DashBoard = () => {
    //state to hold the role of the signed in user
    const { role, fetchProfileRole } = useProfile();
    let navigate = useNavigate();

    function handleGoToProperty() {
        navigate('/create-property');
    }

    // make a call to get the role of the user based on the stored id in the local storage
    // using the profile role context instead of making the complete fetch request here
    useEffect(() => {
        const id = localStorage.getItem("ID"); //get the id from local storage
        //fetch profile role from the profile context
        fetchProfileRole();
    }, []);

    return (
        <Container>
            {/* <UserInfo /> */}
            <div className="d-flex justify-content-center">
                {/* title for properties with styling */}
                <h1 style={{ fontSize: "40px", marginBottom: "30px", fontWeight: "bold" }}>Properties</h1>
            </div>
            <PropertyContainer style={{}} />
            {/* the button to create a property is only accessible to company profiles */}
            {
                role === "COMPANY" &&
                <div className="mt-5 diplay-flex text-center">
                    <Button variant="primary" style={{ width: "150px" }} onClick={handleGoToProperty}>Add Property</Button>
                    <Button variant="primary" style={{ width: "150px", marginLeft: "120px" }} onClick={handleGoToProperty}>Send Key</Button>
                </div>

            }            <Row className="mt-5">
                <Col>
                    <Financial />
                    <SubmittedRequests />
                </Col>
                {/* <Col>
                    <SubmittedRequests />
                </Col> */}
            </Row>
        </Container>
    );
}

export default DashBoard