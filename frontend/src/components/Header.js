import React, { useContext } from "react";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react"
import { useNavigate } from "react-router-dom";
import axiosInstance from "../api/axios";
import { useAuth } from "../utils/hooks/AuthContext";
import NavigationBar from "./nagivationBar/NavigationBar";
import NavigationBarr from "./nagivationBar/NavigationBarr";



const Header = () => {
  const { isLoggedIn } = useAuth();
  return (
    <>
      {/* <NavigationBar /> */}
      <NavigationBarr />
    </>

  );
};

export default Header;
