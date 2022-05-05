import Todo from "./Todo";
import React, {useState} from "react";
import AddTodoForm from "./AddTodoForm";

const t = [
      { id:1, description: 'Learn React', status: 'active'},
      { id:2, description: 'Learn Tailwind', status: 'active'},
];
function TodoList(){

    const [todoList, SetTodoList] = useState(t);

    const [todoInput, setTodoInput] = useState({});

    const newTodo = (value) => {
        const currentList = [...todoList];
        const nextId = Math.max(...todoList.map(m => m.id));
        const test = {
            id: nextId + 1,
            description: todoInput,
            status: 'active',
        }
        currentList.push(test);
        SetTodoList(currentList);
    }

    const deleteTodo = (id) => {
        const currentList = [...todoList];
        const newList = currentList.filter(m => m.id !== id);
        SetTodoList(newList);
    }

    const editTodo = (id, newDesc) => {
        const currentList = [...todoList];
        const itemToEdit = currentList.filter(m => m.id == id);
        itemToEdit = {
            id: id,
            description: newDesc,
            status: 'active',
        }
        const newList = currentList.filter(m => m.id !== id);
        newList.push(itemToEdit);
        SetTodoList(newList);
    }

    return (
        <div>
            <div>
                {todoList.map(t =>
                    <Todo key={t.id} action={() => deleteTodo(t.id)} editAction={() => editTodo(t.id, t.description)} id={t.id} description={t.description} status={t.status} />
                )}
            </div>
            <div>
                <AddTodoForm action={newTodo} setValue={(value) => setTodoInput(value)} />
            </div>
        </div>
    )
}
export default TodoList;