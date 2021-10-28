import { useContext } from "react";
import Item from "./item"
import './styles.css';
import { TestContext } from "./TestContext";

const TimeList=(props)=>{
    const context = useContext(TestContext)
    return(
        <div className="Time_List">
            {context.timearr.map((c)=>(
                <Item key={Math.random()}>{c}</Item>
            ))}
        </div>
    )
}

export default TimeList;