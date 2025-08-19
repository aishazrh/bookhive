import { Row, Col, Card, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

import Shining from '../images/the-shining.jpeg';
import IT from '../images/it.jpeg';

export default function Horror() {
    console.log("Horror Page Loaded");
    return (
        <section>
            <div>
                <h5>Right now, you're browsing the Horror section.</h5>
                <h6>We hope you find something of your taste! :)</h6>
            </div>
            <Row>
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
                                    <h6>Yasmina Reza, Christopher Hampton (Translator)</h6>
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
                <Col sm={6}>
                    <Card>
                        <Card.Body>
                            <Row>
                                <Col sm={3}>
                                    <Link to="/browse/horror/it">
                                        <Image src={IT} style={{ height: "200px" }} />
                                    </Link>
                                </Col>
                                <Col sm={9}>
                                    <h5><strong>IT</strong></h5>
                                    <h6>Stephen King</h6>
                                    <h6><strong>Description:</strong></h6>
                                    <h6>
                                        Welcome to Derry, Maine ...

                                        It’s a small city, a place as hauntingly familiar as
                                        your own hometown. Only in Derry the haunting is real ...

                                        They were seven teenagers when they first stumbled upon
                                        the horror. Now they are grown-up men and women ...
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