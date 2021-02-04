// Code Keypad Component Her
import React from 'react';

export default class Keypad extends React.Component {
    keyUp = () => {
        console.log('Entering Password')
    }
    render () {
        return (
            <div>
                <input onKeyUp={this.keyUp} type="password"/>
            </div>
        )
    }
}