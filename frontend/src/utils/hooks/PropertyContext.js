import React, { createContext, useContext, useState } from 'react';
import axiosInstance from '../../api/axios';

//temporary import until not hard coded
import propertyPhoto from "../../assets/condo-photo.jpg"
import propertyPhoto1 from "../../assets/condo-photo1.png"
import propertyPhoto2 from "../../assets/condo-photo2.png"
const PropertyContext = createContext();

export const useProperty = () => useContext(PropertyContext);

export const PropertyProvider = ({ children }) => {

    //TODO hard coded until the api is confirmed with db content as well
    const [properties, setProperties] = useState({
        // property1: {
        //     id: "1",
        //     company: "",
        //     name: "Estate Alpha",
        //     location: "Greenwich, London",
        //     image: propertyPhoto,
        //     units: [
        //         { id: 1, name: "The Buckingham Suite", address: '123 Main St', location: 'Downtown', price: 1200000, size: 1000 },
        //         { id: 1, name: "The Buckingham Suite", address: '123 Main St', location: 'Downtown', price: 1200000, size: 1000 },
        //     ],
        //     parkingSpots: [
        //         { id: 1, level: 2, size: 200, price: 50000, slotNumber: 12 },
        //     ],
        //     lockers: [
        //         { id: 1, location: 'Basement', size: 50, number: 3, price: 10000 },
        //     ],
        // },
        // property2: {
        //     id: "2",
        //     company: "",
        //     name: "Villa Beta",
        //     location: "Beverly Hills, California",
        //     image: propertyPhoto1,
        //     units: [
        //         { id: 1, name: "Sunset Manor", address: '456 Grand Ave', location: 'Hills', price: 2500000, size: 1500 },
        //     ],
        //     parkingSpots: [
        //         { id: 1, level: 1, size: 250, price: 75000, slotNumber: 8 },
        //     ],
        //     lockers: [
        //         { id: 1, location: 'Sub-basement', size: 60, number: 5, price: 20000 },
        //     ],
        // },
        // property3: {
        //     id: "3",
        //     company: "",
        //     name: "Condo Gamma",
        //     location: "Manhattan, New York",
        //     image: propertyPhoto2,
        //     units: [
        //         { id: 1, name: "The Empire Loft", address: '789 Broadway St', location: 'Midtown', price: 900000, size: 800 },
        //     ],
        //     parkingSpots: [
        //         { id: 1, level: 3, size: 180, price: 60000, slotNumber: 20 },
        //     ],
        //     lockers: [
        //         { id: 1, location: 'Lower Level', size: 40, number: 7, price: 15000 },
        //     ],
        // }
    });
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
        storage_units: []
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

    const fetchProperty = async (id) => {
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
        <PropertyContext.Provider value={{ properties, fetchAllProperties, addProperty, updateProperty, deleteProperty, property, setProperty, fetchProperty }}>
            {children}
        </PropertyContext.Provider>
    );
};
