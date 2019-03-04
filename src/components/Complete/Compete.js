import React from 'react';
import {ProgressBar} from 'react-bootstrap';

const Complete = () => {
    return (
        <div >
            <ProgressBar now={100} label="Done" variant="success"/>
            <h1>ORDER COMPLETE</h1>
        </div>
    )

}

export default Complete;