import React from "react";
import { Container, Row, Col } from 'react-bootstrap';

export default function HomeLowerHero() {
    return (
        <Container className="home-lower-hero-container" fluid>
        <Row>
          <Col >
            <h2 className="home-lower-hero-title"><strong>"We will use the land to teach local ecology and how we can work to preserve it."
              </strong></h2>
            <h3 className="home-lower-hero-subtitle"><strong>ANNIE THOMAS | EXECUTIVE DIRECTOR</strong></h3>
          </Col>
        </Row>
      </Container>
    )
}