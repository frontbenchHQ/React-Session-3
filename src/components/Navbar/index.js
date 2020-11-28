import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const NavBar = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">
                <img
                    alt=""
                    src="/logo.svg"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />{' '}
                React Bootstrap
            </Navbar.Brand>

            <Nav className="justify-content-end" activeKey="/home">
                <Nav.Item>
                    <Link to='/project'> Project </Link>
                    <Link to='/blog'> Blog </Link>
                    <a href="/about"> About </a>
                </Nav.Item>
            </Nav>

        </Navbar>
    )
}