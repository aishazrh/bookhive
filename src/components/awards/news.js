import { Card, Row, Col, Image } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

import news from '../images/news.png';

export default function News() {
    return (
        <section className="awards">
            <h3 style={{ marginBottom: "40px", textAlign: "center" }}>News and Interviews</h3>
            <div>
                <Card style={{ marginLeft: "200px", marginRight: "200px" }}>
                    <Card.Body>
                        <h5 style={{ marginTop: "20px" }}>
                            <strong>'Tis the Season for Brand-New Holiday-Themed Reading!</strong>
                        </h5>
                        <h6>Written by Sharon on November 18, 2024</h6>
                        <hr style={{ marginTop: "30px" }} />
                        <Row>
                            <Col sm={2}>
                                <h6 style={{ paddingTop: "20px" }}>52 likes</h6>
                            </Col>
                            <Col sm={8}>
                                <h6 style={{ paddingTop: "20px" }}>9 comments</h6>
                            </Col>
                            <Col sm={2}>
                                <h6>Share</h6>
                                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{ paddingRight: "10px" }}>
                                    <FontAwesomeIcon icon={faFacebook} size="100px" color="#4267B2" />
                                </a>
                                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={{ paddingRight: "10px" }}>
                                    <FontAwesomeIcon icon={faTwitter} size="100px" color="#1DA1F2" />
                                </a>
                                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ paddingRight: "10px" }}>
                                    <FontAwesomeIcon icon={faInstagram} size="100px" color="#C13584" />
                                </a>
                            </Col>
                        </Row>
                        <hr />
                        <div style={{ textAlign: "center", marginTop: "30px" }}>
                            <Image src={news} style={{ width: "790px", height: "300px" }} />
                        </div>
                        <div style={{ textAlign: "justify", marginTop: "30px" }}>
                            <h6>
                                Each and every year, round about this time, a veritable avalanche of
                                holiday-themed books publishes across multiple genres. It's a spectacular
                                annual phenomenon. Just when you think you've seen every possible variation
                                of holiday book-title pun, here come several dozen more.
                            </h6>
                            <h6 style={{ marginTop: "20px" }}>
                                Today's collection zeroes in on this winter holiday tradition and is aimed at
                                readers who like to schedule in a little thematic reading now and again.
                                Incredibly, these are all 2024 publications, so this is just one year's worth!
                                There are so many. And we almost certainly missed a few.
                            </h6>
                            <h6 style={{ marginTop: "20px" }}>
                                You'll find that most of the books slot into the romance or mystery genres,
                                in one way or another. Cozy mysteries are especially popular this time of year:
                                Check out the latest from Benjamin Stevenson, Everyone This Christmas Has a
                                Secret. For a steamier option, pick up Laurie Gilmore's The Christmas Tree Farm.
                            </h6>
                            <h6 style={{ marginTop: "20px" }}>
                                There are, of course, some other genre options. Fans of the great Susanna Clarke 
                                (Jonathan Strange & Mr Norrell) will want to check out the author's new illustrated 
                                fantasy novella, The Wood at Midwinter. (Great gift idea, by the way.)
                            </h6>
                        </div>
                    </Card.Body>
                </Card>
            </div>
        </section>
    )
}