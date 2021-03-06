import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import { TestContext } from './TestContext';
import TimeList from './Time';

var Interval;

class Timer extends React.Component {
  constructor() {
    super();
    this.state = {
      hour: 0,
      minute: 0,
      second: 0,
      IsStart: false
    }
  }

  static contextType = TestContext;

  start = () => {
    if (!this.state.IsStart) {
      this.setState({
        IsStart: true
      });
      Interval = setInterval(() => {
        this.setState({
          second: this.state.second + 1
        });
        if (this.state.second === 60) {
          this.setState({
            second: 0,
            minute: this.state.minute + 1
          });
        }
        if (this.state.minute === 60) {
          this.setState({
            minute: 0,
            hour: this.state.hour + 1
          });
        }
      }, 1000);
    }
  }

  handleSaveTime = () => {
    let h = this.state.hour;
    let m = this.state.minute;
    let s = this.state.second;

    let newTime = document.querySelector('.timer').innerHTML;

    this.context.setTimearr([...this.context.timearr, newTime])
  }

  stop = () => {
    this.setState({
      IsStart: false
    });
    clearInterval(Interval);
  }

  reset = () => {
    this.stop();
    this.setState({
      second: 0,
      minute: 0,
      hour: 0
    });
    this.context.setTimearr([]);
  }

  render() {
    let h = this.state.hour;
    let m = this.state.minute;
    let s = this.state.second;
    return (
      <>
        <h2 className='timer' onClick={this.handleSaveTime}>
          {`${h > 9 ? h : "0" + h} : ${m > 9 ? m : "0" + m} : ${s > 9 ? s : "0" + s}`}
        </h2>
        <span className='button_box action_button start' onClick={this.props.handleIsLight}
          style={
            {
              background: this.props.isLight ? "black" : "white",
              color: this.props.isLight ? "white" : "black"
            }
          }>{this.props.isLight ? "Dark" : "Light"}</span>
        <span className='button_box action_button reset' onClick={this.reset}>reset</span>
        <span className='button_box action_button stop' onClick={this.stop}>stop</span>
        <span className='button_box action_button start' onClick={this.start}>start</span>
      </>
    )
  }
}

export default Timer;