import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import profilepic from "../assets/pp.jpg";
import axiosInstance from "../api/axios";
import {
  Container,
  Row,
  Col,
  Card,
  ListGroup,
  Button,
  Modal,
  Form,
} from "react-bootstrap";

const CreateUnit = () => {

  const history = useNavigate();
  // condo information, should extend to match all info needed
  const [formData, setFormData] = useState({
    condo_id: "",
    condo_size: "",
    condo_owner: "",
    condo_info: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      // Trimming any whitespace
      [e.target.name]: e.target.value,
    });
    console.log(formData);
  };

  const handleSubmit = (e) => {

    e.preventDefault();

    console.log(formData);

    axiosInstance
      .post(`condo-profile/register/`, {
        condo_id: formData.condo_id,
        condo_size: formData.condo_size,
        condo_owner: formData.condo_owner,
        condo_info: formData.condo_info,
      })
      .then((res) => {
        if (res.status == 201) {
          window.alert(`condo profile ${formData.condo_id} has been created`)
          console.log(res);
          console.log(res.data);
          //There should be a history
          //history("/login");
        }
      })
      .catch((error) => {
        console.log(error);
        console.log(error.data);
        window.alert(`${error} `)
        //There should be a history
        //history(CondoProfile)
      });
  };

  return (
    <Container className="w-75 p-3 bg-secondary mt-5 text-dark">
      <Form className="py-5 text-dark" onSubmit={handleSubmit}>

        <Row classname="mb-3">
          <Form.Group as={Col} controlId="formGridCondoID">
            <Form.Label>Condo ID</Form.Label>
            <Form.Control
              type="text"
              name="condo_id"
              placeholder="Enter Condo ID"
              value={formData.condo_id}
              onChange={handleChange}
              data-testid="condo-ID-input"
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridCondoSize">
            <Form.Label>Condo Size</Form.Label>
            <Form.Control
              type="text"
              name="condo_size"
              placeholder="Enter Condo Size"
              value={formData.condo_size}
              onChange={handleChange}
              data-testid="condo-size-input"
            />
          </Form.Group>
        </Row>

        <Form.Group classname="mb-3" controlId="formGridCondoOwner">
          <Form.Label>Condo Owner</Form.Label>
          <Form.Control
            type="text"
            name="condo_owner"
            placeholder="Enter Condo Owner Name"
            value={formData.condo_owner}
            onChange={handleChange}
            data-testid="condo-owner-input"
          />
        </Form.Group>

        <Form.Group classname="mb-3" controlId="formGridCondoInfo">
          <Form.Label>Condo Occupant Info</Form.Label>
          <Form.Control
            type="text"
            name="condo_info"
            placeholder="Enter Condo Occupant Info"
            value={formData.condo_info}
            onChange={handleChange}
            data-testid="condo-info-input"
          />
        </Form.Group>
        <Button variant="primary" type="submit" data-testid="submit-button">
          Submit
        </Button>
      </Form>
    </Container>
  )
}

export default CreateUnit;