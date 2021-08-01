import React, { useState } from "react";
import Todoitem from "./todoitem";

function Todolist() {

    const [todos, setTodos] = useState(["use State", "Use props", "Create components", "Mastering ReactJS"])

/*     setTimeout(() => {
        setTodos(["Use props", "Create components", "Mastering ReactJS"])
        }, 2000); */ // Changing the array after 2 seconds

    

    return (
        <div>
            <button onClick={() => setTodos(["Nice job"])}>I've done all of this</button>
            <ul>
                {todos.map(todo => {
                    return <Todoitem todo={todo} />;
                    })
            }
            </ul>
        </div>
    )
}

export default Todolist