import './Todos.css';
import Todo from './Todo';
import React, { useState } from 'react';

const Todos = ({todosArray, setTodosArray}) => {

    const listItems = todosArray.map((todo, index) =>
        <li key={index}>
            {todo}
        </li>
    );


    return (
        <div>
            <h2 id="TodosTitle">My Todos</h2>

            <ul className="Container">
                {listItems}
            </ul>

        </div>
    )
}

export default Todos;