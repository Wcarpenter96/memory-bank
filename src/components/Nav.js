import React from 'react';
import { Navbar, Button, Form } from 'react-bootstrap';

export default (props) => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/" >MemoryBank</Navbar.Brand>
                <Navbar.Text>
                    Score: {props.score} |
                    Best: {props.highscore}
                </Navbar.Text>
                <Navbar.Collapse className="justify-content-end">
                    <Form inline>
                        <Button onClick={props.reset} variant="outline-danger">Restart</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}