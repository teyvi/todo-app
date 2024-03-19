import { useState, useEffect } from "react";
import TodoItem from "../todo-item";
import axios from "axios";

function TodoList() {
  const [todos, setTodos] = useState([]);
  //Define a function to getTodos from todo api
  const url = "http://localhost:4000/todos";

  useEffect (() => {
    const getTodos = async () => {
      try {
        //Use fetch to get todos from the api
        const response = await axios.get(url);
        const responseJson = response.data;
        console.log('response',responseJson)
        //update todos state
        setTodos (responseJson);
        //check the response
  
      } catch (error) {
        console.log("error");
      }
     
  
    };
    getTodos();

  },[])

  const deleteTodos = async () =>{
    const response = await axios.delete(url)
    const data = response.data;
    console.log('delete',data)  
  }

  return (
    <section>
      <button className="btn btn-danger" onClick={deleteTodos}>
        Clear Todos
      </button>

      <ul className="list-group">
        {todos.map(function (todo, index) {
          return <TodoItem key={todo._id} todo={todo.title} index={index} />;
        })}
      </ul>
    </section>
  );
}

export default TodoList;
