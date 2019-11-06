import React, { Component } from 'react';
import IconCard from './../components/IconCard'
import {  Container, Row, Col } from 'react-bootstrap';

class CardGrid extends Component {
    state = {
        icons: ['microsoft', 'google', 'napster', 'amazon', 'salesforce', 'twitter',
            'facebook', 'soundcloud', 'snapchat', 'reddit', 'android', 'instagram', 'github',
            'tripadvisor', 'airbnb', 'linkedin', 'uber', 'apple', 'steam', 'youtube', 'trello',
            'adobe', 'dropbox', 'spotify'],
        iconsClicked: []

    }

    lose() {
        console.log('you lose')
    }

    win() {
        console.log('you win!')
    }

    handleClick = (icon) => {
        let { iconsClicked , icons } = this.state
        console.log(icon)
        for (let i = 0; i < iconsClicked.length; i++) {
            if (icon === iconsClicked[i]) this.lose()
        }
        iconsClicked.push(icon);
        if (iconsClicked.length === icons.length) this.win();
        let shuffledIcons = this.shuffle(icons)
        this.setState({
            icons: shuffledIcons
        })
    }

    shuffle = (array) => {
        var currentIndex = array.length, temporaryValue, randomIndex;

        while (0 !== currentIndex) {

            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    }

    render() {
        return (
            <div>
                <Container className='mt-5'>
                    <Row>
                        <Col md={12}>
                            {this.state.icons.map((icon, index) => {
                                return (<IconCard
                                    key={index}
                                    icon={icon}
                                    handleClick={this.handleClick}
                                ></IconCard>)
                            })}
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default CardGrid;