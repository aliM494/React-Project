import Item from "./item"

const TimeList=(props)=>{
    return(
        <div className="main.time">
            {props.children.map((c)=>(
                <Item key={Math.random()}>{c}</Item>
            ))}
        </div>
    )
}

export default TimeList;