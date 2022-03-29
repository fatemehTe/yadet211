import React from "react";
import Header from "./header/header";
import Footer from "./footer/footer";
import Line from '../components/line/line';
import CoursePanel from "../components/cource-panel/cource-panel";
import { Container, Row, Col } from "react-bootstrap";
import './layout.css';


export default class layout extends React.Component {
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
        const { width } = this.state;
        const isMobile = width <= 575
        return (
            <div className='mainPanel'>
                <Header isMobile={isMobile} className='mainHeader' />
                <Container className='mainContent' style={{ bottom: isMobile ? 56 : 0 }}>
                    {this.props.children}
                </Container>
                {isMobile ? <Footer className='mainFooter' /> : null}
            </div>

        )
    }
}