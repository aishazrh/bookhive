import { Row, Col, Card, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

import Gatsby from '../images/gatsby.jpg';
import Catcher from '../images/catcher-in-the-rye.jpeg';

export default function Fiction() {
    console.log("Fiction Page Loaded");
    return (
        <section>
            <div>
                <h5>Right now, you're browsing the Fiction section.</h5>
                <h6>We hope you find something of your taste! :)</h6>
            </div>
            <Row>
                <Col sm={6}>
                    <Card>
                        <Card.Body>
                            <Row>
                                <Col sm={3}>
                                    <Link to="/browse/fiction/gatsby">
                                        <Image src={Gatsby} style={{ height: "200px", width: "130px" }} />
                                    </Link>
                                </Col>
                                <Col sm={9}>
                                    <h5><strong>The Great Gatsby</strong></h5>
                                    <h6>F. Scott Fitzgerald</h6>
                                    <h6><strong>Description:</strong></h6>
                                    <h6>
                                        The Great Gatsby, F. Scott Fitzgerald's third book, stands as the
                                        supreme achievement of his career. This exemplary novel of the Jazz
                                        Age has been acclaimed by generations of readers. The story of the
                                        fabulously wealthy Jay Gatsby and his love for the beautiful Daisy Buchanan,
                                        of ...
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
                                    <Link to="/browse/fiction/catcher">
                                        <Image src={Catcher} style={{ height: "200px", width: "130px" }} />
                                    </Link>
                                </Col>
                                <Col sm={9}>
                                    <h5><strong>The Catcher in The Rye</strong></h5>
                                    <h6>J.D. Salinger</h6>
                                    <h6><strong>Description:</strong></h6>
                                    <h6>
                                        Fleeing the crooks at Pencey Prep, he pinballs around 
                                        New York City seeking solace in fleeting encounters—shooting 
                                        the bull with strangers in dive hotels, wandering alone round 
                                        Central Park, getting beaten up by pimps and cut down by 
                                        erstwhile girlfriends. The city is ...
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