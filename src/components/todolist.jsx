import Todoitem from "./todoitem";

function Todolist() {

    const todos = ["Mastering ReactJS", "Use props", "Create components"]

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