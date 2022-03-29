import React from 'react';
import { Button } from 'react-bootstrap';
import {
    BrowserRouter as Router, Link, useHistory, Redirect
} from 'react-router-dom';
import { useParams } from 'react-router-dom';

export default function EndLessonStep(props) {
    const { step } = useParams();

    const history = useHistory()
    const handleClick = () => {
        history.push({
            pathname: '/' + step,
            addProgress: true
        });
    }

    return (
        <Button onClick={handleClick}
        >congradulations</Button>
    )
}