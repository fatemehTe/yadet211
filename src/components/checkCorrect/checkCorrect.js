import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Line from '../line/line';
import './checkCorrect.css';

export default function checkCorrect(props) {
    
    return (
        <Container className='checkCorrect'>
            <Line className='checkLine' />

            <Row>
                <Col sm={6} xs={6} className='checkButtonCol'>
                    <Button variant="primary" className="btn" size="lg"
                        onClick={props.onContinueClick}

                    >{props.Continue === true ? "continue" : "skip"}</Button>
                </Col>
                <Col sm={6} xs={6} className='checkButtonCol'>
                    <Button variant={props.varient} onClick={props.onClick}
                        className="btn" size="lg" disabled={(props.varient === "success" || props.varient === "danger" || !props.optionClicked) ? true : false}

                    >{props.status}</Button>
                </Col>
            </Row>
        </Container >
    )
}