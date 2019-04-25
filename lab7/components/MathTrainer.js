import React, { Component } from 'react';

class MathTrainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
            first: Math.round(Math.random()*10),
            second: Math.round(Math.random()*10)
        };
    }
    check=()=>{
        this.setState({
            tasks:[...this.state.tasks, [this.state.first, this.state.second, this.refs.res.value]]
        })
    }

    next=()=>{
        this.setState({
            first: Math.round(Math.random()*10),
            second: Math.round(Math.random()*10)
        })
    }

    render() {
        const {tasks, first, second} = this.state;
        return (
            <>
                <label>First number</label>
                <input value={first}></input><br/>
                <label>Second number</label>
                <input value={second}></input><br/>
                <label>Sum of two nums</label>
                <input ref="res"></input><br/>
                <button onClick={this.check}>Check</button>
                <button onClick={this.next}>Next</button>
                <br/>
                <table>
                        {tasks.map((el, i)=>(
                            <tr key={i}>
                                {el.join(" ")}
                            </tr>
                        ))}                    
                </table>
            </>
        )
    }
}

export default MathTrainer;