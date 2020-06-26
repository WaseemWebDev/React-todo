import React, { useState } from 'react';
import List from './list';

function Todo() {
    const [todo, setTodo] = useState([]);
    let [text, setText] = useState("");
    const addItem = () => {
        if (text === "") {
            alert("field can not be empty");
        }
        else {
            setTodo([
                ...todo,
                {
                    value: text
                },
            ]);
            setText("");
        }

    }

    // const findItem = id => {
    //     const item = todo.find(task => task.id === id)

    //     setEditItem(item)
    // }
    // const editTask = (title, id) => {
    //     const newTasks = tasks.map(task => (task.id === id ? { text, id } : task))
    //     setTodo(newTasks)
    //     setEditItem(null)
    // }

    let deleteItem = (index) => {
        const newTodos = [...todo];
        newTodos.splice(index, 1);
        setTodo(newTodos);
    }

    const clearTodo = () => {
        setTodo([]);
    }

    function setUpdate(e, i) {
        //   let newItem = [...todo]
        //   newItem.map(function (task, index) {
        //      if (index === i) {
        //    task.value = e.target.value
        //     }
        //     setTodo(newItem);
        // });
        const newTodos = [...todo];
        newTodos[i].value = e.target.value
        setTodo(newTodos);
        console.log(newTodos)
    }
    return (
        <>
            <div className="main-frame" >

                <input type="text" value={text} onChange={e => setText(e.target.value)} />
                <button onClick={addItem}>Add Todo</button>
                <button onClick={clearTodo}>clear</button>
                <br />
                <ol>
                    {todo.map((item, index) => {
                        return <List item={item.value} key={index} id={index} onSelect={deleteItem} setUpdate={setUpdate} />
                    })}
                </ol>
                {todo.length ? <span style={{ fontWeight: "bold", color: `${todo.length ? "green" : "red"}` }}>Total todos {todo.length}</span> : <h3 style={{ color: "red" }}>No Items Found</h3>}
            </div>
        </>
    );
}
export default Todo;
