import React, { useState } from 'react';
import List from './list';

function Todo() {
    const [todo, setTodo] = useState([]);
    const [text, setText] = useState("");

    const addItem = () => {
        if (text === "") {
            alert("field can not be empty");
        }
        else {
            setTodo([
                ...todo,
                {
                    // id: todo.length,
                    value: text
                },

            ]);
            setText("");

        }

    }

    let deleteItem = (index) => {
        const newTodos = [...todo];
             newTodos.splice(index, 1);
             setTodo(newTodos);
    }


    return (
        <>
        <div className="main-frame">
            <input type="text" value={text} onChange={e => setText(e.target.value)} />
            <button onClick={addItem}>Add a number</button>
            <ul>
                {todo.map((item, index) => {
                    return <List item={item.value} key={index} id={index} onSelect={deleteItem} />
                })}
            </ul>
            </div>
        </>
    );
}
export default Todo;
