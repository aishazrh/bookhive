import { Card, Row, Col, Image, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Browse from "../pages/browse";

import Dune from '../images/dune.jpeg';

export default function Herbert() {
    return (
        <section>
            <header>
                <Browse />
                <div className="book-padding">
                    <Row>
                        <Col sm={3}>
                            <Card>
                                <Card.Body>
                                    <Image src={Dune} style={{ height: "400px", width: "255px" }} />
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={9}>
                            <div>
                                <h1><strong>Dune</strong></h1>
                                <h4>Frank Herbert</h4>
                                <hr />
                                <h5>Description:</h5>
                                <p>
                                    Set on the desert planet Arrakis, Dune is the story of the boy 
                                    Paul Atreides, heir to a noble family tasked with ruling an 
                                    inhospitable world where the only thing of value is the “spice” 
                                    melange, a drug capable of extending life and enhancing consciousness. 
                                    Coveted across the known universe, melange is a prize worth killing for...
                                </p>
                                <p>
                                    When House Atreides is betrayed, the destruction of Paul's family will 
                                    set the boy on a journey toward a destiny greater than he could ever have 
                                    imagined. And as he evolves into the mysterious man known as Muad'Dib, he 
                                    will bring to fruition humankind's most ancient and unattainable dream.
                                </p>
                                <hr />
                                <Row>
                                    <Col sm={3}>
                                        <h6>Tags:</h6>
                                        <ul>
                                            <li>
                                                Science Fiction
                                            </li>
                                            <li>
                                                Fiction
                                            </li>
                                            <li>
                                                Horror
                                            </li>
                                            <li>
                                                Classics
                                            </li>
                                            <li>
                                                Fantasy
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
                                                658 pages
                                            </Col>
                                        </Row>
                                        <hr />
                                        <Row>
                                            <Col sm={6}>
                                                Published
                                            </Col>
                                            <Col sm={6}>
                                                1980
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
                                        <Link to="/browse/scifi/dune/checkout">
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