import { Container, Navbar, Nav} from 'react-bootstrap';
import { Link } from "react-router-dom";

export default function AppHeader() {
    return (
        <div>
            <Navbar expand="lg" className="header">
                <Container>
                    <Navbar.Brand href="#home"><strong>BookHive</strong></Navbar.Brand>

                    <Navbar.Collapse>
                        <Nav className="ms-auto">
                            <Link to="/" className="nav-link">Home</Link>
                            <Link to="/browse" className="nav-link">Browse</Link>
                            <Link to="/login" className="nav-link">Login</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}