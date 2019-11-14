import React, {Component} from 'react';
//import logo from './logo.svg';
import './App.css';
import Timer from './Timer.js'
import TimerControllers from './TimerController.js'

export default class App extends Component {
  constructor(){
    super()
    this.state = {
      timerId: 0,
      timerRunning: false,
      currentTime: "25 : 00",
      cycle: "Session",
      workTime: 25,
      breakTime: 5
    }
  }
  setTimer = (duration) => {
    this.setState({timerRunning:true})
    let time = duration * 60
    let minutes;
    let seconds;
    let runningTimer = setInterval(() => {
      this.setState({
        timerId:runningTimer
      })
      minutes = Math.floor(time/60)
      seconds = time-minutes*60
      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds <10 ? "0" + seconds :seconds;
      this.setState({
        currentTime: `${minutes} : ${seconds}`
      })
      if (time == 0){
        if (this.state.cycle === "Session"){
          this.setState({
            cycle:'Break',
            timerRunning:false
          })
          clearInterval(this.state.timerId)
          this.startTimer(this.state.breakTime)
        }else{
          this.setState({
            cycle:"Session",
            timerRunning:false,
          })
          clearInterval(this.state.timerId)
          this.startTimer(this.state.workTime)
        }
      }
    }, 1000)
  }
  setCurrentTime = (s) => {
    this.setState({
      currentTime: s
    })
  }
  setTimerRunning = () => {
   this.setState({
     timerRunning: true
   })
  }
  incrementWorkTime = () => {
    this.setState({
      workTime : this.state.workTime + 1
    })
  }
    decrementWorkTime = () => {
    this.setState({
      workTime : this.state.workTime - 1
    })
  }
    incrementBreakTime = () => {
    this.setState({
      breakTime : this.state.breakTime + 1
    })
  }
   decrementBreakTime = () => {
    this.setState({
      breakTime : this.state.breakTime - 1
    })
  }
  render(){
    return(
        <div className='main'>
          <h1>POMODORO CLOCK</h1>
          <span>
          {this.state.currentTime}
          </span>
          <Timer />
          <TimerControllers 
            workTime={this.state.workTime}
            breakTime={this.state.breakTime}
            incrementWorkTime={this.incrementWorkTime}
            decrementWorkTime={this.decrementWorkTime}
            incrementBreakTime={this.incrementBreakTime}
            decrementBreakTime={this.decrementBreakTime}
          
          />
        </div>
      )
  }
}

