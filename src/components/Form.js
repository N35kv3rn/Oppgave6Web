import './Form.css';
import React, { useState } from 'react';
import Todo from './Todo';

const Form = ({setContentInput, setTitleInput, titleInput, contentInput, todosArray, setTodosArray}) => {

    

    const titleChangeEvent = (event) => {
        console.log('title change');
        setTitleInput(event.currentTarget.value);
    }

    const contentChangeEvent = (event) => {
        console.log("content change");
        setContentInput(event.currentTarget.value);
    }

    const clickEvent = (e) => {
        e.preventDefault();
        console.log("button clicked");
        const newArray = [ ... todosArray, <Todo name={titleInput} content={contentInput}/>]
        setTodosArray(newArray);
      }

    return(
        <form>

            <div className="div1">
                <p>Title</p>
                <input id="input1" onChange={titleChangeEvent}/>
            </div>

            <div className="div2">
                <p>Content</p>
                <input onChange={contentChangeEvent} id="input2"/>
            </div>
            
            <button onClick={clickEvent}>Add</button>

        </form>
    )
}

export default Form;