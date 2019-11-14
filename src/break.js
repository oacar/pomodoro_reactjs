import React, { Component } from 'react';

export default class Break extends Component {
    handleBreakIncrement = () =>{
        this.props.incrementBreakTime()
        if (this.props.timerRunning === false) {
            this.props.setCurrentTime(this.props.workTime)
        }
    }
    handleBreakDecrement = () =>{
        this.props.decrementBreakTime()
        if (this.props.timerRunning === false) {
            this.props.setCurrentTime(this.props.workTime)
        }
    }
    render() {
        return(
        <div>
        <button onClick={this.handleBreakIncrement}> + </button>
            <span>{this.props.breakTime}</span>
        <button onClick={this.handleBreakDecrement}> - </button>
        </div>
        )    
    }
}