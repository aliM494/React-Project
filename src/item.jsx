import { useContext } from 'react';
import './styles.css'
import { TestContext } from './TestContext';

const Item = (props) => {
    const context = useContext(TestContext)

    const handleDeleteItem = (e) => {
        context.setTimearr(context.timearr.filter(t => t != e.target.innerHTML))
    }
    return (
        <div className="item" onClick={handleDeleteItem}>{props.children}</div>
    )
}

export default Item;