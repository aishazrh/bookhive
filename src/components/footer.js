import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

export default function AppFooter() {
    return (
        <section className='footer'>
            <Container fluid>
                <Row>
                    <Col>
                        <h5>COMPANY</h5>
                        <h6>About us</h6>
                        <h6>Career</h6>
                        <h6>Privacy</h6>
                        <h6>Help</h6>
                    </Col>
                    <Col>
                        <h5>WORK WITH US</h5>
                        <h6>Authors</h6>
                        <h6>Advertise</h6>
                        <h6>Authors and ads blog</h6>
                        <h6>API</h6>
                    </Col>
                    <Col>
                        <h5>CONNECT</h5>
                        <div style={{ display: 'flex', gap: '10px' }}>
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faFacebook} size="2x" color="#4267B2" />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faTwitter} size="2x" color="#1DA1F2" />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faInstagram} size="2x" color="#C13584" />
                            </a>
                        </div>
                    </Col>
                </Row>
                <hr />
                <div className='copyright-align'>
                    <h6>&copy; 2024 BookHive, Inc.</h6>
                    <h6>Desktop version</h6>
                </div>
            </Container>
        </section>
    )
}