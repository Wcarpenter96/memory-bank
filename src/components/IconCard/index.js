import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './style.css'

export default (props) => {
    return (
        <div className="box" >
            <Button className={props.animation}
                onClick={() => props.handleClick(props.icon)}
                variant="primary" size="lg" >
                <h2><FontAwesomeIcon icon={['fab', props.icon]} /></h2>
            </Button>
        </div>
    )
}
