import { Card, Row, Col, Image, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Browse from "../pages/browse";

import Shining from '../images/the-shining.jpeg';

export default function King() {
    return (
        <section>
            <header>
                <Browse />
                <div className="book-padding">
                    <Row>
                        <Col sm={3}>
                            <Card>
                                <Card.Body>
                                    <Image src={Shining} style={{ height: "400px", width: "255px" }} />
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={9}>
                            <div>
                                <h1><strong>The Shining</strong></h1>
                                <h4>Stephen King</h4>
                                <hr />
                                <h5>Description:</h5>
                                <p>
                                    Jack Torrance's new job at the Overlook Hotel is the perfect chance
                                    for a fresh start. As the off-season caretaker at the atmospheric old
                                    hotel, he'll have plenty of time to spend reconnecting with his family
                                    and working on his writing. But as the harsh winter weather sets in,
                                    the idyllic location feels ever more remote...and more sinister. And
                                    the only one to notice the strange and terrible forces gathering around
                                    the Overlook is Danny Torrance, a uniquely gifted five-year-old.
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
                                                Horror
                                            </li>
                                            <li>
                                                Thriller
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
                                                497 pages
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
                                        <Link to="/browse/horror/the-shining/checkout">
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