import React, { createContext, useContext, useState } from 'react';
import axiosInstance from '../../api/axios';

//temporary import until not hard coded
import propertyPhoto from "../../assets/condo-photo.jpg"
import propertyPhoto1 from "../../assets/condo-photo1.png"
import propertyPhoto2 from "../../assets/condo-photo2.png"
const PropertyContext = createContext();

export const useProperty = () => useContext(PropertyContext);

export const PropertyProvider = ({ children }) => {

    const [properties, setProperties] = useState({});
    const [property, setProperty] = useState({
        id: -1,
        company: -1,
        num_condo_units: -1,
        num_parking_units: -1,
        num_storage_units: -1,
        address: "",
        city: "",
        province: "",
        postal_code: "",
        condo_units: [],
        parking_units: [],
        storage_units: [],
        image: ""
    }
    );

    //TODO check if this is good to fetch all properties
    const fetchAllProperties = async () => {
        axiosInstance
            .get(`/properties/property-profile/`)
            .then((response) => {
                console.log(response);
                setProperties(response.data);
                console.log(response.data);
                console.log(properties);
            })
            .catch((error) => {
                console.error("Error fetching property profile:", error.message);
            });
    };

    //to be used when seeing propperties on the compnay dashboard
    const fetchPropertyById = async (id) => {
        axiosInstance

            .get(`/properties/property-profile/${id}`)
            .then((response) => {
                console.log(response);
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
                    image: response.data.image
                });
                console.log(response.data);
            })
            .catch((error) => {
                console.error("Error fetching user profile:", error.message);
            });
    };

    const addProperty = async (property) => {
        // Implement adding a new property
    };

    const updateProperty = async (id, updatedProperty) => {
        // Implement updating a property
    };

    const deleteProperty = async (id) => {
        // Implement deleting a property
    };

    return (
        <PropertyContext.Provider value={{ properties, fetchAllProperties, addProperty, updateProperty, deleteProperty, property, setProperty, fetchPropertyById }}>
            {children}
        </PropertyContext.Provider>
    );
};
