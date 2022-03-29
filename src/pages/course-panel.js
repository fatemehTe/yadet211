import React, { useState } from 'react';
import Layout from './../layout/layout';
import { Col, Row } from 'react-bootstrap';
import CoursePanel from '../components/cource-panel/cource-panel';


export default class MainCoursePanel extends React.Component {
    constructor() {
        super();
        this.state = {
            width: window.innerWidth,
        };
    }

    componentWillMount() {
        window.addEventListener('resize', this.handleWindowSizeChange);
    }

    // make sure to remove the listener
    // when the component is not mounted anymore
    componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowSizeChange);
    }

    handleWindowSizeChange = () => {
        this.setState({ width: window.innerWidth });
    };
    render() {
        const { step } = this.props.match.params;
        const { addProgress } = this.props.location;
        
        const { width } = this.state;
        const isMobile = width <= 575
        return (
            <Layout>
                <Row style={{ paddingTop: 10 }}>
                    <Col sm={8}>
                        <CoursePanel
                            stepProgress={step}
                            addProgress={addProgress}
                        />
                    </Col>
                    <Col sm={4}
                        style={{
                            display: !isMobile ? "flex" : "none",
                        }}
                    >wide</Col>
                </Row>
            </Layout>
        )
    }
}







