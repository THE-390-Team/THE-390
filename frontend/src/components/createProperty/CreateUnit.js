import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axiosInstance from "../../api/axios";
import { useProperty } from "../../utils/hooks/PropertyContext"
import {
  Container,
  Row,
  Col,
  Button,
  Form,
} from "react-bootstrap";

const CreateUnit = () => {

  const { properties } = useProperty();

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

  const findPropertyById = (propertyId) => {
    if (Array.isArray(properties)) {
      return properties.find(property => property.id.toString() === propertyId);
    }
  };

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
        if (res.status === 201) { //if response is okay alert user and back to property page
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
        {/*TODOchange to name instead of id*/}
        <h2>Add a Unit to Property {findPropertyById(propertyId)?.id}</h2>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridUnitLocation">
            <Form.Label>Unit Location</Form.Label>
            <Form.Control
              data-testid="unit-location-input"
              name="location"
              onChange={handleChange}
              placeholder="Enter Unit Location"
              type="text"
              value={formData.id}
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridUnitSize">
            <Form.Label>Unit Size</Form.Label>
            <Form.Control
              data-testid="unit-size-input"
              name="size"
              onChange={handleChange}
              placeholder="Enter Unit Size"
              type="text"
              value={formData.size}
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridUnitPrice">
            <Form.Label>Unit Price</Form.Label>
            <Form.Control
              data-testid="unit_purchase_price-input"
              name="purchase_price"
              onChange={handleChange}
              placeholder="Enter Unit Price"
              type="text"
              value={formData.purchase_price}
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridUnitRentPrice">
            <Form.Label>Unit Rent</Form.Label>
            <Form.Control
              data-testid="unit_rental_price-input"
              name="rent_price"
              onChange={handleChange}
              placeholder="Enter Unit Rent"
              type="text"
              value={formData.rent_price}
            />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridUnitPublicProfile">
          <Form.Label>Unit Owner</Form.Label>
          <Form.Control
            data-testid="unit-public_profile-input"
            name="public_profile"
            onChange={handleChange}
            placeholder="Enter Unit Owner Name"
            type="text"
            value={formData.public_profile}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGridUnitInfo">
          <Form.Label>Unit Occupant Info</Form.Label>
          <Form.Control
            data-testid="unit-info-input"
            name="extra_information"
            onChange={handleChange}
            placeholder="Enter Unit Occupant Info"
            type="text"
            value={formData.extra_information}
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
