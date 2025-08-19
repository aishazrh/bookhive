import { Card, Form, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Login() {
    return (
        <section className="login-page">
            <Container fluid >
                <Card>
                    <Card.Body>
                        <Container fluid>
                            <div style={{ textAlign: "center" }}>
                                <h5>Log in now for a much better experience!</h5>
                            </div>

                            <Form>
                                <h6>Email</h6>
                                <Form.Control type="text" placeholder="Enter your email address" required />
                                <h6>Password</h6>
                                <Form.Control type="text" placeholder="Enter your password" required />
                            </Form>

                            <div style={{ marginTop: "30px", textAlign: "center" }}>
                                <Link to="/">
                                    <Button type="submit">Log In</Button>
                                </Link>
                            </div>
                        </Container>
                    </Card.Body>
                </Card>
            </Container>
        </section>
    )
}