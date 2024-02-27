import React from 'react'
import { useState } from "react"
import PropertyContainer from './property/PropertyContainer.js'

const DashBoard = () => {

    // must implement use context to share user profile information
    const [property, setProperty] = useState({
        name: "property name",
        location: "property location",
        image: "../assets/istockphoto-1165384568-612x612.jpg",
        units: [
            { id: 1, name: "the Buckingham Palace", address: '123 Main St', location: 'Downtown', price: 1200000, size: 1000 },
        ],
        parkingSpots: [
            { id: 1, level: 2, size: 200, price: 50000, slotNumber: 12 },
        ],
        lockers: [
            { id: 1, location: 'Basement', size: 50, number: 3 },
        ],
    });

    return (
        <div className="d-flex justify-content-end">
            <PropertyContainer style={{}}></PropertyContainer>
        </div>

    );
}

export default DashBoard