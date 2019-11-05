import React from 'react';
import { Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default (props) => {
    return (
        <Card bg="primary" text="white" className="text-center">
            <h1 className="display-5">
                <FontAwesomeIcon icon={['fab', props.icon]} />
            </h1>
        </Card>
    )
}
