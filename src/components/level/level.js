import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CustomCircularProgressbar from '../circular-progress-bar/circular-progress-bar';
import './level.css';

export default function Level(props) {

    let courses = props.courses.slice()
    let grid = props.grid.split("-")
    let active = props.active;
    let id = props.id;
    return (
        <Container className='levelContainer'
            style={{
                backgroundColor: active ?
                    'transparent' :
                    '#F3F2F2',
                borderColor: active ?
                    'transparent' :
                    'lightgrey'
            }}
        >
            {grid.map((grid, step) => {
                let sliced = courses.splice(0, grid)
                return (
                    <Row key={step} className="justify-content-center">
                        {
                            sliced.map((course, step2) => {
                                // let stepUse = step.toString();
                                return (
                                    <Col key={step2} xxs="auto"
                                        xs="auto" md="auto" sm="auto">
                                        <CustomCircularProgressbar
                                            {...props}
                                            text={course.courseLabel}
                                            degree={course.degree}
                                            maxDegree={course.maxDegree}
                                            progress={active ?
                                                course.progress :
                                                0}
                                            active={active}
                                            step={course.id.toString()}
                                            id={id}
                                        />
                                    </Col>
                                )
                            })
                        }
                    </Row>
                )
            })}
        </Container>
    )
}

