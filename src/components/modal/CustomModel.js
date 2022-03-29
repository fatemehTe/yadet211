import React, { useState } from "react";
import { Modal, Button } from 'react-bootstrap';
import {
    BrowserRouter as Router, Link, useHistory
} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loadQuestions, selectQuestionsLength, makeInitial } from '../../features/questions/questions.slice';
import './custom.css';


export default function CustomModal(props) {

    const step = props.step;
    const dispatch = useDispatch()
    const history = useHistory()
    dispatch(loadQuestions(step))
    const handleClick = () => {
        dispatch(makeInitial())
        history.push('/lesson/' + step);
    }
    if (props.active) {
        return (
            <Modal
                {...props}
                animation='true'
                size="sm"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Modal heading
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>Centered Modal</h4>
                    <p>
                        go to lesson
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleClick}>go to lesson</Button>
                </Modal.Footer>
            </Modal>
        );

    } else if (!props.active) {
        return (
            <Modal
                {...props}
                animation='true'
                size="sm"

            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Modal heading
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>Centered Modal</h4>
                    <p>
                        not activated yet
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onHide}>go to lesson</Button>
                </Modal.Footer>
            </Modal>
        );

    }
    else
        return (
            <Modal
                {...props}
                animation='true'
                size="sm"

            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Modal heading
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>Centered Modal</h4>
                    <p>
                        not activated yet
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onHide}>close</Button>
                </Modal.Footer>
            </Modal>
        );
}
