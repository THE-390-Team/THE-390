import React, { useState, useRef } from 'react';
import { Button, Overlay, Popover, ListGroup, Card } from 'react-bootstrap';
import { Link } from "react-router-dom";


const PropertyCard = ({ property }) => {
  // Refs for the buttons
  const unitsRef = useRef(null);
  const parkingRef = useRef(null);
  const lockersRef = useRef(null);

  // State for showing popovers
  const [showUnits, setShowUnits] = useState(false);
  const [showParking, setShowParking] = useState(false);
  const [showLockers, setShowLockers] = useState(false);

  // Handlers for button clicks
  const toggleUnits = () => setShowUnits(!showUnits);
  const toggleParking = () => setShowParking(!showParking);
  const toggleLockers = () => setShowLockers(!showLockers);

  // Rendering functions
  const renderUnits = () => {
    return property.units.map((unit) => (
      <ListGroup variant="flush" key={unit.id}>
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
      <ListGroup key={spot.id}>
        <ListGroup.Item>Level: {spot.level}</ListGroup.Item>
        <ListGroup.Item>Size: {spot.size} sqft</ListGroup.Item>
        <ListGroup.Item>Price: ${spot.price}</ListGroup.Item>
        <ListGroup.Item>Slot Number: {spot.slotNumber}</ListGroup.Item>
      </ListGroup>
    ));
  };

  const renderLockers = () => {
    return property.lockers.map((locker) => (
      <ListGroup key={locker.id}>
        <ListGroup.Item>Location: {locker.location}</ListGroup.Item>
        <ListGroup.Item>Size: {locker.size} sqft</ListGroup.Item>
        <ListGroup.Item>Number: {locker.number}</ListGroup.Item>
      </ListGroup>
    ));
  };

  return (
    <Card className="mb-3" style={{ width: '25rem', textAlign: 'center' }}>
      <Card.Img
        variant="top"
        src={property.image}
        style={{ width: '100%', height: 'auto', display: 'block', maxHeight: "200px", borderRadius: "10px" }}
      />
      <Card.Body>
        <Card.Title><Link to="/property-page">{property.name}</Link></Card.Title>
        <Card.Text>Location: {property.location}</Card.Text>
        <Button ref={unitsRef} onClick={toggleUnits} variant="secondary" className="me-2">Units</Button>
        <Overlay target={unitsRef.current} show={showUnits} placement="bottom">
          {(props) => (
            <Popover {...props} id="popover-units">
              <Popover.Header as="h3">Units</Popover.Header>
              <Popover.Body>{renderUnits()}</Popover.Body>
            </Popover>
          )}
        </Overlay>

        <Button ref={parkingRef} onClick={toggleParking} variant="secondary" className="me-2">Parking</Button>
        <Overlay target={parkingRef.current} show={showParking} placement="bottom">
          {(props) => (
            <Popover {...props} id="popover-parking">
              <Popover.Header as="h3">Parking Spots</Popover.Header>
              <Popover.Body>{renderParkingSpots()}</Popover.Body>
            </Popover>
          )}
        </Overlay>

        <Button ref={lockersRef} onClick={toggleLockers} variant="secondary">Lockers</Button>
        <Overlay target={lockersRef.current} show={showLockers} placement="bottom">
          {(props) => (
            <Popover {...props} id="popover-lockers">
              <Popover.Header as="h3">Lockers</Popover.Header>
              <Popover.Body>{renderLockers()}</Popover.Body>
            </Popover>
          )}
        </Overlay>
      </Card.Body>
    </Card>
  );
};

export default PropertyCard;
