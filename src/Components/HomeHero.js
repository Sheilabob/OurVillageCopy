import React from "react";
import { Container, Row, Col } from 'react-bootstrap';

export default function HomeHero() {
    return (
        <Container className="homehero-container" fluid>
        <Row>
          <Col>
            <h1 className="homehero-title"><strong>Building a Lifelong Love of Learning, Health and Sustainability</strong></h1>
          </Col>
        </Row>
      </Container>
    )
}