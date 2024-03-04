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

const CreateParking = () => {

  let { propertyId } = useParams();
  const navigate = useNavigate();
  // unit information, should extend to match all info needed
  const [formData, setFormData] = useState({
    parking_id: "",
    parking_owner: "",
    parking_info: "",
    parking_fee: "",
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
        parking_id: formData.parking_id,
        parking_owner: formData.parking_owner,
        parking_info: formData.parking_info,
        parking_fee: formData.parking_fee,
      })
      .then((res) => {
        if (res.status == 201) {
          window.alert(`Parking profile ${formData.parking_id} has been created`)
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

        <Row classname="mb-3">
          <Form.Group as={Col} controlId="formGridParkingID">
            <Form.Label>Parking ID</Form.Label>
            <Form.Control
              type="text"
              name="parking_id"
              placeholder="Enter Parking ID"
              value={formData.parking_id}
              onChange={handleChange}
              data-testid="parking-id-input"
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridParkingOwner">
            <Form.Label>Parking Owner</Form.Label>
            <Form.Control
              type="text"
              name="parking_owner"
              placeholder="Enter Parking Owner"
              value={formData.parking_owner}
              onChange={handleChange}
              data-testid="parking-owner-input"
            />
          </Form.Group>
        </Row>

        <Form.Group classname="mb-3" controlId="formGridParkingInfo">
          <Form.Label>Parking Info</Form.Label>
          <Form.Control
            type="text"
            name="parking_info"
            placeholder="Enter Parking Owner Info"
            value={formData.parking_info}
            onChange={handleChange}
            data-testid="parking-info-input"
          />
        </Form.Group>

        <Form.Group classname="mb-3" controlId="formGridParkingFee">
          <Form.Label>Parking Fee</Form.Label>
          <Form.Control
            type="text"
            name="parking_fee"
            placeholder="Enter Parking Fee"
            value={formData.parking_fee}
            onChange={handleChange}
            data-testid="parking-fee-input"
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