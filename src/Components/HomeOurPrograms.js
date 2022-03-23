import React from "react";
import { Container, Row, Col } from "react-bootstrap";


export default function HomeOurPrograms() {
    return (
        <Container className="m-5">
            <Row className="m-5">
                <h1>Our Programs</h1>
            </Row>
            <Row className="m-5">
                <Col className="m-5">
                    <h3>Family Support/Early Childhood</h3>
                    <h5>We offer new parents support and give them vital family skills during the key prevention years 0-5. We offer a variety of important family programs such as parenting classes, nutrition support, parent and child classes, etc.  This provides parents a space to make community connections that build a bridge of continued support and connection to resources through all stages of childhood through adulthood.</h5>
                </Col>
                <Col className="m-5">
                <h3>Youth</h3>
                <h5>We provide a safe space for community youth to gather and connect. A place where one can learn practical life skills and hands-on activities: textiles, woodworking, music, yoga, cooking, theater, childcare, animal care, gardening, etc.  Our focus is to build healthy relationships with our youth. We aim to teach/mentor life skills and following tasks through to completion.</h5>
                </Col>
            </Row>
            <Row className="m-5">
                <Col className="m-5">
                    <h3>Elders</h3>
                    <h5>We invite the elders of our community to offer their skills and knowledge, not just to the youth, but to all of us here at Our Village Community Center. We recognize the great gifts our senior citizens have to pass along through their life long journey and lessons. We offer a place for them to teach these skills: woodworking, farming, basket making, pottery, beekeeping, oral storytelling, etc. Here at Our Village they have a space to be active and contributing members of our community and share their wisdom and skills in a nurturing and loving atmosphere. </h5>
                </Col>
                <Col className="m-5">
                <h3>Land & Farm</h3>
                <h5>Stewards of our lands: community members help keep the farm running. They help with the farm animals, the orchard, and with projects around the farm.  We host family work parties and seasonal gatherings/festivals.</h5>
                </Col>
            </Row>

        </Container>
    )
}