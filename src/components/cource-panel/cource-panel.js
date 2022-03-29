import React, { useState, useEffect } from 'react';
import Level from './../level/level';
import { Container, Col, Row } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { loadlevels, selectLevels } from '../../features/levels/levels.slice';
import './course-panel.css'

export default function CoursePanel(props) {
    const levels = useSelector(selectLevels)

    let dispatch = useDispatch()
    useEffect(() => {
        dispatch(loadlevels());
        
    }, [])


    return (
        < Container >
            <Col>
                {levels.map((level, step) => {
                    return (
                        <Row key={step} className='panel-row'>
                            <Level
                                {...props}
                                courses={level.courses}
                                grid={level.grid}
                                active={level.active}
                                id={level.id}
                            />
                        </Row>
                    )
                })
                }
            </Col>
        </Container >
    )
}

