import React from 'react';
import ReactDOM from 'react-dom';
import Timer from './Timer';
import './styles.css';

class Title extends React.Component{
    render(){
      return(
        <div className='main'>
        <h1 className='title'>سلام دوستان من</h1>
        <Timer/>
        </div>
  )
    }
}

  export default Title;