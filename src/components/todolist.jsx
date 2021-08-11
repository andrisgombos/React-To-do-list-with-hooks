import React, { useState } from "react";
import './todolist.css';

function Todoitem({todo, index, isCompleted, removeTodo}) {

    return (
        <div 
            className="todoitem"
            style={{ textDecoration: todo.completed ? "line-through" : "" }}>
            {todo.text}
            <div>
                <button onClick={()=> isCompleted(index)}>Done</button>
                <button onClick={()=> removeTodo(index)}>X</button>
            </div>
        </div>
    )
}

function Todolist() {

    const [todos, setTodos] = useState([
        {
            text: "Use State",
            completed: false
        }, {
            text: "Use props",
            completed: false
        }, {
            text: "Create components",
            completed: false
        }, {
            text: "Mastering ReactJS",
            completed: false
        }]);

    const [value, setValue] = useState('');

    const addTodo = text => {
        const newTodos = [...todos, {text}];
        setTodos(newTodos)
    }

    const isCompleted = index => {
        const newTodos = [...todos];
        newTodos[index].completed = true;
        setTodos(newTodos)
    }

    const removeTodo = index => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
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
                    {todos.map((todo, index) => {
                        return <Todoitem 
                                key={index} 
                                index={index} 
                                todo={todo} 
                                isCompleted={isCompleted}
                                removeTodo={removeTodo} 
                            />;
                        })
                }
                </div>
                <input type="text" placeholder="Add a new item" value={value} onChange={e => setValue(e.target.value)}></input>
            </form>
        </div>
    )
}

export default Todolist