import { Card, Row, Col, Image, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Browse from "../pages/browse";

import IT from '../images/it.jpeg';

export default function King2() {
    return (
        <section>
            <header>
                <Browse />
                <div className="book-padding">
                    <Row>
                        <Col sm={3}>
                            <Card>
                                <Card.Body>
                                    <Image src={IT} style={{ height: "400px", width: "255px" }} />
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={9}>
                            <div>
                                <h1><strong>IT</strong></h1>
                                <h4>Stephen King</h4>
                                <hr />
                                <h5>Description:</h5>
                                <p>
                                    Welcome to Derry, Maine ...

                                    It’s a small city, a place as hauntingly familiar as your own hometown. 
                                    Only in Derry the haunting is real ...

                                    They were seven teenagers when they first stumbled upon the horror. 
                                    Now they are grown-up men and women who have gone out into the big 
                                    world to gain success and happiness. But none of them can withstand 
                                    the force that has drawn them back to Derry to face the nightmare 
                                    without an end, and the evil without a name.
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
                                        <Link to="/browse/horror/it/checkout">
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