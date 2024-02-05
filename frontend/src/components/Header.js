import React from 'react'
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'


const Header = () => {
  return (
    <header>
      <Navbar expand="sm" className="bg-body-tertiary">
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>CondoCare</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <LinkContainer to='/login'>
                <Nav.Link><i className="fas fa-user"></i> LOGIN</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/profile'>
                <Nav.Link ><i class="fa-sharp fa-solid fa-house"></i> Profile</Nav.Link>
              </LinkContainer>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item >Action</NavDropdown.Item>
                <NavDropdown.Item >Another action</NavDropdown.Item>
                <NavDropdown.Item >Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item >Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header >
  )
}

export default Header