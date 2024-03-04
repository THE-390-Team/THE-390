import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axiosInstance from "../../api/axios";
import {
  Container,
  Row,
  Col,
  Button,
  Form,
} from "react-bootstrap";

const CreateUnit = () => {
  let { propertyId } = useParams();
  const navigate = useNavigate();
  // unit information, should extend to match all info needed
  const [formData, setFormData] = useState({
    location: "", // location in the model
    public_profile: "",
    purchase_price: "",
    rent_price: "", // not always needed
    size: "",
    property: propertyId,
    extra_information: ""
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
      .post(`properties/property-profile/${propertyId}/condo-unit/`, {
        location: formData.location,
        purchase_price: formData.purchase_price,
        public_profile: formData.public_profile,
        rent_price: formData.rent_price,
        size: formData.size,
        unit_owner: formData.owner,
        extra_information: formData.extra_information,
        property: formData.property,

      })
      .then((res) => {
        if (res.status == 201) {
          window.alert(`unit profile ${formData.id} has been created`)
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

  function goBack() {
    navigate(-1);
  }

  function handleBackToPropertyPage() {
    goBack()
  }

  return (
    <Container className="w-75 p-3 bg-secondary mt-5 text-dark">
      <Form className="py-5 text-dark" onSubmit={handleSubmit}>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridUnitLocation">
            <Form.Label>Unit Location</Form.Label>
            <Form.Control
              type="text"
              name="location"
              placeholder="Enter Unit Location"
              value={formData.id}
              onChange={handleChange}
              data-testid="unit-location-input"
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridUnitSize">
            <Form.Label>Unit Size</Form.Label>
            <Form.Control
              type="text"
              name="size"
              placeholder="Enter Unit Size"
              value={formData.size}
              onChange={handleChange}
              data-testid="unit-size-input"
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridUnitPrice">
            <Form.Label>Unit Price</Form.Label>
            <Form.Control
              type="text"
              name="purchase_price"
              placeholder="Enter Unit Price"
              value={formData.purchase_price}
              onChange={handleChange}
              data-testid="unit_purchase_price-input"
            />
          </Form.Group>
          <Form.Group as={Col} className="mb-3" controlId="formGridUnitOwner">
            <Form.Label>Unit Owner</Form.Label>
            <Form.Control
              type="text"
              name="owner"
              placeholder="Enter Unit Owner Name"
              value={formData.public_profile}
              onChange={handleChange}
              data-testid="unit-owner-input"
            />
          </Form.Group>
        </Row>

        {/* TODO add a unit rent price */}
        <Form.Group className="mb-3" controlId="formGridUnitInfo">
          <Form.Label>Unit Occupant Info</Form.Label>
          <Form.Control
            type="text"
            name="info"
            placeholder="Enter Unit Occupant Info"
            value={formData.extra_information}
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
