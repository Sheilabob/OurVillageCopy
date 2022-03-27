import React from "react";
import { 
  Container,
  Navbar, 
  Nav,
  NavbarBrand,
  Row,
  Col
} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import {NavLink, Link} from "react-router-dom"

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
                <Row><Col sm={8}>
                  <Row>
                    <Col>
                <NavLink to="/ourProgramming" className="head-link">
                    Our Programming
                    </NavLink>
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
                    </Col>
                    <Col className="head-far-right m-3">
                    <a className="head-social-btn" href="https://www.instagram.com/ourvillagemoab/" target="https://www.instagram.com/ourvillagemoab/">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                        <a className="head-social-btn" href="https://www.facebook.com/OurVillageMoab" target="https://www.facebook.com/OurVillageMoab">
                            <FontAwesomeIcon icon={faFacebook} />
                        </a>
                        {/* <Link to="/donatePage"> */}
                    <button className="donate-button">Donate</button>
                {/* </Link> */}
                    </Col>
                    </Row>
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;