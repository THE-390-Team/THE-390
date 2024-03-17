import React, { useEffect } from 'react';
import PropertyCard from './PropertyCard';
import { useState } from "react";
import { useProperty } from "../../utils/hooks/PropertyContext"
import propertyPhoto from "../../assets/condo-photo.jpg"
import propertyPhoto1 from "../../assets/condo-photo1.png"
import propertyPhoto2 from "../../assets/condo-photo2.png"
import "../../index.css"

const PropertyContainer = () => {

    const { properties, fetchAllProperties } = useProperty();
    // Sample data array
    const [propertiesData, setPropertiesData] = useState({
    });

    // get information on db properties
    useEffect(() => {
        fetchAllProperties()
    }, []);

    return (
        <div className="grid-container">
            {Object.values(properties).map((property) => (
                <PropertyCard key={property.id} property={property} />
            ))}
        </div>
    );
};

export default PropertyContainer;
