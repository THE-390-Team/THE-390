// import React, { createContext, useContext, useState } from 'react';

// const PropertyContext = createContext();

// export const useProperty = () => useContext(PropertyContext);

// export const PropertyProvider = ({ children }) => {
//     const [properties, setProperties] = useState({});

//     const addProperty = (newProperty) => {
//         setProperties((prevProperties) => ({
//             ...prevProperties,
//             [nextId]: propertyWithId,
//         }));
//     };
    
//     const deleteProperty = (propertyId) => {
//         setProperties((prevProperties) => {
//             const updatedProperties = { ...prevProperties };
//             delete updatedProperties[propertyId];
//             return updatedProperties;
//         });
//     };

//     return (
//         <PropertyContext.Provider value={{ properties, addProperty, deleteProperty }}>
//             {children}
//         </PropertyContext.Provider>
//     );
// };
