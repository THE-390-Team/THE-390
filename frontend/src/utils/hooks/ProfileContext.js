import { useState, useEffect, useContext, createContext } from 'react';

const profileContext = createContext();

export function useProfile() {
    return useContext(profileContext);
}
export function AuthProvider(props) {

    const [profile, setProfile] = useState({
        avatar: "",
        first_name: "",
        last_name: "",
        email: "",
        phone_number: "",
        address: "",
        city: "",
        province: "",
        registration_key: "",
        postal_code: "",
    });

    const  updateUser = (user) => {
        //implement the update with the new api
    };

    const updateProfile = (profile) =>{
        // implement the update with the new api
    };

    return (
        <AuthContext.Provider value={{profile, updateProfile}} > {props.children} </AuthContext.Provider>
    )
}