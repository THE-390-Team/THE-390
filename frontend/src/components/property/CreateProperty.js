import React from 'react'
import PropertyCard from './PropertyCard'
import PropertyContainer from './PropertyContainer'
import PropertyPage from './PropertyPage'
import propertyPhoto from "../../assets/condo-photo.jpg"

const Property = () => {
    const property = {
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
    }
  return (
    <div><PropertyPage property={property}/></div>
  )
}

export default Property