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
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <LinkContainer to="/create-unit"><NavDropdown.Item> Create Unit Profile </NavDropdown.Item></LinkContainer>
                <LinkContainer to="/create-parking"><NavDropdown.Item> Create Parking Profile </NavDropdown.Item></LinkContainer>
                <LinkContainer to="/create-locker"><NavDropdown.Item> Create Locker Profile </NavDropdown.Item></LinkContainer>
                <NavDropdown.Item>Another action</NavDropdown.Item>
                <NavDropdown.Item>Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav className="ms-auto">
              {isLoggedIn ? <LinkContainer to="/profile">
                <Nav.Link>
                  <i className="fa-sharp fa-solid fa-house"></i> Profile
                </Nav.Link>
              </LinkContainer>
                : ""}
              {isLoggedIn ? <LinkContainer to="/logout" >
                <Nav.Link data-testid="logout">
                  <i className="fas fa-user"></i> LOGOUT
                </Nav.Link>
              </LinkContainer> : ""}
            </Nav>

          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
