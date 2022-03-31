import React from "react";
import { Container, Row, Col } from "react-bootstrap";


export default function IntergenYouth() {
    return (
        <div>
            <Row className="m-3">
                <Col>
                    <img src="./assets/images/kidsPic1.jpg" className="kid-pic img-responsive" />
                </Col>
                <Col>
                    <img src="./assets/images/kidsPic2.jpg" className="kid-pic" />
                </Col>
                <Col>
                    <img src="./assets/images/kidsPic3.jpg" className="kid-pic" />
                </Col>

            </Row>
            <Row className="m-3 igp-youth">
                <Col className="igp-subtitle">
                    <h2>Youth</h2>
                </Col>
                <Col xs={12} md={6}>
                    <ul className="igp-list">
                        <li className="igp-list-item">
                        Strings and Strums music class
                        </li>
                        <li className="igp-list-item">
                        Youth to youth mentoring programs
                        </li>
                        <li className="igp-list-item">
                        School and community field trips
                        </li>
                        <li className="igp-list-item">
                        Mother-daughter teen classes
                        </li>
                        <li className="igp-list-item">
                        Summer camps
                        </li>
                        <li className="igp-list-item">
                        Girl and Scout programming
                        </li><li className="igp-list-item">
                        High school internships
                        </li>
                    </ul>
                </Col>
            </Row>
        </div>
    )
}