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
import { useProfile } from "../../utils/hooks/ProfileContext";

// just show the user profile 

const UserInfo = () => {

    const { profileInfo, getProfileInformation, setProfileInformation } = useProfile();

    // user information
    // const [profileInfo, setProfileInfo] = useState({
    //     avatar: profilepic,
    //     first_name: "",
    //     last_name: "",
    //     email: "",
    //     phone_number: "",
    //     address: "",
    //     city: "",
    //     province: "",
    //     registration_key: "",
    //     postal_code: "",
    // });

    // get information on active user
    useEffect(() => {
        getProfileInformation()
    }, [setProfileInformation]);

    return (
        <Container style={{ width: '400px' }}>
            <h2>Welcome {profileInfo.first_name}</h2>
        </Container>

    );
};

export default UserInfo;
