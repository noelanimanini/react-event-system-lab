// Code EyesOnMe Component Here
import React from 'react'; 

export default class EyesOnMe extends React.Component {
    focus = () => {
        console.log('Good!!!') 
    }

    blur = () => {
        console.log('HEY! EYES ON MEEEE')
    }

    render () {
        return (
            <div>
                <button onFocus={this.focus} onBlur={this.blur} >Button</button>
            </div>
        )
    }
}