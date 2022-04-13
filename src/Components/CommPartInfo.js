import React from "react";
import { Container, Row, Col } from "react-bootstrap";


export default function CommPartInfo() {
    return (
        <Container className="m-5">
            <Row className="m-1 partner-font-size">
                <Col md={5}>
                    <h3 className="m-1">Moab Community Garden</h3>
                    <img src="./assets/images/mocom+day+1.jpeg" className="partner-pic m-1" />
                    <p className="top-space-needed">Our Village is proud to be one of the locations hosting Moab Community Gardens (MoCom). They transformed the old location of Farmer Ray's garden by our orchard from an empty weed lot, back into a garden oasis! </p>
                    <p>MoCom is a community garden with plots available for folks who need some land to grow on! Contact us at mocomgardens@gmail.com for details. MoCom’s Mission:</p>
                    <ul className="igp-list">
                        <li className="igp-list-item">
                        ❖ Create sustainable, organic community gardens for the benefit of Moab and Spanish Valley residents by —- 
                        </li>
                        <li className="igp-list-item">
                        ❖ Providing plots of irrigable land to individuals or families with limited access to gardening resources .  
                        </li>
                        <li className="igp-list-item">
                        ❖ Creating welcoming community spaces that are open and safe for people of all abilities and backgrounds.
                        </li>
                    </ul>
                    <img src="./assets/images/IMG_0765.jpg" className="partner-pic" />

                </Col>
                <Col md={1}></Col>
                <Col md={6}>
                    <h3 className="m-1">Farm Yard</h3>
                    <img src="./assets/images/Tree+Pruning+(2).jpg" className="partner-pic m-1" />
                    <p className="top-space-needed">Jess Oldham is the Steward of Our Village’s orchard that was a pride and joy of Farmer Ray’s. She helps to keep the trees in good health and to teach our local community how to prune, thin, and maintain the health of our fruit trees through community workshops at Our Village. </p>
                    <p>Farm Yard- We farm our yards and want you to also. Since 2014 we have been helping local farmers and gardeners grow fruits, vegetables and flowers. Along with continuing to offer support to the local growing community, we currently have a <a href="https://farmyard.co/flowers">micro flower farm</a> delivering fresh-cut flowers and specialty bouquets.</p>
                    <p>We feel this ability to grow food is in all of us -  an intrinsic knowledge that we just have to dig for a bit. We support you in that journey and share what we have learned from our own experience.</p>
                    <p>435/260-2582 farmyardmoab@gmail.com</p>
                </Col>
            </Row>
        </Container>
    )
}