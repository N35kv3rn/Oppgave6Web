import './Todo.css';

const Todo = ({name, content, key, todosArray, setTodosArray}) => {

    const clickEvent = (event) => {
        console.log(key);
    }

    return(
        <div className="todoContainer" >
            <p id="title">{name}</p>
            <p id="content">{content}</p>
            <button id="todobutton" onClick={clickEvent}>Complete</button>
        </div>
    )
}

export default Todo;