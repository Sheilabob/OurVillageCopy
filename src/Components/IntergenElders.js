import React from "react";
import { Container, Row, Col } from "react-bootstrap";


export default function IntergenElders() {
    return (
        <div className="igp">
            <Row className="m-1">
                <Col className="igp-subtitle">
                    <h2>Elders</h2>
                </Col>
                <Col xs={12} md={6}>
                    <ul className="igp-list">
                        <li className="igp-list-item">
                        Textile Classes
                        </li>
                        <li className="igp-list-item">
                        Story Time
                        </li>
                        <li className="igp-list-item">
                        Farming
                        </li>
                        <li className="igp-list-item">
                        Trade Skills
                        </li>
                        <li className="igp-list-item">
                        Health Talks
                        </li>
                    </ul>
                </Col>
            </Row>
        </div>
    )
}