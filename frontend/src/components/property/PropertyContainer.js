import React from 'react';
import PropertyCard from './PropertyCard';
import { useState } from "react";
import propertyPhoto from "../../assets/condo-photo.jpg"
import propertyPhoto1 from "../../assets/condo-photo1.png"
import propertyPhoto2 from "../../assets/condo-photo2.png"

const PropertyContainer = () => {
    // Sample data array
    const [propertiesData, setPropertiesData] = useState({
        property1: {
            id: "1",
            name: "Estate Alpha",
            location: "Greenwich, London",
            image: propertyPhoto,
            units: [
                { id: 1, name: "The Buckingham Suite", address: '123 Main St', location: 'Downtown', price: 1200000, size: 1000 },
                { id: 1, name: "The Buckingham Suite", address: '123 Main St', location: 'Downtown', price: 1200000, size: 1000 },
            ],
            parkingSpots: [
                { id: 1, level: 2, size: 200, price: 50000, slotNumber: 12 },
            ],
            lockers: [
                { id: 1, location: 'Basement', size: 50, number: 3 },
            ],
        },
        property2: {
            id: "2",
            name: "Villa Beta",
            location: "Beverly Hills, California",
            image: propertyPhoto1,
            units: [
                { id: 1, name: "Sunset Manor", address: '456 Grand Ave', location: 'Hills', price: 2500000, size: 1500 },
            ],
            parkingSpots: [
                { id: 1, level: 1, size: 250, price: 75000, slotNumber: 8 },
            ],
            lockers: [
                { id: 1, location: 'Sub-basement', size: 60, number: 5 },
            ],
        },
        property3: {
            id: "3",
            name: "Condo Gamma",
            location: "Manhattan, New York",
            image: propertyPhoto2,
            units: [
                { id: 1, name: "The Empire Loft", address: '789 Broadway St', location: 'Midtown', price: 900000, size: 800 },
            ],
            parkingSpots: [
                { id: 1, level: 3, size: 180, price: 60000, slotNumber: 20 },
            ],
            lockers: [
                { id: 1, location: 'Lower Level', size: 40, number: 7 },
            ],
        }
    });

    return (
        <div className="d-flex flex-column align-items-center" style={{
            width: '30rem', maxHeight: '80vh',
            overflowY: 'auto',
            width: '30rem',
        }}>
            <h1 >Properties</h1>
            {Object.values(propertiesData).map((property) => (
                <PropertyCard key={property.id} property={property} />
            ))}
        </div>
    );
};

export default PropertyContainer;
