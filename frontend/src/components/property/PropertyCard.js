import React, { useState, useRef } from 'react';
import { Button, Overlay, Popover, ListGroup, Card } from 'react-bootstrap';
import { Link, NavLink } from "react-router-dom";


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
    for (const unit of property.condo_units) {
      total += Number(unit.purchase_price);
    }
    return total;
  }
  const calculateParkingTotal = (property) => {
    let total = 0;
    for (const parking of property.parking_units) {
      total += Number(parking.purchase_price);
    }
    return total;
  }
  const calculateLockerTotal = (property) => {
    let total = 0;
    for (const locker of property.storage_units) {
      total += Number(locker.purchase_price);
    }
    return total;
  }


  return (
    <Card className="mb-3" style={{ width: '25rem', textAlign: 'center' }}>
      <Card.Img
        variant="top"
        src={property.propertyImage}
        style={{ width: '100%', height: 'auto', display: 'block', maxHeight: "200px", borderRadius: "10px" }}
      />
      <Card.Body>
        {/* FIXME the property doesn't have a name yet so i used id */}
        <Card.Title><NavLink to={`/property-page/${property.id}`}>Name Placeholder {property.id}</NavLink></Card.Title>
        <Card.Text>Location: {property.address}</Card.Text>
        <Button ref={unitsRef} onClick={toggleUnits} variant="secondary" className="me-2">Units</Button>
        <Overlay target={unitsRef.current} show={showUnits} placement="bottom" rootClose={true} onHide={() => setShowUnits(false)}>
          {(props) => (
            <Popover {...props} id="popover-units">
              <Popover.Body>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                  <div>Count: {property.condo_units.length}</div>
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
                  <div>Count: {property.parking_units.length}</div>
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
                  <div>Count: {property.storage_units.length} </div>
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
