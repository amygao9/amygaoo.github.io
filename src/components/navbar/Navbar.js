import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import { NavLink } from "react-router-dom";
import './Navbar.css';
import '../../App.css'
function MyNavbar() {
  const toggleHome = () => {
    scroll.scrollToTop(100);
  }
  return (
    <>
    <Navbar collapseOnSelect fixed="top" expand="md" className="animate-navbar nav-theme justify-content-between px-md-4">
        <Navbar.Brand className = 'nav-links bold' to = '/' onClick = {toggleHome}>
        <strong>&nbsp; A.G</strong>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto ">
                <Link className = 'nav-links px-4' activeClass="active" to="home" spy={true} smooth={true} duration={100} offset={-55}>Home</Link>
                <Link className = 'nav-links px-4' activeClass="active" to="about" spy={true} smooth={true} duration={100} offset={-55}>About</Link>
                <Link className = 'nav-links px-4' activeClass="active" to="projects" spy={true} smooth={true} duration={100} offset={-55}>Projects</Link> 
                <Link className = 'nav-links px-4' activeClass="active" to="skills" spy={true} smooth={true} duration={100} offset={-55}>Skills</Link>
                <Link className = 'nav-links px-4' activeClass="active" to="contact" spy={true} smooth={true} duration={100} offset={-55}>Contact</Link>
                {/* <Nav.Link href="#experience">Experience</Nav.Link> */}
            
            </Nav>
            
        </Navbar.Collapse>
    </Navbar>
    </>
  );
}

export default MyNavbar;
