import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

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
  start = () => {
    if (!this.state.IsStart) {
      this.setState({
        IsStart: true
      });
      Interval = setInterval(() => {
        this.setState({
          second: this.state.second + 1
        });
        if (this.state.second == 60) {
          this.setState({
            second: 0,
            minute: this.state.minute + 1
          });
        }
        if (this.state.minute == 60) {
          this.setState({
            minute: 0,
            hour: this.state.hour + 1
          });
        }
      }, 1000);
    }
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
  }
  render() {
    let h = this.state.hour;
    let m = this.state.minute;
    let s = this.state.second;
    return (
      <>
        <h2 className='timer'>
          {`${h > 9 ? h : "0" + h} : ${m > 9 ? m : "0" + m} : ${s > 9 ? s : "0" + s}`}
        </h2>
        <span className='button_box action_button reset' onClick={this.reset}>reset</span>
        <span className='button_box action_button stop' onClick={this.stop}>stop</span>
        <span className='button_box action_button start' onClick={this.start}>start</span>
      </>
    )
  }
}

export default Timer;