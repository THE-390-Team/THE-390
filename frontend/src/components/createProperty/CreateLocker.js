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

const CreateLocker = () => {
  const {properties} = useProperty();
  // receive the containing property id from the url
  let { propertyId } = useParams();
  const navigate = useNavigate();
  
  // locker information should extend to match all info needed
  const [formData, setFormData] = useState({
    public_profile: null,
    location: "",
    purchase_price: "",
    rent_price: "",
    size: "",
    extra_information: "",
  });

  const [errors, setErrors] = useState({});

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

    //Clear existing error if there is change to input
    setErrors({ ...errors, [e.target.name]: '' });
    console.log(formData);
  };

  //Validate input form
  const validateForm = () =>{
    const errors = {};
    let isValid = true;

    //Validate input fields 
    //Location must be filled, length less than 50 chars
    if (!formData.location.trim()){
      errors.location = "Location field required";
      isValid = false;
    } else if (formData.location.trim().length > 50){
      errors.location = "Location field must be under 50 characters";
      isValid = false;
    }
    //Purchase price must be filled, must be a non-negative number
    if (!formData.purchase_price.trim()){
      errors.purchase_price = "Purchase price required";
      isValid = false;
    } else if (isNaN(formData.purchase_price)){
      errors.purchase_price = "Purchase price must be a number";
      isValid = false;
    } else if (parseFloat(formData.purchase_price) < 0){
      errors.purchase_price = "Invalid number";
      isValid = false;
    }
    //Rent price must be filled, must be a non-negative number
    if (!formData.rent_price.trim()){
      errors.rent_price = "Rent price required";
      isValid = false;
    } else if (isNaN(formData.rent_price)){
      errors.rent_price = "Rent price must be a number";
      isValid = false;
    } else if (parseFloat(formData.rent_price) < 0){
      errors.rent_price = "Invalid number";
      isValid = false;
    }
    //Size must be filled, must be a non-negative number
    if (!formData.size.trim()){
      errors.size = "Size required";
      isValid = false;
    } else if (isNaN(formData.size)){
      errors.size = "Size must be a number";
      isValid = false;
    } else if (parseFloat(formData.size) < 0){
      errors.size = "Invalid number";
      isValid = false;
    }
    //Extra information must be not exceed 100 chars
    if (formData.extra_information.trim().length > 100){
      errors.extra_information = "Extra information field must be less than 100 characters";
      isValid = false;
    }

    //If there are errors, set errors in state and prevent submit
    if (Object.keys(errors).length >0){
      setErrors(errors);
    }

    return isValid;

  }

  //handle form submission to create a new locker
  const handleSubmit = (e) => {
    e.preventDefault();
    
    //If form is valid, post the form
    if (validateForm()){
      console.log(formData);

      //post form
      axiosInstance
        .post(`properties/property-profile/${propertyId}/storage-unit/`, {
          location: formData.location.trim(),
          purchase_price: formData.purchase_price.trim(),
          rent_price: formData.rent_price.trim(),
          size: formData.size.trim(),
          extra_information: formData.extra_information.trim(),
        })
        .then((res) => {
          if (res.status == 201) {
            // Create new locker profile if successful and go back to property dashboard
            window.alert(`Locker profile ${formData.location} has been created`)
            console.log(res);
            console.log(res.data);
            goBack();
          }
        })
        .catch((error) => {
          //Show popup of error encountered
          console.log(error);
          console.log(error.data);
          window.alert(`${error} `)
        });
    } else{
      //Do not post form if there is error in input
      return;
    }
  };
  
  //Go back to previous page
  function goBack() {
    navigate(-1);
  }

  //Go back to property dashboard
  function handleBackToPropertyPage() {
    goBack()
  }

  return (
    <Container className="w-75 p-3 bg-secondary mt-5 text-dark">
      <Form className="py-5 text-dark" onSubmit={handleSubmit}>
      <h2>Add a Locker to Property {findPropertyById(propertyId)?.id}</h2>
        <Row classname="mb-3">
          <Form.Group as={Col} controlId="formGridLockerLocation">
            <Form.Label>Locker Location</Form.Label>
            <Form.Control
              data-testid="locker-location-input"
              name="location"
              onChange={handleChange}
              placeholder="####"
              type="text"
              value={formData.location}
            />
            {/*Show error if submitting invalid input*/}
            {errors.location && <span style={{color: "red"}}>{errors.location}</span>}
          </Form.Group>
          <Form.Group as={Col} controlId="formGridLockerSize">
            <Form.Label>Locker Size</Form.Label>
            <Form.Control
              data-testid="locker-size-input"
              name="size"
              onChange={handleChange}
              placeholder="Enter Locker Owner"
              type="text"
              value={formData.size}
            />
            {errors.size && <span style={{color: "red"}}>{errors.size}</span>}
          </Form.Group>
        </Row>

        <Row>
          <Form.Group as={Col} classname="mb-3" controlId="formGridLockerPurchasePrice">
            <Form.Label>Purchase Price</Form.Label>
            <Form.Control
              data-testid="locker-purchase_price-input"
              name="purchase_price"
              onChange={handleChange}
              placeholder="Enter Locker Purchase Price"
              type="text"
              value={formData.purchase_price}
            />
            {errors.purchase_price && <span style={{color: "red"}}>{errors.purchase_price}</span>}
          </Form.Group>
          <Form.Group as={Col} classname="mb-3" controlId="formGridLockerRentPrice">
            <Form.Label>Rent Price</Form.Label>
            <Form.Control
              data-testid="locker-rent_price-input"
              name="rent_price"
              onChange={handleChange}
              placeholder="Enter Locker Rent Price"
              type="text"
              value={formData.rent_price}
            />
            {errors.rent_price && <span style={{color: "red"}}>{errors.rent_price}</span>}
          </Form.Group>
        </Row>

        <Form.Group classname="mb-3" controlId="formGridLockerExtraInformation">
          <Form.Label>Extra Information</Form.Label>
          <Form.Control
            data-testid="locker-extra_information-input"
            name="extra_information"
            onChange={handleChange}
            placeholder="Enter Locker Extra Info"
            type="text"
            value={formData.extra_information}
          />
          {errors.extra_information && <span style={{color: "red"}}>{errors.extra_information}</span>}
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