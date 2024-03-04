import React from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axiosInstance from "../../api/axios.js";

const SignUpCompany = () => {

  const history = useNavigate();

  //this should in extended to match all info we have
  const [formData, setFormData] = useState({
    email: "",
    first_name: "",
    last_name: "",
    password: "",
    phone_number: "",
    address: "",
    city: "",
    province: "",
    postal_code: "",
    registration_key: "",
    profile_photo: "",
    role: "COMPANY"
  });

  // update formData as input is given
  const handleChange = (e) => {
    setFormData({
      ...formData,
      // Trimming any whitespace
      [e.target.name]: e.target.value,
    });
    console.log(formData);
  };

  // handle submit form
  const handleSubmit = (e) => {

    e.preventDefault();

    console.log(formData);

    axiosInstance
      .post(`profiles/user/`, {
        email: formData.email,
        first_name: formData.first_name,
        last_name: formData.last_name,
        password: formData.password,
        role: formData.role,
      })
      .then((res) => {
        if (res.status == 201) {
          console.log(res);
          console.log(res.data);
          updateProfileInfo(res.data.id)
          window.alert(`profile ${formData.email} has been created as a(n) ${res.data.role} user`);
          history("/login");
        }
      })
      .catch((error) => {
        console.log(error);
        console.log(error.data);
        window.alert(`${error} `)
        history(SignUpCompany)
      });
  };

  const updateProfileInfo = (id) => {
    axiosInstance
      .patch(`profiles/company-profile/${id}/`, {
        phone_number: formData.phone_number,
        address: formData.address,
        city: formData.city,
        province: formData.province,
        postal_code: formData.postal_code,
        // registration_key: formData.registration_key
      })
      .then((res) => {
        if (res.status == 200) {
          console.log('public-profile information patched')
          console.log(res.data)
          window.alert(`profile ${formData.email} has been created`)
          history("/login");
        }
      })
      .catch((error) => {
        console.log(error);
        console.log(error.data);
        window.alert(`${error} `)
        history(SignUpCompany)
      });

  }
  //match the input with the backend parameters (ex: first last and all the other fields)
  return (
    <Container className="w-75 p-3 bg-secondary mt-5 text-dark">
      <Form className="py-5 text-dark" onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridFirstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              name="first_name"
              placeholder="Enter Your First Name"
              value={formData.first_name}
              onChange={handleChange}
              data-testid="first-name-input"
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridLastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              name="last_name"
              placeholder="Enter Your Last Name"
              value={formData.last_name}
              onChange={handleChange}
              data-testid="last-name-input"
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} className="mb-3" controlId="formGridEmailAddress">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="your-email@email.com"
              value={formData.email}
              onChange={handleChange}
              data-testid="email-input"
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridPhoneNumber">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Your Phone Number"
              name="phone_number"
              value={formData.phone_number}
              onChange={handleChange}
              data-testid="phone-number-input"
            />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Enter Your Password"
              value={formData.password}
              onChange={handleChange}
              data-testid="password-input"
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPasswordConfirmation">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm Your Password"
              name="password_confirmation"
              data-testid="confirm-password-input"
            />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridFile" className="mb-3">
            <Form.Label>Profile Photo</Form.Label>
            <Form.Control
              type="file"
              placeholder="Upload Your Profile Photo"
              name="profile_photo"
              value={formData.profile_photo}
              onChange={handleChange}
              data-testid="profile_photo-input"
            />
          </Form.Group>
        </Row>
        <Form.Group className="mb-3" controlId="formGridAddress">
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Apartment, studio, or floor"
            name="address"
            value={formData.address}
            onChange={handleChange}
            data-testid="address-input"
          />
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>City</Form.Label>
            <Form.Control type="text" name="city" value={formData.city} onChange={handleChange} data-testid="city-input" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Province</Form.Label>
            <Form.Select defaultValue={formData.province} name="province" value={formData.province} onChange={handleChange}
              data-testid="province-select"  >
              <option value="British Colombia">BC</option>
              <option value="Prince Edward Island">PE</option>
              <option value="Nova Scotia">NS</option>
              <option value="New Brunswick">NB</option>
              <option value="Quebec">QC</option>
              <option value="Ontario">ON</option>
              <option value="Manitoba">MB</option>
              <option value="Saskatchuwan">SK</option>
              <option value="Alberta">AB</option>
              {/* <option value="British Colombia">BC</option>
              <option value="British Colombia">YT</option>
              <option value="British Colombia">NT</option>
              <option value="British Colombia">NJ</option> */}
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Postal Code</Form.Label>
            <Form.Control type="text" name="postal_code" value={formData.postal_code} onChange={handleChange} data-testid="postal-code-input" />
          </Form.Group>
        </Row>

        {/* <Form.Group className="mb-3" id="formGridCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group> */}

        <Button variant="primary" type="submit" data-testid="submit-button">
          Submit
        </Button>
        <Form.Text>
          {" "}
          Already have an account? <Link to="/login">Sign In</Link>
        </Form.Text>
      </Form>
    </Container>
  );
};

export default SignUpCompany;
