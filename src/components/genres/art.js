import { Row, Col, Card, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import ArtYasmina from '../images/art-yasmina.jpeg';
import Vivienne from '../images/vivienne.jpg';

export default function Art() {
    console.log("Art Page Loaded");
    return (
        <section>
            <div>
                <h5>Right now, you're browsing the Art section.</h5>
                <h6>We hope you find something of your taste! :)</h6>
            </div>
            <Row>
                <Col sm={6}>
                    <Card>
                        <Card.Body>
                            <Row>
                                <Col sm={3}>
                                    <Link to="/browse/art/yasmina">
                                        <Image src={ArtYasmina} style={{ height: "200px" }} />
                                    </Link>
                                </Col>
                                <Col sm={9}>
                                    <h5><strong>'Art'</strong></h5>
                                    <h6>Yasmina Reza, Christopher Hampton (Translator)</h6>
                                    <h6><strong>Description:</strong></h6>
                                    <h6>
                                        The Tony Award-winning play that focuses on the meaning of art
                                        (in the form of a solid white painting) as well as the meaning
                                        of friendship, to both the man who bought the painting and the
                                        two friends who come to see it.
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
                                    <Link to="/browse/art/vivienne">
                                        <Image src={Vivienne} style={{ height: "200px" }} />
                                    </Link>
                                </Col>
                                <Col sm={9}>
                                    <h5><strong>Vivienne</strong></h5>
                                    <h6>Emmalea Russo</h6>
                                    <h6><strong>Description:</strong></h6>
                                    <h6>
                                        Did Vivienne Volker kill Wilma Lang? This question has dogged
                                        Vivienne ever since Wilma jumped from a window to her death shortly
                                        after Volker stole her lover, the visionary artist Hans Bellmer, in
                                        the 1970s. Once a famous artist and fashion icon, Volker is now in
                                        her ...
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