import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../Hooks/UseAuth';
const Header = () => {
    const { user, signOutgoogle } = useAuth();
    return (
        <>
            <Navbar collapseOnSelect expand="lg" style={{ background: '#0e101c' }} variant="dark" sticky="top">
                <Container fluid>
                    <Navbar.Brand as={Link} to="/">Car Gnius</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
                        <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#services">Services</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#experts">Experts</Nav.Link>
                        <Nav.Link as={NavLink} to="/addservice">AddServices</Nav.Link>
                        {user?.email ?
                            <Nav.Link>
                                <Button variant="light" onClick={signOutgoogle}>SignOut</Button>
                            </Nav.Link> :
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>
                        }
                        <Navbar.Text>
                            Signed: <span>{user?.displayName}</span>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;