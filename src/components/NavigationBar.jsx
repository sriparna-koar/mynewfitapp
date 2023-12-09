// import React from 'react';
// import { Navbar, Container, Nav } from 'react-bootstrap';
// // import './NavigationBar.css'; // Import your CSS file
// import './NavigationBar.css';
// export default function NavigationBar() {
//   return (
//     <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="navbar">
//       <Container>
        
//         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//         <Navbar.Collapse id="responsive-navbar-nav">
//           <Nav className="me-auto justify-content-between w-100">
//           <Navbar.Brand href="/">Home</Navbar.Brand>
//           <Nav.Link href="/addnotes">Add notes</Nav.Link>
//             <Nav.Link href="/calorie">Calorie Tracker</Nav.Link>
//             <Nav.Link href="/exercisedetail">Exercise Detail</Nav.Link>
//             <Nav.Link href="/exerciseschedule">Exercise Schedule</Nav.Link>
//             {/* <Nav.Link href="/exercisedemo">Exercise Demo</Nav.Link> */}
//             <Nav.Link href="/notification">Notification Bar</Nav.Link>
//           </Nav>
          
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';
import './NavigationBar.css'; // Import your CSS file

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
            {/* <NavLink className="nav-link" to="/exercisedemo">Exercise Demo</NavLink> */}
            <NavLink className="nav-link" to="/notification">Notification Bar</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
