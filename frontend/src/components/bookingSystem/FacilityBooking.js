import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import LargeTitle from "../LargeTitle.js";
import { Button, Row, Col, Modal } from 'react-bootstrap';
import Calendar from './Calendar.js';
import { useProperty } from "../../utils/hooks/PropertyContext";
import FacilitiesList from '../commonFacilities/FacilitiesList.js';
import { Dropdown } from 'react-bootstrap';
import axiosInstance from "../../api/axios";

const FacilityBooking = () => {
    const { propertyId } = useParams();
    const { fetchAllFacilities, facilities } = useProperty();
    const [unitFacilities, setUnitFacilities] = useState([]);
    const {
        fetchAllCondoUnitsForProfile,
        condoUnits,
        fetchAllStorageUnitsForProfile,
        fetchAllParkingUnitsForProfile,
    } = useProperty();
    const navigate = useNavigate();
    const [selectedFactility, setSelectedFacility] = useState('Select a Facility');

    const [showStartTimeModal, setShowStartTimeModal] = useState(false);
    const [showEndTimeModal, setShowEndTimeModal] = useState(false);
    const [startTime, setStartTime] = useState(null);
    const [endTime, setEndTime] = useState(null);
    const [showConfirmation, setShowConfirmation] = useState(false);

    const handleOpenStartTimeModal = () => setShowStartTimeModal(true);
    const handleCloseStartTimeModal = () => setShowStartTimeModal(false);

    const handleOpenEndTimeModal = () => setShowEndTimeModal(true);
    const handleCloseEndTimeModal = () => setShowEndTimeModal(false);

    let filteredFacilities = []
    useEffect(() => {
        const userId = localStorage.getItem("ID");
        const fetchData = async () => {
            await fetchAllFacilities();// fetch all facilities for all properties
            await fetchAllCondoUnitsForProfile(userId);
            await fetchAllStorageUnitsForProfile(userId);
            await fetchAllParkingUnitsForProfile(userId);
        }
        fetchData().then(() => {
            // Ensure data fetching is complete before running the filter
            // This assumes that these states are properly updated by the above fetch calls

            const propertyIds = new Set();
            let propertyIdforUnit;  // Use let for variables that need to be reassigned
            if (condoUnits) {
                // Find the first unit that matches the propertyId and get its ID
                const matchedUnit = condoUnits.find(unit => unit.id === Number(propertyId));
                if (matchedUnit) {
                    propertyIdforUnit = matchedUnit.property;  // Now storing the ID correctly
                    console.log("property id for unit is: ", propertyIdforUnit);

                    // Assuming you want to gather all properties that match this propertyId
                    condoUnits.forEach(unit => {
                        if (unit.property === propertyIdforUnit) {  // This seems redundant or incorrect based on the previous description
                            propertyIds.add(unit.property);
                        }
                    });
                    console.log("property ids are: ", propertyIds);
                } else {
                    console.log("No matching unit found for propertyId.");
                }
            }
            // Filter facilities that have a property matching any of the propertyIds in the Set
            filteredFacilities = facilities.filter(facility => propertyIds.has(facility.property));
            setUnitFacilities(filteredFacilities);
            console.log("Filtered Facilities: ", filteredFacilities);

        });
    }, [])

    //make a post request to create a booking
    //TODO check if this works after merging from development branch
    const handleCreateBooking = async () => {
        try {
            //post request to create a booking
            const response = await axiosInstance.post('reservations/reservations/', {
                facility: selectedFactility.id,
                user: localStorage.getItem("ID"),
                start_time: startTime,
                end_time: endTime,
            })
        } catch {
            console.log("Error creating booking");
        }
    }

    const handleConfirm = () => {
        handleCreateBooking();
    };

    const goBack = () => {
        navigate(-1);
    };

    return (
        <div className="container mt-5">
            <LargeTitle title={`Facility Booking for ${propertyId}`} />
            <Row>
                pick a date and time for your booking
            </Row>
            <Row>
                <Col md={8}>
                    <Button variant='primary' onClick={handleConfirm} disabled={!startTime || !endTime}>
                        Confirm Booking
                    </Button>
                    <Button variant='secondary' onClick={goBack}>
                        Cancel
                    </Button>
                </Col>
            </Row>

            <Dropdown className="mb-4 w-75 text-center mx-auto">
                <Dropdown.Toggle variant="success" id="dropdown-Unit" className="w-100">
                    {selectedFactility === 'Select a Facility' ? 'Select a Facility' : `${selectedFactility.name}`}
                </Dropdown.Toggle>
                <Dropdown.Menu className="w-100 text-center">
                    {console.log("Filtered Facilities from toggle: ", filteredFacilities)}
                    {
                        unitFacilities.map((facility) => {
                            return <Dropdown.Item key={facility.id} eventKey={facility.id} onClick={() => setSelectedFacility(facility)}>Facility {facility.name}</Dropdown.Item>
                        })
                    }
                </Dropdown.Menu>
            </Dropdown>

            <Button onClick={handleOpenStartTimeModal}>Set Start Time</Button>
            <Button onClick={handleOpenEndTimeModal}>Set End Time</Button>

            {showStartTimeModal && (
                <Calendar
                    setTime={setStartTime}
                    timeType="Start"
                    handleClose={handleCloseStartTimeModal}
                />
            )}
            {showEndTimeModal && (
                <Calendar
                    setTime={setEndTime}
                    timeType="End"
                    handleClose={handleCloseEndTimeModal}
                />
            )}
            <p>{startTime && `Start Time: ${startTime}`}</p>
            <p>{endTime && `End Time: ${endTime}`}</p>
        </div>
    );
};

export default FacilityBooking;
