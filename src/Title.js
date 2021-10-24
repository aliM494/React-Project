import React, { useState ,useEffect } from 'react';
import ReactDOM from 'react-dom';
import Timer from './Timer';
import './styles.css';
import TimeList from './Time';



const Title = () => {
  const [title,setTitle] = useState("سلام دوستان من");
  const [isLight,setIsLight] = useState(true);
  const [timearr,setTimearr]=useState(["00 : 00 : 05","00 : 06 : 56"]);

  useEffect(() => {
    console.log("useEffect")
  }, [isLight])

  const handleIsLight=()=>{
    setIsLight(!isLight);
  }
  return (
    <div className='main' style={{background:(isLight) ? "white" : "black"}}>
      <h1 className='title'>{title}</h1>
      <Timer isLight={isLight} handleIsLight={handleIsLight} />
      <TimeList>
        {timearr}
      </TimeList>
    </div>
  )
}

export default Title;