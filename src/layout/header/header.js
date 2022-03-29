import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Line from '../../components/line/line';
import HeaderIcon from './headerIcon';
import chatIcon from './../../assets/images/chat.png';
import book from './../../assets/images/book1.png';
import shop from './../../assets/images/shop.png';
import learn from './../../assets/images/learn.png';
import more from './../../assets/images/more.png';

import './header.css';

export default class header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            headerIcons: [learn
                , book
                , chatIcon
                , shop
                , more],

        }
    }


    render() {
        return (
            <Container className='header'>
                <Row>
                    <Col sm={8} md={8}>
                        <div className='icon-div'>
                            {this.state.headerIcons.map((icon, key) => {
                                return (
                                    <HeaderIcon imgSrc={icon} key={key} wide={false} />
                                )
                            })}
                        </div>
                    </Col>
                    {!this.props.isMobile ?
                        <Col sm={4} md={4}>
                            <div className='icon-div'>
                                {this.state.headerIcons.map((icon, key) => {
                                    return (
                                        <HeaderIcon imgSrc={icon} key={key} wide={true} />
                                    )
                                })}
                            </div>
                        </Col> : null}
                </Row>
                <Line className='upperLine' />
            </Container>
        )
    }
}
