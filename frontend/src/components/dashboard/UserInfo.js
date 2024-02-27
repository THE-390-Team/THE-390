import React, { useContext, useEffect, useState } from "react";
import profilepic from "../../assets/pp.jpg";
import axiosInstance from "../../api/axios";
import {
    Container,
    Row,
    Col,
    Card,
    ListGroup,
} from "react-bootstrap";

// just show the user profile 

const UserInfo = () => {

    // user information
    const [profileInfo, setProfileInfo] = useState({
        avatar: profilepic,
        first_name: "",
        last_name: "",
        email: "",
        phone_number: "",
        address: "",
        city: "",
        province: "",
        registration_key: "",
        postal_code: "",
    });

    // get information on active user
    useEffect(() => {
        axiosInstance
            .get("user-profile/profile/")
            .then((response) => {
                console.log(response);
                setProfileInfo({
                    avatar: profilepic,
                    first_name: response.data.first_name,
                    last_name: response.data.last_name,
                    email: response.data.email,
                    phone_number: response.data.phone_number,
                    address: response.data.address,
                    city: response.data.city,
                    province: response.data.province,
                    postal_code: response.data.postal_code,
                });
                console.log(response.data);
            })
            .catch((error) => {
                console.error("Error fetching user profile:", error.message);
            });
    }, [setProfileInfo]);

    return (
        <Container style={{ width: '400px' }}>
            <Card>
                <Card.Img
                    variant="top"
                    src={profileInfo.avatar}
                    alt="Profile Picture"
                    style={{ height: "200px", width: "100%", objectFit: "cover" }}
                />
                <ListGroup>
                    <ListGroup.Item>
                        <strong>{profileInfo.first_name} {profileInfo.last_name}</strong>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <strong>Email:</strong> {profileInfo.email}
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <strong>Phone:</strong> {profileInfo.phone_number}
                    </ListGroup.Item>
                </ListGroup>
            </Card>
        </Container>

    );
};

export default UserInfo;
