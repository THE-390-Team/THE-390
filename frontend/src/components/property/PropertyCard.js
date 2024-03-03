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

  const calculateUnitTotal = (property) => {
    let total = 0;
    for (const unit of property.units) {
      total += unit.price;
    }
    return total;
  }
  const calculateParkingTotal = (property) => {
    let total = 0;
    for (const parking of property.parkingSpots) {
      total += parking.price;
    }
    return total;
  }
  const calculateLockerTotal = (property) => {
    let total = 0;
    for (const locker of property.lockers) {
      total += locker.price;
    }
    return total;
  }


  return (
    <Card className="mb-3" style={{ width: '25rem', textAlign: 'center' }}>
      <Card.Img
        variant="top"
        src={property.image}
        style={{ width: '100%', height: 'auto', display: 'block', maxHeight: "200px", borderRadius: "10px" }}
      />
      <Card.Body>
        {/* TODO hard coded the url until database connection */}
        <Card.Title><Link to="/property-page">{property.name}</Link></Card.Title>
        <Card.Text>Location: {property.location}</Card.Text>
        <Button ref={unitsRef} onClick={toggleUnits} variant="secondary" className="me-2">Units</Button>
        <Overlay target={unitsRef.current} show={showUnits} placement="bottom" rootClose={true} onHide={() => setShowUnits(false)}>
          {(props) => (
            <Popover {...props} id="popover-units">
              <Popover.Body>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                  <div>Count: {property.units.length}</div>
                  <div>Value: ${calculateUnitTotal(property)}</div>
                </div>
              </Popover.Body>
            </Popover>
          )}
        </Overlay>

        <Button ref={parkingRef} onClick={toggleParking} variant="secondary" className="me-2">Parking</Button>
        <Overlay target={parkingRef.current} show={showParking} placement="bottom" rootClose={true} onHide={() => setShowParking(false)}>
          {(props) => (
            <Popover {...props} id="popover-parking">
              <Popover.Body>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                  <div>Count: {property.parkingSpots.length}</div>
                  <div>Total: ${calculateParkingTotal(property)}</div>
                </div>
              </Popover.Body>
            </Popover>
          )}
        </Overlay>

        <Button ref={lockersRef} onClick={toggleLockers} variant="secondary">Lockers</Button>
        <Overlay target={lockersRef.current} show={showLockers} placement="bottom" rootClose={true} onHide={() => setShowLockers(false)}>
          {(props) => (
            <Popover {...props} id="popover-lockers">
              <Popover.Body>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                  <div>Count: {property.lockers.length} </div>
                  <div>Total: ${calculateLockerTotal(property)}</div>
                </div>
              </Popover.Body>
            </Popover>
          )}
        </Overlay>
      </Card.Body>
    </Card>
  );
};

export default PropertyCard;
