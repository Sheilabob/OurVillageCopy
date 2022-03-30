import React from "react";
import { Container, Row, Col } from "react-bootstrap";


export default function IntergenerationalProgramsTopEC() {
    return (
        <div className="igp">
            <Row className="m-3">
                    <h1 className="m-2 igp-title">
                        Intergenerational Programs
                    </h1>
            </Row>
            <Row className="m-1">
                <Col className="igp-subtitle">
                    <h2>Early Childhood</h2>
                </Col>
                <Col xs={12} md={6}>
                    <ul className="igp-list">
                        <li className="igp-list-item">
                        Sprouts: parent-child classes 
                        </li>
                        <li className="igp-list-item">
                        Sego Lily Children’s Garden preschool
                        </li>
                        <li className="igp-list-item">
                        Preschool music and movement classes
                        </li>
                        <li className="igp-list-item">
                        Pregnancy, birth and new family support
                        </li>
                    </ul>
                </Col>
            </Row>
        </div>
    )
}