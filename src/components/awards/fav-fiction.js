import { Row, Col, Card, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

import Books from '../images/books.png'
import Gatsby from '../images/gatsby.jpg';
import Catcher from '../images/catcher-in-the-rye.jpeg';
import HP1 from '../images/hp1.jpg';

export default function FavFiction() {
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
                    <h3 style={{ marginBottom: "40px", textAlign: "center" }}>Readers' Favorite Fiction Books</h3>
                    <Row>
                        <Col sm={4}>
                            <Card style={{ textAlign: "center" }}>
                                <Card.Header>
                                    <h5>
                                        The Great Gatsby
                                    </h5>
                                </Card.Header>
                                <Card.Body>
                                    <Link to="/browse/fiction/gatsby">
                                        <Image src={Gatsby} style={{ height: "400px" }} />
                                    </Link>
                                </Card.Body>
                                <Card.Footer>
                                    <h6>F. Scott Fitzgerald</h6>
                                </Card.Footer>
                            </Card>
                        </Col>
                        <Col sm={4}>
                            <Card style={{ textAlign: "center" }}>
                                <Card.Header>
                                    <h5>
                                        The Catcher in The Rye
                                    </h5>
                                </Card.Header>
                                <Card.Body>
                                    <Link to="/browse/fiction/catcher">
                                        <Image src={Catcher} style={{ height: "400px" }} />
                                    </Link>
                                </Card.Body>
                                <Card.Footer>
                                    <h6>J.D. Salinger</h6>
                                </Card.Footer>
                            </Card>
                        </Col>
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
                    </Row>

                </div>
            </main>
        </section>
    )
}