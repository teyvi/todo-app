import {useState,useEffect} from "react"
import {useLocalStorage} from "usehooks-ts"
import TodoItem from "../todo-item";

function TodoList() {
    // let todos = [];
    const [todos, setTodos] = useLocalStorage("TODO_KEY",[]);

    // function getTodos(){
    //     //Get all todos in the local storage and store it
    //    let  todos = JSON.parse(localStorage.getItem("TODO_KEY")) || [];
    //    //Update react state 
    //     setTodos(todos);
    // }

    // useEffect(getTodos,[]); 

    return (
        <ul className="list-group">
            {todos.map(function(todo , index){
                return <TodoList todo={todo} index={index} />;
            })}

        </ul>
    );
}

export default TodoList;