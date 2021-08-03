import React, { useState } from "react";
import Todoitem from "./todoitem";

function Todolist() {

    const basicTodos = ["use State", "Use props", "Create components", "Mastering ReactJS"]

    const [todos, setTodos] = useState(basicTodos);
    const [userInput, setUserInput] = useState('');

    const handleChange = (e) => {setUserInput(e.currentTarget.value)}
    const handleSubmit = (e) => { e.preventDefault(); setTodos([""])}


/*     setTimeout(() => {
        setTodos(["Use props", "Create components", "Mastering ReactJS"])
        }, 2000); */ // Changing the array after 2 seconds

    

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="add Todo" value={userInput} onChange={handleChange}></input>
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