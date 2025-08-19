import { Row, Col, Card, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

import Orwell from '../images/1984.jpg';
import Shining from '../images/the-shining.jpeg';

export default function Classics() {
    console.log("Classics Page Loaded");
    return (
        <section>
            <div>
                <h5>Right now, you're browsing the Classics section.</h5>
                <h6>We hope you find something of your taste! :)</h6>
            </div>
            <Row>
                <Col sm={6}>
                    <Card>
                        <Card.Body>
                            <Row>
                                <Col sm={3}>
                                    <Link to="/browse/classics/1984">
                                        <Image src={Orwell} style={{ height: "200px" }} />
                                    </Link>
                                </Col>
                                <Col sm={9}>
                                    <h5><strong>1984</strong></h5>
                                    <h6>George Orwell</h6>
                                    <h6><strong>Description:</strong></h6>
                                    <h6>
                                        A masterpiece of rebellion and imprisonment where
                                        war is peace freedom is slavery and Big Brother is
                                        watching. Thought Police, Big Brother, Orwellian -
                                        these words have entered our vocabulary because of
                                        George Orwell's classic dystopian novel 1984.
                                    </h6>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={6}>
                    <Card>
                        <Card.Body>
                            <Row>
                                <Col sm={3}>
                                    <Link to="/browse/horror/the-shining">
                                        <Image src={Shining} style={{ height: "200px" }} />
                                    </Link>
                                </Col>
                                <Col sm={9}>
                                    <h5><strong>The Shining</strong></h5>
                                    <h6>Stephen King</h6>
                                    <h6><strong>Description:</strong></h6>
                                    <h6>
                                        Jack Torrance's new job at the Overlook Hotel is the perfect
                                        chance for a fresh start. As the off-season caretaker at the
                                        tmospheric old hotel, he'll have plenty of time to spend
                                        reconnecting with his family and working on his writing.
                                    </h6>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </section>
    );
}