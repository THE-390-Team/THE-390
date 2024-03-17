import { useState, useContext, createContext } from 'react';
import axiosInstance from '../../api/axios';

const AuthContext = createContext();

export function useAuth() {
    return useContext(AuthContext);
}
export function AuthProvider(props) {

    const [authUser, setAuthUser] = useState({
        first_name: '',
        last_name: '',
    })
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const checkAuthState = () => {
        const access_token = localStorage.getItem("access_token");
        if (access_token) {
            axiosInstance.defaults.headers["Authorization"] = "JWT " + access_token;
            setIsLoggedIn(true); // Assuming you have a state to manage this
            setAuthUser(localStorage.getItem("ID")); // Update accordingly if you store the username or email
        } else {
            // No token found, user is not logged in
            setIsLoggedIn(false);
            setAuthUser(null);
        }
    };
    
    const value = {
        authUser,
        setAuthUser,
        isLoggedIn,
        setIsLoggedIn,
        checkAuthState
    }

    return (
        <AuthContext.Provider value={value} > {props.children} </AuthContext.Provider>
    )
}