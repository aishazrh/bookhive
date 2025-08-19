import { Card, Row, Col, Image, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Browse from "../pages/browse";

import Gatsby from '../images/gatsby.jpg';

export default function Fitzgerald() {
    return (
        <section>
            <header>
                <Browse />
                <div className="book-padding">
                    <Row>
                        <Col sm={3}>
                            <Card>
                                <Card.Body>
                                    <Image src={Gatsby} style={{ height: "400px", width: "255px" }} />
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={9}>
                            <div>
                                <h1><strong>The Great Gatsby</strong></h1>
                                <h4>F. Scott Fitzgerald</h4>
                                <hr />
                                <h5>Description:</h5>
                                <p>
                                    The Great Gatsby, F. Scott Fitzgerald's third book, stands as the 
                                    supreme achievement of his career. This exemplary novel of the Jazz 
                                    Age has been acclaimed by generations of readers. The story of the 
                                    fabulously wealthy Jay Gatsby and his love for the beautiful Daisy 
                                    Buchanan, of lavish parties on Long Island at a time when The New 
                                    York Times noted "gin was the national drink and sex the national 
                                    obsession," it is an exquisitely crafted tale of America in the 1920s.
                                </p>
                                <hr />
                                <Row>
                                    <Col sm={3}>
                                        <h6>Tags:</h6>
                                        <ul>
                                            <li>
                                                Fiction
                                            </li>
                                            <li>
                                                School
                                            </li>
                                            <li>
                                                Historical Fiction
                                            </li>
                                            <li>
                                                Romance
                                            </li>
                                            <li>
                                                Literature
                                            </li>
                                        </ul>
                                    </Col>
                                    <Col sm={1}>
                                        <div style={{ width: "1px", height: "13rem", backgroundColor: "black" }}></div>
                                    </Col>
                                    <Col sm={4} style={{ textAlign: "left" }}>
                                        <h6>This edition</h6>
                                        <hr />
                                        <Row>
                                            <Col sm={6}>
                                                Format
                                            </Col>
                                            <Col sm={6}>
                                                180 pages
                                            </Col>
                                        </Row>
                                        <hr />
                                        <Row>
                                            <Col sm={6}>
                                                Published
                                            </Col>
                                            <Col sm={6}>
                                                1925
                                            </Col>
                                        </Row>
                                        <hr />
                                        <Row>
                                            <Col sm={6}>
                                                Language
                                            </Col>
                                            <Col sm={6}>
                                                English
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col sm={1}>
                                        <div style={{ width: "1px", height: "13rem", backgroundColor: "black" }}></div>
                                    </Col>
                                    <Col sm={3} style={{ textAlign: "center" }}>
                                        <Card style={{ marginTop: "20px", marginBottom: "20px" }}>
                                            <Card.Body>
                                                <h6>
                                                    Pricing
                                                </h6>
                                                <h4>
                                                    Rp99.999
                                                </h4>
                                            </Card.Body>
                                        </Card>
                                        <Link to="/browse/fiction/gatsby/checkout">
                                            <Button type="checkout">Buy Now</Button>
                                        </Link>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </div>
            </header>
        </section>
    )
}