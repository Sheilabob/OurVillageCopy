import React from "react";
import { 
  Container,
  Navbar, 
  Nav,
  NavbarBrand
} from "react-bootstrap";
// import {NavLink, Link} from "react-router-dom"

const Header = () => {
  return (
    <Navbar className="custom-navbar" transparent bg="light" sticky="top" expand="lg">
      <Container fluid>  
        <NavbarBrand href="/">
            <img className='navbar-logo' src="" alt="Our Village Logo"/>
        </NavbarBrand>     
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="navBarLinks">
                {/* <NavLink to="/aboutPage" className="items-navigation"> */}
                    Our Programming
                    {/* </NavLink> */}
                {/* <NavLink to="workWithUsPage" className="items-navigation"> */}
                    Community Partners
                    {/* </NavLink> */}
                                    {/* <NavLink to="/aboutPage" className="items-navigation"> */}
                                    Future Programming
                    {/* </NavLink> */}
                {/* <NavLink to="/aboutPage" className="items-navigation"> */}
                Our Animals
                    {/* </NavLink> */}
                {/* <NavLink to="/aboutPage" className="items-navigation"> */}
                Our Days
                    {/* </NavLink> */}

            </Nav>
                {/* <Link to="/donatePage"> */}
                    <button>Donate</button>
                {/* </Link> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;