import React from 'react';
import ReactDOM from 'react-dom';


class Timer extends React.Component{
  render(){
    return(
      <h2>
        it is {new Date().toLocaleTimeString()}
      </h2>
    )
  }
}


class App extends React.Component{
  render(){
    return(
      <div>
      <h1>سلام دوستان من</h1>
      <Timer/>
      </div>
)
  }
}


const tick=()=>{
  ReactDOM.render(<App/>,document.getElementById('root'));
}

setInterval(()=>{tick();},1000)
