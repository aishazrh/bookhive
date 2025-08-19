import { Image, Row, Col, Card, Container, Form, Carousel } from 'react-bootstrap';
import { Link } from "react-router-dom";

import Books from '../images/books.png'
import Piala from '../images/piala.png';
import News from '../images/news.png';
import Boneshaker from '../images/boneshaker book.jpg';
import Anubis from '../images/anubis book.jpg';
import Clementine from '../images/clementine book.jpg';
import Buntline from '../images/buntline book.jpg';
import First from '../images/first days book.jpg';
import Feed from '../images/feed book.jpg';
import Rot from '../images/rot and run book.jpg';
import Reapers from '../images/reapers book.jpg';
import Seuss from '../images/dr seuss.jpeg';
import Elbert from '../images/elbert hubbard.jpeg';
import Maya from '../images/maya angelou.jpeg';
import Frank from '../images/frank zappa.jpeg';
import Robert from '../images/robert frost.jpeg';
import Mockingbird from '../images/mockingbird.jpeg';
import Orwell from '../images/1984.jpg';
import Gatsby from '../images/gatsby.jpg';
import HP1 from '../images/hp1.jpg';
import Animal from '../images/animal-farm.jpeg';
import Help from '../images/the-help.jpeg';
import Kite from '../images/the-kite-runner.jpg';
import Water from '../images/water-for-elephants.jpg';
import Thief from '../images/the-book-thief.jpg';
import Dragon from '../images/the-girl-with-the-dragon-tattoo.jpeg';
import None from '../images/and-then-there-were-none.jpeg';
import Angels from '../images/angels-and-demons.jpeg';
import Rebecca from '../images/rebecca.jpeg';
import Cold from '../images/in cold-blood.jpeg';

