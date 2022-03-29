import React from 'react';
import { Container } from 'react-bootstrap';
import Line from '../../components/line/line';
import './footer.css';

export default class footer extends React.Component {
    render() {
        return (
            <Container className='footer'>
                <Line className='footerLine' />

                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <div style={{ flex: 1, textAlign: 'center' }}>
                        <img className='header-img'
                            src="https://i.imgur.com/b9NyUGm.png" alt="doge" />
                    </div>
                    <div style={{ flex: 1, textAlign: 'center' }}>
                        <img className='header-img'
                            src="https://i.imgur.com/b9NyUGm.png" alt="doge" />
                    </div>
                    <div style={{ flex: 1, textAlign: 'center' }}>
                        <img className='header-img'
                            src="https://i.imgur.com/b9NyUGm.png" alt="doge" />
                    </div>
                    <div style={{ flex: 1, textAlign: 'center' }}>
                        <img className='header-img'
                            src="https://i.imgur.com/b9NyUGm.png" alt="doge" />
                    </div>
                    <div style={{ flex: 1, textAlign: 'center' }}>
                        <img className='header-img'
                            src="https://i.imgur.com/b9NyUGm.png" alt="doge" />
                    </div>
                </div>

            </Container>
        )
    }
}