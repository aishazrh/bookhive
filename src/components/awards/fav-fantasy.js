import { Row, Col, Card, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

import Books from '../images/books.png'
import HP1 from '../images/hp1.jpg';
import Wrinkle from '../images/wrinkle-in-time.jpeg';
import His from '../images/his-dark-materials.jpeg';

export default function FavFantasy() {
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
                    <h3 style={{ marginBottom: "40px", textAlign: "center" }}>Readers' Favorite Fantasy Books</h3>
                    <Row>
                        <Col sm={4}>
                            <Card style={{ textAlign: "center" }}>
                                <Card.Header>
                                    <h5>
                                        Harry Potter and The Sorcerer's Stone
                                    </h5>
                                </Card.Header>
                                <Card.Body>
                                    <Link to="/not-found">
                                        <Image src={HP1} style={{ height: "400px" }} />
                                    </Link>
                                </Card.Body>
                                <Card.Footer>
                                    <h6>J.K. Rowling</h6>
                                </Card.Footer>
                            </Card>
                        </Col>
                        <Col sm={4}>
                            <Card style={{ textAlign: "center" }}>
                                <Card.Header>
                                    <h5>
                                        A Wrinkle in Time
                                    </h5>
                                </Card.Header>
                                <Card.Body>
                                    <Link to="/not-found">
                                        <Image src={Wrinkle} style={{ height: "400px" }} />
                                    </Link>
                                </Card.Body>
                                <Card.Footer>
                                    <h6>Madeline L'Engle</h6>
                                </Card.Footer>
                            </Card>
                        </Col>
                        <Col sm={4}>
                            <Card style={{ textAlign: "center" }}>
                                <Card.Header>
                                    <h5>
                                        His Dark materials
                                    </h5>
                                </Card.Header>
                                <Card.Body>
                                    <Link to="/not-found">
                                        <Image src={His} style={{ height: "400px" }} />
                                    </Link>
                                </Card.Body>
                                <Card.Footer>
                                    <h6>Philip Pullman</h6>
                                </Card.Footer>
                            </Card>
                        </Col>
                    </Row>

                </div>
            </main>
        </section>
    )
}