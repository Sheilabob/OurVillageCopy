import React from "react";
import { Container, Row, Col } from "react-bootstrap";


export default function OurAnimals() {
    return (
        <div>
            <Row className="m-5">
                <h1>Our Animals</h1>
            </Row>
            <Row className="m-3">
                <Col>
                    <img src="./assets/images/Carmella.jpg" className="kid-pic img-responsive" />
                    <h4 className="animal-label">Carmella</h4>
                </Col>
                <Col>
                    <img src="./assets/images/goats.jpg" className="kid-pic" />
                    <h4 className="animal-label">Salsa, Chips, and Bernice</h4>

                </Col>
                <Col>
                    <img src="./assets/images/Our+Flock.jpg" className="kid-pic" />
                    <h4 className="animal-label">Sriracha and his flock of hens</h4>

                </Col>

            </Row>
        </div>
    )
}