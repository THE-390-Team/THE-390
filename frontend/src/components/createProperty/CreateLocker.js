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
    locker_id: "",
    locker_owner: "",
    locker_info: "",
    locker_fee: "",
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
        locker_id: formData.locker_id,
        locker_owner: formData.locker_owner,
        locker_info: formData.locker_info,
        locker_fee: formData.locker_fee,
      })
      .then((res) => {
        if (res.status == 201) {
          window.alert(`Locker profile ${formData.locker_id} has been created`)
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
          <Form.Group as={Col} controlId="formGridLockerID">
            <Form.Label>Locker ID</Form.Label>
            <Form.Control
              type="text"
              name="locker_id"
              placeholder="Enter Locker ID"
              value={formData.locker_id}
              onChange={handleChange}
              data-testid="locker-id-input"
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridLockerOwner">
            <Form.Label>Locker Owner</Form.Label>
            <Form.Control
              type="text"
              name="locker_owner"
              placeholder="Enter Locker Owner"
              value={formData.locker_owner}
              onChange={handleChange}
              data-testid="locker-owner-input"
            />
          </Form.Group>
        </Row>

        <Form.Group classname="mb-3" controlId="formGridLockerInfo">
          <Form.Label>Locker Info</Form.Label>
          <Form.Control
            type="text"
            name="locker_info"
            placeholder="Enter Locker Owner Info"
            value={formData.locker_info}
            onChange={handleChange}
            data-testid="locker-info-input"
          />
        </Form.Group>

        <Form.Group classname="mb-3" controlId="formGridLockerFee">
          <Form.Label>Locker Fee</Form.Label>
          <Form.Control
            type="text"
            name="locker_fee"
            placeholder="Enter Locker Fee"
            value={formData.locker_fee}
            onChange={handleChange}
            data-testid="locker-fee-input"
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