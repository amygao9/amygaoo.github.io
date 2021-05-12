import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './Navbar.css';
import '../../App.css'
function MyNavbar() {
  return (
    <>
    <Navbar collapseOnSelect fixed="top" expand="md" className="animate-navbar nav-theme justify-content-between px-md-4">
        <Navbar.Brand className = 'nav-links bold' href="home">
        <strong>&nbsp; A.G</strong>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto ">
                <Nav.Link className = 'nav-links px-4' href="home">Home</Nav.Link>
                <Nav.Link className = 'nav-links px-4' href="about">About</Nav.Link>
                <Nav.Link className = 'nav-links px-4' href="projects">Projects</Nav.Link> 
                <Nav.Link className = 'nav-links px-4' href="skills">Skills</Nav.Link>
                {/* <Nav.Link href="#experience">Experience</Nav.Link> */}
            
            </Nav>
            
        </Navbar.Collapse>
    </Navbar>
    </>
  );
}

export default MyNavbar;
