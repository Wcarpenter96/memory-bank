import React from 'react';
import IconCard from './../components/IconCard'
import { CardColumns, Container, Row, Col } from 'react-bootstrap';

export default (props) => {
    const icons = ['microsoft', 'google', 'napster', 'amazon', 'salesforce', 'twitter', 'facebook', 'soundcloud', 'snapchat', 'reddit', 'android', 'instagram', 'github', 'tripadvisor', 'airbnb', 'linkedin', 'uber', 'apple', 'steam', 'youtube', 'trello'];
    return (
        <Container>
            <Row>
                <Col md={12}>
                    <CardColumns className="m-5">
                        {icons.map((icon, index) => {
                            return (<IconCard key={index} icon={icon}></IconCard>)
                        })}
                    </CardColumns>
                </Col>
            </Row>
        </Container>
    )
}