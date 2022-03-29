import React from 'react';
import './headerIcon.css';

export default class headerIcon extends React.Component {
    render() {
        return (
            <div className='header-div'>
                <img className='header-img' style={{ width: this.props.wide ? 30 : 45 }}
                    src={this.props.imgSrc} alt="doge" />
            </div>
        )
    }
}