// import React from "react";
import styles from "./index.module.css";

function AddTodo() {
    // const [todo, setTodo] = React.useState("");
    let todo;

    function collectInput(event) {
        todo = event.target.value;
    }
    function saveTodo(event) {
        //Get existing list of todos
        let todos = JSON.parse(localStorage.getItem("TODO_KEY")) || [];
        //add new todo to existing list of todos
        todos.push(todo);
        //Set all todos in local storage
        localStorage.setItem("TODO_KEY", JSON.stringify(todos));
        console.log(todos); 
    }


    return (
        <section className={styles.addTodo}>
            <input
                onChange={collectInput}
                className={styles.addTodoInput}
                placeholder="Start typing..." />
            <button onClick={saveTodo}>Create</button>
        </section>
    );
}

export default AddTodo;