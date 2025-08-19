import { Card, Row, Col, Image, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Browse from "../pages/browse";

import RPO from '../images/ready player one.jpg'

export default function Cline() {
    return (
        <section>
            <header>
                <Browse />
                <div className="book-padding">
                    <Row>
                        <Col sm={3}>
                            <Card>
                                <Card.Body>
                                    <Image src={RPO} style={{ height: "400px", width: "255px" }} />
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={9}>
                            <div>
                                <h1><strong>Ready Player One</strong></h1>
                                <h4>Ernest Cline</h4>
                                <hr />
                                <h5>Description:</h5>
                                <p>
                                    <strong>IN THE YEAR 2044, reality is an ugly place.</strong> The only time teenage Wade
                                    Watts really feels alive is when he's jacked into the virtual utopia known
                                    as the OASIS. Wade's devoted his life to studying the puzzles hidden within
                                    this world's digital confines, puzzles that are based on their creator's
                                    obsession with the pop culture of decades past and that promise massive power
                                    and fortune to whoever can unlock them.
                                </p>
                                <p>
                                    But when Wade stumbles upon the first clue, he finds himself beset by players
                                    willing to kill to take this ultimate prize. The race is on, and if Wade's going
                                    to survive, he'll have to win—and confront the real world he's always been so
                                    desperate to escape.
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
                                                Young Adult
                                            </li>
                                            <li>
                                                Dystopia
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
                                                374 pages
                                            </Col>
                                        </Row>
                                        <hr />
                                        <Row>
                                            <Col sm={6}>
                                                Published
                                            </Col>
                                            <Col sm={6}>
                                                2011
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
                                        <Link to="/browse/scifi/ready-player-one/checkout">
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
