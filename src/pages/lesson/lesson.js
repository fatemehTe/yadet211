import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import './lesson.css';

export default function Lesson(props) {
    
    let options = props.options.split("-")


    return (
        <Container className='question-main-Layout'>
            <Row>
                <Col md={2} sm={12} className='questionLayout-col'></Col>
                <Col md={8} sm={12} className='questionLayout-col'>
                    <Row className='questionLayout-row'>
                        {props.question}
                    </Row>
                    <Row className='questionLayout-row'>
                        <Col md={3} sm={2}></Col>
                        <Col md={6} sm={8}>
                            <Row style={{ margin: 5 }}>
                                <Col><Button className='questionLayout-row'
                                    variant={
                                        props.status !== "check"
                                            ?
                                            (
                                                props.optionClicked === 2
                                                    ?
                                                    (
                                                        (props.correct === 2 ? "success" : "danger")
                                                    ) : (props.correct === 2 ? "success" : "secondary")
                                            )
                                            :
                                            "primary"
                                    }
                                    onClick={() =>
                                        props.onClick(2)
                                    }
                                    key={2} disabled={props.Continue ? true : false}>{options[1]}</Button></Col>
                                <Col><Button className='questionLayout-row' variant={
                                    props.status !== "check"
                                        ?
                                        (
                                            props.optionClicked === 1
                                                ?
                                                (
                                                    (props.correct === 1 ? "success" : "danger")
                                                ) : (props.correct === 1 ? "success" : "secondary")
                                        )
                                        :
                                        "primary"
                                }
                                    onClick={() =>
                                        props.onClick(1)
                                    }
                                    disabled={props.Continue ? true : false}>{options[0]}</Button></Col>
                            </Row>
                            <Row style={{ margin: 5 }}>
                                <Col><Button className='questionLayout-row' variant={
                                    props.status !== "check"
                                        ?
                                        (
                                            props.optionClicked === 4
                                                ?
                                                (
                                                    (props.correct === 4 ? "success" : "danger")
                                                ) : (props.correct === 4 ? "success" : "secondary")
                                        )
                                        :
                                        "primary"
                                }
                                    onClick={() =>
                                        props.onClick(4)
                                    }
                                    disabled={props.Continue ? true : false}
                                >{options[3]}</Button></Col>
                                <Col><Button className='questionLayout-row' variant={
                                    props.status !== "check"
                                        ?
                                        (
                                            props.optionClicked === 3
                                                ?
                                                (
                                                    (props.correct === 3 ? "success" : "danger")
                                                ) : (props.correct === 3 ? "success" : "secondary")
                                        )
                                        :
                                        "primary"
                                }
                                    onClick={() =>
                                        props.onClick(3)
                                    }
                                    disabled={props.Continue ? true : false}
                                    >{options[2]}</Button></Col>
                            </Row>
                        </Col>
                        <Col md={3} sm={2}></Col>
                    </Row>
                </Col>
                <Col md={2} sm={12} className='questionLayout-col'></Col>
            </Row>
        </Container>
    )
}