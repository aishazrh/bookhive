import { Card, Row, Col, Image, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Browse from "../pages/browse";

import Catcher from '../images/catcher-in-the-rye.jpeg';

export default function Salinger() {
    return (
        <section>
            <header>
                <Browse />
                <div className="book-padding">
                    <Row>
                        <Col sm={3}>
                            <Card>
                                <Card.Body>
                                    <Image src={Catcher} style={{ height: "400px", width: "255px" }} />
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={9}>
                            <div>
                                <h1><strong>The Catcher in The Rye</strong></h1>
                                <h4>J.D. Salinger</h4>
                                <hr />
                                <h5>Description:</h5>
                                <p>
                                    Fleeing the crooks at Pencey Prep, he pinballs around New York City 
                                    seeking solace in fleeting encounters—shooting the bull with strangers 
                                    in dive hotels, wandering alone round Central Park, getting beaten up 
                                    by pimps and cut down by erstwhile girlfriends. The city is beautiful 
                                    and terrible, in all its neon loneliness and seedy glamour, its mingled 
                                    sense of possibility and emptiness. Holden passes through it like a ghost, 
                                    thinking always of his kid sister Phoebe, the only person who really 
                                    understands him, and his determination to escape the phonies and find 
                                    a life of true meaning.
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
                                                Classics
                                            </li>
                                            <li>
                                                Young Adult
                                            </li>
                                            <li>
                                                School
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
                                                277 pages
                                            </Col>
                                        </Row>
                                        <hr />
                                        <Row>
                                            <Col sm={6}>
                                                Published
                                            </Col>
                                            <Col sm={6}>
                                                2001
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
                                        <Link to="/browse/fiction/catcher/checkout">
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