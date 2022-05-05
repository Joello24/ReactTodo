import TodoList from './components/TodoList';
import AddTodoForm from "./components/AddTodoForm";
import {useState} from "react";

function App() {

  return (
      <div className="container mx-auto">
        <h1>
            Todo App
        </h1>
          <TodoList/>
      </div>
  );
}

export default App;
