import React, { Component } from 'react';

class AgeChecker extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const {title, value, id} = this.props;
        
        return (
            <React.Fragment>
                <label for={id}>{title}</label>
                <input id={id}/>
                <input type="button"></input>
            </React.Fragment>
        );
    }
}

export default AgeChecker;