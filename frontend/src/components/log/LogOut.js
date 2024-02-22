
import React, { useContext, useEffect } from "react";
import axiosInstance from "../../api/axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../utils/hooks/AuthContext";


const LogOut = () => {
  const history = useNavigate();
  const { setIsLoggedIn, setAuthUser } = useAuth();


  useEffect(() => {
    const response = axiosInstance.post("user-profile/logout/blacklist/", {
      refresh_token: localStorage.getItem("refresh_token"),
    });

    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    axiosInstance.defaults.headers["Authorization"] = null;
    setIsLoggedIn(false);
    setAuthUser("");
    history("/login");
  });

  return <div>logout</div>
};

export default LogOut;
