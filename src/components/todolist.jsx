import React, { useState } from "react";
import Todoitem from "./todoitem";

function Todolist() {

    const [todos, setTodos] = useState(["use State", "Use props", "Create components", "Mastering ReactJS"])

    setTimeout(() => {
        setTodos(["Use props", "Create components", "Mastering ReactJS"])
        }, 2000);

    return (
        <ul>
            {todos.map(todo => {
                return <Todoitem todo={todo} />;
                })
            }
        </ul>
    )
}

export default Todolist