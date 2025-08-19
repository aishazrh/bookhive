import { Row, Col, Image, Card, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import RPO from '../images/ready player one.jpg';

export default function ClineCheckout() {
    return (
        <section className='checkout-padding'>
            <h3>Checkout Page</h3>
            <Row style={{ marginTop: "20px" }}>
                <Col sm={3}>
                    <Card>
                        <Card.Body>
                            <Image src={RPO} style={{ height: "400px", width: "255px" }} />
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={3}>
                    <Row>
                        <h4>Details</h4>
                        <Col>Item:</Col>
                        <Col>Ready Player One</Col>
                    </Row>
                    <Row>
                        <Col>Quantity:</Col>
                        <Col>1 (MAX)</Col>
                    </Row>

                    <Row style={{ marginTop: "20px" }}>
                        <h4>Customer Details</h4>
                        <Col>
                            Full name:
                            <Form.Control type="text" placeholder="Enter your full name" required />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            Contact number:
                            <Form.Control type="text" placeholder="Enter your number" required />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            Address:
                            <Form.Control type="text" placeholder="Enter your address" required />
                        </Col>
                    </Row>
                    <Row style={{ marginTop: "30px" }}>
                        <Link to="/order">
                            <Button type="submit" style={{ width: "290px" }}>Make Order</Button>
                        </Link>
                    </Row>
                </Col>
            </Row>
        </section>
    )
}