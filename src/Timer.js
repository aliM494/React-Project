import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

var Interval;
var count=5

class Timer extends React.Component{
    constructor(){
      super();
      this.state={
        time:count,
      }
    }
  componentDidMount(){
    Interval = setInterval(()=>{
      this.setState({time:count--});
    },1000);
  }

  componentDidUpdate(){
    if(count==-1){
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