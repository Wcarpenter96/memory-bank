import React from 'react';
import { Nav, Navbar, Button, Form } from 'react-bootstrap';

export default (props) => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/" >MemoryBank</Navbar.Brand>
                <Navbar.Text>
                    Score: 100
                    </Navbar.Text>
                <Navbar.Collapse className="justify-content-end">
                    <Form inline>
                        <Button variant="outline-danger">Restart</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}