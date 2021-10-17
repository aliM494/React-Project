import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

var Interval;

class Timer extends React.Component {
  constructor() {
    super();
    this.state = {
      time: 5,
    }
  }
  start = () => {
    Interval = setInterval(() => {
      this.setState({ time: this.state.time - 1 });
    }, 1000);
  }
  stop = () => {
    clearInterval(Interval);
  }
  componentDidUpdate() {
    if (this.state.time == 0) {
      clearInterval(Interval);
    }
  }
  render() {

    return (
      <>
        <h2 className='timer'>
          {this.state.time}
        </h2>
        <button className='button stop' onClick={this.stop}>Stop</button>
        <button className='button start' onClick={this.start}>Start</button>
      </>
    )
  }
}

export default Timer;