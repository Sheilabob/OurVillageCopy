import React from "react";
import { Container, Row, Col } from 'react-bootstrap';

export default function HomeVolunteerHero() {
    return (
        <Container className="homehero-volunteer-container" fluid>
        <Row>
          <Col>
            <h2 className="homehero-volunteer-title"><strong>Volunteer</strong></h2>
            <button className="ov-buttons">Join Us!</button>
            <h2 className="homehero-volunteer-title"><strong>Donate</strong></h2>
            <button className="ov-buttons">Donate</button>
          </Col>
        </Row>
      </Container>
    )
}