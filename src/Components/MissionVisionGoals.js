import React from "react";
import { Container, Row } from "react-bootstrap";


export default function MissionVisionGoals() {
    return (
        <Container className="m-5">
            <Row className="m-5">
                    <h1 className="m-2 mvg-title">
                        Mission
                    </h1>
                    <p className="m-2 mvg-words">
                    As stewards of the land,</p><p className="m-2 mvg-words">Our Village Community Center cultivates</p><p className="m-2 mvg-words">togetherness and life-long learning</p><p className="m-2 mvg-words">for all ages.
                    </p>
            </Row>
            <Row className="m-5">
                    <h1 className="m-2 mvg-title">
                        Our Vision
                    </h1>
                    <p className="m-2 mvg-words">
                    A sustainable healthy community</p><p className="m-2 mvg-words">through a new paradigm of</p><p className="m-2 mvg-words">intergenerational connections. 
                    </p>
            </Row>
            <Row className="m-5">
                    <h1 className="m-2 mvg-title">
                        Goals
                    </h1>
                    <p className="m-2 mvg-words">
                    We strive for a village-like, diverse atmosphere</p><p className="m-2 mvg-words">where the community comes to learn various</p><p className="m-2 mvg-words">skills and experience nature firsthand.
                    </p>
            </Row>
        </Container>
    )
}