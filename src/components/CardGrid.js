import React from 'react';
import IconCard from './IconCard'
import { Container, Row, Col } from 'react-bootstrap';

export default (props) => {

    return (
        <Container className='mt-5'>
            <Row>
                <Col md={12}>
                    {props.icons.map((icon, index) => {
                        return (<IconCard
                            key={index}
                            icon={icon}
                            animation={props.animation}
                            handleClick={props.handleClick}
                        ></IconCard>)
                    })}
                </Col>
            </Row>
        </Container>
    );
}

