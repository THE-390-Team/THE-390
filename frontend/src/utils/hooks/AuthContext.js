import { useState, useContext, createContext } from 'react';

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

    const value = {
        authUser,
        setAuthUser,
        isLoggedIn,
        setIsLoggedIn
    }

    return (
        <AuthContext.Provider value={value} > {props.children} </AuthContext.Provider>
    )
}