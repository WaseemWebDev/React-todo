import React, { useState } from 'react';

function List(props) {
    let [line, setLine] = useState(false)
    const cutIt = () => {
        setLine(line = !line);
    }
    return (
        <div>
            <li style={{ textDecoration: line ? "line-through" : "none" ,fontSize:"20px"}}> {props.item} </li> 
            <span> <button onClick={() => {
                props.onSelect(props.id)
            }}>D</button></span><button onClick={cutIt}>complete</button>

        </div>
    );
}
export default List;