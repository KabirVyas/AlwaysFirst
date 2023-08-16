import React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const NavbarComponent = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="/">ALWAYS FIRST</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav">
        <Nav className="mr-auto">
          <LinkContainer to="/update">
            <Nav.Link>Update</Nav.Link>
          </LinkContainer>
        </Nav>
        <Nav>
          <NavDropdown title="Analysis" id="analysis-dropdown">
            <LinkContainer to="/attrition">
              <NavDropdown.Item>Attrition</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to="/employees">
              <NavDropdown.Item>Employees</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to="/satisfaction">
              <NavDropdown.Item>Employee Satisfaction</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to="/vendor">
              <NavDropdown.Item>Vendor Analysis</NavDropdown.Item>
            </LinkContainer>
          </NavDropdown>
          <NavDropdown title="Prediction" id="prediction-dropdown">
            <LinkContainer to="/attrition-prediction">
              <NavDropdown.Item>Employee Attrition</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to="/onboarding-prediction">
              <NavDropdown.Item>Employee Onboarding</NavDropdown.Item>
            </LinkContainer>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComponent;
