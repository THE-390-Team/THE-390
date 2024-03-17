import React from 'react'
import { useState, useEffect } from "react"
import PropertyContainer from '../property/PropertyContainer.js'
import UserInfo from './UserInfo.js';
import { Container, Col, Row, Button } from "react-bootstrap";
import Financial from './Financial.js';
import SubmittedRequests from './SubmittedRequests.js';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../api/axios.js';


const DashBoard = () => {
    //state to hold the role of the signed in user
    const [role, setRole] = useState(null)
    let navigate = useNavigate();

    function handleGoToProperty() {
        navigate('/create-property');
    }

    // make a call to get the role of the user based on the stored id in the local storage
    useEffect(() => {
        let role = ''
        const id = localStorage.getItem("ID");
        axiosInstance
            .get(`profiles/user/${id}/`)
            .then((response) => {
                role = response.data.role;
                setRole(role);
                console.log(role);
            }, []);
    })

    return (
        <Container className="mt-5">
            <Row>
                <Col style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                    <UserInfo />
                    <Financial />
                    <SubmittedRequests />
                    {/* the button to create a property is only accessible to company profiles */}
                    {
                        role === "COMPANY" &&
                        <div>
                            <Button variant="primary" style={{ width: "150px", marginLeft: "120px" }} onClick={handleGoToProperty}>Add Property</Button>
                            <Button variant="primary" style={{ width: "150px", marginLeft: "120px" }} onClick={handleGoToProperty}>Send Key</Button>
                        </div>

                    }
                </Col>
                <Col>
                    <PropertyContainer />
                </Col>
            </Row>
        </Container>

    );
}

export default DashBoard