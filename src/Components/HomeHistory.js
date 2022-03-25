import React from "react";
import { Container, Row, Col } from "react-bootstrap";


export default function HomeHistory() {
    return (
        <Container className="m-5">
            <Row className="m-5">
                <img src='./assets/images/ourvillageHistorySection.jpg' className='farm-pic'/>
            </Row>
            <Row className="m-5">
                <Col className="m-5 history-sec">
                    <h1 className="m-3">History</h1>
                    <h5 className="m-3">The five acres that is now the Our Village Community Center once belonged to “Farmer Ray” or the late Ray Alger. He lived on the farm and would invite Annie Thomas, her children and her preschool students to visit the farm. The children would visit the farm animals, pick apples and enjoy the land. Ray enjoyed his visits from the children each week before his passing and loved to watch the children use his farm for adventure time and exploration. He was happy to know his land would be preserved for the children of the Moab community.</h5>
                </Col>
                <Col className="m-5">
                    <img src='./assets/images/farmerRay.jpg' className="person-pic" />
                </Col>
            </Row>
        </Container>
    )
}