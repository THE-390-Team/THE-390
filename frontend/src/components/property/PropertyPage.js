import React from 'react';
import { useParams } from 'react-router-dom'; // Assuming you're using React Router for navigation
import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import propertyPhoto from "../../assets/condo-photo.jpg"


const PropertyPage = () => {
  const property = {
    id: "1",
    name: "Estate Alpha",
    location: "Greenwich, London",
    image: propertyPhoto,
    units: [
      { id: 1, name: "The Buckingham Suite", address: '123 Main St', location: 'Downtown', price: 1200000, size: 1000 },
      { id: 1, name: "The Buckingham Suite", address: '123 Main St', location: 'Downtown', price: 1200000, size: 1000 },
      { id: 1, name: "The Buckingham Suite", address: '123 Main St', location: 'Downtown', price: 1200000, size: 1000 },
    ],
    parkingSpots: [
      { id: 1, level: 2, size: 200, price: 50000, slotNumber: 12 },
      { id: 1, level: 2, size: 200, price: 50000, slotNumber: 12 },
    ],
    lockers: [
      { id: 1, location: 'Basement', size: 50, number: 3 },
    ],
  }
  let { propertyId } = useParams(); // Get the property ID from the URL
  const renderStyle = { display: 'flex', flexDirection: 'row', flexWrap: 'wrap' };

  // Assuming each section (Units, Parking, Lockers) is a separate component
  const renderUnits = () => {
    return property.units.map((unit) => (
      <ListGroup variant="flush" key={unit.id} style={{ width: '200px', height: '200px', margin: '5px' }}>
        <ListGroup.Item><strong>{unit.name}</strong></ListGroup.Item>
        <ListGroup.Item>Address: {unit.address}</ListGroup.Item>
        <ListGroup.Item>Location: {unit.location}</ListGroup.Item>
        <ListGroup.Item>Price: ${unit.price}</ListGroup.Item>
        <ListGroup.Item>Size: {unit.size} sqft</ListGroup.Item>
      </ListGroup>
    ));
  };

  const renderParkingSpots = () => {
    return property.parkingSpots.map((spot) => (
      <ListGroup variant="flush" key={spot.id} style={{ width: '200px', height: '200px', margin: '5px' }}>
        <ListGroup.Item>Level: {spot.level}</ListGroup.Item>
        <ListGroup.Item>Size: {spot.size} sqft</ListGroup.Item>
        <ListGroup.Item>Price: ${spot.price}</ListGroup.Item>
        <ListGroup.Item>Slot Number: {spot.slotNumber}</ListGroup.Item>
      </ListGroup>
    ));
  };

  const renderLockers = () => {
    return property.lockers.map((locker) => (
      <ListGroup key={locker.id} style={{ width: '200px', height: '200px', margin: '5px' }}>
        <ListGroup.Item>Location: {locker.location}</ListGroup.Item>
        <ListGroup.Item>Size: {locker.size} sqft</ListGroup.Item>
        <ListGroup.Item>Number: {locker.number}</ListGroup.Item>
      </ListGroup>
    ));
  };


  return (
    <Container fluid>
      <Row>
        <Col md={4} style={{ padding: '0' }}>
          <img src={property.image} alt={property.name} style={{ width: '100%', height: '50vh', objectFit: 'cover', marginTop: '50px' }} />
        </Col>
        <Col md={8} style={{ padding: '20px', overflowY: 'auto' }}>
          <h2>{property.name}</h2>
          <p>{property.location}</p>
          <h3>Units</h3>
          <div style={renderStyle}>
            {renderUnits()}
          </div>
          <h3>Parking Spots</h3>
          <div style={renderStyle}>
            {renderParkingSpots()}
          </div>
          <h3>Lockers</h3>
          <div style={renderStyle}>
            {renderLockers()}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default PropertyPage;
