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

const CreateParking = () => {

  let { propertyId } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    location: "",
    //FIXME bring this back for after sprint_2
    //public_profile:"",
    purchase_price: "",
    rent_price: "",
    size: "",
    extra_information: "",
    parking_owner: ""
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
      .post(`properties/property-profile/${propertyId}/parking-unit/`, {
        location: formData.location,
        size: formData.size,
        rent_price: formData.rent_price,
        purchase_price: formData.purchase_price,
        extra_information: formData.extra_information,
      })
      .then((res) => {
        if (res.status == 201) {
          window.alert(`Parking profile ${formData.location} has been created`)
          console.log(res);
          console.log(res.data);
          navigate(-1);
        }
      })
      .catch((error) => {
        console.log(error.data);
        window.alert(`${error} `)
        //There should be a history
        //history(UnitProfile)
      });
  };

  return (
    <Container className="w-75 p-3 bg-secondary mt-5 text-dark">
      <Form className="py-5 text-dark" onSubmit={handleSubmit}>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridParkingLocation">
            <Form.Label>Parking Location</Form.Label>
            <Form.Control
              data-testid="parking-location-input"
              name="location"
              onChange={handleChange}
              placeholder="####"
              type="text"
              value={formData.location}
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridParkingOwner">
            <Form.Label>Parking Size</Form.Label>
            <Form.Control
              data-testid="parking-size-input"
              name="size"
              onChange={handleChange}
              placeholder="Enter Parking Size"
              type="text"
              value={formData.size}
            />
          </Form.Group>
          {/* <Form.Group as={Col} controlId="formGridParkingOwner">
            <Form.Label>Parking Owner</Form.Label>
            <Form.Control
              type="text"
              name="parking_owner"
              placeholder="Enter Parking Owner"
              value={formData.parking_owner}
              onChange={handleChange}
              data-testid="parking-owner-input"
            />
          </Form.Group> */}
        </Row>



        <Row>
          <Form.Group as={Col} className="mb-3" controlId="formGridParkingPurchasePrice">
            <Form.Label>Purchase Price</Form.Label>
            <Form.Control
              data-testid="parking-purchase_price-input"
              name="purchase_price"
              onChange={handleChange}
              placeholder="Enter Parking Purchase Price"
              type="text"
              value={formData.purchase_price}
            />
          </Form.Group>
          <Form.Group as={Col} className="mb-3" controlId="formGridParkingRentPrice">
            <Form.Label>Rent Price</Form.Label>
            <Form.Control
              data-testid="parking-rent_price-input"
              name="rent_price"
              onChange={handleChange}
              placeholder="Enter Parking Renting Price"
              type="text"
              value={formData.rent_price}
            />
          </Form.Group>
        </Row>
        <Form.Group className="mb-3" controlId="formGridParkingExtraInfo">
          <Form.Label>Parking Info</Form.Label>
          <Form.Control
            data-testid="parking-extra_information-input"
            name="extra_information"
            onChange={handleChange}
            placeholder="Enter Parking Owner Info"
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

export default CreateParking;