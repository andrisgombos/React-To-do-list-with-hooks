import React, { useState } from "react";
import Todoitem from "./todoitem";

function Todolist() {

    const [todos, setTodos] = useState([{text: "Use State"}, {text: "Use props"}, {text: "Create components"}, {text: "Mastering ReactJS"}]);
    const [value, setValue] = useState('');

    const addTodo = text => {
        const newTodos = [...todos, {text}];
        setTodos(newTodos)
    }

    /* const handleChange = (e) => {(e.currentTarget.value)} */
    const handleSubmit = (e) => { 
        e.preventDefault(); 
        if (!value) return;
        addTodo(value)
        setValue("");
        }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="add Todo" value={value} onChange={e => setValue(e.target.value)}></input>
                <ul>
                    {todos.map(todo => {
                        return <Todoitem todo={todo} />;
                        })
                }
                </ul>
                <button type="submit">Add this</button>
            </form>
        </div>
    )
}

export default Todolist