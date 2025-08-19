import { Row, Col, Card, Form, } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";

import Art from "../genres/art";
import Classics from "../genres/classics";
import Fiction from "../genres/fiction";
import Horror from "../genres/horror";
import Scifi from "../genres/scifi";

export default function Browse() {
    console.log("Browse component loaded");
    return (
        <section className="discover">
            <header>
                <Row className="discover-padding">
                    <Col sm={4}>
                        <div style={{ paddingBottom: "20px" }}>
                            <h5><strong>
                                Deciding what to read next?
                            </strong></h5>
                            <h6>
                                You're in the right place. Tell us what titles or
                                genres you've enjoyed in the past, and we'll give
                                you surprisingly insightful recommendations.
                            </h6>
                        </div>

                        <hr />

                        <div style={{ paddingTop: "20px" }}>
                            <h5><strong>
                                What're your friends reading?
                            </strong></h5>
                            <h6>
                                Chances are your friends are discussing their favorite
                                (and least favorite) books here.
                            </h6>
                        </div>
                    </Col>

                    <Col sm={1} />

                    <Col sm={7}>
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
                                                    to="art"
                                                    className="nav-link"
                                                    onClick={() => console.log("Navigating to Art")}
                                                >
                                                    Art
                                                </Link>
                                            </h6>
                                            <h6>
                                                <Link
                                                    to="classics"
                                                    className="nav-link"
                                                    onClick={() => console.log("Navigating to Classics")}
                                                >
                                                    Classics
                                                </Link>
                                            </h6>
                                            <h6>
                                                <Link
                                                    to="fiction"
                                                    className="nav-link"
                                                    onClick={() => console.log("Navigating to Fiction")}
                                                >
                                                    Fiction
                                                </Link>
                                            </h6>
                                            <h6>
                                                <Link
                                                    to="horror"
                                                    className="nav-link"
                                                    onClick={() => console.log("Navigating to Horror")}
                                                >
                                                    Horror
                                                </Link>
                                            </h6>
                                            <h6>
                                                <Link
                                                    to="scifi"
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
                <Row>
                    <hr />
                </Row>
            </header>
            <main>
                <Routes>
                    <Route path="art" element={<Art />} />
                    <Route path="classics" element={<Classics />} />
                    <Route path="fiction" element={<Fiction />} />
                    <Route path="horror" element={<Horror />} />
                    <Route path="scifi" element={<Scifi />} />
                    <Route path="*" element={<div>Start Browsing!</div>} />
                </Routes>
            </main>
        </section>
    )
}