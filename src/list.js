import React, { useState} from 'react';

function List(props) {
    let [line, setLine] = useState(false)

    const cutIt = () => {
        setLine(line = !line);
    }

    return (
        <div style={{ padding: "5px" }}>

            <li >

                <input ref={props.ref} className="lists" autocomplete="off" style={{ textDecoration: line ? "line-through" : "none", fontWeight: "bold" }} type="text" id={props.id} value={props.item} onChange={(e) => {
                    props.setUpdate(e, props.id)
                }} /> <span onClick={props.focusInput} className="edit">Edit</span> 
                <span style={{ marginLeft: "200px" }}><button onClick={() => {
                    props.onSelect(props.id)
                }}>Delete
                </button></span><button onClick={cutIt}>complete</button> </li>



        </div>
    );
}
export default List;