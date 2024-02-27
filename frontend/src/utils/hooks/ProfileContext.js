import { useState, useContext, createContext } from 'react';
import axiosInstance from '../../api/axios';
import profilepic from "../../assets/pp.jpg"

const ProfileContext = createContext();

export function useProfile() {
    return useContext(ProfileContext);
}
export function ProfileProvider(props) {

    const [profileInfo, setProfileInfo] = useState({
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

    const getProfileInformation = async () => {
        axiosInstance
            .get("user-profile/profile/")
            .then((response) => {
                console.log(response);
                setProfileInfo({
                    avatar: profilepic,
                    first_name: response.data.first_name,
                    last_name: response.data.last_name,
                    email: response.data.email,
                    phone_number: response.data.phone_number,
                    address: response.data.address,
                    city: response.data.city,
                    province: response.data.province,
                    postal_code: response.data.postal_code,
                });
                console.log(response.data);
            })
            .catch((error) => {
                console.error("Error fetching user profile:", error.message);
            });
    }
   
    const setProfileInformation = (profile) => {
        setProfileInfo(profile);
    }
    
    
    return (
        <ProfileContext.Provider value={{ profileInfo, getProfileInformation, setProfileInformation}} > {props.children} </ProfileContext.Provider>
    )
}