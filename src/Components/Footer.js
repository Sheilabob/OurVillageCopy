import React from 'react';
import { 
    Container, 
    Row, 
    Col,
    Button
} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {

    return (
        <footer className="site-footer">
            <Container>
                <Row> 
                    <Col xs={12} lg={6} className="m-5">
                     
                            <h3 className="menu-footer">Menu</h3>
                    
                    <h3 className="mb-3">Follow Us</h3>
                        <a className="social-btn" href="https://www.facebook.com/OurVillageMoab" target="https://www.facebook.com/OurVillageMoab">
                            <FontAwesomeIcon icon={faFacebook} size="2x"/>
                        </a>
                       
                        <a className="social-btn" href="https://www.instagram.com/ourvillagemoab/" target="https://www.instagram.com/ourvillagemoab/">
                            <FontAwesomeIcon icon={faInstagram} size="2x"/>
                        </a>
                        
                    </Col>    
                    <Col className="m-5">
                   

                    <h5>OVCC</h5>
                    <h5>721 N 500 W</h5>
                    <h5>Moab, UT 84532</h5>

                    
                    <h5>(435)260-0294</h5>

                    <a className="email-text" href="mailto:ourvillagemoab@gmail.com" target="_blank">ourvillagemoab@gmail.com <FontAwesomeIcon icon={faEnvelope} size="2x"  /></a>
                    </Col>        
                   
                        <hr/>
                </Row>
                <Row>
                    <Col className="m-5 ovcc-footer">
                    <h3>Our Village Community Center is a 501c(3) Tax-Exempt Nonprofit</h3>
                    </Col>
                </Row>
              
            </Container>
        </footer>
    );
}