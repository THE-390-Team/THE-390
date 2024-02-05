import React from 'react';
import { Container, Row, Col, Card, ListGroup, Button, Modal, Form } from 'react-bootstrap';
import { useState } from 'react'
import profilepic from '../assets/pp.jpg'


const UserProfile = () => {

  const [profileInfo, setProfileInfo] = useState({
    avatar: profilepic,
    name: {
      firstName: 'Joud',
      lastName: 'Babik',
    },
    email: 'joud.babik@gmail.com',
    phone: '5149132938',
    address: {
      street: '4444 four street',
      city: 'Montreal',
      province: 'QC',
      postalCode: 'H4H 4H4'
    }
  });

  const [tempChanges, setTempChanges] = useState('');

  const [showModal, setShowModal] = useState(false);
  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const handleSaveChanges = () => {
    // TODO: Implement save functionality with the backend
    console.log('Save changes');
    handleCloseModal();
    setProfileInfo(tempChanges);
    // TODO need to CRUD
  };

  const handleChange = (e) => {
    setTempChanges(profileInfo);
    const { name, value } = e.target;
    // Handling nested properties in state
    if (name.includes('.')) {
      const [parentKey, childKey] = name.split('.');
      setTempChanges(prevState => ({
        ...prevState,
        [parentKey]: {
          ...prevState[parentKey],
          [childKey]: value
        }
      }));
    } else {
      setTempChanges(prevState => ({
        ...prevState,
        [name]: value
      }));
    }
    console.log(profileInfo)
  };

  // TODO need a to fetch
  
  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src={profileInfo.avatar} alt="Profile Picture" style={{ height: '200px', width: '100%', objectFit: 'cover' }} />
            <Card.Body >
              <Card.Title><h2>{profileInfo.name.firstName} {profileInfo.name.lastName}</h2></Card.Title>
            </Card.Body>
            <ListGroup >
              <ListGroup.Item><strong>Email:</strong> {profileInfo.email}</ListGroup.Item>
              <ListGroup.Item><strong>Phone:</strong> {profileInfo.phone}</ListGroup.Item>
            </ListGroup>
            <Card.Body className="d-flex justify-content-center">
              <Button variant="primary" onClick={handleShowModal}>Edit Profile</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={8}>
          <Card className="mb-3">
            <Card.Header><h1>Details</h1></Card.Header>
            <Card.Body>
              <Col>
                <p><strong>Address:</strong> {profileInfo.address.street}, {profileInfo.address.city}, {profileInfo.address.province}, {profileInfo.address.postalCode}</p>
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
                  <Form.Control type="text" name='name.firstName' defaultValue={profileInfo.name.firstName} onChange={handleChange} />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="formGroupLastName">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control type="text" name='name.lastName' defaultValue={profileInfo.name.lastName} onChange={handleChange} />
                </Form.Group>
              </Col>

            </Row>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" name="email" defaultValue={profileInfo.email} onChange={handleChange} />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridPhoneNumber" className="mb-4">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="text" name="phone" defaultValue={profileInfo.phone} onChange={handleChange} />
            </Form.Group>
            {/* TODO check the default profile picture */}
            <Form.Group controlId="formFile" className="mb-4">
              <Form.Label>Update Profile Picture</Form.Label>
              <Form.Control type="file" name="avatar" multiple onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGridAddress">
              <Form.Label>Address</Form.Label>
              <Form.Control name="address.street" defaultValue={profileInfo.address.street} onChange={handleChange} />
            </Form.Group>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>City</Form.Label>
                <Form.Control name="address.city" defaultValue={profileInfo.address.city} onChange={handleChange} />
              </Form.Group>

              {/* TODO there's a problem here, not sure how to set the default option */}
              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Province</Form.Label>
                <Form.Select name="address.province" defaultValue={profileInfo.address.province} onChange={handleChange}>
                  <option>BC</option>
                  <option>PE</option>
                  <option>NS</option>
                  <option>NB</option>
                  <option>QC</option>
                  <option>ON</option>
                  <option>MB</option>
                  <option>SK</option>
                  <option>AB</option>
                  <option>BC</option>
                  <option>YT</option>
                  <option>NT</option>
                  <option>NJ</option>
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Postal Code</Form.Label>
                <Form.Control name="address.postalCode" value={profileInfo.address.postalCode} defaultValue={profileInfo.address.postalCode} onChange={handleChange} />
              </Form.Group>
            </Row>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSaveChanges}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default UserProfile;
