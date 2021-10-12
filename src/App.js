import './App.css';
import Navbar from './components/Navbar';
import Form from './components/Form';
import Todos from './components/Todos';
import Todo from './components/Todo';
import React, { useState } from 'react';

function App() {

  const phName = "Todotitle";
  const phContent = "I'm baby sriracha hot chicken mixtape pabst organic air...";

  const arr = [<Todo name={phName} content={phContent}/>, <Todo name={phName} content={phContent}/>, 
    <Todo name={phName} content={phContent}/>, <Todo name={phName} content={phContent}/>, 
    <Todo name={phName} content={phContent} />, <Todo name={phName} content={phContent}/>]

  const [todosArray, setTodosArray] = useState(arr);

  const [titleInput, setTitleInput] = useState('');
  const [contentInput, setContentInput] = useState('');
  
  return (
    <div className="App">

      <Navbar />

      <main>

        <Form setTitleInput={setTitleInput} setContentInput={setContentInput} titleInput={titleInput} contentInput={contentInput} todosArray={todosArray} setTodosArray={setTodosArray}/>

        <Todos todosArray={todosArray} setTodosArray={setTodosArray}/>

      </main>
    </div>
  );
}

export default App;
