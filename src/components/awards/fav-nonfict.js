import { Row, Col, Card, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

import Books from '../images/books.png';
import Sapiens from '../images/sapiens.jpeg';
import Time from '../images/a-brief-history-of-time.jpeg';
import Cold from '../images/in cold-blood.jpeg';

export default function FavNonfict() {
    return (
        <section>
            <header>
                <div className='menu'>
                    <Row className='menu2'>
                        <Col sm={4} className='books'>
                            <Image src={Books} />
                        </Col>
                        <Col sm={8}>
                            <div className='menu-text'>
                                <h1>Announcing Readers' Favorite Books of 2024!</h1>
                            </div>
                        </Col>
                    </Row>
                </div>
            </header>
            <main>
                <div className="awards">
                    <h3 style={{ marginBottom: "40px", textAlign: "center" }}>Readers' Favorite Non Fiction Books</h3>
                    <Row>
                        <Col sm={4}>
                            <Card style={{ textAlign: "center" }}>
                                <Card.Header>
                                    <h5>
                                        Sapiens
                                    </h5>
                                </Card.Header>
                                <Card.Body>
                                    <Link to="/not-found">
                                        <Image src={Sapiens} style={{ height: "400px" }} />
                                    </Link>
                                </Card.Body>
                                <Card.Footer>
                                    <h6>Yuval Noah Harari</h6>
                                </Card.Footer>
                            </Card>
                        </Col>
                        <Col sm={4}>
                            <Card style={{ textAlign: "center" }}>
                                <Card.Header>
                                    <h5>
                                        A Brief History of Time
                                    </h5>
                                </Card.Header>
                                <Card.Body>
                                    <Link to="/not-found">
                                        <Image src={Time} style={{ height: "400px" }} />
                                    </Link>
                                </Card.Body>
                                <Card.Footer>
                                    <h6>Stephen Hawking</h6>
                                </Card.Footer>
                            </Card>
                        </Col>
                        <Col sm={4}>
                            <Card style={{ textAlign: "center" }}>
                                <Card.Header>
                                    <h5>
                                        In Cold Blood
                                    </h5>
                                </Card.Header>
                                <Card.Body>
                                    <Link to="/not-found">
                                        <Image src={Cold} style={{ height: "400px" }} />
                                    </Link>
                                </Card.Body>
                                <Card.Footer>
                                    <h6>Truman Capote</h6>
                                </Card.Footer>
                            </Card>
                        </Col>
                    </Row>

                </div>
            </main>
        </section>
    )
}