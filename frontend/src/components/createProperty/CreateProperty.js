import propertyPhoto from "../../assets/condo-photo.jpg"
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../api/axios";
import {
  Container,
  Row,
  Col,
  Button,
  Form,
} from "react-bootstrap";

const CreateProperty = () => {

  let navigate = useNavigate();
  // unit information, should extend to match all info needed

  const [formData, setFormData] = useState({
    property_name: "",
    property_company: "",
    property_address: "",
    property_city: "",
    property_province: "",
    property_postal_code: "",
    property_image: propertyPhoto,
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
    const companyID = localStorage.getItem("ID");
    e.preventDefault();
    console.log(formData);

    axiosInstance
      .post(`/profiles/company-profile/${companyID}/property-profiles/`, {
        //TODO await model updates with name and image
        // name: formData.property_name, 
        company: companyID,
        address: formData.property_address,
        city: formData.property_city,
        province: formData.property_province,
        postal_code: formData.property_postal_code,

        // image: formData.property_image, //TODO await model updates with name and image
      })
      .then((res) => {
        if (res.status == 201) {
          window.alert(`Property profile ${formData.property_name} has been created`)
          console.log(res);
          console.log(res.data);
          navigate("/dashboard");
        }
      })
      .catch((error) => {
        //TODO check if this error handling is enough
        console.log(error);
        console.log(error.data);
        window.alert(`${error} `)
        // navigate("/dashboard")
      });
  };

  function handleBackToDashboard() {
    navigate('/dashboard');
  }

  return (
    <Container className="w-75 p-3 bg-secondary mt-5 text-dark">
      <Form className="py-5 text-dark" onSubmit={handleSubmit}>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridPropertyName">
            <Form.Label>Property Name</Form.Label>
            <Form.Control
              type="text"
              name="property_name"
              placeholder="Enter Property Name"
              value={formData.name}
              onChange={handleChange}
              data-testid="property-name-input"
            />
          </Form.Group>
        </Row>

        <Form.Group as={Col} controlId="formGridPropertyAddress">
          <Form.Label>Property Address</Form.Label>
          <Form.Control
            type="text"
            name="property_address"
            placeholder="Enter Property Address"
            value={formData.address}
            onChange={handleChange}
            data-testid="property-address-input"
          />
        </Form.Group>

        <Row className="mb-3">

          <Form.Group as={Col} controlId="formGridPropertyCity">
            <Form.Label>Property City</Form.Label>
            <Form.Control
              type="text"
              name="property_city"
              value={formData.city}
              onChange={handleChange}
              data-testid="property-city-input" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPropertyProvince">
            <Form.Label>Property Province</Form.Label>
            <Form.Select
              defaultValue={formData.property_rovince}
              name="property_province"
              value={formData.property_province}
              onChange={handleChange}
              data-testid="province-select-test">
              <option value="British Colombia" data-testid="BC-test">BC</option>
              <option value="Prince Edward Island" data-testid="PE-test">PE</option>
              <option value="Nova Scotia" data-testid="NS-test">NS</option>
              <option value="New Brunswick" data-testid="NB-test">NB</option>
              <option value="Quebec" data-testid="QC-test">QC</option>
              <option value="Ontario" data-testid="ON-test">ON</option>
              <option value="Manitoba" data-testid="MB-test">MB</option>
              <option value="Saskatchuwan" data-testid="SK-test">SK</option>
              <option value="Alberta" data-testid="AB-test">AB</option>
              {/* <option value="British Colombia">BC</option>
                <option value="British Colombia">YT</option>
                <option value="British Colombia">NT</option>
                <option value="British Colombia">NJ</option> */}
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPropertyZip">
            <Form.Label>Property Postal Code</Form.Label>
            <Form.Control
              type="text"
              name="property_postal_code"
              value={formData.postal_code}
              onChange={handleChange}
              data-testid="property-postal-code-input" />
          </Form.Group>
        </Row>

        <Form.Group controlId="formGridPropertyImage" className="mb-4">
          <Form.Label>Upload Property Image</Form.Label>
          <Form.Control
            type="file"
            name="property_image"
            multiple
            onChange={handleChange}
            data-testid="property-image-file"
          />
        </Form.Group>

        <Button style={{ marginTop: "20px" }} variant="primary" onClick={handleBackToDashboard}>
          Cancel
        </Button>
        <Button style={{ marginLeft: "20px", marginTop: "20px" }} variant="primary" type="submit" data-testid="submit-button">
          Submit
        </Button>
      </Form>
    </Container>
  )
}

export default CreateProperty