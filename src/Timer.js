import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

var Interval;

class Timer extends React.Component{
    constructor(){
      super();
      this.state={
        time:5,
      }
    }
  componentDidMount(){
    Interval = setInterval(()=>{
      this.setState({time:this.state.time-1});
    },1000);
  }

  componentDidUpdate(){
    if(this.state.time==0){
      clearInterval(Interval);
    }
  }
    render(){
      
      return(
        <h2 className='timer'>
           {this.state.time}
        </h2>
      )
    }
  }

  export default Timer;