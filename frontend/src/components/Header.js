import React, { useContext } from "react";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react"
import { useNavigate } from "react-router-dom";
import axiosInstance from "../api/axios";
import { useAuth } from "../utils/hooks/AuthContext";



const Header = () => {
  const { isLoggedIn } = useAuth();
  return (
    <header>
      <Navbar expand="sm" className="bg-body-tertiary">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>CondoCare</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            
            <Nav className="me-auto">
              {isLoggedIn ? "" : <LinkContainer to="/login">
                <Nav.Link>
                  <i className="fas fa-user"></i> LOGIN
                </Nav.Link>
              </LinkContainer>}
            </Nav>
            
            <Nav className="ms-auto">
              {isLoggedIn ?
                <NavDropdown data-testid="dropdown" title="Dropdown" id="basic-nav-dropdown">
                  <LinkContainer to="/profile"><NavDropdown.Item>Profile</NavDropdown.Item></LinkContainer>
                  <LinkContainer to="/dashboard"><NavDropdown.Item>Dashboard</NavDropdown.Item></LinkContainer>
                  <NavDropdown.Divider />
                  <LinkContainer data-testid="logout" to="/logout"><NavDropdown.Item>LOGOUT</NavDropdown.Item></LinkContainer>
                </NavDropdown>
                : ""}
            </Nav>

          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
