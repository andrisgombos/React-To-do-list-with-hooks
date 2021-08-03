import './todolist.css';

function Todoitem(props) {

    return (
        <div className="todoitem">{props.todo.text}</div>
    )
}

export default(Todoitem)