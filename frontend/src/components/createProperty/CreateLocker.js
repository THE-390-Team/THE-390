import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axiosInstance from "../../api/axios";
import {
  Container,
  Row,
  Col,
  Button,
  Form,
} from "react-bootstrap";

const CreateLocker = () => {

  let { propertyId } = useParams();
  const navigate = useNavigate();
  // unit information, should extend to match all info needed
  const [formData, setFormData] = useState({
    public_profile: null,
    location: "",
    purchase_price: "",
    rent_price: "",
    size: "",
    extra_information: null,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      // Trimming any whitespace
      [e.target.name]: e.target.value,
    });
    console.log(formData);
  };

  function goBack() {
    navigate(-1);
  }

  function handleBackToPropertyPage() {
    goBack()
  }
  const handleSubmit = (e) => {

    e.preventDefault();

    console.log(formData);

    axiosInstance
      .post(`properties/property-profile/${propertyId}/storage-unit/`, {
        location: formData.location,
        purchase_price: formData.purchase_price,
        rent_price: formData.rent_price,
        size: formData.size,
        extra_information: formData.extra_information,
      })
      .then((res) => {
        if (res.status == 201) {
          window.alert(`Locker profile ${formData.location} has been created`)
          console.log(res);
          console.log(res.data);
          //There should be a history
          navigate(-1)
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

        <Row classname="mb-3">
          <Form.Group as={Col} controlId="formGridLockerLocation">
            <Form.Label>Locker Location</Form.Label>
            <Form.Control
              type="text"
              name="location"
              placeholder="####"
              value={formData.location}
              onChange={handleChange}
              data-testid="locker-location-input"
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridLockerSize">
            <Form.Label>Locker Size</Form.Label>
            <Form.Control
              type="text"
              name="size"
              placeholder="Enter Locker Owner"
              value={formData.size}
              onChange={handleChange}
              data-testid="locker-size-input"
            />
          </Form.Group>
          {/* <Form.Group as={Col} controlId="formGridLockerOwner">
            <Form.Label>Locker Owner</Form.Label>
            <Form.Control
              type="text"
              name="locker_owner"
              placeholder="Enter Locker Owner"
              value={formData.locker_owner}
              onChange={handleChange}
              data-testid="locker-owner-input"
            />
          </Form.Group> */}
        </Row>
        <Row>
          <Form.Group as={Col} classname="mb-3" controlId="formGridLockerPurchasePrice">
            <Form.Label>Purchase Price</Form.Label>
            <Form.Control
              type="text"
              name="purchase_price"
              placeholder="Enter Locker Purchase Price"
              value={formData.purchase_price}
              onChange={handleChange}
              data-testid="locker-purchase_price-input"
            />
          </Form.Group>
          <Form.Group as={Col} classname="mb-3" controlId="formGridLockerRentPrice">
            <Form.Label>Rent Price</Form.Label>
            <Form.Control
              type="text"
              name="rent_price"
              placeholder="Enter Locker Rent Price"
              value={formData.rent_price}
              onChange={handleChange}
              data-testid="locker-rent_price-input"
            />
          </Form.Group>
        </Row>
        <Form.Group classname="mb-3" controlId="formGridLockerExtraInformation">
          <Form.Label>Extra Information</Form.Label>
          <Form.Control
            type="text"
            name="extra_information"
            placeholder="Enter Locker Extra Info"
            value={formData.extra_information}
            onChange={handleChange}
            data-testid="locker-extra_information-input"
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

export default CreateLocker;