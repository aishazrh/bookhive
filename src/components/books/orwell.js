import { Card, Row, Col, Image, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Browse from "../pages/browse";

import George from '../images/1984.jpg';

export default function Orwell() {
    return (
        <section>
            <header>
                <Browse />
                <div className="book-padding">
                    <Row>
                        <Col sm={3}>
                            <Card>
                                <Card.Body>
                                    <Image src={George} style={{ height: "400px", width: "255px" }} />
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={9}>
                            <div>
                                <h1><strong>1984</strong></h1>
                                <h4>George Orwell</h4>
                                <hr />
                                <h5>Description:</h5>
                                <p>
                                    A masterpiece of rebellion and imprisonment where war is peace freedom
                                    is slavery and Big Brother is watching. Thought Police, Big Brother,
                                    Orwellian - these words have entered our vocabulary because of George
                                    Orwell's classic dystopian novel 1984. The story of one man's Nightmare
                                    Odyssey as he pursues a forbidden love affair through a world ruled by
                                    warring states and a power structure that controls not only information
                                    but also individual thought and memory 1984 is a prophetic haunting tale.
                                </p>
                                <hr />
                                <Row>
                                    <Col sm={3}>
                                        <h6>Tags:</h6>
                                        <ul>
                                            <li>
                                                Classics
                                            </li>
                                            <li>
                                                Fiction
                                            </li>
                                            <li>
                                                Science Fiction
                                            </li>
                                            <li>
                                                Dystopia
                                            </li>
                                            <li>
                                                Politics
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
                                                368 pages
                                            </Col>
                                        </Row>
                                        <hr />
                                        <Row>
                                            <Col sm={6}>
                                                Published
                                            </Col>
                                            <Col sm={6}>
                                                2022
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
                                        <Link to="/browse/classics/1984/checkout">
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