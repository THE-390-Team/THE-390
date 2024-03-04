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

  // receive the containing property id from the url
  let { propertyId } = useParams();

  const navigate = useNavigate();

  //form data state to store changes in input
  const [formData, setFormData] = useState({
    location: "",
    public_profile: "",
    purchase_price: "",
    rent_price: "", // not always needed
    size: "",
    extra_information: ""
  });

  //handle change from the user input and save to state
  const handleChange = (e) => {
    setFormData({
      ...formData,
      // Trimming any whitespace
      [e.target.name]: e.target.value,
    });
    console.log(formData);
  };


  //handle form submission to create a new condo-uni
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
    //TODO refractor this to the propertyContext
    axiosInstance
      .post(`properties/property-profile/${propertyId}/condo-unit/`, {
        location: formData.location,
        purchase_price: formData.purchase_price,
        //FIXME should bring this back later but for sprint 2 it's enough
        // public_profile: "",
        rent_price: formData.rent_price,
        size: formData.size,
        extra_information: formData.extra_information,
      }) 
      .then((res) => {
        if (res.status == 201) { //if response is okay alert user and back to property page
          window.alert(`unit profile ${formData.location} has been created`)
          console.log(res);
          console.log(res.data);
          navigate(-1);
        }
      })
      .catch((error) => {
        console.log(error);
        console.log(error.data);
        window.alert(`${error} `)
      });
  };

  // cancel button handlers
  function goBack() {
    navigate(-1);
  }

  function handleBackToPropertyPage() {
    goBack()
  }

  return (
    <Container className="w-75 p-3 bg-secondary mt-5 text-dark">
      {/* input forms to get the condo information */}
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
          <Form.Group as={Col} controlId="formGridUnitRentPrice">
            <Form.Label>Unit Rent</Form.Label>
            <Form.Control
              type="text"
              name="rent_price"
              placeholder="Enter Unit Rent"
              value={formData.rent_price}
              onChange={handleChange}
              data-testid="unit_purchase_price-input"
            />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridUnitPublicProfile">
          <Form.Label>Unit Owner</Form.Label>
          <Form.Control
            type="text"
            name="public_profile"
            placeholder="Enter Unit Owner Name"
            value={formData.public_profile}
            onChange={handleChange}
            data-testid="unit-public_profile-input"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGridUnitInfo">
          <Form.Label>Unit Occupant Info</Form.Label>
          <Form.Control
            type="text"
            name="extra_information"
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
