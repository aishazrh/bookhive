import { Row, Col, Card, Image } from "react-bootstrap";

import Books from '../images/books.png'
import Dune from '../images/dune.jpeg';
import RPO from '../images/ready player one.jpg';
import Ender from '../images/enders-game.jpeg';

export default function FavScifi() {
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
                    <h3 style={{ marginBottom: "40px", textAlign: "center" }}>Readers' Favorite Science Fiction Books</h3>
                    <Row>
                        <Col sm={4}>
                            <Card style={{ textAlign: "center" }}>
                                <Card.Header>
                                    <h5>
                                        Dune
                                    </h5>
                                </Card.Header>
                                <Card.Body>
                                    <Image src={Dune} style={{ height: "400px" }} />
                                </Card.Body>
                                <Card.Footer>
                                    <h6>Frank Herbert</h6>
                                </Card.Footer>
                            </Card>
                        </Col>
                        <Col sm={4}>
                            <Card style={{ textAlign: "center" }}>
                                <Card.Header>
                                    <h5>
                                        Ready Player One
                                    </h5>
                                </Card.Header>
                                <Card.Body>
                                    <Image src={RPO} style={{ height: "400px" }} />
                                </Card.Body>
                                <Card.Footer>
                                    <h6>Ernest Cline</h6>
                                </Card.Footer>
                            </Card>
                        </Col>
                        <Col sm={4}>
                            <Card style={{ textAlign: "center" }}>
                                <Card.Header>
                                    <h5>
                                        Ender's Game
                                    </h5>
                                </Card.Header>
                                <Card.Body>
                                    <Image src={Ender} style={{ height: "400px" }} />
                                </Card.Body>
                                <Card.Footer>
                                    <h6>Orson Scott Card</h6>
                                </Card.Footer>
                            </Card>
                        </Col>
                    </Row>

                </div>
            </main>
        </section>
    )
}