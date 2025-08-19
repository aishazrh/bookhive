import { Row, Col, Card, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

import Dune from '../images/dune.jpeg';
import RPO from '../images/ready player one.jpg';

export default function Scifi() {
    console.log("Scifi Page Loaded");
    return (
        <section>
            <div>
                <h5>Right now, you're browsing the Science Fiction section.</h5>
                <h6>We hope you find something of your taste! :)</h6>
            </div>
            <Row>
                <Col sm={6}>
                    <Card>
                        <Card.Body>
                            <Row>
                                <Col sm={3}>
                                    <Link to="/browse/scifi/dune">
                                        <Image src={Dune} style={{ height: "200px" }} />
                                    </Link>
                                </Col>
                                <Col sm={9}>
                                    <h5><strong>Dune</strong></h5>
                                    <h6>Frank Herbert</h6>
                                    <h6><strong>Description:</strong></h6>
                                    <h6>
                                        Set on the desert planet Arrakis, Dune is the story of
                                        the boy Paul Atreides, heir to a noble family tasked
                                        with ruling an inhospitable world where the only thing
                                        of value is the “spice” melange, a drug capable of
                                        extending life and enhancing consciousness. Coveted
                                        across ...
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
                                    <Link to="/browse/scifi/ready-player-one">
                                        <Image src={RPO} style={{ height: "200px" }} />
                                    </Link>
                                </Col>
                                <Col sm={9}>
                                    <h5><strong>Ready Player One</strong></h5>
                                    <h6>Ernest Cline</h6>
                                    <h6><strong>Description:</strong></h6>
                                    <h6>
                                        IN THE YEAR 2044, reality is an ugly place.
                                        The only time teenage Wade Watts really feels
                                        alive is when he's jacked into the virtual
                                        utopia known as the OASIS. Wade's devoted his
                                        life to studying the puzzles hidden within this
                                        world's digital confines, puzzles that are based
                                        ...
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