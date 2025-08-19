import { Row, Col, Card, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

import Books from '../images/books.png';
import Shining from '../images/the-shining.jpeg';
import IT from '../images/it.jpeg';
import Dracula from '../images/dracula.jpeg';

export default function FavHorror() {
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
                    <h3 style={{ marginBottom: "40px", textAlign: "center" }}>Readers' Favorite Horror Books</h3>
                    <Row>
                        <Col sm={4}>
                            <Card style={{ textAlign: "center" }}>
                                <Card.Header>
                                    <h5>
                                        The Shining
                                    </h5>
                                </Card.Header>
                                <Card.Body>
                                    <Link to="/browse/horror/the-shining">
                                        <Image src={Shining} style={{ height: "400px" }} />
                                    </Link>
                                </Card.Body>
                                <Card.Footer>
                                    <h6>Stephen King</h6>
                                </Card.Footer>
                            </Card>
                        </Col>
                        <Col sm={4}>
                            <Card style={{ textAlign: "center" }}>
                                <Card.Header>
                                    <h5>
                                        Dracula
                                    </h5>
                                </Card.Header>
                                <Card.Body>
                                    <Link to="/not-found">
                                        <Image src={Dracula} style={{ height: "400px" }} />
                                    </Link>
                                </Card.Body>
                                <Card.Footer>
                                    <h6>Bram Stroker</h6>
                                </Card.Footer>
                            </Card>
                        </Col>
                        <Col sm={4}>
                            <Card style={{ textAlign: "center" }}>
                                <Card.Header>
                                    <h5>
                                        IT
                                    </h5>
                                </Card.Header>
                                <Card.Body>
                                    <Link to="/browse/horror/it">
                                        <Image src={IT} style={{ height: "400px" }} />
                                    </Link>
                                </Card.Body>
                                <Card.Footer>
                                    <h6>Stephen King</h6>
                                </Card.Footer>
                            </Card>
                        </Col>
                    </Row>

                </div>
            </main>
        </section>
    )
}