import React, { Component } from 'react';

export default class Work extends Component {
    handleWorkIncrement = () =>{
        this.props.incrementWorkTime()
        if (this.props.timerRunning === false) {
            this.props.setCurrentTime(this.props.workTime)
        }
    }
    handleWorkDecrement = () =>{
        this.props.decrementWorkTime()
        if (this.props.timerRunning === false) {
            this.props.setCurrentTime(this.props.workTime)
        }
    }
    render() {
        return(
        <div>
        <button onClick={this.handleWorkIncrement}> + </button>
            <span>{this.props.workTime}</span>
        <button onClick={this.handleWorkDecrement}> - </button>
        </div> 
        )    
    }
}