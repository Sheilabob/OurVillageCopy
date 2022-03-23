import React from "react";
import { 
  Container,
  Navbar, 
  Nav,
  NavbarBrand,
  Row,
  Col
} from "react-bootstrap";
// import {NavLink, Link} from "react-router-dom"

const Header = () => {
  return (
    <Navbar className="custom-navbar" transparent bg="light" sticky="top" expand="lg">
      <Container fluid>  
        <NavbarBrand href="/">
            <h4>Our Village Community Center</h4>
        </NavbarBrand>     
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="navBarLinks">
                <Row>
                    <Col>
                {/* <NavLink to="/aboutPage" className="items-navigation"> */}
                    Our Programming
                    {/* </NavLink> */}
                    </Col><Col>
                {/* <NavLink to="workWithUsPage" className="items-navigation"> */}
                    Community Partners
                    {/* </NavLink> */}
                    </Col><Col>
                                    {/* <NavLink to="/aboutPage" className="items-navigation"> */}
                                    Future Programming
                    {/* </NavLink> */}
                    </Col><Col>
                {/* <NavLink to="/aboutPage" className="items-navigation"> */}
                Our Animals
                    {/* </NavLink> */}
                    </Col><Col>
                {/* <NavLink to="/aboutPage" className="items-navigation"> */}
                Our Days
                    {/* </NavLink> */}
                    </Col>
                    </Row>
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