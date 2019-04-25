import React, { Component } from 'react';

class PopupHint extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show:false
        };
    }

    elemHover = () => {
        this.setState({
            show:true
        })
    }

    elemUnhover = () => {
        this.setState({
            show:false
        })
    }

    render() {
        const {elem, hint} = this.props; 
        const show = this.state.show;
        var hintStyle = {
            position: 'absolute',
            marginTop: '12px',
            padding: '2px',
            backgroundColor: 'white',
            border: '2px solid black'
          };
        return (
            <>
                <span onMouseEnter={this.elemHover} onMouseLeave={this.elemUnhover}><i>{elem}</i></span>
                {show?
                    (<span style={hintStyle}>{hint}</span>)
                :""}
            </>
        )
    }
}

export default PopupHint;