export default function Home() {
    return (
        <section>
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
            <div className="awards-padding">
                <Row>
                    <Col sm={6}>
                        <Card>
                            <Card.Body>
                                <h5><strong>BookHive Choice Awards: Readers' Favorite Books 2024</strong></h5>
                                <Row>
                                    <Col sm={4} style={{ textAlign: "center" }} >
                                        <Image src={Piala} style={{ height: "200px" }}/>
                                    </Col>
                                    <Col>
                                        <Link to="/favorite-fiction" className="nav-link">
                                            <h6>Readers' Favorite Fiction</h6>
                                        </Link>
                                        <Link to="/favorite-mysteryandthriller" className="nav-link">
                                            <h6>Readers' Favorite Mystery & Thriller</h6>
                                        </Link>
                                        <Link to="/favorite-romance" className="nav-link">
                                            <h6>Readers' Favorite Romance</h6>
                                        </Link>
                                        <Link to="/favorite-fantasy" className="nav-link">
                                            <h6>Readers' Favorite Fantasy</h6>
                                        </Link>
                                        <Link to="/favorite-scifi" className="nav-link">
                                            <h6>Readers' Favorite Science Fiction</h6>
                                        </Link>
                                        <Link to="/favorite-horror" className="nav-link">
                                            <h6>Readers' Favorite Horror</h6>
                                        </Link>
                                        <Link to="/favorite-yafict" className="nav-link">
                                            <h6>Readers' Favorite Young Adult Fiction</h6>
                                        </Link>
                                        <Link to="/favorite-nonfict" className="nav-link">
                                            <h6>Readers' Favorite Non Fiction</h6>
                                        </Link>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>

                    </Col>

                    <Col sm={6}>
                        <Card style={{ marginRight: "100px" }}>
                            <Card.Body>
                                <h5><strong>News & Interviews</strong></h5>
                                <Link to="/news" className="nav-link">
                                    <h6>68 New Books to Read for Native American Heritage Month</h6>
                                </Link>
                                <Link to="/news" className="nav-link">
                                    <Image src={News} style={{ height: "190px", width: "515px" }} />
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
            <div className="discover">
                <Row className="discover-padding">
                    <Col sm={6}>
                        <Card>
                            <Card.Body className="discover-card">
                                <Container fluid >
                                    <Row>
                                        <Col>
                                            <h5><strong>What will you discover?</strong></h5>
                                        </Col>
                                    </Row>

                                    <hr />

                                    <Row>
                                        <Col>
                                            <h6>because Nabila liked ...</h6>
                                        </Col>
                                        <Col>
                                            <h6>she discovered ...</h6>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col md={6}>
                                            <Image src={Boneshaker} style={{ height: "100px", marginRight: "10px" }} />
                                            <Image src={Anubis} style={{ height: "100px", marginRight: "10px" }} />
                                            <Image src={Clementine} style={{ height: "100px", marginRight: "10px" }} />
                                        </Col>
                                        <Col>
                                            <Image src={Buntline} style={{ height: "100px" }} />
                                        </Col>
                                        <Col>
                                            <h6 className="small-text">
                                                Steam Punk, Science Fiction, Fantasy
                                            </h6>
                                        </Col>
                                    </Row>

                                    <hr />

                                    <Row>
                                        <Col>
                                            <h6>because Zahrin liked ...</h6>
                                        </Col>
                                        <Col>
                                            <h6>she discovered ...</h6>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col md={6}>
                                            <Image src={First} style={{ height: "100px", marginRight: "10px" }} />
                                            <Image src={Feed} style={{ height: "100px", marginRight: "10px" }} />
                                            <Image src={Rot} style={{ height: "100px", marginRight: "10px" }} />
                                        </Col>
                                        <Col>
                                            <Image src={Reapers} style={{ height: "100px", marginRight: "10px" }} />
                                        </Col>
                                        <Col>
                                            <h6 className="small-text">
                                                Zombies, Post Apocalyptic, Dystopia
                                            </h6>
                                        </Col>
                                    </Row>
                                </Container>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col sm={6}>
                        <Row>
                            <Col sm={6}>
                                <h5><strong>
                                    Deciding what to read next?
                                </strong></h5>
                                <h6>
                                    You're in the right place. Tell us what titles or
                                    genres you've enjoyed in the past, and we'll give
                                    you surprisingly insightful recommendations.
                                </h6>
                            </Col>

                            <Col sm={6}>
                                <h5><strong>
                                    What're your friends reading?
                                </strong></h5>
                                <h6>
                                    Chances are your friends are discussing their favorite
                                    (and least favorite) books here.
                                </h6>
                            </Col>
                        </Row>

                        <Card>
                            <Card.Body>
                                Search and browse books
                                <Form.Control type="text" placeholder="Search books here" />
                                <div style={{ paddingTop: "10px" }}>
                                    <h5>Genres</h5>
                                </div>
                                <Row>
                                    <Col>
                                        <div className="search-genre">
                                            <h6>
                                                <Link
                                                    to="/browse/art"
                                                    className="nav-link"
                                                    onClick={() => console.log("Navigating to Art")}
                                                >
                                                    Art
                                                </Link>
                                            </h6>
                                            <h6>
                                                <Link
                                                    to="/browse/classics"
                                                    className="nav-link"
                                                    onClick={() => console.log("Navigating to Classics")}
                                                >
                                                    Classics
                                                </Link>
                                            </h6>
                                            <h6>
                                                <Link
                                                    to="/browse/horror"
                                                    className="nav-link"
                                                    onClick={() => console.log("Navigating to Horror")}
                                                >
                                                    Horror
                                                </Link>
                                            </h6>
                                            <h6>
                                                <Link
                                                    to="/browse/scifi"
                                                    className="nav-link"
                                                    onClick={() => console.log("Navigating to Scifi")}
                                                >
                                                    Science Fiction
                                                </Link>
                                            </h6>
                                        </div>
                                    </Col>

                                    <Col>
                                        <div className="search-genre">
                                            <h6>... more genres coming soon!</h6>
                                        </div>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
            <div className="blog-block">
                <Row>
                    <Col sm={6}>
                        <h5 style={{ textAlign: "center" }}><strong>Quotes</strong></h5>
                        <Carousel>
                            <Carousel.Item>
                                <Image src={Seuss} text="First slide" style={{ height: "230px", width: "195px" }} />
                                <Image src={Seuss} text="First slide" style={{ height: "230px", width: "195px" }} />
                                <Image src={Seuss} text="First slide" style={{ height: "230px", width: "195px" }} />
                                <Carousel.Caption>
                                    <h4>“You know you're in love when you can't fall asleep because reality is finally better than your dreams."</h4>
                                    <p>Dr. Seuss</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Image src={Elbert} text="Second slide" style={{ height: "230px", width: "195px" }} />
                                <Image src={Elbert} text="Second slide" style={{ height: "230px", width: "195px" }} />
                                <Image src={Elbert} text="Second slide" style={{ height: "230px", width: "195px" }} />
                                <Carousel.Caption>
                                    <h4>"A friend is someone who knows all about you and still loves you."</h4>
                                    <p>Elbert Hubbard</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Image src={Maya} text="Third slide" style={{ height: "230px", width: "195px" }} />
                                <Image src={Maya} text="Third slide" style={{ height: "230px", width: "195px" }} />
                                <Image src={Maya} text="Third slide" style={{ height: "230px", width: "195px" }} />
                                <Carousel.Caption>
                                    <h5>"I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel."</h5>
                                    <p>Maya Angelou</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Image src={Frank} text="Third slide" style={{ height: "230px", width: "195px" }} />
                                <Image src={Frank} text="Third slide" style={{ height: "230px", width: "195px" }} />
                                <Image src={Frank} text="Third slide" style={{ height: "230px", width: "195px" }} />
                                <Carousel.Caption>
                                    <h4>"So many books, so little time."</h4>
                                    <p>Frank Zappa</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Image src={Robert} text="Third slide" style={{ height: "230px", width: "195px" }} />
                                <Image src={Robert} text="Third slide" style={{ height: "230px", width: "195px" }} />
                                <Image src={Robert} text="Third slide" style={{ height: "230px", width: "195px" }} />
                                <Carousel.Caption>
                                    <h4>"In three words I can sum up everything I've learned about life: it goes on."</h4>
                                    <p>Robert Frost</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </Col>

                    <Col sm={6}>
                        <h5><strong>Love lists?</strong></h5>
                        <Card>
                            <Card.Body>
                                <Container fluid>
                                    <Row>
                                        <Row>
                                            <Col sm={6}>
                                                <h6 style={{ paddingTop: "10px", textAlign: "center" }}>
                                                    <a href="#best-books" className="custom-link">Best books of the 20th century</a>
                                                </h6>
                                            </Col>
                                            <Col sm={6}>
                                                <Row>
                                                    <div style={{ display: "flex", alignItems: "center", paddingBottom: "10px" }}>
                                                        <Col >
                                                            <Image src={Mockingbird} style={{ height: "50px" }} />
                                                        </Col>
                                                        <Col>
                                                            <Image src={Orwell} style={{ height: "50px" }} />
                                                        </Col>
                                                        <Col>
                                                            <Image src={Gatsby} style={{ height: "50px" }} />
                                                        </Col>
                                                        <Col>
                                                            <Image src={HP1} style={{ height: "50px" }} />
                                                        </Col>
                                                        <Col>
                                                            <Image src={Animal} style={{ height: "50px" }} />
                                                        </Col>
                                                    </div>
                                                </Row>
                                            </Col>
                                        </Row>

                                        <hr />

                                        <Row>
                                            <Col sm={6}>
                                                <h6 style={{ paddingTop: "10px", textAlign: "center" }}>
                                                    <a href="#best-book-club" className="custom-link">Best for Book Clubs</a>
                                                </h6>
                                            </Col>
                                            <Col sm={6}>
                                                <Row>
                                                    <div style={{ display: "flex", alignItems: "center", paddingBottom: "10px" }}>
                                                        <Col >
                                                            <Image src={Help} style={{ height: "50px" }} />
                                                        </Col>
                                                        <Col>
                                                            <Image src={Kite} style={{ height: "50px" }} />
                                                        </Col>
                                                        <Col>
                                                            <Image src={Water} style={{ height: "50px" }} />
                                                        </Col>
                                                        <Col>
                                                            <Image src={Thief} style={{ height: "50px" }} />
                                                        </Col>
                                                        <Col>
                                                            <Image src={Mockingbird} style={{ height: "50px" }} />
                                                        </Col>
                                                    </div>
                                                </Row>
                                            </Col>
                                        </Row>

                                        <hr />

                                        <Row>
                                            <Col sm={6}>
                                                <h6 style={{ paddingTop: "10px", textAlign: "center" }}>
                                                    <a href="#best-mystery" className="custom-link">Best Crimes & Mystery Books</a>
                                                </h6>
                                            </Col>
                                            <Col sm={6}>
                                                <Row>
                                                    <div style={{ display: "flex", alignItems: "center", paddingBottom: "10px" }}>
                                                        <Col >
                                                            <Image src={Dragon} style={{ height: "50px" }} />
                                                        </Col>
                                                        <Col>
                                                            <Image src={None} style={{ height: "50px" }} />
                                                        </Col>
                                                        <Col>
                                                            <Image src={Angels} style={{ height: "50px" }} />
                                                        </Col>
                                                        <Col>
                                                            <Image src={Rebecca} style={{ height: "50px" }} />
                                                        </Col>
                                                        <Col>
                                                            <Image src={Cold} style={{ height: "50px" }} />
                                                        </Col>
                                                    </div>
                                                </Row>
                                            </Col>
                                        </Row>
                                    </Row>
                                </Container>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </section>
    )
}