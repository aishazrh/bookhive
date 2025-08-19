import { Row, Col, Card, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

import Books from '../images/books.png'
import Pride from '../images/pride-and-prejudice.jpeg';
import Heights from '../images/wuthering-heights.jpeg';
import Before from '../images/me-before-you.jpeg';

export default function FavRomance() {
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
                    <h3 style={{ marginBottom: "40px", textAlign: "center" }}>Readers' Favorite Romance Books</h3>
                    <Row>
                        <Col sm={4}>
                            <Card style={{ textAlign: "center" }}>
                                <Card.Header>
                                    <h5>
                                        Pride and Prejudice
                                    </h5>
                                </Card.Header>
                                <Card.Body>
                                    <Link to="/not-found">
                                        <Image src={Pride} style={{ height: "400px" }} />
                                    </Link>
                                </Card.Body>
                                <Card.Footer>
                                    <h6>Jane Austen</h6>
                                </Card.Footer>
                            </Card>
                        </Col>
                        <Col sm={4}>
                            <Card style={{ textAlign: "center" }}>
                                <Card.Header>
                                    <h5>
                                        Wuthering Heights
                                    </h5>
                                </Card.Header>
                                <Card.Body>
                                    <Link to="/not-found">
                                        <Image src={Heights} style={{ height: "400px" }} />
                                    </Link>
                                </Card.Body>
                                <Card.Footer>
                                    <h6>Emily Bronte</h6>
                                </Card.Footer>
                            </Card>
                        </Col>
                        <Col sm={4}>
                            <Card style={{ textAlign: "center" }}>
                                <Card.Header>
                                    <h5>
                                        Me Before You
                                    </h5>
                                </Card.Header>
                                <Card.Body>
                                    <Link to="/not-found">
                                        <Image src={Before} style={{ height: "400px" }} />
                                    </Link>
                                </Card.Body>
                                <Card.Footer>
                                    <h6>Jojo Moyes</h6>
                                </Card.Footer>
                            </Card>
                        </Col>
                    </Row>

                </div>
            </main>
        </section>
    )
}