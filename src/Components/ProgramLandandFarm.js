import React from "react";
import { Container, Row, Col } from "react-bootstrap";


export default function ProgramLandandFarm() {
    return (
        <div>
            <Row className="m-3">
                <Col>
                    <img src="./assets/images/Beekeeping.jpg" className="lf-pic img-responsive" />
                </Col>
                <Col>
                    <img src="./assets/images/ourvillage-136.jpg" className="lf-pic" />
                </Col>
                <Col>
                    <img src="./assets/images/ourvillage-118.jpg" className="lf-pic" />
                </Col>

            </Row>
            <Row className="m-3 igp-youth">
                <Col className="igp-subtitle">
                    <h2>Land & Farm</h2>
                </Col>
                <Col xs={12} md={6}>
                    <ul className="igp-list">
                        <li className="igp-list-item">
                        Stewards of our lands: community members help keep the farm running. They help with the farm animals, the orchard, and with projects around the farm. 
                        </li>
                        <li className="igp-list-item">
                        Family work parties
                        </li>
                        <li className="igp-list-item">
                        Seasonal gatherings/festivals
                        </li>
                    </ul>
                </Col>
            </Row>
            <Row className="m-3">
                <Col>
                    <img src="./assets/images/ourvillage-56.jpg" className="lf-pic img-responsive" />
                </Col>
                <Col>
                    <img src="./assets/images/ourvillage-113.jpg" className="lf-pic" />
                </Col>
                <Col>
                    <img src="./assets/images/ourvillage-65.jpg" className="lf-pic" />
                </Col>

            </Row>
            <Row className="m-3">
                <Col>
                    <img src="./assets/images/ourvillage-80.jpg" className="lf-pic img-responsive" />
                </Col>
                <Col>
                    <img src="./assets/images/ourvillage-108.jpg" className="lf-pic" />
                </Col>
                <Col>
                    <img src="./assets/images/ourvillage-34.jpg" className="lf-pic" />
                </Col>

            </Row>
        </div>
    )
}