import React from "react";
import { Container, Row, Col } from "react-bootstrap";


export default function OurAnimalsDonation() {
    return (
        <div>
            <Row> <br /></Row>
            <Row className="m-3 animal-donation">
                <h5>Interested in donating to the monthly care of our farm animals? Please follow the link and specify on the payment page how you would like your donation dollars spent.</h5>
            </Row>
            <Row> <br /></Row>

            <Row className="m-3">
                <Col></Col>
                <Col><button className="donate-button animal-button">Animal Care Donation</button>
                </Col>
                <Col></Col>
            </Row>
            <Row> <br /></Row>
        </div>
    )
}