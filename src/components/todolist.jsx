import React, { useState } from "react";
import Todoitem from "./todoitem";
import './todolist.css';

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
        <div className="todolist">
            <form onSubmit={handleSubmit}>
                <div>
                    {todos.map(todo => {
                        return <Todoitem todo={todo} />;
                        })
                }
                </div>
                <input type="text" placeholder="Add a new item" value={value} onChange={e => setValue(e.target.value)}></input>
            </form>
        </div>
    )
}

export default Todolist