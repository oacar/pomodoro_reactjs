import React, { Component } from 'react';
import Work from './working.js'
import Break from './break.js'

export default class TimerControllers extends Component {
    render() {
        return(
        <div className="timer-controllers">
        <Work 
            workTime={this.props.workTime}
            incrementWorkTime={this.props.incrementWorkTime}
            decrementWorkTime={this.props.decrementWorkTime}
        />
        <Break 
            breakTime={this.props.breakTime}
            incrementBreakTime={this.props.incrementBreakTime}
            decrementBreakTime={this.props.decrementBreakTime}
        />
        </div>
        )    
    }
}