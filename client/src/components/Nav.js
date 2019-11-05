import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

export default (props) => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand>Memory Bank</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href='/'>Restart</Nav.Link>
                </Nav>
            </Navbar>
        </div>
    )
}