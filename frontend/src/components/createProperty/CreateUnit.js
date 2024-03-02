import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../api/axios";
import {
  Container,
  Row,
  Col,
  Button,
  Form,
} from "react-bootstrap";

const CreateUnit = () => {

  const navigate = useNavigate();
  // unit information, should extend to match all info needed
  const [formData, setFormData] = useState({
    unit_id: "",
    unit_size: "",
    unit_owner: "",
    unit_info: "",
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
      .post(`unit-profile/register/`, {
        unit_id: formData.unit_id,
        unit_size: formData.unit_size,
        unit_owner: formData.unit_owner,
        unit_info: formData.unit_info,
      })
      .then((res) => {
        if (res.status == 201) {
          window.alert(`unit profile ${formData.unit_id} has been created`)
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
        //history(UnitProfile)
      });
  };

  //TODO hardcoded path
  function handleBackToPropertyPage() {
    navigate('/property-page');
  }

  return (
    <Container className="w-75 p-3 bg-secondary mt-5 text-dark">
      <Form className="py-5 text-dark" onSubmit={handleSubmit}>

        <Row classname="mb-3">
          <Form.Group as={Col} controlId="formGridUnitID">
            <Form.Label>Unit ID</Form.Label>
            <Form.Control
              type="text"
              name="unit_id"
              placeholder="Enter Unit ID"
              value={formData.unit_id}
              onChange={handleChange}
              data-testid="unit-id-input"
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridUnitSize">
            <Form.Label>Unit Size</Form.Label>
            <Form.Control
              type="text"
              name="unit_size"
              placeholder="Enter Unit Size"
              value={formData.unit_size}
              onChange={handleChange}
              data-testid="unit-size-input"
            />
          </Form.Group>
        </Row>

        <Form.Group classname="mb-3" controlId="formGridUnitOwner">
          <Form.Label>Unit Owner</Form.Label>
          <Form.Control
            type="text"
            name="unit_owner"
            placeholder="Enter Unit Owner Name"
            value={formData.unit_owner}
            onChange={handleChange}
            data-testid="unit-owner-input"
          />
        </Form.Group>

        <Form.Group classname="mb-3" controlId="formGridUnitInfo">
          <Form.Label>Unit Occupant Info</Form.Label>
          <Form.Control
            type="text"
            name="unit_info"
            placeholder="Enter Unit Occupant Info"
            value={formData.unit_info}
            onChange={handleChange}
            data-testid="unit-info-input"
          />
        </Form.Group>
        <Button style={{ marginTop: "20px" }} variant="primary" onClick={handleBackToPropertyPage}>
          Cancel
        </Button>
        <Button style={{ marginTop: "20px", marginLeft: "20px" }} variant="primary" type="submit" data-testid="submit-button">
          Submit
        </Button>
      </Form>
    </Container>
  )
}

export default CreateUnit;
