import React, { useContext, useEffect, useState } from "react";
import profilepic from "../../assets/pp.jpg";
import axiosInstance from "../../api/axios";
import {
  Container,
  Row,
  Col,
  Card,
  ListGroup,
  Button,
  Modal,
  Form,
} from "react-bootstrap";



const UserProfile = () => {

  // user information
  const [profileInfo, setProfileInfo] = useState({
    avatar: profilepic,
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    address: "",
    city: "",
    province: "",
    registration_key: "",
    postal_code: "",
  });

  const [tempChanges, setTempChanges] = useState("");
  const [showModal, setShowModal] = useState(false);
  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const handleSaveChanges = () => {
    // TODO: Implement save functionality with the backend
    console.log("Save changes");
    handleCloseModal();
    setProfileInfo(tempChanges);
    // TODO need to CRUD
  };

  const handleChange = (e) => {
    setTempChanges(profileInfo);
    const { name, value } = e.target;
    // Handling nested properties in state
    if (name.includes(".")) {
      const [parentKey, childKey] = name.split(".");
      setTempChanges((prevState) => ({
        ...prevState,
        [parentKey]: {
          ...prevState[parentKey],
          [childKey]: value,
        },
      }));
    } else {
      setTempChanges((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
    console.log(profileInfo);
  };

  // TODO need a to fetch
  // get information on active user
  useEffect(() => {
    axiosInstance
      .get("user-profile/profile/")
      .then((response) => {
        console.log(response);
        setProfileInfo({
          avatar: profilepic,
          first_name: response.data.first_name,
          last_name: response.data.last_name,
          email: response.data.email,
          phone_number: response.data.phone_number,
          address: response.data.address,
          city: response.data.city,
          province: response.data.province,
          postal_code: response.data.postal_code,
        });
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching user profile:", error.message);
      });
  }, [setProfileInfo]);

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={4}>
          <Card>
            <Card.Img
              variant="top"
              src={profileInfo.avatar}
              alt="Profile Picture"
              style={{ height: "200px", width: "100%", objectFit: "cover" }}
            />
            <Card.Body>
              <Card.Title>
                <h2>
                  {profileInfo.first_name} {profileInfo.last_name}
                </h2>
              </Card.Title>
            </Card.Body>

            <ListGroup>
              <ListGroup.Item>
                <strong>Email:</strong> {profileInfo.email}
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>Phone:</strong> {profileInfo.phone_number}
              </ListGroup.Item>
            </ListGroup>
            <Card.Body className="d-flex justify-content-center">
              <Button variant="primary" onClick={handleShowModal} data-testid="edit-profile">
                Edit Profile
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={8}>
          <Card className="mb-3">
            <Card.Header>
              <h1>Details</h1>
            </Card.Header>
            <Card.Body>
              <Col>
                <p>
                  <strong>Address:</strong> {profileInfo.address},{" "}
                  {profileInfo.city}, {profileInfo.province},{" "}
                  {profileInfo.postal_code}
                </p>
                <p>more details to come...</p>
              </Col>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Modal for editing profile */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="formGroupFirstName">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="first_name"
                    defaultValue={profileInfo.first_name}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="formGroupLastName">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="last_name"
                    defaultValue={profileInfo.last_name}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                defaultValue={profileInfo.email}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group
              as={Col}
              controlId="formGridPhoneNumber"
              className="mb-4"
            >
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="text"
                name="phone_number"
                defaultValue={profileInfo.phone_number}
                onChange={handleChange}
                data-testid="phone-number-input1"
              />
            </Form.Group>
            {/* TODO check the default profile picture */}
            <Form.Group controlId="formFile" className="mb-4">
              <Form.Label>Update Profile Picture</Form.Label>
              <Form.Control
                type="file"
                name="avatar"
                multiple
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGridAddress">
              <Form.Label>Address</Form.Label>
              <Form.Control
                name="address"
                defaultValue={profileInfo.address}
                onChange={handleChange}
                data-testid="address-input1"
              />
            </Form.Group>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>City</Form.Label>
                <Form.Control
                  name="city"
                  defaultValue={profileInfo.city}
                  onChange={handleChange}
                />
              </Form.Group>

              {/* TODO there's a problem here, not sure how to set the default option */}
              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Province</Form.Label>
                <Form.Select
                  name="province"
                  defaultValue={profileInfo.province}
                  onChange={handleChange}
                >
                  <option value="British Colombia">BC</option>
                  <option value="Prince Edward Island">PE</option>
                  <option value="Nova Scotia">NS</option>
                  <option value="New Brunswick">NB</option>
                  <option value="Quebec">QC</option>
                  <option value="Ontario">ON</option>
                  <option value="Manitoba">MB</option>
                  <option value="Saskatchuwan">SK</option>
                  <option value="Alberta">AB</option>
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Postal Code</Form.Label>
                <Form.Control
                  name="postal_code"
                  value={profileInfo.postal_code}
                  defaultValue={profileInfo.postal_code}
                  onChange={handleChange}
                />
              </Form.Group>
            </Row>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal} data-testid="secondary">
            Close
          </Button>
          <Button variant="primary" onClick={handleSaveChanges} data-testid="submit-button">
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default UserProfile;
