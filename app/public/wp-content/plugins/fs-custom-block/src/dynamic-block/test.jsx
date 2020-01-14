import React, { Component } from 'react';

export default class Test extends Component {
    constructor(props) {
        super(props)

    }
    
    handleClick = () => {
        console.log("test")
    }

    render() {
        return (
            <button onClick={this.handleClick}>Click Me</button>
        )
    }
}