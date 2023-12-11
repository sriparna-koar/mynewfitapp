
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';
import './NavigationBar.css'; 

export default function NavigationBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <NavLink className="nav-link" to="/">Home</NavLink>
      
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto justify-content-between w-100">
            <NavLink className="nav-link" to="/addnotes">Add notes</NavLink>
            <NavLink className="nav-link" to="/calorie">Calorie Tracker</NavLink>
            <NavLink className="nav-link" to="/exercisedetail">Exercise Detail</NavLink>
            <NavLink className="nav-link" to="/exerciseschedule">Exercise Schedule</NavLink>

            <NavLink className="nav-link" to="/notification">Notification Bar</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
