import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './questionLayout.css';

export default function QuestionLayout(props) {
    return (
        <Container className='question-main-Layout'>
            <Row>
                <Col md={2} sm={12} className='questionLayout-col'></Col>
                <Col md={8} sm={12} className='questionLayout-col'>
                    <Row className='questionLayout-row'>
                             //SOAL
                    </Row>
                    <Row className='questionLayout-row'>
                        <Col md={3} sm={2}></Col>
                        <Col md={6} sm={8}>
                            <Row style={{ margin: 5 }}>
                                <Col><Button className='questionLayout-row'
                                    onClick={() =>
                                        props.onClick(2)
                                    }
                                    key={2}>2</Button></Col>
                                <Col><Button className='questionLayout-row'
                                    onClick={() =>
                                        props.onClick(1)
                                    }
                                >1</Button></Col>
                            </Row>
                            <Row style={{ margin: 5 }}>
                                <Col><Button className='questionLayout-row'
                                    onClick={() =>
                                        props.onClick(4)
                                    }>4</Button></Col>
                                <Col><Button className='questionLayout-row'
                                    onClick={() =>
                                        props.onClick(3)
                                    }>3</Button></Col>
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