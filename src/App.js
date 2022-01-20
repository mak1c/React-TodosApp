import React,{ useState } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import TodoList from './components/TodoList';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


const App = () =>   {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <div className='container1'>
     <div className='app-wrapper'>
       <div>
       <Header />
       </div>
       <div>
       <Form 
  input={input}
  setInput={setInput}
  todos={todos}
  setTodos={setTodos}
       />
       </div>
       <div>
        <TodoList todos={todos} setTodos={setTodos}/>
       </div>
     </div>
    </div>);
};




export default App;
