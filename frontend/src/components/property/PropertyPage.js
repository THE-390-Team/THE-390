import React from 'react';
import { useParams } from 'react-router-dom'; // Assuming you're using React Router for navigation
import { Container, Row, Col, ListGroup, Card, Button } from 'react-bootstrap';
import { useProperty } from '../../utils/hooks/PropertyContext';
import { useNavigate } from "react-router-dom";
import { useEffect } from "react"
import axiosInstance from '../../api/axios';


const PropertyPage = () => {
  let navigate = useNavigate();

  const { propertyId } = useParams();
  const { property, setProperty, fetchProperty } = useProperty();

  function findPropertyById(propertiesObj, propertyId) {
    // Convert the properties object into an array of its values
    const propertiesArray = Object.values(propertiesObj);
    console.log(propertiesObj)
    console.log(propertiesArray)
    const matchingProperty = propertiesArray.find(property => property.id === parseInt(propertyId, 10));
    console.log(matchingProperty)
    return matchingProperty;
  }

  // get information on active user
  useEffect(() => {
    if (propertyId) {
      axiosInstance
        .get(`/properties/property-profile/${propertyId}/`)
        .then((response) => {
          console.log("the response from the get property with id :" + response);
          setProperty({
            id: response.data.id,
            company: response.data.company,
            num_condo_units: response.data.num_condo_units,
            num_parking_units: response.data.num_parking_units,
            num_storage_units: response.data.num_storage_units,
            address: response.data.address,
            city: response.data.city,
            province: response.data.province,
            postal_code: response.data.postal_code,
            condo_units: response.data.condo_units,
            parking_units: response.data.parking_units,
            storage_units: response.data.storage_units,
          });
          console.log(response.data);
        })
        .catch((error) => {
          console.error("Error fetching user profile:", error.message);
        });
    }
  }, []);


  const renderStyle = { display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }

  const renderUnits = () => {
    return property.condo_units.map((unit) => (
      //FIXME unique key prop error in the console
      <ListGroup variant="flush" key={unit.id} style={{ width: '250px', height: '180px', margin: '5px', fontSize: '13px' }} className=" h-25 shadow">
        <ListGroup.Item style={{ marginBottom: "-10px" }}><strong>unit name place holder{/*{unit.name}*/}</strong></ListGroup.Item>
        <ListGroup.Item style={{ marginBottom: "-15px" }}>Location: {unit.location}</ListGroup.Item>
        <ListGroup.Item style={{ marginBottom: "-15px" }}>Purchase Price: ${unit.purchase_price}</ListGroup.Item>
        <ListGroup.Item style={{ marginBottom: "-15px" }}>Rental Price: ${unit.rent_price}</ListGroup.Item>
        <ListGroup.Item >Size: {unit.size} sqft</ListGroup.Item>
      </ListGroup>
    ));
  };

  const renderParkingSpots = () => {
    return property.parking_units.map((spot) => (
      <ListGroup variant="flush" key={spot.id} style={{ width: '250px', height: '150px', margin: '5px', fontSize: '13px' }} className=" h-25 shadow">
        <ListGroup.Item style={{ marginBottom: "-15px" }}>Location: {spot.location}</ListGroup.Item>
        <ListGroup.Item style={{ marginBottom: "-15px" }}>Size: {spot.size} sqft</ListGroup.Item>
        <ListGroup.Item style={{ marginBottom: "-15px" }}>Purchase Price: ${spot.purchase_price}</ListGroup.Item>
        <ListGroup.Item style={{ marginBottom: "-15px" }}>Rent Price: ${spot.rent_price}</ListGroup.Item>
        <ListGroup.Item >Extra Information: {spot.extra_information}</ListGroup.Item>
      </ListGroup>
    ));
  };

  const renderLockers = () => {
    return property.storage_units.map((locker) => (
      <ListGroup key={locker.id} style={{ width: '250px', height: '110px', margin: '5px', fontSize: '13px' }} className=" h-25 shadow">
        <ListGroup.Item style={{ marginBottom: "-15px" }}>Location: {locker.location}</ListGroup.Item>
        <ListGroup.Item style={{ marginBottom: "-15px" }}>Size: {locker.size} sqft</ListGroup.Item>
        <ListGroup.Item style={{ marginBottom: "-15px" }}>Purchase Price: ${locker.purchase_price}</ListGroup.Item>
        <ListGroup.Item style={{ marginBottom: "-15px" }}>Rent Price: ${locker.rent_price}</ListGroup.Item>
        <ListGroup.Item >Number: {locker.number}</ListGroup.Item>
      </ListGroup>
    ));
  };

  function goBack() {
    navigate(-1);
  }
  function handleBackToDashboard() {
    goBack()
  }

  function handleGoToUnitCreate() {
    navigate(`/property-page/${propertyId}/create-condo-unit`);
  }
  function handleGoToParkingCreate() {
    navigate(`/property-page/${propertyId}/create-parking-unit`);
  }
  function handleGoToLockerCreate() {
    navigate(`/property-page/${propertyId}/create-locker-unit`);
  }
  return (
    <Container fluid>
      <Row>
        <Col md={4} style={{ padding: '0' }}>
          {/* FIXME there's no image in db yet */}
          {/* <img src={property.image} alt={property.name} style={{ width: '100%', height: '40vh', objectFit: 'cover', marginTop: '28px' }} /> */}
          <Card className="mt-4 h-25 shadow">
            <Card.Title className="fw-bold">This is where property finances go?</Card.Title>
            This is where the finanical details will go
          </Card>
          <Card className="mt-4 h-25 shadow">
            <Card.Title className="fw-bold">This is where property Requests go?</Card.Title>
            This is where the requests details will go
          </Card>
        </Col>
        <Col md={8} style={{ padding: '20px', overflowY: 'auto' }}>
          <Row>
            <Col>
              {/* FIXME there's no name in db yet */}
              {/* <h2>{property.name}</h2> */}
              {/* <p>{property.address}</p> */}
            </Col>

            <Col>
              <Button >
                Make Request?
              </Button>
              <Button onClick={handleBackToDashboard} data-testid="dashboard-return">
                Dashboard
              </Button>

            </Col>
          </Row>

          <h5 className="mt-3">Units <Button variant="primary" onClick={handleGoToUnitCreate} data-testid="create-unit-button">+</Button></h5>
          <div style={renderStyle}>
            {renderUnits()}
          </div>
          <h5 className="mt-3">Parking Spots <Button variant="primary" onClick={handleGoToParkingCreate}>+</Button></h5>
          <div style={renderStyle}>
            {renderParkingSpots()}
          </div>
          <h5 className="mt-3">Lockers <Button data-testid="create-locker-button" onClick={handleGoToLockerCreate} variant="primary">+</Button></h5>
          <div style={renderStyle}>
            {renderLockers()}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default PropertyPage;
